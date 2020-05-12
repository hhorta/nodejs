// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);

let getUsuarioById = (id, collback) => {

    let usuario = {
        nombre: 'Harold',
        id
    }

    if (id === 20) {
        collback(`El usuario con ${id} no existe en la bd`)
    } else {
        collback(null, usuario);
    }
}


getUsuarioById(10, (err, usuario) => {

    if (err) {
        return console.log(err);

    }
    console.log('Usuario de bd ', usuario);
})