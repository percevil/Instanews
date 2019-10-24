
document.addEventListener('DOMContentLoaded', function(){
    
    $('home').on('click', function() {
        $.ajax({
           method: 'GET',
           url: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=iNefxWKuTjrsV6kBGllnT3cwMLAt2670'
        })
        .done(function(data) {
            console.log(data.home);
            // $.each(data, function(key, value) {
            //    $('.results').append("<li>" +  value.main +  "</li>");
                   
              })
              .fail(function() {
                $('.error-log').append('Sorry there was an error.');
             });
              
        });
     });







    
