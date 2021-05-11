function toggleMoreLess(moreId, toggleBtn) {
  var moreText = document.getElementById(moreId);
  var aText = document.getElementById(toggleBtn);

  if (moreText.style.display === "inline") {
    aText.innerHTML = '<i class="fa fa-chevron-down" aria-hidden="true"></i> More';
    moreText.style.display = "none";
  } else {
    aText.innerHTML = '<i class="fa fa-chevron-up" aria-hidden="true"></i> Less';
    moreText.style.display = "inline";
  }
}



function filterToggle() {
  const el = document.querySelector('.job-filter-side-bar');
  if (el.classList.contains("d-none")) {
    el.classList.remove("d-none");
  }else{
  	el.classList.add("d-none");
  }
}

function hideSavedJob(id){
  var jobCardEl = document.getElementById("job-card-"+id);
  jobCardEl.classList.add("d-none");
}

function clearCheckbox(checkboxListClass){
  var checkboxs = document.getElementsByClassName(checkboxListClass);
  for (var i = 0; i < checkboxs.length; i++) {
   checkboxs.item(i).checked = false;
  } 
}


var bookmark = new Toggle(".bookmark",{
    onOn: function(n) {
        n.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
    },
    onOff: function(n) {
        n.innerHTML = '<i class="bi bi-bookmark"></i>'
    },
    success: function() {
        return !0
    }
}),bookmarkJobDescription = new Toggle(".bookmark-job-description",{
    onOn: function(n) {
        n.innerHTML = '<i class="bi bi-bookmark-check-fill"></i> SAVED'
    },
    onOff: function(n) {
        n.innerHTML = '<i class="bi bi-bookmark"></i> SAVE'
    },
    success: function() {
        return !0
    }
}), applied = new Toggle(".apply-job-btn",{
    onOn: function(n) {
        n.innerHTML = '<i class="bi bi-envelope-fill"></i> Applied'
    },
    onOff: function(n) {
        n.innerHTML = 'Apply Now'
    },
    success: function() {
        return !0
    }
}), appliedModal = new Toggle(".apply-job-modal-btn",{
    onOn: function(n) {
        n.innerHTML = '<i class="bi bi-envelope-fill"></i> Applied'
        document.getElementById("apply-modal-btn").innerHTML = '<i class="bi bi-envelope-fill"></i> APPLIED'
    },
    onOff: function(n) {
        n.innerHTML = 'Apply Now'
        document.getElementById("apply-modal-btn").innerHTML = 'APPLY NOW'
    },
    success: function() {
        return !0
    }
})

