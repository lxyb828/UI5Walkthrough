sap.ui.define([
"sap/ui/base/ManagedObject"], function(ManageObject){
	"use strict";
	return ManageObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {

		constructor: function(oView){
			this._oView = oView;
		},

		exit: function(){
			delete this._oView;
		},

		open: function(){			
         var oView = this._oView;
         var oDialog = oView.byId("helloDialog");
         //Create dialog lazily
         if(!oDialog){
         	var oFragmentController = {
         		onCloseDialog: function(){
         			oDialog.close();
         		}
         	}
            // create dialog via fragment factory
            oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.walkthrough.view.HelloDialog", oFragmentController);
            oView.addDependent(oDialog);
         }

         oDialog.open();
		}
	})
})