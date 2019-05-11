  //Shuffle images
  $('.btn_random').click(function() {
    $('.row').html(
      $('.row .column').sort(function() {
        return Math.random() - 0.5;
      })
    );
  });

  //Hide-unhide text
  $('.btn_hide_unhide_text').click(function() {
    const value = $('.btn_hide_unhide_text')
      .text()
      .trim();

    if (value === 'Hide Text') {
      $('.btn_hide_unhide_text').text('Show Text');
      $('.mytext').hide();
    } else {
      $('.btn_hide_unhide_text').text('Hide Text');
      $('.mytext').show();
    }
  });
  // Hide-unhide image
  $('.btn_hide_unhide_image').click(function() {
    const value = $('.btn_hide_unhide_image')
      .text()
      .trim();

    if (value === 'Hide Images') {
      $('.btn_hide_unhide_image').text('Show Images');
      $('.image').hide();
    } else {
      $('.btn_hide_unhide_image').text('Hide Images');
      $('.image').show();
    }
  });

