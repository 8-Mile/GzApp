ready()

function ready() {
    muiTab();
    resize();
    IncidentSector();
    siteSector();

    $(window).resize(resize)

}
function resize(){
    var h = window.innerHeight;
    var headHeight = ($('.mui-bar').height());
    var IncidentsearchSortHeight = ($('.Incident-searchSort').height());
    var searchFastScreenHeight = ($('.Incident-searchFastScreen').height());
    var conHeight = h - headHeight -IncidentsearchSortHeight -searchFastScreenHeight - 70;
    $('.mui-height').height(conHeight)
}
/***************************事件统计头部筛选***********************************/
function IncidentSector(){
    $(".site").click(function(){
        $(this).toggleClass("searchSortActive")
        $(".hianjdInfo").toggle()
    })
    $(".time").click(function(){
        $(this).toggleClass("searchSortActive")
        $(".searchTimeCon").toggle()
        $(".searchXianluCon").hide()
        $(".hianjdInfo").toggle()
    })
    $(".event").click(function(){
        $(this).toggleClass("searchSortActive")
        $(".eventCont").toggle()
        $(".searchXianluCon").hide()
        $(".searchXianluCon").hide()
        $(".hianjdInfo").toggle()
    })
    $(".goods").click(function(){
        $(this).toggleClass("searchSortActive")
        $(".goodsCont").toggle()
        $(".searchXianluCon").hide()
        $(".searchXianluCon").hide()
        $(".hianjdInfo").toggle()
    })
}

/***************************事件统计tab切换***********************************/
function muiTab(){
    var html2 = '<div class="bargraph" id="bargraph"></div>';
    var html3 = '<div class="cc">33</div>';
    var item2 = document.getElementById('item2mobile');
    var item3 = document.getElementById('item3mobile');
    document.getElementById('slider').addEventListener('slide', function(e) {
        if (e.detail.slideNumber === 1) {
            if (item2.querySelector('.mui-loading')) {
                setTimeout(function() {
                    item2.querySelector('.mui-scroll').innerHTML = html2;
                }, 500);
            }
        } else if (e.detail.slideNumber === 2) {
            if (item3.querySelector('.mui-loading')) {
                setTimeout(function() {
                    item3.querySelector('.mui-scroll').innerHTML = html3;
                }, 500);
            }
        }
    });

    var sliderSegmentedControl = document.getElementById('sliderSegmentedControl');
    $('.mui-input-group').on('change', 'input', function() {
        if (this.checked) {
            sliderSegmentedControl.className = 'mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-' + this.value;
            //force repaint
            sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
        }
    });
    bargraph();
}

/****************************************线路筛选******************************************/
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
/****************************************柱状图******************************************/
function bargraph(){
    $('#bargraph').highcharts({chart: {
            type: 'column'
        },

        title: {
            text: '按性别划分的水果消费总量'
        },
        xAxis: {
            categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '水果数量'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '小张',
            data: [0, 3, 4, 7, 2],
            stack: 'male'
        }, {
            name: '小潘',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
        }, {
            name: '小彭',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
        }, {
            name: '小王',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
        }]

    });
}














