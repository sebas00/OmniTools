({
  onStatusChanged: function(component, event, helper) {
    console.log("Status changed.");
    var newStatus = event.getParam("statusId");
    console.log("newstatus", newStatus);

    if (newStatus == "0N57Q000000XgbT") {
     
      console.log("in change status");
      var lastStatus = component.get("v.onlineStatus");
      console.log("lastStatus", lastStatus);
      var omniAPI = component.find("omniToolkit");

      omniAPI
        .logout()
        .then(function(result) {
          if (result) {
            console.log("Logout successful");
            omniAPI.login({ statusId: lastStatus });
          } else {
            console.log("Logout failed");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      console.log("normal status change");
      component.set("v.onlineStatus", newStatus);
    }
    
  }
});