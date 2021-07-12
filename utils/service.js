async function postData(url = '', data = {}) {
    console.log(JSON.stringify(data))
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
}   
  
  postData('https://api.dev.fretec.app/api/email-contact', { 
      "fullName": "Luiz Felipe", 
      "state": "RN", "city": "Natal", 
      "email": "uluizfelipe@gmail.com", 
      "phone": "32239891", 
      "description": "Olá" })

    .then(data => {
      console.log(data, 'email enviado');
    }).catch(error => console.log(error, 'deu ruim'));