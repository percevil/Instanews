
document.addEventListener('DOMContentLoaded', function(){
    
    $('button').on('click', function() {
        $.ajax({
           method: 'GET',
           url: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=iNefxWKuTjrsV6kBGllnT3cwMLAt2670'
        })
        .done(function(data) {
            console.log(data);
            $.each(data.results, function(key, data) {
               $('.header').append("<li>" + data.science +  "</li>");
                   
              })
              .fail(function() {
                $('.error-log').append('Sorry there was an error.');
             });
              
        });
     });







    
