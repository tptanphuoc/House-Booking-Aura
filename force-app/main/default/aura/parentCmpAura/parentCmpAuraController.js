({
    handleShow : function(component, event, helper) {
        component.find("messages").show("This is a Confirmation Message");
    },

    handleError : function(component, event, helper) {
        component.find("messages").error("This is a Error Message")
    },

    handleRemove : function(component, event, helper) {
        component.find("messages").remove();
    },
})
