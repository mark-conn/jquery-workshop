$('div.announcement').append('<button></button>'); 

$('.announcement button').on('click', function(){
    $(this).parent().toggleClass('hidden');
});


