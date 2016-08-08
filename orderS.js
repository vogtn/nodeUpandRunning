server.on('request', getMemCached(req, res) {
  //get session information from memcached
  memcached.getSession(req, getDbInfo(session){
    //get information from db
    db.get(session.user, getWsInfo(userData){
      //some other web service call
      ws.get(req,function(wsData){
        //render page
        page = pageRender(req, session, userData, wsData);
        //output the response
        res.write(page);
      });
    });
  });
});


// USING DECLARED FUNCTIONS
var render = function(wsData) {
  page = pageRender(req, session, userData, wsData);
};

var getWsInfo = function(userData) {
  ws.get(req, render);
};

var getDbInfo = function(session) {
  db.get(session.user, getWsInfo);
};

var getMemCached = function(req, res) {
  memcached.getSession(req, getDbInfo);
};
