<?php

class Api_SavenamefamilController extends REST_Controller
{
    public function postAction()
    {
        try {
            $modelApi = new Api_Model_api();
            $post = $this->_request->getPost();
            $api_key = Application_Model_Func_Function::get_api_key();
            if ($post['api_key'] == $api_key) {
                $name = $modelApi->GetValue($post['name'], 'name', true);
                $famil = $modelApi->GetValue($post['famil'], 'famil', true);
                $mobile = $modelApi->GetValue($post['mobile'], 'mobile', true);
                $resultRegisteredMobile = $modelApi->CheckRegisteredMobile($mobile);
                if ($resultRegisteredMobile[0]['PersonID'] > 0) {
                    $this->view->result = array(
                        'flag' => true,
                        'message' => 'با این موبایل قبلا ثبت نام شده است',
                        'data' => array('personId'=>-1)
                    );
                } else {
                    $result = $modelApi->SavePerson($name, $famil, $mobile);
                    $res = array('result' => null, 'success' => false, 'personId' => 0);
                    if (count($result) > 0) {
                        if ($result[0]['insID'] > 0) {
                            $res['personId'] = $result[0]['insID'];
                            $res['success'] = true;
                        }
                    }
                    $this->view->result = array(
                        'flag' => true,
                        'message' => 'با موفقیت انجام شد',
                        'data' => $res
                    );
                }

            } else {
                $this->view->result = array('flag' => false, 'message' => 'کلید احراز هویت درست نیست.دسترسی شما به سایت محدود شده است');
            }
        } catch (Exception $e) {
            $this->view->result = array('flag' => false, 'message' => $e->getMessage() . 'خطا در دریافت اطلاعات');
        }

        $this->_response->created();

    }

}
