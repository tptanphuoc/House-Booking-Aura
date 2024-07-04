({
    doInit : function(component, event, helper) {
        let action = component.get("c.getAllAccounts");
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                component.set("v.accList", response.getReturnValue());
                console.log(response.getState());
                console.log(response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },

    handleSelect : function(component, event, helper) {
        console.log("Account selected");
        console.log(event.getSource().get("v.text"));
        console.log(event.getSource().get("v.value"));
    }
})
