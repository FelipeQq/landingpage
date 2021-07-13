async function postData(url = '', data = {},) {
  const response = await fetch(url, {
    method: 'POST', 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

const formContact = document.querySelector('#form-contact');
const btn = document.querySelector("#button-contact");

formContact.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.querySelector("#name-contact").value;
  const email = document.querySelector("#email-contact").value;
  const phone = document.querySelector("#phone-contact").value;
  const state = document.querySelector("#estado").value;
  const city = document.querySelector("#cidade2").value;
  const text = document.querySelector("#text-contact").value;

  const data = {"fullName": name, email, phone, state, city, "description": text }

  postData('https://api.dev.fretec.app/api/email-contact', data).then(respose => console.log('email enviado'))
})

const formLicensed = document.querySelector('#be-licensed')
const btnLicensed = document.querySelector("#button-licensed");

formLicensed.addEventListener("submit", function(e){
  e.preventDefault();

  const firstName = document.querySelector("#first-name-licensed").value;
  const lastName = document.querySelector("#last-name-licensed").value;
  const email = document.querySelector("#email-licensed").value;
  const phone = document.querySelector("#phone-licensed").value;
  const cellphone = document.querySelector("#cellphone-licensed").value;
  const state = document.querySelector("#estado").value;
  const city = document.querySelector("#cidade").value;
  const text = document.querySelector("#text-licensed").value;

  const data2 = {firstName, lastName, email, phone, cellphone, state, city, "description": text }

  postData('https://api.dev.fretec.app/api/email-licensed', data2).then(respose => console.log('email enviado'))
})