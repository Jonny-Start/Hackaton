'use strict'

const users = [
  {
    user: 'daniel7byte@gmail.com',
    pass: 'secret',
    typeUser: 'client'
  },
  {
    user: 'd.mayama@utp.edu.co',
    pass: 'secret',
    typeUser: 'driver'
  }
]

function checkUser (userName, pass, typeUser) {
  return users.some(user => {
    return user.user === userName && user.pass === pass && user.typeUser === typeUser
  })
}

function loginSubmit () {
  const userName = document.getElementById('emailLogin').value
  const pass = document.getElementById('passLogin').value
  const typeUser = document.getElementById('typeUser').value

  if (checkUser(userName, pass, typeUser)) {
    window.location = 'front/manage_tokens.html'
  } else {
    alert('Usuario no encontrado')
  }
}
