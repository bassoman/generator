(function() {
  var App;

  App = {};

  App.init = function() {};

  App.socket = io.connect('http://localhost:3000');

  // A message from the server
  App.socket.on('message', function(message) {
    return $('#sysMessage').text(message.content);
  });

  // send from client to server
  $('#send').click(function(event) {
    event.preventDefault;
    return App.socket.emit('data', {
      myText: $('#myText').val(),
    });
  });

  // uncomment below for each keyup to send to server
  // $('.fld').keyup(function(e) {
  //   return $('#send').click();
  // });

}).call(this);
