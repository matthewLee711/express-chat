var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
  // socket.emit('createMessage', {
  //   from: 'bob',
  //   text: 'This is the bob'
  // });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//   from: 'bob',
//   text: 'test'
// }, function(data) {
//   console.log(data);
// });

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'bob',
    text: jQuery('[name=message]').val()
  }, function(data) {
    console.log(data);
  });
});