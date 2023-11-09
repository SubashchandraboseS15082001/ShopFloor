sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Subash1Subash1.controller.View1", {
		OnPress:function(){
			var user = this.getView().byId("user").getValue();// eslint-disable-line
			var pass = this.getView().byId("pass").getValue();// eslint-disable-line
			
			var url = "/sap/opu/odata/sap/ZODATA_EHSM_LOGIN_SRV/";
			var d;
			var oe = new sap.ui.model.odata.ODataModel(url, true);
			oe.read("EHSM_LOGINSet(UserId='" + user + "',Password='" + pass + "')?$format=json",{
				context:null,
				urlParameter:null,
				async:false,success: function(oData, oResponse){
					d = oData.Return;
					// window.console.log(oData);
				}
			});
			if (d === "SUCCESS"){
						// window.console.log("YOU ARE SUCCESSFULLY LOGGED IN!");
						alert("YOU ARE SUCCESSFULLY LOGGED IN!"); // eslint-disable-line
						sap.ui.core.UIComponent.getRouterFor(this).navTo("Dashboard");
					}
					else{
						window.console.log("ENTER CORRECT CREDENTIALS!");
						alert("ENTER CORRECT CREDENTIALS!"); // eslint-disable-line
					}
		}
	});
});