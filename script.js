


//SAVE USER INFO

const form = document.getElementById("form");

//Form Stuff

const user_name = document.getElementById("name");
const user_email = document.getElementById("email");
const user_subject = document.getElementById("subject");
const user_message = document.getElementById("message");

//LOAD DATA

window.addEventListener("load", loadData);

function loadData() {

    const savedData = localStorage.getItem("formData");
    
    if (savedData) {
        console.log("User has data")

        console.log(localStorage.getItem("formData"));

        const data = JSON.parse(savedData);
        user_name.value = data.formName;
        user_email.value = data.formEmail;
        user_subject.value = data.formSubject;
        user_message.value = data.formMessage;
    } else {
        console.log("No data")
    }
}

//SAVE DATA

form.addEventListener("input", saveData);

function saveData() {

    const formData = {
        formName: user_name.value,
        formEmail: user_email.value,
        formSubject: user_subject.value,
        formMessage: user_message.value
    }
    
    localStorage.setItem("formData", JSON.stringify(formData));
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    localStorage.removeItem("formData");
    saveData();
}
