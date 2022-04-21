({
  onLogout: function(component, event, helper) {
    console.log("Logout");
    var workspaceAPI = component.find("workspace");
        workspaceAPI.getAllTabInfo().then(function(response) {
            console.log(response);
            response.forEach((element, index, array) => {
                console.log(element);
                workspaceAPI.closeTab({tabId: element.tabId})
       })
  })
        .catch(function(error) {
            console.log(error);
        });
    
  }
});