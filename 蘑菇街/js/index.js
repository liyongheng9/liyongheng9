

/* 答题 */
$(function() {
    $('.answer').find('li').click(function() {
        var index = $(this).parent('ul').data('index');
        $(this).find('.zqbox').fadeIn();
        $(this).find('.zqbox2').fadeIn();
        $(this).find('span').fadeIn();
        $(this).siblings().css('pointer-events','none').addClass('active3');
        $(this).css('pointer-events','none')
        if ($(this).data('result') == 'yes') {
            $(this).addClass('active');
        } else if ($(this).data('result')  == 'no') {
            $(this).addClass('active2');
        }
        $(this).siblings('*[data-result="yes"]').find('.zqbox').fadeIn();
        $(this).siblings('*[data-result="yes"]').find('.zqbox2').fadeIn();
        $(this).siblings('*[data-result="yes"]').removeClass('active2');
        $(this).siblings('*[data-result="yes"]').removeClass('active3');
        $(this).siblings('*[data-result="yes"]').children('span').fadeIn();
        console.log($(this).siblings('*[data-result="yes"]'));
        $('.popups').fadeIn().find('img')[0].src = 'img/pop'+ index +'.png';
        $('.popups').find('.close').click(function() {
            $('.popups').fadeOut()();
        })
    })

    /* 提交按钮 */
    $('.ans-btn').click(function() {
        $('#wrapper').fadeOut();
        $('.choice').fadeIn();
        $('.choice').addClass('activerw');
    })

    var index2 = 0;

    /* 选择人物 */
    $('.choice-nr li').click(function() {
        $('.choice-choice').fadeIn();
        console.log($(this).data('index'));
        index2 = $(this).data('index');
        $('.pic')[0].src = 'img/pic'+index2+'.png';
        if(index2 == 6) {
            index2 = 1;
        }
        console.log($('.mb1'));
        $('.mb1')[0].src = 'img/mb'+index2+'.png';
    })

    /* 选择人物弹出层 */
    $('.p2-9').click(function() {
        $('.choice-choice').fadeOut();
    })
    var num;
    $('.p2-10').click(function() {
        if($('.choice-choice input')[0].value == '') {
            $('.choice-choice input')[0].focus();
        } else {
            $('.choice').fadeOut();
            $('.choice-choice').fadeOut();
            $('.result').fadeIn();
            num = $('.choice-choice input')[0].value;
            /* 结构页 名字 */
            $('.result-nr').find('p')[0].innerText = num;
        }
    })
    

    /* 结构页 */
    $('.btn1').click(function() {
        $('.result').fadeOut();
        $('.choice').fadeIn();
    })
    $('.btn2').click(function() {
        $('.result').fadeOut();
        location.reload();
    })
    $('.btn3').click(function() {
        $('.result-pop').fadeIn();
    })

    $('.result-pop').click(function() {
        $('.result-pop').fadeOut();
    })
})

