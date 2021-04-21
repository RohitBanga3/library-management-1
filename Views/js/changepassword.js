let passwordform = document .getElementById('passwordform');
let oldpassword = document.getElementById('oldpassword');
let newpassword = document.getElementById('newpassword');
let error = document.getElementById('error');
console.log(newpassword);

oldpassword.onchange = () => {
    error.textContent = '';
}

newpassword.onchange = () => {
    error.textContent = '';
}

passwordform.onsubmit = () => {
    console.log(newpassword.value)
    let body = {
        old_password : oldpassword.value,
        new_password : newpassword.value 
    }

    let url = '/user/changepassword';

    fetch(url,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body),
        redirect:"follow"
    })
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response);
        error.textContent = response.error;
        if(response.redirected){
            window.location.href = response.url;
        }
    })
    .catch((error) => {
        console.log(error);
    });

    return false;
    //event.preventDefault();


}