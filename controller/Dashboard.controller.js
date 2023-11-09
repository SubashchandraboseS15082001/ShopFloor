sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Subash1Subash1.controller.Dashboard", {

		logOut: function() {
		sap.ui.core.UIComponent.getRouterFor(this).navTo("View1");
		},
		Planned: function(){
				sap.ui.core.UIComponent.getRouterFor(this).navTo("View2");
		},
		Production: function(){
				sap.ui.core.UIComponent.getRouterFor(this).navTo("Production");
		}
	});

});