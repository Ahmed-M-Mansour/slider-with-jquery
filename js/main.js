
var src ; 
$('.images img').click(function ()
{
    
    src =   $(this).attr("src") ; 
    $(".main img").attr("src" , src );

    
})