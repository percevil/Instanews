document.addEventListener('DOMContentLoaded', function () {

  $('button').on('click', function () {
    $.ajax({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=iNefxWKuTjrsV6kBGllnT3cwMLAt2670'
      })
      .done(function (data) {
        // console.log(data.results[0].abstract);
        console.log(data);

        $.each(data.results, function (key, value) {
            // $('.site-content').append("<li>" + data.title + "</li>");
           $('.site-content').append("<li>"+ value.abstract +"</li>");
           $('.site-content').append(`<img src="`+value.multimedia[2].url+`"></img>`);

           //take image file and make it into a background file for each list item.
           

          //INSIDE .DONE
          })
          //OUTSIDE .DONE
          // .fail(function () {
          //   $('.error-log').append('Sorry there was an error.');
          // });

      });
  });







});