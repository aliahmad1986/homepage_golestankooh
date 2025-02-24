<?php

class Api_GetnamefamilController extends REST_Controller
{
    public function indexAction(){
       
    }

    public function postAction()
    {
        try {
            $post = $this->_request->getPost();
		//var_export($_POST);exit;
            $modelApi=new Api_Model_api();
            $api_key = Application_Model_Func_Function::get_api_key();
            if ($post['api_key'] == $api_key) {
                $personId = $modelApi->GetValue($post['personId'], 'شماره شناسایی فرد', true);
                $result = $modelApi->GetPerson($personId);
 $res = array('result' => null, 'success' => false, 'personId' => 0);
                if (count($result) > 0) {
                    $res['person'] = $result[0];
                    $res['success'] = true;
                }
                $this->view->result = array(
                    'flag' => true,
                    'message' => 'با موفقیت انجام شد',
                    'data' => $res
                );

            } else {
                $this->view->result = array('flag' => false, 'message' => 'کلید احراز هویت درست نیست.دسترسی شما به سایت محدود شده است');
            }
        } catch (Exception $e) {
            $this->view->result = array('flag' => false, 'message' => $e->getMessage() . 'خطا در دریافت اطلاعات');
        }

        $this->_response->created();

    }



}
