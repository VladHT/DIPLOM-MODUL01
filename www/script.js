    $('.btn').click(function(){
        $('.box').fadeToggle()
    });
    $('.box').after('<p>Этот пример сделан на jQuery</p>');
    $('.btn').click(function(){
        $('.btn').text('Сделай клик')
    });