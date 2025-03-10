<?php

class Api_Model_api
{

	function GetPerson($personId)
	{
		require('config.php');
		$dbh = new PDO($con, $userdb, $passdb);
		$sth = $dbh->prepare('EXEC dbo.GetRegisteredPerson @PersonID = :PersonID');
		$sth->bindParam('PersonID', $personId);
		$sth->execute();
		$rows = $sth->fetchAll();
		$dbh = null;
		return $rows;
	}
	function SavePerson($name, $famil, $mobile)
	{
		require('config.php');
		$dbh = new PDO($con, $userdb, $passdb);
		$sth = $dbh->prepare('SET NOCOUNT ON ;EXEC dbo.SaveTempPerson @Phone = :Phone, @FirstName = :FirstName, @LastName = :LastName ');
		$sth->bindParam('Phone', $mobile);
		$sth->bindParam('FirstName', $name);
		$sth->bindParam('LastName', $famil);

		$sth->execute();
		$rows = $sth->fetchAll();
		$dbh = null;
		return $rows;
	}
	function UpdateRequestPayItem($res_num, $pay, $ref_num, $response)
	{
		require('config.php');
		$dbh = new PDO($con, $userdb, $passdb);
		$sth = $dbh->prepare('SET NOCOUNT ON ;EXEC dbo.[UpdatePayRequestReservation] 					  
						  @ResNum=:ResNum,
						  @RefNum=:RefNum,
						  @Response=:Response,
						  @Pay=:Pay');

		$sth->bindParam('ResNum', $res_num);
		$sth->bindParam('RefNum', $ref_num);
		$sth->bindParam('Response', $response);
		$sth->bindParam('Pay', $pay);
		$sth->execute();
		$rows = $sth->fetchAll();
		$dbh = null;
		return $rows;

	}
	function Verify_Request($ref_num, $mid)
	{
		require('config.php');
		$urlpay = $vrfyUrl;
		$postdata = array(
			"RefNum" => $ref_num,
			"TerminalNumber" => $terminal_id,
		);
		$output = $this->Create_Post_Request($urlpay, $postdata);
		$array_output = json_decode($output, true);
		//$array_output=$sample_response_verify;	
		$result_request = array(
			"isPaid" => false,
			"amount" => 0,
			"message" => "از سمت بانک داده ها به درستی دریافت نشد",
			"response" => ""
		);
		if ($array_output['ResultCode'] == "0" && $array_output['Success'] == true) {
			$result_request = array(
				"isPaid" => true,
				"amount" => $array_output['TransactionDetail']['AffectiveAmount'],
				"message" => $array_output['ResultDescription'],
				"response" => json_encode($array_output['TransactionDetail'])
			);
		} else {
			$result_request = array(
				"isPaid" => false,
				"amount" => 0,
				"message" => $array_output['ResultDescription'],
				"response" => json_encode($array_output['TransactionDetail'])
			);
		}
		return $result_request;

	}
	function Create_Post_Request($url, $postdata)
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt(
			$ch,
			CURLOPT_POSTFIELDS,
			http_build_query($postdata)
		);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$server_output = curl_exec($ch);
		curl_close($ch);

		return $server_output;
	}
	function Create_ResNum()
	{
		$bytes = openssl_random_pseudo_bytes(16);
		return bin2hex($bytes);
	}
	function SaveRequestPayItem(
		$personId,
		$billData,
		$typeReserve2,
		$incomeReasonID,
		$rentItemID,
		$Comment,
		$ResNum,
		$Pay
	) {
		require('config.php');
		$dbh = new PDO($con, $userdb, $passdb);
		$sth = $dbh->prepare('SET NOCOUNT ON ;EXEC dbo.[SavePayRequestReservation] 
							  @TypeReserve2 =:TypeReserve2,            
							  @incomeReasonID =:IncomeReasonID,  
							  @RentItemID =:RentItemID,
							  @PersonID =:PersonID,
							  @StartDate =:StartDate,
							  @EndDate =:EndDate,
							  @PersonQty =:PersonQty,
							  @ExtraPersonQty =:ExtraPersonQty,
							  @KidQty =:KidQty,
							  @TotalPrice =:TotalPrice,
							  @Comment =:Comment,
							  @ResNum=:ResNum,
							  @Pay=:Pay');
		$sth->bindParam('TypeReserve2', $typeReserve2, PDO::PARAM_INT);
		$sth->bindParam('IncomeReasonID', $incomeReasonID, PDO::PARAM_INT);
		$sth->bindParam('RentItemID', $rentItemID, PDO::PARAM_INT);
		$sth->bindParam('PersonID', $personId, PDO::PARAM_INT);
		$sth->bindParam('StartDate', trim($billData['choicedCalender']['miladiStartDate']));
		$sth->bindParam('EndDate', trim($billData['choicedCalender']['miladiEndDate']));
		$sth->bindParam('PersonQty', $billData['personPrice']);
		$sth->bindParam('ExtraPersonQty', $billData['exteraPerson']);
		$sth->bindParam('KidQty', $billData['kidPrices']);
		$sth->bindParam('TotalPrice', $billData['allPrice']);
		$sth->bindParam('ResNum', $ResNum);
		$sth->bindParam('Pay', $Pay);
	
		$sth->bindParam('Comment', $Comment);
		$sth->execute();
		$dbh = null;
	
	
	}
	function Pay_Gettoken_Reservation($all_price, $personId, $billData, $typeReserve2, $incomeReasonID, $rentItemID, $Comment)
	{

		require('config.php');
		$resnum = $this->Create_ResNum();
		$postdata = array(
			"action" => "token",
			"TerminalId" => $terminal_id,
			"Amount" => $all_price,
			"ResNum" => $resnum,
			"RedirectUrl" => $RedirectUrl,
			"CellNumber" => $CellNumber
		);
		$output = $this->Create_Post_Request($urlpay, $postdata);

		//	$output = $sample_response_token;
		$array_output = json_decode($output, true);
		$result_request = array('result' => array('isSucceed' => 0, 'message' => ""));
		if ($array_output['status'] == 1) {
			$this->SaveRequestPayItem(
				$personId,
				$billData,
				$typeReserve2,
				$incomeReasonID,
				$rentItemID,
				$Comment,
				$resnum,
				0
			);
			$result_request = array(
				"result" => array(
					'isSucceed' => 1,
					"transporter" => array(
						'type' => 'Post',
						'url' => $urlpay,
						'form' => array(
							array(
								'key' => 'Token',
								'value' => $array_output['token']
							),
						)
					),
				)
			);
		}
		return $result_request;

	}
	function getData($rentItemID, $startDate, $enddate)
	{
		
		require('config.php');
		$dbh = new PDO($con, $userdb, $passdb);
		$sth = $dbh->prepare('EXEC dbo.GetReservationItemPrice @StartDate = :stratDate, @EndDate = :endDate,
	   @RentItemID = :rentItemID');
		$sth->bindParam('stratDate', $startDate);
		$sth->bindParam('rentItemID', $rentItemID);
		$sth->bindParam('endDate', $enddate);
		$sth->execute();

		$rows = $sth->fetchAll();
		$dbh = null;
		return $rows;
	}
	function setLockedRentItem($bill,$rentItems){
		$startDate = $bill['choicedCalender']['miladiStartDate'];
		$endDate = $bill['choicedCalender']['miladiEndDate'];
		for($date=$startDate;$date<$endDate;$date=date('Y-m-d',strtotime(' +1 day',strtotime($date)))){
		
			$this->setLok($rentItems,$date);
		}
	}

	function setLok($rentItemID, $date)
	{
		
		require('config.php');
		$dbh = new PDO($con, $userdb, $passdb);
		$sth = $dbh->prepare('EXEC dbo.Save_RO_RentItemLocked  @RentItemID = :rentItemID,@SelDate = :selDate');
		$sth->bindParam('selDate', $date);
		$sth->bindParam('rentItemID', $rentItemID);
		$sth->execute();
		$dbh = null;
	}

	function Calc_Reservation_Price($rentItemID, $bill)
	{

		$startDate = $bill['choicedCalender']['miladiStartDate'];
		$endDate = $bill['choicedCalender']['miladiEndDate'];
		$person_count = $bill['countperson'];
		$extera_person = $bill['exteraPerson'];
		$kid_count = $bill['kidCount'];
		$main_person=$person_count-$extera_person-$kid_count;
		$total_night = date_diff(date_create($startDate), date_create($endDate))->format('%a');
		$result = $this->getData($rentItemID, $startDate, $endDate);
		
		$person_price = 0;
		$extera_person_price = 0;
		$kid_price = 0;
		for ($index = 0; $index < count($result) - 1; $index++) {

			$person_price += (int) $result[$index]['Price'];
			$extera_person_price += (int) $extera_person * $result[$index]['ExtraItemPrice'];
			$kid_price += (int) $kid_count * $result[$index]['KidPrice'];
		}
	
		$all_price = $person_price + $extera_person_price + $kid_price;
		return $all_price;
	}
	function CheckRegisteredMobile($mobile)
	{
		require('config.php');
		$dbh = new PDO($con, $userdb, $passdb);
		$sth = $dbh->prepare('EXEC dbo.GetRegisteredMobile @Mobile = :mobile');
		$sth->bindParam('mobile', $mobile);
		$sth->execute();
		$rows = $sth->fetchAll();
		$dbh = null;
		return $rows;
	}
	function GetValue($val, $name, $required)
	{
		if ($required) {
			if (!isset($val) || $val == '' || is_null($val)) {
				echo "مقدار فیلد " . $name . "مشخص نشده است ";
				exit;
			}

		}
		return trim($val);

	}

	function checkcodeservice($code, $hashdata, $mobile)
	{
		$data = array('result' => '', 'success' => false, 'personId' => 0, 'name' => '', 'famil');
		if (hash("sha512", $code) == $hashdata && $mobile != "") {
			$data['success'] = true;
			$resultRegisteredMobile = $this->CheckRegisteredMobile($mobile);
			if ($resultRegisteredMobile[0]['PersonID'] > 0) {
				$data['personId'] = $resultRegisteredMobile[0]['PersonID'];
				$data['name'] = $resultRegisteredMobile[0]['FirstName'];
				$data['famil'] = $resultRegisteredMobile[0]['LastName'];
			}
		}
		return $data;
	}
	function httpPost($mobile, $text)
	{
		$config = Application_Model_Func_Function::get_config();
		$request = curl_init();

		curl_setopt($request, CURLOPT_URL, $config->rest->sms->url);
		curl_setopt($request, CURLOPT_POST, 1);
		curl_setopt(
			$request,
			CURLOPT_POSTFIELDS,
			"username=" . $config->rest->sms->username
			. "&password=" . $config->rest->sms->password
			. "&from=" . $config->rest->sms->from
			. "&api=7&to[0]=" . $mobile . "&text[0]=" . $text . "&client_id[0]="
		);

		// catch the response
		curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
		$response = curl_exec($request);
		//var_export($response);
		curl_close($request);
		return $response;

	}
		function send_sms($mobile,$text)
	{
		$data = array('result' => '', 'success' => false);
		if ($mobile != '') {
			$resultSms = $this->httpPost($mobile, $text);
			if (isset($resultSms)) {			
				$data['result'] = "پیام با موفقیت ارسال شد";
				$data['success'] = true;
			}
		}
		return $data;
	}
	function sendSmsService($mobile)
	{
		$data = array('result' => '', 'success' => false);
		if ($mobile != '') {
			$gcode =random_int(100000, 999999);
			$hashed = hash("sha512", $gcode);
			$text = "کد رزرو در سایت گلستانکوه" . "\n" . $gcode . "\n" . "لغو 11";

			$resultSms = $this->httpPost($mobile, $text);
			if (isset($resultSms)) {
			
				$data['result'] = $hashed;
				$data['success'] = true;
			}
		}
		return $data;
	}
	function getCalenderData($startDate, $rentItemID, $act)
	{
		require('config.php');
		require('date.php');
		$date = getDateDetail($startDate);
		$reng = getRengeDate($date, $act);
		//var_export($reng['end']);
		$start = $reng['start']['miladi']['year'] . '-' . $reng['start']['miladi']['month'] . '-' . $reng['start']['miladi']['day'];
		$end = $reng['end']['miladi']['year'] . '-' . $reng['end']['miladi']['month'] . '-' . $reng['end']['miladi']['day'];
		
		$result = $this->getData($rentItemID, $start, $end);

		$days = [];
		$days_of_week = array('Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday');
		$today = gettoday();
		foreach ($result as $key => $val) {
			$DateS = $val['DateS'];
			$temp = explode('/', $DateS);
			if ((int) $temp[2] == 1) {
				$keyfind = array_search($val['WeekDayM'], $days_of_week);
				for ($ii = 0; $ii < $keyfind; $ii++) {
					$days[(int) $temp[1]][] = array(
						'DayNumber' => '',
						'DateM' => '',
						'DateS' => '',
						'WeekDayM' => $days_of_week[$ii],
						'WeekDayS' => '',
						'Holiday' => 0,
						'halfHoliday' => '',
						'HotelingStatus' => '',
						'CermonyStatus' => '',
						'FoodStatus' => '',
						'Price' => '',
						'ExtraItemPrice' => '',
						'IncomeReasonRentItemID' => '',
						'PersonMaxCapacity' => '',
						'PersonCapacity' => '',
						'timeout' => -1,
						'empty_day_tag' => 1,
						'selected_in_range_date' => 0,
						'checkin_selected_in_range_date' => 0,
						'checkin_selected_date' => 0,
						'checkout_selected_in_range_date' => 0,
						'checkout_selected_date' => 0
					);
				}
			}
			$timeout = ($DateS <= $today)||$val["ItemEnabled"]==0 ? 1 : 0;
			
			$val['Price'] = $val['Price'] / 10;
			
			$val['KidPrice'] = $val['KidPrice'] / 10;
			
			$val['ExtraItemPrice'] = $val['ExtraItemPrice'] / 10;
			
			$val['DayNumber'] = (int) $temp[2];
			$val['timeout'] = $timeout;
			$val['empty_day_tag'] = 0;
			$val['selected_in_range_date'] = 0;
			$val['checkin_selected_in_range_date'] = 0;
			$val['checkin_selected_date'] = 0;
			$val['checkout_selected_in_range_date'] = 0;
			$val['checkout_selected_date'] = 0;

			$days[(int) $temp[1]][] = $val;
		}
		$startDoreh = (int) $reng['start']['shamsi']['month'];
		$endDoreh = (int) $reng['end']['shamsi']['month'];
		$arr[] = array('Title' => $reng['start']['title'], 'Days' => $days[$startDoreh]);
		$arr[] = array('Title' => $reng['end']['title'], 'Days' => $days[$endDoreh]);
		$startDate = $reng['start']['shamsi']['year'] . '/' . $reng['start']['shamsi']['month'] . '/' . $reng['start']['shamsi']['day'];
		return array(
			"data" => $arr,
			'startDate' => $startDate,
			'next' => is_array($days[$endDoreh]) ? true : false,
			'prev' => ($today > $startDate) ? false : true,
		);

	}


}


