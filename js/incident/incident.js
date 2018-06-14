ready()

function ready() {
    muiTab();
    resize();
    IncidentSector();
    siteSector();
    // textDate();

    $(window).resize(resize)
}

function resize() {
    var h = window.innerHeight;
    var headHeight = ($('.mui-bar').height());
    var IncidentsearchSortHeight = ($('.Incident-searchSort').height());
    var searchFastScreenHeight = ($('.Incident-searchFastScreen').height());
    var conHeight = h - headHeight - IncidentsearchSortHeight - searchFastScreenHeight - 70;
    $('.mui-height').height(conHeight)
}
/***************************获取点击内容存储***********************************/
// function textDate(){
//     $(".mui-btn").click(function(){
//         alert($(this).html())
//     })
// }

/***************************当前时间***********************************/

/***************************事件统计头部筛选***********************************/

function IncidentSector() {
    $(".Incident-searchSort li").on("click",function(){
        var index = $(this).index();
        if(!$(this).is(".searchSortActive")){
            $(this).addClass("searchSortActive").siblings().removeClass("searchSortActive");
            $(".hianjdInfo").show();
            $(".searCont").eq(index).show().siblings().hide();
        }else{
            $(".hianjdInfo").hide();
            $(this).removeClass("searchSortActive");
            $(".searCont").eq(index).hide();
        }

    })
}
/***************************事件统计tab切换***********************************/
function muiTab() {
    var html2 = '<div class="bargraph" id="bargraph"></div>';
    var html3 = '<div class="bargraph" id="piechart"></div>';
    var item2 = document.getElementById('item2mobile');
    var item3 = document.getElementById('item3mobile');
    document.getElementById('slider').addEventListener('slide', function (e) {
        if (e.detail.slideNumber === 1) {
            if (item2.querySelector('.mui-loading')) {
                item2.querySelector('.mui-scroll').innerHTML = html2;
                bargraph();
            }
        } else if (e.detail.slideNumber === 2) {
            if (item3.querySelector('.mui-loading')) {
                item3.querySelector('.mui-scroll').innerHTML = html3;
                piechart()
            }
        }
    });
   

}

/****************************************线路筛选******************************************/
function siteSector() {
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
function bargraph() {
    $('#bargraph').highcharts({
        chart: {
            type: 'column'
        },

        title: {
            text: ''
        },
        xAxis: {
            categories: ['站点1', '站点2', '站点3', '站点4', '站点5', '站点6', '站点7']
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '单位（个）'
            }
        },
        subtitle: {
            text: ''
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            },

        },
        credits: {
            enabled: false
        },
        lenged: {
            enabled: false
        },
        series: [{
            name: '正常',
            data: [10, 3, 4, 7, 2, 3, 4],
            color: '#3dc49a',

        }, {
            name: '管制刀具',
            data: [10, 4, 4, 2, 5, 4, 2],
            color:'#f1a63a'
        }, {
            name: '易燃易爆品',
            data: [2, 5, 6, 2, 1, 5, 7],
            color:'#f56060'
        }, {
            name: '炸药',
            data: [3, 0, 4, 4, 3, 6, 8],
            color:'#5cb2f4'

        }, {
            name: '有毒物品',
            data: [3, 0, 4, 4, 3, 9, 9],
            color:'#ff7ec1'

        }, {
            name: '放射性物品',
            data: [3, 0, 4, 4, 3, 20, 3],
            color:'#6f86e5'

        }, {
            name: '其他危险品',
            data: [3, 10, 4, 4, 3, 5, 8],
            color:'#c69186'

        }]

    });
}

/****************************************饼状图******************************************/
function piechart() {

    $('#piechart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '站点名称',
            align: 'left',
            y: 20,
            x: 10,
            style: {
                color: '#333333'
            }

        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                innerSize: '100',
                colors: [
                    '#c18c00',
                    '#ff9c26',
                    '#ff562c',
                    '#e965c3',
                    '#ac2a2d',
                    '#d08ff6',
                    '#32bf88'
                ],
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br> {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '',

            data: [
                ['其他危险品', 20.0],
                ['放射性物品', 15.0],
                ['有毒物品', 5],
                ['炸药', 5],
                ['易燃易爆器', 10.0],
                ['管制刀具', 20.0],
                ['正常', 30.0],
            ]
        }]
    });

}














