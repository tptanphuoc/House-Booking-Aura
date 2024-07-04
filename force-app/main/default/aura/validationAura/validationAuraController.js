({
    doAction : function(component, event, helper) {
        let inputCmp = component.find("inputCmp");
        let value = inputCmp.get("v.value");

        if (isNaN(value)) {
            inputCmp.set("v.errors", 
                            [{message: `Input "${value}" is not a number`}]);
        } else {
            inputCmp.set("v.errors", null);
        }
    }
})
