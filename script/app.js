var $;
$('#signup-form').on('submit', function(event) {
    var passLength = $(event.currentTarget[1]).val().length;
    var pass1 = $(event.currentTarget[1]).val();
    var pass2 = $(event.currentTarget[2]).val();
    if((passLength >= 10) && (pass1 === pass2)) {
      console.log("success")
    } else {
      event.preventDefault();
      if(passLength < 10) alert("your password isnt long enough");
      else {
        alert("your passwords do not match")
      }
      
    }
});


