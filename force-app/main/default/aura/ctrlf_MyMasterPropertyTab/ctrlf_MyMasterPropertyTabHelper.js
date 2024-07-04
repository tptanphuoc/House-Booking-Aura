({
    getPropertyDetailsHelper : function(component, event, helper) {
        let pageReference = component.get("v.pageReference") //get pageReference to take the recordId in URL
        const propertyId = pageReference.state.c__propertyId;
        let action = component.get("c.getPropertyDetails");
        action.setParams({"propertyId": propertyId});
        action.setCallback(this, (response) => {
            const state = response.getState();
            const responseValue = response.getReturnValue();
            component.set("v.property", responseValue);
            component.set("v.propertyFound", true);
        });
        $A.enqueueAction(action, false);
    }
})
