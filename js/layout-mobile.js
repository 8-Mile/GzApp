$(ready)
function ready(){

    resize();
    videoImg();
    ajdsector();
    HistoryMediaSearchSort();
    $(window).resize(resize)
}
/*******************高度计算************************/
function resize(){
    var h = window.innerHeight;
    var headHeight = ($('.mui-bar').height());
    var IncidentsearchSortHeight = ($('.Incident-searchSort').height());
    var searchFastScreenHeight = ($('.Incident-searchFastScreen').height());
    var conHeight = h - headHeight -IncidentsearchSortHeight -searchFastScreenHeight - 70;
    $('.mui-height').height(conHeight)
}
/*******************只看图像************************/
function videoImg(){
    $(".searchSort li:last").click(function(){
        $(this).toggleClass("imgActive");
        $('.incident-imgvideo').toggle()
    })
}
/*******************历史视频筛选*******************/
function HistoryMediaSearchSort(){
    $(".Hianjd").click(function(){
        $(this).toggleClass("searchSortActive")
        $(".searchTimeCon").hide()
        $(".searchXianluCon").show()
        $(".hianjdInfo").toggle()
    })
    $(".Histime").click(function(){
        $(this).toggleClass("searchSortActive")
        $(".searchTimeCon").toggle()
        $(".searchXianluCon").hide()
        $(".hianjdInfo").toggle()
    })
}
/*******************安检点筛选*********************/
function ajdsector(){
        $(".nav-tab ").click(function(){
            $(".nav-tab-ul").toggle()
        })
}

/*******************搜索框************************/
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
        // clear and hide result container when we press close
        container.find('.result-container').fadeOut(100, function(){$(this).empty();});
    }
}
function submitFn(obj, evt){
    value = $(obj).find('.search-input').val().trim();
    _html = "Yup yup! Your search text sounds like this: ";
    if(!value.length){
        _html = "Yup yup! Add some text friend :D";
    }
    else{
        _html += "<b>" + value + "</b>";
    }
    $(obj).find('.result-container').html('<span>' + _html + '</span>');
    $(obj).find('.result-container').fadeIn(100);
    evt.preventDefault();
}
/****************************/
