<?php

ini_set('display_errors', 1);
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers');
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	$func = $_GET['func'];
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$func = $_POST['func'];
}

if ($func == 'selectCalender') {
	getCalenderData();
}
if ($func == 'sendSms') {
	sendSmsService();
}
if ($func == 'checkcode') {
	checkcode();
}
if ($func == 'payreservation') {
	PayReservation();
}
if ($func == 'verifyreservation') {
	Verify_Reservation();
}
if ($func == 'SaveNameFamil') {
	SaveNameFamil();
}
if ($func == 'getnamefamil') {
	GetNameFamil();
}
if ($func == 'reception_history') {
	Get_Reception_History();
}
if ($func == '') {
	echo "api golestan";
}
function Get_Reception_History(){
	$PersonID = GetValue($_GET['PersonID'], 'شماره اختصاصی شخص', 0);
	$CategoryCode = GetValue($_GET['CategoryCode'], 'شماره کاتگوری', 0);
	require('config.php');
	$dbh = new PDO($con, $userdb, $passdb);
	$sth = $dbh->prepare('SET NOCOUNT ON ;EXEC dbo.[Get_CRM_ReceptionHistoryByPerson] 
			@PersonID = :PersonID,
			@CategoryCode= :CategoryCode');
	$sth->bindParam(':PersonID', $PersonID,PDO::PARAM_INT);
	$sth->bindParam(':CategoryCode', $CategoryCode,PDO::PARAM_INT);
	$sth->execute();
	$rows = $sth->fetchAll();	
	$dbh = null;
	$rows=array('RNo'=>1,'ReceptionDateS'=>'2024/02/01','DocNo'=>125,'Duration'=>2,'RentItemTitle'=>'اقامتگاه',	'StatusCode'=>'1','StatusTitle'=>'رزرو','ReceptionID'=>'12');
	echo json_encode(array('result'=>$rows));
	exit;

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
function Verify_Reservation()
{
	$res_num = GetValue($_GET['ResNum'], 'شماره سفارش', true);
	$ref_num = GetValue($_GET['RefNum'], 'رسید خرید', true);
	$mid = GetValue($_GET['MID'], 'شماره ترمینال', true);
	$result = Verify_Request($ref_num, $mid);
	if ($result['isPaid']) {
		$data=UpdateRequestPayItem($res_num, 1, $ref_num, $result['response']);
	}
	unset($result['response']);
	echo json_encode(array("docno"=>$data[0]['DocNo'],'result'=>$result)) ;exit;

}


function Verify_Request($ref_num, $mid)
{
	require('config.php');

	$urlpay =$vrfyUrl;
	$postdata = array(
		"RefNum" => $ref_num,
		"TerminalNumber" => $terminal_id,
	);
	$output = Create_Post_Request($urlpay, $postdata);
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
function GetNameFamil()
{

	$personId = GetValue($_GET['personId'], 'شماره شناسایی فرد', true);
	$result = GetPerson($personId);
	$res = array('result' => null, 'success' => false, 'personId' => 0);
	if (count($result) > 0) {

		$res['data'] = $result[0];
		$res['success'] = true;

	}
	echo json_encode($res);
	exit;
}
function SaveNameFamil()
{
	$name = GetValue($_GET['name'], 'name', true);
	$famil = GetValue($_GET['famil'], 'famil', true);
	$mobile = GetValue($_GET['mobile'], 'mobile', true);
	$result = SavePerson($name, $famil, $mobile);
	$res = array('result' => null, 'success' => false, 'personId' => 0);
	if (count($result) > 0) {
		if ($result[0]['insID'] > 0) {
			$res['personId'] = $result[0]['insID'];
			$res['success'] = true;
		}
	}
	echo json_encode($res);
	exit;
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
	$billData['personPrice'] = 0;
	$billData['exteraPerson'] = 0;
	$billData['kidPrices'] = 0;
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

function SaveReservationItem($personId, $billData, $typeReserve2, $incomeReasonID, $rentItemID, $Comment)
{
	require('config.php');
	$billData['personPrice'] = 0;
	$billData['exteraPerson'] = 0;
	$billData['kidPrices'] = 0;
	$dbh = new PDO($con, $userdb, $passdb);
	$sth = $dbh->prepare('SET NOCOUNT ON ;EXEC dbo.SaveResrvationFW 
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
                          @Comment =:Comment');
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

	$sth->bindParam('Comment', $Comment);
	$sth->execute();
	$rows = $sth->fetchAll();
	$dbh = null;

	return $rows;


}
function GetPerson($personId)
{
	require('config.php');
	$dbh = new PDO($con, $userdb, $passdb);
	$sth = $dbh->prepare('EXEC dbo.GetRegisteredPerson @PersonID = :PersonID');
	$sth->bindParam('PersonID', trim($personId));
	;

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
	$sth->bindParam('Phone', trim($mobile));
	$sth->bindParam('FirstName', trim($name));
	$sth->bindParam('LastName', trim($famil));

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
	return $val;

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
function Calc_Reservation_Price($rentItemID, $bill)
{

	$startDate = $bill['choicedCalender']['miladiStartDate'];
	$endDate = $bill['choicedCalender']['miladiEndDate'];
	$person_count = $bill['countperson'];
	$extera_person = $bill['exteraPerson'];
	$kid_count = $bill['kidCount'];
	$total_night = date_diff(date_create($startDate), date_create($endDate))->format('%a');
	$result = getData($rentItemID, $startDate, $endDate);
	$person_price = 0;
	$extera_person_price = 0;
	$kid_price = 0;
	for ($index = 0; $index < count($result) - 1; $index++) {

		$person_price += (int) $person_count * $result[$index]['Price'];
		$extera_person_price += (int) $extera_person * $result[$index]['ExtraItemPrice'];
		$kid_price += (int) $kid_count * $result[$index]['KidPrice'];
	}
	$all_price = $person_price + $extera_person_price + $kid_price;
	return $all_price;
}
function Pay_Gettoken_Reservation(
	$all_price,
	$personId,
	$billData,
	$typeReserve2,
	$incomeReasonID,
	$rentItemID,
	$Comment
) {

	require('config.php');	
	$resnum = Create_ResNum();
	$postdata = array(
		"action" => "token",
		"TerminalId" => $terminal_id,
		"Amount" => $all_price,
		"ResNum" => $resnum,
		"RedirectUrl" => $RedirectUrl,
		"CellNumber" => $CellNumber
	);
	$output = Create_Post_Request($urlpay, $postdata);
	
//	$output = $sample_response_token;
	$array_output = json_decode($output, true);
	$result_request = array('result' => array('isSucceed' => 0, 'message' => ""));
	if ($array_output['status'] == 1) {
		SaveRequestPayItem(
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
function PayReservation()
{

	$personId = GetValue($_GET['personId'], ' شناسه فرد', true);
	$bill = GetValue($_GET['bill'], 'bill', true);
	$typeReserve2 = GetValue($_GET['TypeReserve2'], 'TypeReserve2', true);
	$incomeReasonID = GetValue($_GET['IncomeReasonID'], 'IncomeReasonID ', true);
	$rentItemID = GetValue($_GET['RentItemID'], 'RentItemID ', true);
	$billData = json_decode($bill, true);
	$all_price = Calc_Reservation_Price($rentItemID, $billData);
	$resultSavePayRequest = Pay_Gettoken_Reservation($all_price, $personId, $billData, $typeReserve2, $incomeReasonID, $rentItemID, '');


	echo json_encode($resultSavePayRequest);
	exit;
}
function SaveReservation()
{

	$personId = GetValue($_GET['personId'], ' شناسه فرد', true);
	$bill = GetValue($_GET['bill'], 'bill', true);
	$typeReserve2 = GetValue($_GET['TypeReserve2'], 'TypeReserve2', true);
	$incomeReasonID = GetValue($_GET['IncomeReasonID'], 'IncomeReasonID ', true);
	$rentItemID = GetValue($_GET['RentItemID'], 'RentItemID ', true);
	$billData = json_decode($bill, true);
	$res = array('result' => null, 'success' => false, 'data' => null);
	$all_price = Calc_Reservation_Price($rentItemID, $billData);
	Pay_Gettoken_Reservation($all_price, $personId, $billData, $typeReserve2, $incomeReasonID, $rentItemID, '');
	$resultSaveReservation = SaveReservationItem($personId, $billData, $typeReserve2, $incomeReasonID, $rentItemID, '');
	if (count($resultSaveReservation) > 0) {
		$res['data'] = $resultSaveReservation[0];
		$res['success'] = true;
	}

	echo json_encode($res);
	exit;
}
function getCalenderData()
{
	require('config.php');
	require('date.php');
	//var_export($_GET);
	$startDate = $_GET['StartDate'];
	$rentItemID = $_GET['RentItemID'];
	$act = $_GET['Act'];
	$date = getDateDetail($startDate);
	$reng = getRengeDate($date, $act);
	//var_export($reng['end']);
	$start = $reng['start']['miladi']['year'] . '-' . $reng['start']['miladi']['month'] . '-' . $reng['start']['miladi']['day'];
	$end = $reng['end']['miladi']['year'] . '-' . $reng['end']['miladi']['month'] . '-' . $reng['end']['miladi']['day'];
	$result = getData($rentItemID, $start, $end);

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
		$timeout = ($DateS <= $today) ? 1 : 0;
		$val['Price'] = $val['Price'] / 10;
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
	echo json_encode(
		array(
			"data" => $arr,
			'startDate' => $startDate,
			'next' => is_array($days[$endDoreh]) ? true : false,
			'prev' => ($today > $startDate) ? false : true,
		)
	);
	exit;
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
function checkcode()
{
	$code = $_GET['code'];
	$hashdata = $_GET['hashdata'];
	$mobile = GetValue($_GET['registeredMobile'], 'موبایل', true);
	$data = array('result' => '', 'success' => false, 'personId' => 0, 'name' => '', 'famil');
	if (hash("sha512", $code) == $hashdata && $mobile != "") {
		$data['success'] = true;
		$resultRegisteredMobile = CheckRegisteredMobile($mobile);
		if ($resultRegisteredMobile[0]['PersonID'] > 0) {
			$data['personId'] = $resultRegisteredMobile[0]['PersonID'];
			$data['name'] = $resultRegisteredMobile[0]['FirstName'];
			$data['famil'] = $resultRegisteredMobile[0]['LastName'];
		}
	}
	echo json_encode($data);
	exit;
}
function sendSmsService()
{

	$mobile = $_GET['mobile'];
	$data = array('result' => '', 'success' => false);
	if ($mobile != '') {
		$gcode =  random_int(100000, 999999);
		$hashed = hash("sha512", $gcode);
		$text = "کد رزرو در سایت گلستانکوه" . "\n" . $gcode . "\n" . "لغو 11";

		$resultSms = httpPost($mobile, $text);
		if (isset($resultSms)) {
			$data['result'] = $hashed;
			$data['success'] = true;
		}

	}
	echo json_encode($data);
	exit;
}

function httpPost($mobile, $text)
{
	$request = curl_init();

	curl_setopt($request, CURLOPT_URL, "http://hypersmsc.ir/api/json/sendgrouppost2");
	curl_setopt($request, CURLOPT_POST, 1);
	curl_setopt(
		$request,
		CURLOPT_POSTFIELDS,
		"username=Golestankooh&password=F2s84AQ6&from=200035313311&api=7&to[0]=" . $mobile . "&text[0]=" . $text . "&client_id[0]="
	);

	// catch the response
	curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($request);
	//var_export($response);
	curl_close($request);
	return $response;

}








?>