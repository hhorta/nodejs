var socket = io();
// on escucha informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

//emit envian informacion

socket.emit('enviarMensaje', {
    usuario: 'Harold',
    mensaje: 'Hola'
}, function(resp) {
    console.log('respuesta server', resp);
})

socket.on('enviarMensaje', function(resp) {
    console.log('servidor ', resp);

})