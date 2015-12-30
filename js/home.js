/**
 * Created by hh on 2015/12/4.
 */
function afterText() {

    var txt1 = $("<div class='addzone'></div>").html("<div class='del01'><a href='###'>删除</a></div><div class='info1'><label><span class='f-color-r'>* </span>年级：</label><select class='w100'><option></option><option></option><option></option></select><select class='w100'><option></option><option></option><option></option></select><span class='jieshi'>请选择您的年级</span></div><div class='info1'><label><span class='f-color-r'>* </span>学科：</label><select class='w200'><option></option><option></option><option></option></select></div><div class='info2'><label><span class='f-color-r'>* </span>教材：</label><span class='jc'><input type='checkbox'><label>教材1</label><input type='checkbox'><label>教材2</label><input type='checkbox'><label>教材3</label><input type='checkbox'><label>教材4</label></span></div><div class='clear'></div>");     // 通过 jQuery 创建元素


    $(".addzone:last").after(txt1);
}
$(document).on('click', '.del01', function () {
    $(this).parent().remove();
});
$(function () {
    $(".zjtx").hover(function () {

        $(this).siblings('.zjinfo').toggle()


    });
    $(".tagupdown").hover(function () {

        $(this).find('.udlist').toggle()


    });
    //$(".wkimg").mouseover(function () {
    //
    //    $(this).siblings('.wkmask').show()
    //
    //
    //});
    //$(".wkmask").mouseleave(function () {
    //
    //    $(this).hide()
    //
    //
    //});


    $(document).on('click', '.maodian1', function () {
        $("html,body").animate({scrollTop: $(".maodian-a").offset().top - 124 + 'px'}, 500);
    });
    $(document).on('click', '.maodian2', function () {
        $("html,body").animate({scrollTop: $(".maodian-b").offset().top - 124 + 'px'}, 500);
    });
    $(document).on('click', '.maodian3', function () {
        $("html,body").animate({scrollTop: $(".maodian-c").offset().top - 124 + 'px'}, 500);
    });
    $(document).on('click', '.maodian4', function () {
        $("html,body").animate({scrollTop: $(".maodian-d").offset().top - 124 + 'px'}, 500);
    });
    $(document).on('click', '.maodian5', function () {
        $("html,body").animate({scrollTop: $(".maodian-e").offset().top - 124 + 'px'}, 500);
    });
    $(document).on('click', '.maodian6', function () {
        $("html,body").animate({scrollTop: $(".maodian-f").offset().top - 124 + 'px'}, 500);
    });
    $(document).on('click', '.maodiantop', function () {
        $("html,body").animate({scrollTop: $(".top124").offset().top - 124 + 'px'}, 500);
    });


    $(document).on('click', '.shousuo', function () {
        $(this).prev('.notenr').css('height', "auto");
        $(this).addClass('shousuo2')
        $(this).html('收缩全文')

    });
    $(document).on('click', '.shousuo2', function () {
        $(this).prev('.notenr').css('height', "60px");
        $(this).removeClass('shousuo2')
        $(this).html('查看全文')
    });

    $(document).on('click', '.kcseacher01 li', function () {
        $('.kcseacher01 li').removeClass('on')
        $(this).addClass('on')


    });
    $(document).on('click', '.shaixuan li', function () {
        $('.shaixuan li').removeClass('on')
        $(this).addClass('on')


    });

    $(".sj03").hover(function () {

        $(this).find('.jiathisbox').toggle()
        $(this).find('.sjbg').toggle()


    });
    $(".wkpic li").hover(function () {

        $(this).find(".wkpicmask").toggle();
    });



});

$(document).on('click', '.sj01', function () {
    $(this).addClass('sj01a');
    $(this).attr('title','取消点赞');

});
$(document).on('click', '.sj01a', function () {
    $(this).removeClass('sj01a');
    $(this).attr('title','点赞');

});
$(document).on('click', '.sj02', function () {
    $(this).addClass('sj02a');
    $(this).attr('title','取消收藏');

});
$(document).on('click', '.sj02a', function () {
    $(this).removeClass('sj02a');
    $(this).attr('title','点击收藏');

});
$(document).on('click', '.shoucbtn', function () {
    $(this).addClass('shoucbtned');
    $(this).attr({
        'value':'已收藏',
        'title':'点击取消收藏'
    });
});
$(document).on('click', '.shoucbtned', function () {
    $(this).removeClass('shoucbtned');
    $(this).attr({
        'value':'收藏',
        'title':'点击收藏'
    });
});
