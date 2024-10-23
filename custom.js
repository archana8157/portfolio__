$(document).ready(()=>{
    $('#gform').submit((e)=>{
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "https://script.google.com/macros/s/AKfycbyFrO1NqBStGBPIzEcBRMIG4A7A16tEoobRMT986tHNWEWTqQly0Bo5lUwSxW8s3fSZ0A/exec",
            data: $("#gform").serialize(),
            
          }).done(function (data) {
           alert("form submitted successfully");
           window.location.reload()
          });
    })
})