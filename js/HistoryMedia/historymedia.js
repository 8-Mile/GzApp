$(ready)
function ready(){
    resize();
    videoImg();
    ajdsector();
    siteSector();
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

function siteSector(){
    var controls = document.getElementById("segmentedControls");
    // var contents = document.getElementById("segmentedControlContents");
    var html = [];
    var i = 1,
        j = 1,
        m = 3, //左侧选项卡数量+1
        n = 21; //每个选项卡列表数量+1
    for (; i < m; i++) {
        html.push('<a class="mui-control-item noBorder " href="#content' + i + '">线路' + i + '</a>');
    }
    controls.innerHTML = html.join('');
    html = [];
    for (i = 1; i < m; i++) {
        html.push('<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">');
        for (j = 1; j < n; j++) {
            html.push('<li class="mui-table-view-cell">第' + i + '个选项卡子项-' + j + '</li>');
        }
        html.push('</ul></div>');
    }

    // contents.innerHTML = html.join('');
    //默认选中第一个
    controls.querySelector('.mui-control-item').classList.add('mui-active');
    // contents.querySelector('.mui-control-content').classList.add('mui-active');

}

