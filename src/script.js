'use strict'

const users = [{
        user: 'pruebaclient@gmail.com',
        pass: 'secret',
        typeUser: '1'
    },
    {
        user: 'pruebadriver@gmail.com',
        pass: 'secret',
        typeUser: '2'
    }
]

function checkUser(userName, pass, typeUser) {
    return users.some(user => {
        return user.user === userName && user.pass === pass && user.typeUser === typeUser
    })
}

function loginSubmit() {
    const userName = document.getElementById('emailLogin').value
    const pass = document.getElementById('passLogin').value
    const typeUser = document.getElementById('typeUser').value

    if (checkUser(userName, pass, typeUser) && typeUser == 1) {
        window.location = 'front/maps.html';
    } else if (checkUser(userName, pass, typeUser) && typeUser == 2) {
        window.location = 'front/portalConductor.html';
    } else {
        alert('Usuario no encontrado');
    }
}