const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la app'
    })


    client.on('disconnect', () => {
        console.log('usuario desconectado');
    })

    // escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //para enviar a todos se usa broadcast
        client.broadcast.emit('enviarMensaje', data)

        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'todo mal'
        //     })
        // }


    })

})