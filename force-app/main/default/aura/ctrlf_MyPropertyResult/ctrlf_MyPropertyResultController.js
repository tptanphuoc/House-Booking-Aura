({
    fetchAllProperty : function(component, event, helper) {
        helper.fetchAllPropertyHelper(component, event, helper);
    },

    handleOwnerDetails : function(component, event, helper) {
        let evtSource = event.getSource(); //get the button
        const propOwnerId = evtSource.get("v.value"); //get value of the button
        component.set("{!v.propOwnerId}", propOwnerId);
        component.set("{!v.openOwnerDetails}", true);
    },

    handleEnquiery : function(component, event, helper) {
        let evtSource = event.getSource(); //get the button
        const propertyId = evtSource.get("v.value"); //get value of the button
        component.set("{!v.propertyId}", propertyId);
        component.set("{!v.openEnquiry}", true);
    },

    handlePropertyDetails : function(component, event, helper) {
        let evtSource = event.getSource(); //get the button
        const propertyId = evtSource.get("v.value"); //get value of the button (Id of current property)

        const navigationService = component.find("navigation"); // get the lightning:navigation tag
        const pageReference = { // create a page reference
            type: "standard__component",
            attributes: {
                componentName: "c__ctrlf_MyMasterPropertyTab"
            },
            state: { // the param you want to pass when navigate to ctrlf_MyMasterPropertyTab component
                "c__propertyId": propertyId,
            }
        };
        component.set("v.pageReference", pageReference); // set the page reference
        navigationService.navigate(pageReference); // navigate to that page reference
    },

    closeOwnerModal : function(component, event, helper) {
        component.set("{!v.openOwnerDetails}", false);
    },

    closeEnquiryModal : function(component, event, helper) {
        component.set("{!v.openEnquiry}", false);
    },

    handlePropertyFilter : function(component, event, helper) {
        helper.fetchFilteredPropertiesHelper(component, event, helper);
    }
})
