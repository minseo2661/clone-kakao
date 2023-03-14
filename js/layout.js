// JavaScript Document
$(function () { //최초 웹브라우저가 동작하는 순간
    $("#reserve").hide();
    $("#interestShop").hide();
    $("#interestDn").hide();
    $("#back").hide();


    // 마이메뉴버튼 기능
    $("header .mbtn > a").click(function () {
        $(".mymenu").addClass("on");

        $("header .mymenu .closebtn").click(function () {
            $(".mymenu").removeClass("on");
        })
    });


    // 디자이너, 매장 검색창
    $(".dnsearchbox").click(function () {
        $(".dn-search-area, .dn-search").addClass("on");

        $(".dn-search-area .close-btn").click(function () {
            $(".dn-search-area, .dn-search").removeClass("on");
        })
    })


    $(document).ready(function () {
        $.datepicker.setDefaults($.datepicker.regional['ko']);
        $("#datepicker").datepicker({
            dateFormat: "yy/mm/dd",
            minDate: new Date(2022, 0, 1),
            maxDate: "+1y",
            defaultDate: new Date(2022, 4, 1)
        });
    });


    // 컨텐츠1 탭메뉴 기능
    $(document).ready(function () {
        $('.tabconts .cont').first().show();
        $('.tablist > li').first().addClass('on');
    });

    $('.tablist > li').click(function () {
        $('.tablist > li').removeClass('on');
        $(this).addClass('on');
        $('.tabconts .cont').hide();
        $('.tabconts .cont').eq($(this).index()).show();
    })
});

// 마이메뉴 #my 리스트 버튼 기능
let pageFlag = false;

function change(menu) {
    pageFlag = !pageFlag;

    if (pageFlag) {
        $("#my").hide();
        $("#custom").hide();
        $("#back").show();
        $(menu).show();


    } else {
        $("#my").show();
        $("#custom").show();
        $("#back").hide();
        $(menu).hide();
    };
};

function back() {
    $("#reserve").show();
    $("#interestShop").show();
    $("#interestDn").show();
    $("#back").show();
};


// 검색박스 클로즈버튼
function showClose() {
    if ($("#locationSearch, #datepicker, #myTimepicker, #dnSearch").val().length != 0) {
        $("#close").show();
    } else {
        $("#close").hide();
    }
}

function remove() {
    $("#close").hide();
    $("#locationSearch, #datepicker, #myTimepicker, #dnSearch").val("");
}

