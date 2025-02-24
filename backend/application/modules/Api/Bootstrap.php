<?php
class Api_Bootstrap extends Zend_Application_Module_Bootstrap
{
    public function _initREST()
    {
        $frontController = Zend_Controller_Front::getInstance();

        // register the RestHandler plugin
        $frontController->registerPlugin(new REST_Controller_Plugin_RestHandler($frontController));

        // add REST contextSwitch helper
        $contextSwitch = new REST_Controller_Action_Helper_ContextSwitch();
        Zend_Controller_Action_HelperBroker::addHelper($contextSwitch);

        // add restContexts helper
        $restContexts = new REST_Controller_Action_Helper_RestContexts();
        Zend_Controller_Action_HelperBroker::addHelper($restContexts);
    }
	
		protected function _initAutoload()
	{
		$moduleLoader = new Zend_Application_Module_Autoloader(array(
		'namespace' => 'shop',
		'basePath' => APPLICATION_PATH
		));
	    return $moduleLoader;
	}

	protected function _initViewHelpers()
	{
	}
}
