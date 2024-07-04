({
    showHandlerHelper : function(component, event, severity) {
        let messages = event.getParam("arguments");
        let displayMessage = "";
        if (messages) { 
            displayMessage = messages.message;
        }

        let messagePanel = component.find("message");

        $A.createComponents([
            [
                "ui:message", {"title": severity.toUpperCase(),
                               "severity": severity,
                               "closeable": "true"
                              }
            ],
            [
                "ui:outputText", {"value": displayMessage}
            ]
            ],

            function(components, status, statusMessageList) {
                if (status === "SUCCESS") {
                    let uiMessage = components[0];
                    let uiOutputText = components[1];
                    uiMessage.set("v.body", uiOutputText);
                    messagePanel.set("v.body", uiMessage)
                }
            }
        );
    },

    removeHandlerHelper : function(component) {
        let messagePanel = component.find("message");
        messagePanel.set("v.body", []);
    },
})
