sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Subash1Subash1.controller.Production", {

		onInit: function() {
			location.href = "index.html?#/Production"; // eslint-disable-line
			var url = "/sap/opu/odata/SAP/ZODATA_SHOP_PRODUCTION_SRV_01/";
			var d;
			var oe = new sap.ui.model.odata.ODataModel(url, true);
			oe.read("SHOP_PRODUCTIONSet?$filter=ImProduction eq '0001'&$format=json", {
				context: null,
				urlParameter: null,
				async: false,
				success: function(oData, oResponse) {
					d = oData.results;
						var temp = [];
				for(var x=0; x<d.length; x++) {
					var tempdata = d[x];
					tempdata["Strmp"] = tempdata["Strmp"].toLocaleDateString();
					tempdata["Etrmp"] = tempdata["Etrmp"].toLocaleDateString();
					tempdata["Posnr"] = parseInt(tempdata["Posnr"], 10);
					tempdata["Psmng"] = parseInt(tempdata["Psmng"], 10);
					temp.push(tempdata);
				}
				d=temp;
					console.log(d); // eslint-disable-line
				}
			});
			var oen = new sap.ui.model.json.JSONModel();
			oen.setData({
				"results": d
			});
			this.getView().byId("table").setModel(oen);
		},
		
		logOut: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("View1");
		},

		plannedOrder: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("View2");
		}


	});

});