module.exports = function(app) {
  app.get('/',function(req,res){
    res.render('index', {
      title: "MY HOMEPAGE",
      length: 5
    });
  });
    app.get('/login',function(req,res){
      res.render('login', {
          title: "7jo",
          
      });
   });
   app.get('/parkRegister',function(req,res){
    res.render('parkRegister', {
        title: "7jo",
        
    });
 });
 
 app.get('/join',function(req,res){
  res.render('join', {
    title: "7jo"
  });
});
  
app.get('/reservation',function(req,res){
  res.render('reservation', {
    title: "7jo"
  });
});
  
}