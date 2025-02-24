<?php

class Api_PayreservationController extends REST_Controller
{
    public function postAction()
    {
        try {
            $modelApi = new Api_Model_api();
            $post = $this->_request->getPost();
            $api_key = Application_Model_Func_Function::get_api_key();
            if ($post['api_key'] == $api_key) {
                $personId = $modelApi->GetValue($post['personId'], ' شناسه فرد', true);
                $bill_json = $modelApi->GetValue($post['bill'], 'bill', true);
                $bill=json_decode($bill_json,true);
                $typeReserve2 = $modelApi->GetValue($post['TypeReserve2'], 'TypeReserve2', true);
                $incomeReasonID = $modelApi->GetValue($post['IncomeReasonID'], 'IncomeReasonID ', true);
                $rentItemID = $modelApi->GetValue($post['RentItemID'], 'RentItemID ', true);
                $all_price = $modelApi->Calc_Reservation_Price($rentItemID, $bill);
                $resultSavePayRequest = $modelApi->Pay_Gettoken_Reservation($all_price, $personId, $bill, $typeReserve2, $incomeReasonID, $rentItemID, '');
                $this->view->result = array(
                    'flag' => true,
                    'message' => 'با موفقیت انجام شد',
                    'data' => $resultSavePayRequest
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
