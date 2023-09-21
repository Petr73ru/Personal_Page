$('document').ready(function() {
    $('#block2').show();
    $('#block1').hide();
})

$('.btn-next').click(function(){
    $('#block2').hide();
    $('#block1').show();
})

$('.btn-prev').click(function(){
    $('#block1').show();
    $('#block2').hide();
})
