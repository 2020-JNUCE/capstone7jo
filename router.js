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
  
}