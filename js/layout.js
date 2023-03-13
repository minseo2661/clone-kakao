// JavaScript Document
$(function(){ //최초 웹브라우저가 동작하는 순간
    $("#reserve").hide();
    $("#interestShop").hide();
    $("#interestDn").hide();
    $("#back").hide();

    $("header .mbtn > a").click(function(){
        $(".mymenu").addClass("on");

        $("header .mymenu .closebtn").click(function(){
            $(".mymenu").removeClass("on");
        })
    });

    $(".dnsearchbox").click(function(){
        $(".dn-search-area, .dn-search").addClass("on");

        $(".dn-search-area .close-btn").click(function(){
            $(".dn-search-area, .dn-search").removeClass("on");
        })
    })

    
    $(document).ready(function(){
        $.datepicker.setDefaults($.datepicker.regional['ko']);
        $("#datepicker").datepicker({
            dateFormat:"yy/mm/dd",
            minDate: new Date(2022, 0, 1),
            maxDate: "+1y",
            defaultDate: new Date(2022, 4, 1)
        });
    });


    $(document).ready(function(){
        $('.tabconts .cont').first().show();
        $('.tablist > li').first().addClass('on');
    });

    $('.tablist > li').click(function(){
        $('.tablist > li').removeClass('on');
        $(this).addClass('on');
        $('.tabconts .cont').hide();
        $('.tabconts .cont').eq($(this).index()).show();
    })
});


let pageFlag = false;

function change (){
    pageFlag = !pageFlag;

    if(pageFlag){
        $("#my").hide();
        $("#custom").hide();
        $("#interestShop").hide();
        $("#back").show();
        $("#reserve").show();
        
        
    } else{
        $("#my").show();
        $("#custom").show();
        $("#back").hide();
        $("#reserve").hide();
        $("#interestDn").hide();
        $("#interestShop").hide();
    };

};



// 검색박스 클로즈버튼
function showClose(){
    if($("#locationSearch, #datepicker, #myTimepicker, #dnSearch").val().length != 0){
        $("#close").show();
    } else{
        $("#close").hide();
    }
}


function remove(){
    $("#close").hide();
    $("#locationSearch, #datepicker, #myTimepicker, #dnSearch").val("");
}

