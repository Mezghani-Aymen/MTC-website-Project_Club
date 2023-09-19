
function resert() {
    const form = document.querySelector('.needs-validation');
    form.reset();
    form.classList.remove('was-validated');
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    const submitButton = document.getElementById('submitButton');
    const doneButton = document.querySelector('#exampleModalToggle2 .btn_INs-modal');
    const modals = {
        modal1: new bootstrap.Modal(document.getElementById('exampleModalToggle2')),
        modal2: new bootstrap.Modal(document.getElementById('successModal'))
    };
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        // Validate form fields in visible divs, including dynamic sections
        if (form.checkValidity()) {
            const member = new FormData();
            member.append("name", document.getElementById("validationCustom01").value)
            member.append("lastname", document.getElementById("validationCustom02").value)
            member.append("email", document.getElementById("inputEmail4").value)
            member.append("tel", document.getElementById("inputTel").value)
            member.append("class", document.getElementById("class").value)
           
            
            // member.class = document.getElementById("validationCustom03").value;
            axios.post("Php/insertionmember.php", member).then(res => {

                // Hide modal_1
                modals.modal1.hide();
                // Show modal_2
                modals.modal2.show();
                form.reset();
            }).catch(err => {
                alert(err)
            })
            
            // send form to php
            form.classList.remove('was-validated');
        } else {
            form.classList.add('was-validated');
        }
    });
});