var edit_experiences = document.querySelectorAll('.edit-experience');
var show_experiences = document.querySelectorAll('.show-experience');
var btn_edit_exp = document.querySelector('#btn-edit-experience');

var edit_educations = document.querySelectorAll('.edit-education');
var show_educations = document.querySelectorAll('.show-education');
var btn_edit_education = document.querySelector('#btn-edit-education');

var edit_skills = document.querySelectorAll('.edit-skill');
var show_skills = document.querySelectorAll('.show-skill');
var btn_edit_skill = document.querySelector('#btn-edit-skill');
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

function editExp(evt) {
    showHideElement(edit_experiences);
    showHideElement(show_experiences);
    toggleButtonLabel(btn_edit_exp);
}
function editEducation() {
    showHideElement(edit_educations);
    showHideElement(show_educations);
    toggleButtonLabel(btn_edit_education);
}
function editSkill() {
    showHideElement(edit_skills);
    showHideElement(show_skills);
    toggleButtonLabel(btn_edit_skill);
}