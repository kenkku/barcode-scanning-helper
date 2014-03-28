var socket = io.connect('/');
var requestId = window.location.pathname.split('/', 3)[2];

socket.on('connect', function () {
    socket.emit('id', requestId);
})

socket.on('code', function (data) {
    console.log(data);
});

socket.on('codes', function (data) {
    console.log(data);
});
