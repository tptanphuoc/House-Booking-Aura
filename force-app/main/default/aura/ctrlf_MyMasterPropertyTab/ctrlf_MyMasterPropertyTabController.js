({
    getSelectedProperty : function(component, event, helper) {
        helper.getPropertyDetailsHelper(component, event, helper)
    },

    reInit : function(component, event, helper) { // rerender the component when a new Property selected
        $A.get('e.force:refreshView').fire();
    }
})
