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