
var editToggle = new NoCallbackToggle(".edit-btn",{
    onOn: function(n) {
      n.classList.add("d-none");
      n.nextElementSibling.classList.remove("d-none");

      var inputs = document.getElementsByClassName(n.getAttribute('data-input-class'));
      for (var i = 0; i < inputs.length; i++) {
       inputs.item(i).classList.remove("d-none")
      }
    
      var texts = document.getElementsByClassName(n.getAttribute('data-text-class'));
      for (var i = 0; i < texts.length; i++) {
       texts.item(i).classList.add("d-none")
      }
    },
    success: function() {
        return !0
    }
});
var saveToggle = new Toggle(".save-btn",{
    onOn: function(n) {
      n.classList.add("d-none");
      n.previousElementSibling.classList.remove("d-none");

      var inputs = document.getElementsByClassName(n.getAttribute('data-input-class'));
      for (var i = 0; i < inputs.length; i++) {
       inputs.item(i).classList.add("d-none")
       var textEl = document.getElementById(inputs.item(i).getAttribute('data-text-id'));
       textEl.innerHTML = inputs.item(i).value
       textEl.value = inputs.item(i).value
       textEl.classList.remove("d-none")
      }
    
    },
    callback: function(n) {
        // $.ajax({
        //     type: "get",
        //     url: a.dataset.url,
        //     contentType: "application/json",
        //     dataType: "json",
        //     success: function(n) {
        //         "success" == n.status && ("add" == n.action ? apply.triggerOn(a) : "delete" == n.action && apply.triggerOff(a))
        //     }
        // })
        saveToggle.triggerOn(n)
    }
});