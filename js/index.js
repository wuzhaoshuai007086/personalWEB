$(function(){

    $('.containers').fullpage({
        onLeave: function(index, nextIndex, direction){
            $('.in-left').attr("id","");
            $('.in-right').attr("id","");
            $('.in-top').attr("id","");
            $('.in-bottom').attr("id","");
            $('.in-top2').attr("id","");

        },
        afterLoad: function(anchorLink, index){
            $('.in-left').attr("id","active");
            $('.in-right').attr("id","active2");
            $('.in-top').attr("id","active4");
            $('.in-bottom').attr("id","active3");
            $('.in-top2').attr("id","active5");

        },
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu'

    })
    $(".downs").click(function(){
    	 $.fn.fullpage.moveSectionDown();
    })


}); 