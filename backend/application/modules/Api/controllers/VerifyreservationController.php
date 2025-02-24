<?php

class Api_VerifyreservationController extends REST_Controller
{
    
    public function postAction()
    {
        try {
            $modelApi = new Api_Model_api();
            $post = $this->_request->getPost();
            $api_key = Application_Model_Func_Function::get_api_key();
            if ($post['api_key'] == $api_key) {
                $res_num = $modelApi->GetValue($post['ResNum'], 'شماره سفارش', true);
                $ref_num = $modelApi->GetValue($post['RefNum'], 'رسید خرید', true);
                $mid = $modelApi->GetValue($post['MID'], 'شماره ترمینال', true);
                $result = $modelApi->Verify_Request($ref_num, $mid);
                if ($result['isPaid']) {
                    $data = $modelApi->UpdateRequestPayItem($res_num, 1, $ref_num, $result['response']);
                }
                unset($result['response']);
                $this->view->result = array("docno" => $data[0]['DocNo'],'vocher_link'=>'https://golestankooh.com/data/test.pdf', 'result' => 						$result);
		

            } else {
                $this->view->result =  array("docno" =>null,'vocher_link'=>'', 'result' =>  array(
			"isPaid" => false,
			"amount" => 0,
			"message" => "کلید احراز هویت درست نیست.دسترسی شما به سایت محدود شده است"
			));
            }
        } catch (Exception $e) {
			   $this->view->result =  array("docno" =>null,'vocher_link'=>'', 'result' =>  array(
			"isPaid" => false,
			"amount" => 0,
			"message" =>$e->getMessage() . 'خطا در دریافت اطلاعات'
			));
        }

        $this->_response->created();

    }



}
