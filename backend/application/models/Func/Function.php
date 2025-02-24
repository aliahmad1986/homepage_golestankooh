<?php

class Application_Model_Func_Function
{

    static public function get_config(){
        $config=new Zend_Config_Ini(APPLICATION_PATH .'/configs/application.ini', "staging");
        return $config;
    }
    static public function get_api_key(){
        $config = new Zend_Config_Ini(APPLICATION_PATH . '/configs/application.ini', 'staging');

        return $config->rest->api_key;
    }
   function yesterday()
    {
        $db = Zend_Registry::get("db");
        $select = "select FORMAT( DATEADD(DAY,-1,GETDATE()), 'yyyy/MM/dd', 'fa') as yesterday";
        $stmt = $db->query($select);
        $result = $stmt->fetchAll();
        return $result[0]['yesterday'];
    }
    static function today($db)
    {
        $select = "select  FORMAT(GETDATE(), 'yyyy/MM/dd hh:mm:ss', 'en') as today";
        $stmt = $db->query($select);
        $result = $stmt->fetchAll();
        return $result[0]['today'];
    }
    static function todayinsh($db)
    {
        $select = "select  FORMAT(GETDATE(), 'yyyy/MM/dd hh:mm:ss', 'fa') as today";
        $stmt = $db->query($select);
        $result = $stmt->fetchAll();
        return $result[0]['today'];
    }


}
