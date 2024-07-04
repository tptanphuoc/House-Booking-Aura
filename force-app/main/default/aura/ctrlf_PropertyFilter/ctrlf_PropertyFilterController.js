({
    initFilter : function(component, event, helper) {
        const locationOption = [{label: "ALL", value: "ALL"},
                              {label: "Banglore", value: "Banglore"},
                              {label: "Hyderabad", value: "Hyderabad"},
                              {label: "Mumbai", value: "Mumbai"},
                              {label: "Pune", value: "Pune"},
                              {label: "Bhubaneswar", value: "Bhubaneswar"}
                             ];
        component.set("v.locationOption", locationOption);

        const noOfBedRoomOption = [{label: "ALL", value: "ALL"},
                                {label: "1", value: "1"},
                                {label: "2", value: "2"},
                                {label: "3", value: "3"},
                                {label: "4", value: "4"},
                                {label: "5", value: "5"},
                                {label: "6", value: "6"}
                               ];
        component.set("v.noOfBedRoomOption", noOfBedRoomOption);

        const noOfBathRoomOption = [{label: "ALL", value: "ALL"},
                                {label: "1", value: "1"},
                                {label: "2", value: "2"},
                                {label: "3", value: "3"},
                                {label: "4", value: "4"},
                                {label: "5", value: "5"},
                                {label: "6", value: "6"}
                               ];
        component.set("v.noOfBathRoomOption", noOfBathRoomOption);
    },

    handleFilterChange : function(component, event, helper) {
        // find the COMPONENT event
        let filterEvent = component.getEvent("filterEvent"); // get the event that already defined
        // set the values for that COMPONENT event
        filterEvent.setParams({
            "locationFilter": component.get("v.location"), // these are params that already defined in COMPONENT event
            "bedroomFilter": component.get("v.noOfBedRoom"),
            "bathroomFilter": component.get("v.noOfBathRoom"),
            "maxPriceFilter": component.get("v.maxPrice")
        });
        filterEvent.fire();
    }
})
