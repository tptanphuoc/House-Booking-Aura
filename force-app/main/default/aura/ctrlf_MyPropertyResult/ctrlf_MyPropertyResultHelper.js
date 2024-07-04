({
    fetchAllPropertyHelper : function(component, event, helper) {
        let action = component.get("c.getLastestProperty");
        action.setCallback(this, (response) => {
            let responseValue = response.getReturnValue();
            component.set("v.propertyList", responseValue);
            component.set("v.propertiesFound", true);
        })
        $A.enqueueAction(action);
    },
    
    fetchFilteredPropertiesHelper : function(component, event, helper) {
        // get all params which have been set before
        let locationFilter = event.getParam("locationFilter"); //all attribute name that we set in the COMPONENT event file
        let bedroomFilter = event.getParam("bedroomFilter");
        let bathroomFilter = event.getParam("bathroomFilter");
        let maxPriceFilter = event.getParam("maxPriceFilter");

        // call Apex method to query Property based on above filters
        let action = component.get("c.getFilteredProperties");
        action.setParams({
            "location": locationFilter,
            "bedroom": bedroomFilter,
            "bathroom": bathroomFilter,
            "maxbudget": maxPriceFilter
        });
        action.setCallback(this, (response) => {
            let responseValue = response.getReturnValue();
            component.set("v.propertyList", responseValue);
            component.set("v.propertiesFound", true);
        });
        $A.enqueueAction(action);
    }
})
