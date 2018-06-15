$(document).ajaxStop(function(){
    var loc = window.location.href; // returns the full URL

    if(window.location.href.indexOf("profile" || "payment")!=-1){
        console.log('merda');
        $('body').addClass('my-class');
    }
});