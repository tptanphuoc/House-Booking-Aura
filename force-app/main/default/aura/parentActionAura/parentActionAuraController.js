({
    methodCalledFromChild : function(component, event, helper) {
        const childCmp = component.find("msg");
        component.set("v.valueFromChild", childCmp.get("v.valueToParent"));
    }
    
})
