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
<<<<<<< HEAD
app.get('/reservationConfirm',function(req,res){
  res.render('reservationConfirm', {
    title: "7jo"
  });
});
=======
  
app.get('/reservation',function(req,res){
  res.render('reservation', {
    title: "7jo"
  });
});
  
>>>>>>> 18c58f43f19dc751530af23e953701cddbe4a289
}