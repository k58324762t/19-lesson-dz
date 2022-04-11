const  buttonGetInform = document.getElementById('get__inform');

const  regectsURL = 'https://jsonplaceholder.typicode.com/photos'
const xhr = new XMLHttpRequest();


xhr.open('GET',regectsURL);
function get() {
  xhr.onload.array.forEach(Array=> {
  console.log(xhr.response);
});
}

buttonGetInform.addEventListener('click',(e)=>{
 e.preventDefault()
get(regectsURL)
})