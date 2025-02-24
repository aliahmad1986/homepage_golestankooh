<?php

$permission = array(
    'User' => array(
        'title' => 'مدیریت کاربران',
        'icon' => 'fa-user',
        'moduleName' => 'User',
        'controllerList' =>
            array(
                'Mnggroup' => array(
                    'controllersName' => 'Mnggroup',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده لیست گروهها',

                        ),
                        'addgroup' => array(
                            'actionName' => 'addgroup',
                            'title' => 'افزودن گروه جدید',

                        ),
                        'editgroup' => array(
                            'actionName' => 'editgroup',
                            'title' => 'ویرایش گروه',

                        ),
                        'deletegroup' => array(
                            'actionName' => 'deletegroup',
                            'title' => 'حذف گروه',

                        ),
                        'getgrouplist' => array(
                            'actionName' => 'getgrouplist',
                            'title' => 'جزئیات لیستی گروهها',

                        ),
                        'savegroup' => array(
                            'actionName' => 'savegroup',
                            'title' => 'ذخیره اطلاعات گروهها',

                        ),
                    )
                )
                ,
                'Mngperson' => array(
                    'controllersName' => 'Mngperson',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده لیست افراد',

                        ),
                        'addperson' => array(
                            'actionName' => 'addperson',
                            'title' => 'افزودن افراد جدید',

                        ),
                        'editperson' => array(
                            'actionName' => 'editperson',
                            'title' => 'ویرایش افراد',

                        ),
                        'deleteperson' => array(
                            'actionName' => 'deleteperson',
                            'title' => 'حذف افراد',

                        ),
                        'getpersonlist' => array(
                            'actionName' => 'getpersonlist',
                            'title' => 'جزئیات لیستی افراد',

                        ),
                        'saveperson' => array(
                            'actionName' => 'saveperson',
                            'title' => 'ذخیره اطلاعات افراد',

                        ),
                    )
                )
                ,
                'Mngusers' => array(
                    'controllersName' => 'Mngusers',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده لیست کاربران',

                        ),
                        'adduser' => array(
                            'actionName' => 'adduser',
                            'title' => 'افزودن کاربر جدید',

                        ),
                        'edituser' => array(
                            'actionName' => 'edituser',
                            'title' => 'ویرایش کاربر',

                        ),
                        'deleteuser' => array(
                            'actionName' => 'deleteuser',
                            'title' => 'حذف کاربر',

                        ),
                        'getuserlist' => array(
                            'actionName' => 'getuserlist',
                            'title' => 'جزئیات لیستی کاربران',

                        ),
                        'saveuser' => array(
                            'actionName' => 'saveuser',
                            'title' => 'ذخیره اطلاعات کاربران',

                        ),
                    )
                ),
                'Mngcustomer' => array(
                    'controllersName' => 'Mngcustomer',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده لیست مشتریان',

                        ),
                        'addcustomer' => array(
                            'actionName' => 'addcustomer',
                            'title' => 'افزودن مشتری جدید',

                        ),
                        'editcustomer' => array(
                            'actionName' => 'editcustomer',
                            'title' => 'ویرایش مشتری',

                        ),
                        'deletecustomer' => array(
                            'actionName' => 'deletecustomer',
                            'title' => 'حذف مشتری',

                        ),
                        'getcustomerlist' => array(
                            'actionName' => 'getcustomerlist',
                            'title' => 'جزئیات لیستی مشتریان',

                        ),
                        'savecustomer' => array(
                            'actionName' => 'savecustomer',
                            'title' => 'ذخیره اطلاعات مشتریان',

                        ),
                    )
                )
            )
    )
    ,
    'Product' => array(
        'title' => 'مدیریت محصولات',
        'icon' => 'fa-user',
        'moduleName' => 'Product',
        'controllerList' =>
            array(
                'Mngcategory' => array(
                    'controllersName' => 'Mngcategory',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده طبقه بندی محصولات',

                        ),
                        'addgroup' => array(
                            'actionName' => 'addgroup',
                            'title' => 'افزودن طبقه بندی جدید',

                        ),
                        'editgroup' => array(
                            'actionName' => 'editgroup',
                            'title' => 'ویرایش طبقه بندی',

                        ),
                        'deletegroup' => array(
                            'actionName' => 'deletegroup',
                            'title' => 'حذف طبقه بندی',

                        ),
                        'getgrouplist' => array(
                            'actionName' => 'getgrouplist',
                            'title' => 'جزئیات لیستی طبقه بندی ها',

                        ),
                        'savegroup' => array(
                            'actionName' => 'savegroup',
                            'title' => 'ذخیره اطلاعات طبقه بندی',

                        ),
                    )
                )
                ,
                'Mngproduct' => array(
                    'controllersName' => 'Mngproduct',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده لیست محصولات',

                        ),
                        'addperson' => array(
                            'actionName' => 'addperson',
                            'title' => 'افزودن محصول جدید',

                        ),
                        'editperson' => array(
                            'actionName' => 'editperson',
                            'title' => 'ویرایش محصول',

                        ),
                        'deleteperson' => array(
                            'actionName' => 'deleteperson',
                            'title' => 'حذف محصول',

                        ),
                        'getpersonlist' => array(
                            'actionName' => 'getpersonlist',
                            'title' => 'جزئیات لیستی محصولات',

                        ),
                        'saveperson' => array(
                            'actionName' => 'saveperson',
                            'title' => 'ذخیره اطلاعات محصول',

                        ),
                    )
                )
                ,

            )
    )
    ,
    'Workflow' => array(
        'title' => 'مدیریت جریان کارها',
        'icon' => 'fa-user',
        'moduleName' => 'Workflow',
        'controllerList' =>
            array(
                'Mngworkflow' => array(
                    'controllersName' => 'Mngworkflow',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده جریان کار ',

                        ),
                        'addworkflow' => array(
                            'actionName' => 'addworkflow',
                            'title' => 'افزودن جریان کار جدید',

                        ),
                        'editworkflow' => array(
                            'actionName' => 'editworkflow',
                            'title' => 'ویرایش جریان کار',

                        ),
                        'deleteworkflow' => array(
                            'actionName' => 'deleteworkflow',
                            'title' => 'حذف جریان کار',

                        ),
                        'getworkflowlist' => array(
                            'actionName' => 'getworkflowlist',
                            'title' => 'جزئیات لیستی جریان کار ها',

                        ),
                        'saveworkflow' => array(
                            'actionName' => 'saveworkflow',
                            'title' => 'ذخیره اطلاعات جریان کار',

                        ),
                    )
                )
                ,


            )
    )
    ,
    'Requestform' => array(
        'title' => 'مدیریت فرم درخواست',
        'icon' => 'fa-user',
        'moduleName' => 'Requestform',
        'controllerList' =>
            array(
                'Mngrequestform' => array(
                    'controllersName' => 'Mngrequestform',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده فرم درخواست ',

                        ),
                        'addrequestform' => array(
                            'actionName' => 'addrequestform',
                            'title' => 'افزودن فرم درخواست جدید',

                        ),
                        'editrequestform' => array(
                            'actionName' => 'editrequestform',
                            'title' => 'ویرایش فرم درخواست ',

                        ),
                        'deleterequestform' => array(
                            'actionName' => 'deleterequestform',
                            'title' => 'حذف فرم درخواست ',

                        ),
                        'getrequestformlist' => array(
                            'actionName' => 'getrequestformlist',
                            'title' => 'جزئیات لیستی فرم درخواست  ها',

                        ),
                        'saverequestform' => array(
                            'actionName' => 'saverequestform',
                            'title' => 'ذخیره اطلاعات فرم درخواست ',

                        ),
                    )
                )
                ,


            )
    )
    ,
    'Mailbox' => array(
        'title' => 'کارتابل درخواست',
        'icon' => 'fa-user',
        'moduleName' => 'Mailbox',
        'controllerList' =>
            array(
                'Mnginbox' => array(
                    'controllersName' => 'Mnginbox',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'کارتابل دریافت ',

                        ),
                        'getinboxlist' => array(
                            'actionName' => 'getinboxlist',
                            'title' => 'جزئیات لیستی درخواست های دریافتی',

                        ),
                        'sendinbox' => array(
                            'actionName' => 'sendinbox',
                            'title' => 'ذخیره و ارسال درخواست',

                        ),
                        'viewinbox' => array(
                            'actionName' => 'sendinbox',
                            'title' => 'مشاهده درخواست',

                        ),

                    )
                )
                ,
                'Mngoutbox' => array(
                    'controllersName' => 'Mngoutbox',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'کارتابل ارسال ',

                        ),
                        'getoutboxlist' => array(
                            'actionName' => 'getoutboxlist',
                            'title' => 'جزئیات لیستی درخواست های ارسالی',

                        ),
                        'viewoutbox' => array(
                            'actionName' => 'sendoutbox',
                            'title' => 'مشاهده درخواست',

                        ),

                    )
                )
                ,


            )
    ),
    'Order' => array(
        'title' => 'مدیریت سفارشات',
        'icon' => 'fa-user',
        'moduleName' => 'Order',
        'controllerList' =>
            array(
                'Mngorderinprogress' => array(
                    'controllersName' => 'Mngorderinprogress',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'سفارشات در انتظار تایید',

                        ),
                        'getorderinprogresslist' => array(
                            'actionName' => 'getorderinprogresslist',
                            'title' => 'جزئیات لیستی  سفارشات در انتظار تایید ',

                        )

                    )
                )
                ,
                'Mngordersubmit' => array(
                    'controllersName' => 'Mngordersubmit',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'سفارشات در دست اقدام  ',

                        ),
                        'getordersubmitlist' => array(
                            'actionName' => 'getordersubmitlist',
                            'title' => 'جزئیات لیستی  سفارشات در دست اقدام  ',

                        )

                    )
                )
                ,
                'Mngordersarchive' => array(
                    'controllersName' => 'Mngordersarchive',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'سفارشات بایگانی شده',

                        ),
                        'getordersarchive' => array(
                            'actionName' => 'getorderinprogresslist',
                            'title' => 'جزئیات لیستی  سفارشات بایگانی شده   ',

                        )

                    )
                )


            )
    ),
    'Setting' => array(
        'title' => 'تنظیمات سایت',
        'icon' => 'fa-user',
        'moduleName' => 'Setting',
        'controllerList' =>
            array(
                'Mngslider' => array(
                    'controllersName' => 'Mngslider',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده نمایشگر محصولات',

                        ),
                        'addslider' => array(
                            'actionName' => 'addslider',
                            'title' => 'افزودن نمایشگر جدید',

                        ),
                        'editslider' => array(
                            'actionName' => 'editslider',
                            'title' => 'ویرایش  نمایشگر',

                        ),
                        'deleteslider' => array(
                            'actionName' => 'deleteslider',
                            'title' => 'حذف  نمایشگر',

                        ),
                        'getsliderlist' => array(
                            'actionName' => 'getsliderlist',
                            'title' => 'جزئیات لیستی نمایشگر ',

                        ),
                        'saveslider' => array(
                            'actionName' => 'saveslider',
                            'title' => 'ذخیره نمایشگر',

                        ),
                    )
                ),
                'Mngcar' => array(
                    'controllersName' => 'Mngcar',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده گروه خودرو',

                        ),
                        'addcar' => array(
                            'actionName' => 'addcar',
                            'title' => 'افزودن  گروه خودرو جدید',

                        ),
                        'editcar' => array(
                            'actionName' => 'editcar',
                            'title' => 'ویرایش   گروه خودرو',

                        ),
                        'deletecar' => array(
                            'actionName' => 'deletecar',
                            'title' => 'حذف   گروه خودرو',

                        ),
                        'getcarlist' => array(
                            'actionName' => 'getcarlist',
                            'title' => 'جزئیات لیستی  گروه خودرو ',

                        ),
                        'savecar' => array(
                            'actionName' => 'savecar',
                            'title' => 'ذخیره  گروه خودرو',

                        ),
                    )
                ),
                'Mngcopon' => array(
                    'controllersName' => 'Mngcopon',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده کوپن',

                        ),
                        'addcopon' => array(
                            'actionName' => 'addcopon',
                            'title' => 'افزودن کوپن جدید',

                        ),
                        'editcopon' => array(
                            'actionName' => 'editcopon',
                            'title' => 'ویرایش  کوپن ',

                        ),
                        'deletecopon' => array(
                            'actionName' => 'deletecopon',
                            'title' => 'حذف  کوپن ',

                        ),
                        'getcoponlist' => array(
                            'actionName' => 'getcoponlist',
                            'title' => 'جزئیات لیستی کوپن  ',

                        ),
                        'savecopon' => array(
                            'actionName' => 'savecopon',
                            'title' => 'ذخیره کوپن ',

                        ),
                    )
                ),
                'Mngmagicbasket' => array(
                    'controllersName' => 'Mngmagicbasket',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده سبد شگفت انگیز',

                        ),
                        'addmagicbasket' => array(
                            'actionName' => 'addmagicbasket',
                            'title' => 'افزودن سبد شگفت انگیز جدید',

                        ),
                        'editmagicbasket' => array(
                            'actionName' => 'editmagicbasket',
                            'title' => 'ویرایش  سبد شگفت انگیز ',

                        ),
                        'deletemagicbasket' => array(
                            'actionName' => 'deletemagicbasket',
                            'title' => 'حذف  سبد شگفت انگیز ',

                        ),
                        'getmagicbasketlist' => array(
                            'actionName' => 'getmagicbasketlist',
                            'title' => 'جزئیات لیستی سبد شگفت انگیز  ',

                        ),
                        'savemagicbasket' => array(
                            'actionName' => 'savemagicbasket',
                            'title' => 'ذخیره سبد شگفت انگیز ',

                        ),
                    )
                )


            ),

    ),
    'Payment' => array(
        'title' => 'مدیریت پرداخت',
        'icon' => 'fa-user',
        'moduleName' => 'Payment',
        'controllerList' =>
            array(
                'Mngpayment' => array(
                    'controllersName' => 'Mngpayment',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده نحوه پرداخت ',

                        ),
                        'addpayment' => array(
                            'actionName' => 'addpayment',
                            'title' => 'افزودن نحوه پرداخت',

                        ),
                        'editpayment' => array(
                            'actionName' => 'editpayment',
                            'title' => 'ویرایش   نحوه پرداخت',

                        ),
                        'deletepayment' => array(
                            'actionName' => 'deletepayment',
                            'title' => 'حذف   نحوه پرداخت',

                        ),
                        'getpaymentlist' => array(
                            'actionName' => 'getpaymentlist',
                            'title' => 'جزئیات لیستی  نحوه پرداخت ',

                        ),
                        'savepayment' => array(
                            'actionName' => 'savepayment',
                            'title' => 'ذخیره  نحوه پرداخت',

                        ),
                    )
                ),
                'Mnggetway' => array(
                    'controllersName' => 'Mnggetway',
                    'actions' => array(
                        'index' => array(
                            'actionName' => 'index',
                            'title' => 'مشاهده درگاه پرداخت ',

                        ),
                        'addgetway' => array(
                            'actionName' => 'addgetway',
                            'title' => 'افزودن درگاه پرداخت',

                        ),
                        'editgetway' => array(
                            'actionName' => 'editgetway',
                            'title' => 'ویرایش   درگاه پرداخت',

                        ),
                        'deletegetway' => array(
                            'actionName' => 'deletegetway',
                            'title' => 'حذف   درگاه پرداخت',

                        ),
                        'getgetwaylist' => array(
                            'actionName' => 'getgetwaylist',
                            'title' => 'جزئیات لیستی  درگاه پرداخت ',

                        ),
                        'savegetway' => array(
                            'actionName' => 'savegetway',
                            'title' => 'ذخیره  درگاه پرداخت',

                        ),
                    )
                )


            ),

    )

);