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
        $('#site-content').empty();

        const imageFilter = data.results.filter(function (event) {
          if (event.multimedia[4] !== undefined) {
            return true
          } else {
            return false;
          }
        })
        const displayedResults = imageFilter.slice(0, 12)
        $.each(displayedResults, function (key, value) {
          $('#site-content').append(`
            <a href="${value.url}" target="_blank">
              <article class="article-size" style="background-image:url(${value.multimedia[4].url})">
                <p class="description">${value.abstract}</p>
              </article>
            </a>`);
        })
      })
      .always(function () {
        $('.ajax-loader').hide();
      })
  });
});