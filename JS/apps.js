const form = document.querySelector('form');



function sendHttpRequest(method, url, data){
  const promise = new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = function(){
      resolve(xhr.response);
      if(xhr.status===200){
        alert('Your Email has been received. You would be notified once our website is up.')
      }
    }
    xhr.send(JSON.stringify(data));
    
  });
  return promise;
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const inputValue = document.getElementById('email').value;
  sendHttpRequest('POST', 'https://little-differences.firebaseio.com/.json', inputValue);
  form.reset();
})

