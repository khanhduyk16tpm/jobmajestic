var edit_experiences = document.querySelectorAll('.edit-experience');
var show_experiences = document.querySelectorAll('.show-experience');
var btn_edit_exp = document.querySelector('#btn-edit-experience');

var edit_educations = document.querySelectorAll('.edit-education');
var show_educations = document.querySelectorAll('.show-education');
var btn_edit_education = document.querySelector('#btn-edit-education');

var edit_skills = document.querySelectorAll('.edit-skill');
var show_skills = document.querySelectorAll('.show-skill');
var btn_edit_skill = document.querySelector('#btn-edit-skill');

var edit_score = document.querySelectorAll('.edit-score');
var show_score = document.querySelectorAll('.show-score');
var btn_edit_score = document.querySelector('#btn-edit-score');

var edit_extra= document.querySelectorAll('.edit-extra');
var show_extra = document.querySelectorAll('.show-extra');
var btn_edit_extra = document.querySelector('#btn-edit-extra');
// window.addEventListener('load', (event) => {
//     //console.log('The page has fully loaded');
//     //hideElement(edit_experiences);
// });
function hideElement(elements) {
    elements.forEach(function (elm) {
        elm.classList.add("d-none");
    });
}
function showHideElement(elements) {
    elements.forEach(function (elm) {
        if (elm.classList.contains("d-none")) {
            elm.classList.remove("d-none");
        }else{
            elm.classList.add("d-none");
        }
    });
}
function toggleButtonLabel(btn) {
    if (btn.innerHTML == 'Edit') {
        btn.innerHTML = 'Save';
    } else {
        btn.innerHTML = 'Edit';
    }
}

function editExp(evt, type=null) {
    showHideElement(edit_experiences);
    showHideElement(show_experiences);
    if (type == 'mobile') {
        btn_edit_exp = document.querySelector('#btn-edit-experience-mobile');
    }
    toggleButtonLabel(btn_edit_exp);
}
function editEducation(evt, type=null) {
    showHideElement(edit_educations);
    showHideElement(show_educations);
    if (type == 'mobile') {
        btn_edit_education = document.querySelector('#btn-edit-education-mobile');
    }
    toggleButtonLabel(btn_edit_education);
}
function editSkill(evt, type=null) {
    showHideElement(edit_skills);
    showHideElement(show_skills);
    if (type == 'mobile') {
        btn_edit_skill = document.querySelector('#btn-edit-skill-mobile');
    }
    toggleButtonLabel(btn_edit_skill);
}
function editScore(evt, type=null) {
    showHideElement(edit_score);
    showHideElement(show_score);
    if (type == 'mobile') {
        btn_edit_score = document.querySelector('#btn-edit-score-mobile');
    }
    toggleButtonLabel(btn_edit_score);
}
function editExtraInfo(evt, type=null) {
    showHideElement(edit_extra);
    showHideElement(show_extra);
    if (type == 'mobile') {
        btn_edit_extra = document.querySelector('#btn-edit-extra-mobile');
    }
    toggleButtonLabel(btn_edit_extra);
}

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