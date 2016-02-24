/**
 * Created by hh on 2016/2/17.
 */
$(function () {

    $(".shaixuan li").click(function () {
        $(this).siblings('li').removeClass("on");
        $(this).addClass("on")


    });
    $(".cjbtn").click(function () {
        $(this).siblings().removeClass("cjbtn-on");
        $(this).addClass("cjbtn-on")


    });

});
$(document).on('click', '.starpj li', function () {
    $(this).siblings('.starpj li').removeClass('on')
    $(this).prevAll('.starpj li').addClass('on')
    $(this).addClass('on')
});