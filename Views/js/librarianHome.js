let issueHead = document.getElementById('issueHead');
let returnHead = document.getElementById('returnHead');
let addBookHead = document.getElementById('addBookHead');
let deleteBookHead = document.getElementById('deleteBookHead');
let addUserHead = document.getElementById('addUserHead');
let isuueSection = document.getElementById('issueSection');
let returnSection = document.getElementById('returnSection');
let addBookSection = document.getElementById('addBookSection');
let deleteBookSection = document.getElementById('deleteBookSection');
let addUserSection = document.getElementById('addUserSection');


issueHead.onclick = () => {
    issueHead.classList.remove('passivebackground');
    isuueSection.classList.remove('d-none');
    isuueSection.classList.add('d-flex');

    returnHead.classList.add('passivebackground');
    returnSection.classList.add('d-none');
    returnSection.classList.remove('d-flex');

    addBookHead.classList.add('passivebackground');
    addBookSection.classList.add('d-none');
    addBookSection.classList.remove('d-flex');

    deleteBookHead.classList.add('passivebackground');
    deleteBookSection.classList.add('d-none');
    deleteBookSection.classList.remove('d-flex');

    addUserHead.classList.add('passivebackground');
    addUserSection.classList.add('d-none');
    addUserSection.classList.remove('d-flex');
}

returnHead.onclick = () => {
    issueHead.classList.add('passivebackground');
    isuueSection.classList.add('d-none');
    isuueSection.classList.remove('d-flex');

    returnHead.classList.remove('passivebackground');
    returnSection.classList.remove('d-none');
    returnSection.classList.add('d-flex');

    addBookHead.classList.add('passivebackground');
    addBookSection.classList.add('d-none');
    addBookSection.classList.remove('d-flex');

    deleteBookHead.classList.add('passivebackground');
    deleteBookSection.classList.add('d-none');
    deleteBookSection.classList.remove('d-flex');

    addUserHead.classList.add('passivebackground');
    addUserSection.classList.add('d-none');
    addUserSection.classList.remove('d-flex');
}

addBookHead.onclick = () => {
    issueHead.classList.add('passivebackground');
    isuueSection.classList.add('d-none');
    isuueSection.classList.remove('d-flex');

    returnHead.classList.add('passivebackground');
    returnSection.classList.add('d-none');
    returnSection.classList.remove('d-flex');

    addBookHead.classList.remove('passivebackground');
    addBookSection.classList.remove('d-none');
    addBookSection.classList.add('d-flex');

    deleteBookHead.classList.add('passivebackground');
    deleteBookSection.classList.add('d-none');
    deleteBookSection.classList.remove('d-flex');

    addUserHead.classList.add('passivebackground');
    addUserSection.classList.add('d-none');
    addUserSection.classList.remove('d-flex');
}

deleteBookHead.onclick = () => {
    issueHead.classList.add('passivebackground');
    isuueSection.classList.add('d-none');
    isuueSection.classList.remove('d-flex');

    returnHead.classList.add('passivebackground');
    returnSection.classList.add('d-none');
    returnSection.classList.remove('d-flex');

    addBookHead.classList.add('passivebackground');
    addBookSection.classList.add('d-none');
    addBookSection.classList.remove('d-flex');

    deleteBookHead.classList.remove('passivebackground');
    deleteBookSection.classList.remove('d-none');
    deleteBookSection.classList.add('d-flex');

    addUserHead.classList.add('passivebackground');
    addUserSection.classList.add('d-none');
    addUserSection.classList.remove('d-flex');
}

addUserHead.onclick = () => {
    issueHead.classList.add('passivebackground');
    isuueSection.classList.add('d-none');
    isuueSection.classList.remove('d-flex');

    returnHead.classList.add('passivebackground');
    returnSection.classList.add('d-none');
    returnSection.classList.remove('d-flex');

    addBookHead.classList.add('passivebackground');
    addBookSection.classList.add('d-none');
    addBookSection.classList.remove('d-flex');

    deleteBookHead.classList.add('passivebackground');
    deleteBookSection.classList.add('d-none');
    deleteBookSection.classList.remove('d-flex');


    addUserHead.classList.remove('passivebackground');
    addUserSection.classList.remove('d-none');
    addUserSection.classList.add('d-flex');
}


let issueForm = document.getElementById('issueForm');
let bookIdIssue = document.getElementById('bookIdIssue');
let userIdIssue = document.getElementById('userIdIssue');
let errorIssue = document.getElementById('errorIssue');

bookIdIssue.onchange = () => {
    errorIssue.textContent = '';
}

userIdIssue.onchange = () => {
    errorIssue.textContent = '';
}

issueForm.onsubmit = () => {
    let body = {
        book_id : bookIdIssue.value,
        user_id : userIdIssue.value
    }

    let url = '/librarian/issueBook';

    fetch(url,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body),
        redirect:"follow"
    })
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        errorIssue.textContent = response.error;
    })
    .catch((error) => {
        console.log(error);
    })

    return false;
}