const regectssURL = "https://jsonplaceholder.typicode.com/phjjotos"

const xhr = new XMLHttpRequest()

xhr.open('POST',regectssURL);



xhr.responseType = 'json'
xhr.onload = function(){
    console.log(xhr.response);
    if (xhr.response>= 400) {
        console.error('Erorr: '+xhr.response);
    }
  
};
  xhr.send()