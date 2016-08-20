var redis = require("redis"),
  talkativeClient = redis.createClient();
  pensiveClient = redis.createClient();

pensiveClient.on("subscribe", function (chennel, count){
  talkativeClient.publish(channel, "Welcome to " + channel);
  talkativeClient.publish(channel, "You subscribed to "+ count + " channels!");
});

pensiveClient.on("unsubscribe", function(channel, count) {
  if(count === 0){
    talkativeClient.end();
    pensiveClient.end();
  }
});

pensiveClient.on("message", function (channel, message){
  console.log(channel + ': ' + message);
});

pensiveClient.on("ready", function(){
  pensiveClient.subscribe("quiet channel", "peaceful channel", "noisy channel");
  setTimeout(function(){
    pensiveClient.unsubscribe("quiet channel", "peaceful channel", "noisy channel");
  }, 1000);
});

/*
Output:
quiet channel: Welcome to quiet channel
quiet channel: You subscribed to 1 channels!
peaceful channel: Welcome to peaceful channel
peaceful channel: You subscribed to 2 channels!
noisy channel: Welcome to noisy channel
noisy channel: You subscribed to 3 channels!
*/
