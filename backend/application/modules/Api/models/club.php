<?php

class Api_Model_club
{
	public static function get_news()
    {
        $config = Application_Model_Func_Function::get_config();
        $urlpay = $config->rest->user->url_club . "/Api/Selectnews";
        $postdata = array(
            "api_key" => $config->rest->user->api_key,
			"test"=>123456
        );
        // $output = Api_Model_Mainpage::Create_Post_Request($urlpay, $postdata);
        $output = Api_Model_club::CrtRst($urlpay, $postdata);
        $response = json_decode($output, true);
      

        return $response;
    }
    static function CrtRst($url, $data)
    {
		$config = array(  
			'adapter'   => 'Zend_Http_Client_Adapter_Curl',  
			'curloptions' => array(CURLOPT_SSL_VERIFYPEER => false,CURLOPT_SSL_VERIFYHOST => false),  
		); 

		$client = new Zend_Http_Client($url, $config);
       
        $client->setParameterPost($data);
        $client->setHeaders('Content-Type', 'application/json; charset=utf-8');
        $result = $client->request(Zend_Http_Client::POST);

        return $result->getBody();
    }
	static function get_reception_history($PersonID, $CategoryCode)
	{

		require('config.php');
		$dbh = new PDO($con, $userdb, $passdb);
		$sth = $dbh->prepare('SET NOCOUNT ON ;EXEC dbo.[Get_CRM_ReceptionHistoryByPerson] 
				@PersonID = :PersonID,
				@CategoryCode= :CategoryCode');
		$sth->bindParam(':PersonID', $PersonID, PDO::PARAM_INT);
		$sth->bindParam(':CategoryCode', $CategoryCode, PDO::PARAM_INT);
		$sth->execute();
		$rows = $sth->fetchAll();
		$dbh = null;
		$rows[]= array('RNo' => 1, 'ReceptionDateS' => '2024/02/01', 'DocNo' => 125, 'Duration' => 2, 'RentItemTitle' => 'اقامتگاه', 'StatusCode' => '1', 'StatusTitle' => 'رزرو', 'ReceptionID' => '12');
		return $rows;
	}

}


