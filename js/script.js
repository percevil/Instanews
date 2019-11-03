document.addEventListener('DOMContentLoaded', function () {

  $('#drop-down').on('change', function () {
    let sectionName = $(this).val().toLowerCase();

    $('.ajax-loader').show();

    $.ajax({
        method: 'GET',
        url: `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=iNefxWKuTjrsV6kBGllnT3cwMLAt2670`,
        dataType: "json"
      })
      .done(function (data) {
        $('header').addClass('loaded');
        $('#page-content').empty();

        const imageFilter = data.results.filter(function (event) {
          if (event.multimedia[4] !== undefined) {
            return true
          } else {
            return false;
          }
        })
        const displayedResults = imageFilter.slice(0, 12)
        $.each(displayedResults, function (key, value) {
          $('#page-content').append(`
             <a class="article-size" href="${value.url}" target="_blank" style="background-image:url(${value.multimedia[4].url})" >
                <p class="description">${value.abstract}</p>
            </a>`)
        })
      })
      .always(function () {
        $('.ajax-loader').hide();
      })
  });
});