

submitHold = (ISBN) => {
    let body = {
        ISBN : ISBN
    }

    let url = '/user/holdBook';


    fetch(url,{
        method : "PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body),
        redirect:"follow"
    })
    .then((response) => {
        //console.log(response);
        return response.json();
        //console.log(response);
    })
    .then((response) => {
        alert(response.error);
    })
    .catch((error) => {
        console.log(error);
    })

    return false;
}