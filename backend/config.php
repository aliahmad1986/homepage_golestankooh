<?php
$con="sqlsrv:Server=DESKTOP-ORTQ0VJ\SQL2022;Database=golestan";
$userdb="sa";
$passdb="123456";
$passwebdb='30Bd47*us';
$terminal_id="14257768";
$RedirectUrl="http://localhost:4200/#/vrfyreservation";
$CellNumber="09120000000";
$vrfyUrl= "https://sep.shaparak.ir/verifyTxnRandomSessionkey/ipg/VerifyTransaction";
$urlpay = "https://sep.shaparak.ir/onlinepg/onlinepg";
$sample_response_token = '{"status":1,"token":"2c3c1fefac5a48geb9f9be7e445dd9b2"}';
$sample_response_verify=array (
    'TransactionDetail' => array(
        "RRN"=> "14226761817",
        "RefNum"=> "50",
        "MaskedPan"=> "621986****8080",
        "HashedPan"=> 
        "b96a14400c3a59249e87c300ecc06e5920327e70220213b5bbb7d7b2410f7e0d",
        "TerminalNumber"=> 2001,
        "OrginalAmount"=> 1000,
        "AffectiveAmount"=> 1000,
        "StraceDate"=> "2019-09-16 18:11:06",
        "StraceNo"=> "100428"
        ),
    'PurchaseInfo' => NULL,
    'ResultCode' => 0,
    'ResultDescription' => 'مثلا با موفقیتا',
    'Success' => true,
    );
?>