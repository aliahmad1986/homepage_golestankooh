<?php

class Api_SelectcalenderController extends REST_Controller
{
    public function postAction()
	{




		
        try {
            $modelApi = new Api_Model_api();
            $post = $this->_request->getPost();
			
			
            $api_key=Application_Model_Func_Function::get_api_key();
            if ($post['api_key'] == $api_key) {
				$startDate = $post['StartDate'];
				$rentItemID = $post['RentItemID'];
				$act = $post['Act'];
                $data=$modelApi->getCalenderData($startDate,$rentItemID,$act);
                $this->view->result =  array('flag' => true, 'message' => 'با موفقیت انجام شد',
                'data' => $data);

            } else {
                $this->view->result = array('flag' => false, 'message' => 'کلید احراز هویت درست نیست.دسترسی شما به سایت محدود شده است');
            }
        } catch (Exception $e) {
            $this->view->result = array('flag' => false, 'message' => $e->getMessage() . 'خطا در دریافت اطلاعات');
        }

        $this->_response->created();

    }



}
