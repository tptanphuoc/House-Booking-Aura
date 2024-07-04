({
    showHandler : function(component, event, helper) {
        helper.showHandlerHelper(component, event, "confirm");
    },

    errorHandler : function(component, event, helper) {
        helper.showHandlerHelper(component, event, "error");
    },

    removeHandler : function(component, event, helper) {
        helper.removeHandlerHelper(component);
    }
})
