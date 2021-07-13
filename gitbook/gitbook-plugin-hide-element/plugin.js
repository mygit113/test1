require(['gitbook', 'jquery'], function(gitbook, $) {
    var opts;

    gitbook.events.bind('start', function(e, config) {
        opts = config['hide-element'].elements;
    });

    gitbook.events.bind('page.change', function() {
        $.map(opts, function(ele) {
            $(ele).hide();
        });


        var list = $(".book-header").children(":first");
        //list.empty();
        list.append("&nbsp;目录");
        list.css("color","rgb(23,147,214)");
        /* list.after(
             $("<a class=\"btn pull-left\" aria-label=\"\" href=\"#\">下一页</a>")
                 .click(function(){
                     gitbook.navigation.goNext();
                 }));
         list.after(
             $("<a class=\"btn pull-left\" aria-label=\"\" href=\"#\">上一页</a>")
                 .click(function(){
                     gitbook.navigation.goPrev();
                 }));*/

        $(".navigation-prev").html("上一页");
        $(".navigation-next").html("下一页");

        $(".navigation-prev").css("font-size","14px");
        $(".navigation-next").css("font-size","14px");


        var sou1 = $("#book-search-input");
        sou1.remove();

        var line3 = $(".articles");
        line3.css("margin-left","-30px");
        line3.css("padding-left","45px");

        var line =  $(".chapter");
        line.css("width:350px");
        line.css("margin-left","-100px");
        line.css("padding-left","100px");
        line.css("border-bottom","1px solid #D7D0D0");

        var line_top = $(".articles").children("li:first-child");
        line_top.css("border-top","1px solid #D7D0D0");

        var line1 = $(".articles").children("li:last-child");
        line1.css("border-bottom","none");

        var link1 = $(".articles a");
        link1.css("padding-left","25px");

        /* var sou1 = $("input");  //$('input[type=text]')
         sou1.remove();*/

        var sp =$("span");
        sp.css("padding-top","7px");

        var sou2 = $(".summary").children(":first");
        sou2.css("border-bottom","none");


        //改变导航栏
        var tit = $(document).attr('title');
        if(tit){
            $(document).attr('title',tit.substring(0,tit.length-10));
        }


        $('.markdown-section img').before('<br />');
    });
});
