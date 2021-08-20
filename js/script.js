
$(document).ready(function(){
    //내부링크 이동
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    
    // 이미지 자세히보기 구현
    
    const portPhoto = $('.port-photo')
    const light_box = $('.light_box');

    initDataBinding();


    function initDataBinding(){ // 1. 이미지소스 data속성에 할당 
        portPhoto.find('img').each(function(i){
            let img_src = $(this).attr('src'); 
            $(this).data({'img_src': img_src});
        });
    
    }

    portPhoto.find('img').on('click',function(){ // 2. 클릭시 이미지 크게보기 구현
        light_box.addClass('visible');
        let img_src = $(this).data('img_src');
        console.log('img_src :>> ', img_src);
        light_box.find('img').attr('src',img_src ); // .ight_box에 클릭한 이미지소스 넣기
    });

    light_box.on('click',function(){    //클릭 시 라이트박스 삭제
        $(this).removeClass('visible');
    })



}); //document end



