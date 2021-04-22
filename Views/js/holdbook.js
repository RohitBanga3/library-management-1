

submitHold = (book_id) => {
    let body = {
        book_id : book_id
    }

    let url = '/user/holdBook';

    console.log(url);

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
        if(response.redirected){
            window.location.href = response.url;
        }
        //console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
}