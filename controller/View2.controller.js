sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("Subash1Subash1.controller.View2", {
		onInit: function() {
			location.href = "index.html?#/View2"; // eslint-disable-line
			var url = "/sap/opu/odata/SAP/ZODATA_SHOP_PLAN_SRV_02/";
			var d;
			var oe = new sap.ui.model.odata.ODataModel(url, true);
			oe.read("SHOP_PLANNEDSet?$filter=PoNum eq '0001'&$format=json", {
				context: null,
				urlParameter: null,
				async: false,
				success: function(oData, oResponse) {
					d = oData.results;
					var temp = [];
				for(var x=0; x<d.length; x++) {
					var tempdata = d[x];
					tempdata["Psttr"] = tempdata["Psttr"].toLocaleDateString();
					tempdata["Pedtr"] = tempdata["Pedtr"].toLocaleDateString();
					tempdata["Pertr"] = tempdata["Pertr"].toLocaleDateString();
					tempdata["Gsmng"] = parseInt(tempdata["Gsmng"], 10);
					tempdata["Dispo"] = parseInt(tempdata["Dispo"], 10);
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
		productionOrder: function() {
		sap.ui.core.UIComponent.getRouterFor(this).navTo("Production");
		}

	});

});