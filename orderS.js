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
