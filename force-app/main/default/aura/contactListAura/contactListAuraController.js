({
    firstAction : function(component, event, helper) {
        component.set("v.Columns", [
            {label: "First Name", fieldName: "FirstName", type: "text"},
            {label: "Last Name", fieldName: "LastName", type: "text"},
            {label: "Phone", fieldName: "Phone", type: "phone"}
        ]);
        let action = component.get("c.getAllContacts"); // Call Apex method
        action.setParams({recordId: component.get("v.recordId")}); // Pass parameter to this Apex method
        action.setCallback(this, (response) => {
            component.set("v.Contacts", response.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})
