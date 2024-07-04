({
    firstLoad : function(component, event, helper) {
        const jscongb = {
            'name': 'tptanphuoc',
            'age': 23,
        };
        component.set("v.jsObj", jscongb);

        const udata = {
            "myString": "String Values",
            "myInteger": 2024
        }
        component.set("v.userData", udata)
 
    }
})
