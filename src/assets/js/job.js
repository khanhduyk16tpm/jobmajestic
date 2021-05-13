
var clearCheckbox = new NoCallbackToggle(".clear-all",{
    onOn: function(n) {
      var checkboxs = document.getElementsByClassName(n.getAttribute('data-chk-class'));
      for (var i = 0; i < checkboxs.length; i++) {
       checkboxs.item(i).checked = false;
      }
    }
});

var filterToggle = new NoCallbackToggle("#filter-by-btn",{
    onOn: function(n) {
      const el = document.querySelector('.job-filter-side-bar');
      el.classList.remove("d-none");
    },
    onOff: function(n) {
      const el = document.querySelector('.job-filter-side-bar');
      el.classList.add("d-none");
    },
    success: function() {
        return !0
    }
});

var toggleMoreLess = new NoCallbackToggle(".show-more",{
    onOn: function(n) {
      var listCheckbox = document.getElementById(n.getAttribute('data-id'));
      var moreLessBtn = document.getElementById(n.getAttribute('data-button-id'));
      moreLessBtn.innerHTML = '<i class="bi bi-chevron-up"></i> Less';
      listCheckbox.style.display = "inline";
    },
    onOff: function(n) {
        var listCheckbox = document.getElementById(n.getAttribute('data-id'));
        var moreLessBtn = document.getElementById(n.getAttribute('data-button-id'));
        moreLessBtn.innerHTML = '<i class="bi bi-chevron-down"></i> More';
        listCheckbox.style.display = "none";
    },
    success: function() {
        return !0
    }
});

var bookmark = new NoCallbackToggle(".bookmark",{
    onOn: function(a) {
        a.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
    },
    onOff: function(a) {
        a.innerHTML = '<i class="bi bi-bookmark"></i>'
    }
}),bookmarkJobDescription = new NoCallbackToggle(".bookmark-job-description",{
    onOn: function(n) {
        n.innerHTML = '<i class="bi bi-bookmark-check-fill"></i> SAVED'
    },
    onOff: function(n) {
        n.innerHTML = '<i class="bi bi-bookmark"></i> SAVE'
    },
    success: function() {
        return !0
    }
}), apply = new Toggle(".apply",{
    onOn: function(a) {
        a.innerHTML   = '<i class="bi bi-envelope-fill"></i> Applied'
        apply.disable(a)
    },
    onOff: function(a) {
        a.innerHTML = 'Apply Now'
    },
    onWait: function(a) {
        a.innerHTML = '<i class="bi bi-arrow-clockwise"></i>'
    },
    callback: function(a) {
        BootPop.show({
            title: "Apply",
            message: "You are about to apply for the job " + "<b>".concat(a.dataset.job, "</b> from ") + "<b>".concat(a.dataset.company, "</b>, click ") + "<b>'Yes'</b> to proceed.",
            size: BootPop.SIZE.MEDIUM,
            buttons: {
                confirm: {
                    label: "Yes",
                    className: "btn-primary col-2",
                    callback: function() {
                        // $.ajax({
                        //     type: "get",
                        //     url: a.dataset.url,
                        //     contentType: "application/json",
                        //     dataType: "json",
                        //     success: function(n) {
                        //         "success" == n.status && ("add" == n.action ? apply.triggerOn(a) : "delete" == n.action && apply.triggerOff(a))
                        //     }
                        // })
                        apply.triggerOn(a)
                    }
                },
                cancel: {
                    label: "No",
                    className: "btn-primary bg-danger col-2",
                    callback: function() {
                        apply.triggerOff(a)
                    }
                }
            }
        })
    }
}), appliedModal = new Toggle(".apply-job-modal-btn",{
    onOn: function(n) {
        n.innerHTML = '<i class="bi bi-envelope-fill"></i> Applied'
        var applyBtns = document.getElementsByClassName("apply-modal-btn")
        for (var i = 0; i < applyBtns.length; i++) {
          applyBtns.item(i).innerHTML = '<i class="bi bi-envelope-fill"></i> APPLIED'
          applyBtns.item(i).classList.add("disabled");
        }
        
    },
    onWait: function(a) {
        a.innerHTML = '<i class="bi bi-arrow-clockwise"></i>'
    },
    callback: function(a) {
        // $.ajax({
        //     type: "get",
        //     url: a.dataset.url,
        //     contentType: "application/json",
        //     dataType: "json",
        //     success: function(n) {
        //         "success" == n.status && ("add" == n.action ? apply.triggerOn(a) : "delete" == n.action && apply.triggerOff(a))
        //     }
        // })
        appliedModal.triggerOn(a)
    }
})

