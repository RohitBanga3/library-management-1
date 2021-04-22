
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
let fineSection = document.getElementById('fineSection');
let fineHead = document.getElementById('fineHead');
let authorHead = document.getElementById('authorHead');
let authorSection = document.getElementById('authorSection');


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

    fineHead.classList.add('passivebackground');
    fineSection.classList.add('d-none');
    fineSection.classList.remove('d-flex');

    authorHead.classList.add('passivebackground');
    authorSection.classList.add('d-none');
    authorSection.classList.remove('d-flex');
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

    fineHead.classList.add('passivebackground');
    fineSection.classList.add('d-none');
    fineSection.classList.remove('d-flex');

    authorHead.classList.add('passivebackground');
    authorSection.classList.add('d-none');
    authorSection.classList.remove('d-flex');
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

    fineHead.classList.add('passivebackground');
    fineSection.classList.add('d-none');
    fineSection.classList.remove('d-flex');

    authorHead.classList.add('passivebackground');
    authorSection.classList.add('d-none');
    authorSection.classList.remove('d-flex');
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

    fineHead.classList.add('passivebackground');
    fineSection.classList.add('d-none');
    fineSection.classList.remove('d-flex');

    authorHead.classList.add('passivebackground');
    authorSection.classList.add('d-none');
    authorSection.classList.remove('d-flex');
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

    fineHead.classList.add('passivebackground');
    fineSection.classList.add('d-none');
    fineSection.classList.remove('d-flex');

    authorHead.classList.add('passivebackground');
    authorSection.classList.add('d-none');
    authorSection.classList.remove('d-flex');
}

fineHead.onclick = () => {
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


    addUserHead.classList.add('passivebackground');
    addUserSection.classList.add('d-none');
    addUserSection.classList.remove('d-flex');

    fineHead.classList.remove('passivebackground');
    fineSection.classList.remove('d-none');
    fineSection.classList.add('d-flex');

    authorHead.classList.add('passivebackground');
    authorSection.classList.add('d-none');
    authorSection.classList.remove('d-flex');
}

authorHead.onclick = () => {
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


    addUserHead.classList.add('passivebackground');
    addUserSection.classList.add('d-none');
    addUserSection.classList.remove('d-flex');

    fineHead.classList.add('passivebackground');
    fineSection.classList.add('d-none');
    fineSection.classList.remove('d-flex');

    authorHead.classList.remove('passivebackground');
    authorSection.classList.remove('d-none');
    authorSection.classList.add('d-flex');
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
        bookIdIssue.value = '';
        userIdIssue.value = '';
        errorIssue.textContent = response.error;
    })
    .catch((error) => {
        console.log(error);
    })

    return false;
}



let addBookForm = document.getElementById('addBookForm');
let bookISBNAdd = document.getElementById('bookISBNAdd');
let bookTitleAdd = document.getElementById('bookTitleAdd');
let bookcopyAdd = document.getElementById('bookcopyAdd');
let bookshelfAdd = document.getElementById('bookshelfAdd');
let bookrowAdd = document.getElementById('bookrowAdd');
let bookauthorAdd = document.getElementById('bookauthorAdd');
let errorBookAdd = document.getElementById('errorBookAdd');

console.log(errorBookAdd);

bookISBNAdd.onchange = () => {
    errorBookAdd.textContent = '';
}

bookTitleAdd.onchange = () => {
    errorBookAdd.textContent = '';
}

bookcopyAdd.onchange = () => {
    errorBookAdd.textContent = '';
}

bookshelfAdd.onchange = () => {
    errorBookAdd.textContent = '';
}

bookrowAdd.onchange = () => {
    errorBookAdd.textContent = '';
}

bookauthorAdd.onchange = () =>{
    errorBookAdd.textContent = '';
}

addBookForm.onsubmit = () => {
    let body = {
        ISBN : bookISBNAdd.value,
        title : bookTitleAdd.value,
        copy_number : bookcopyAdd.value,
        shelf_id : bookshelfAdd.value,
        row_number : bookrowAdd.value,
        author_id : bookauthorAdd.value
    }

    let url = '/librarian/addBook';

    fetch(url,{
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body),
        redirect:"follow"
    })
    .then((response) => response.json())
    .then((response) => {
        //console.log(response.error);
        bookISBNAdd.value = '';
        bookTitleAdd.value = '';
        bookcopyAdd.value = '';
        bookshelfAdd.value = '';
        bookrowAdd.value = '';
        bookauthorAdd.value = '';
        errorBookAdd.textContent = response.error; 
    })
    .catch((error) => {
        console.log(error);
    })
    return false;
}

let deleteBookForm = document.getElementById('deleteBookForm');
let bookIdDelete = document.getElementById('bookIdDelete');
let errorDelete = document.getElementById('errorDelete');

bookIdDelete.onchange = () => {
    errorDelete.textContent =  '';
}

deleteBookForm.onsubmit = () => {
    let body = {
        book_id : bookIdDelete.value
    }

    let url = '/librarian/deleteBook'

    fetch(url,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body),
        redirect:"follow"
    })
    .then((response) => response.json())
    .then((response) => {
        bookIdDelete.value = '';
        errorDelete.textContent = response.error;
    })
    .catch((error) => {
        console.log(error);
    })

    return false;
}

let returnForm = document.getElementById('returnForm');
let bookIdReturn = document.getElementById('bookIdReturn');
let errorReturn = document.getElementById('errorReturn');

bookIdReturn.onchange = () => {
    errorReturn.textContent = '';
}

returnForm.onsubmit = () => {
    let body = {
        book_id : bookIdReturn.value
    }

    let url = '/librarian/returnBook';

    fetch(url,{
        method: "PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body),
        redirect:"follow"
    })
    .then((response) => response.json())
    .then((response) =>{
        bookIdReturn.value = '';
        errorReturn.textContent = response.error;
    })
    .catch((error) => {
        console.log(error);
    })

    return false;
}

let addUserForm = document.getElementById('addUserForm');
let userIdAdd = document.getElementById('userIdAdd');
let nameAdd = document.getElementById('nameAdd');
let emailAdd = document.getElementById('emailAdd');
let passwordAdd = document.getElementById('passwordAdd');
let studentAdd = document.getElementById('studentAdd');
let phoneAdd = document.getElementById('phoneAdd');
let addressAdd = document.getElementById('addressAdd');
let errorAddUser = document.getElementById('errorAddUser');

userIdAdd.onchange = () => {
    errorAddUser.textContent = '';
}

nameAdd.onchange = () => {
    errorAddUser.textContent = '';
}

emailAdd.onchange =  () => {
    errorAddUser.textContent = '';
}

passwordAdd.onchange = () => {
    errorAddUser.textContent = '';
}

studentAdd.onchange = () => {
    errorAddUser.textContent = '';
}

phoneAdd.onchange = () => {
    errorAddUser.textContent = '';
}
addressAdd.onchange = () => {
    errorAddUser.textContent = '';
}


addUserForm.onsubmit = () => {
    let body = {
        email:emailAdd.value,
        password:passwordAdd.value,
        name:nameAdd.value,
        user_id :  userIdAdd.value,
        phone_number : phoneAdd.value,
        address:addressAdd.value,
        student: studentAdd.value
    }

    let url = '/librarian/addUser';

    fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body),
        redirect:"follow"
    })
    .then((response) => response.json())
    .then((response) =>{
        
        emailAdd.value = '';
        passwordAdd.value = '';
        nameAdd.value = ''
        userIdAdd.value = '';
        phoneAdd.value = '';
        addressAdd.value = '';
        studentAdd.value = '';
        errorAddUser.textContent = response.error;
        
    })
    .catch((error) => {
        console.log(error)
    })

    return false;
}

let checkfineForm = document.getElementById('checkfineForm');
let userIdFine = document.getElementById('userIdFine');
let errorFine = document.getElementById('errorFine');
let clearfineForm = document.getElementById('clearfineForm');


userIdFine.onchange = () => {
    errorFine.textContent = '';
}


checkfineForm.onsubmit = () => {

    let url = '/librarian/checkfine?user_id='+userIdFine.value;


    fetch(url)
    .then((response) => response.json())
    .then((response) => {
        errorFine.textContent = 'The total fine is '+response.error+' rupees';
    })
    .catch((error) => {
        console.log(error);
    })

    return false;
}

clearfineForm.onsubmit = () => {
    let body = {
        user_id : userIdFine.value
    }
    let url = '/librarian/clearfine';

    fetch(url,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body),
        redirect:"follow"
    })
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        errorFine.textContent = response.error;
    })
    .catch((error) => {
        console.log(error);
    })
    return false;
}