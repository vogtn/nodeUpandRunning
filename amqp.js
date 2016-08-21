var connection = require('amqp').createConnection();

connection.on('ready', function(){
  console.log('Connected to ' + connection.serverProperties.product);
  var e = connection.exchange('up-and-running');

  var q = connection.queue('up-and-running-queue');

  q.on('queueDeclareOk', function(args){
    console.log('Queue opened');
    q.bind(e,'#');

    q.on('queBindOk', function(){
      console.log('Queue bound');

      q.on('basicConsumeOk', function(){
        console.log("Consumer has subscribed, publishing message.");
        e.publish('routingKey', {hello:'world'});
      });
    });

    q.subscribe(function(msg){
      console.log('Message received');
      console.log(msg);
      connection.end();
    });
  });
});
/*
Output:
Connected to RabbitMQ
Queue opened
Queue bound
Consumer has subscribed, publishing message.
Message received:
{ hello: 'world' }
*/
