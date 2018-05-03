$(ready)

function ready() {
    personBagTab();
    resize();
    siteSector();
    lineCharts();
    linechartstop();
    $(window).resize(resize)
}

function resize() {
    var h = window.innerHeight;
    var headHeight = ($('.mui-bar').height());
    var tabOneHeight = ($('.PersonBag-tab').height());
    var footerHeight = ($('.mui-bar-tab').height());
    var conHeight = h - tabOneHeight - footerHeight - headHeight - 10;
    var tabCon = conHeight - 40;
    $('.mui-tab-one').height(conHeight)
    $('.mui-slider-group').height(tabCon)
}

$(".mui-btn").click(function () {
    alert("Text: " + $(this).text());
})
$(".searContBtn").click(function () {
    $(".personBagSecorCont").hide()
})

/*********************tab切换*************************/
function personBagTab() {
    var html2 = '<div class="bargraph" id="bargraph"></div>';
    var item2 = document.getElementById('item2mobile');
    document.getElementById('slider').addEventListener('slide', function (e) {
        if (e.detail.slideNumber === 1) {
            if (item2.querySelector('.mui-loading')) {
                item2.querySelector('.mui-scroll').innerHTML = html2;
                bargraph();
            }
        } else if (e.detail.slideNumber === 2) {
            if (item3.querySelector('.mui-loading')) {
                item3.querySelector('.mui-scroll').innerHTML = html3;
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

}

/*******************线路筛选*********************/
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
/*********************按照线路查询*************************/
function linechartstop() {
    var chart = new Highcharts.Chart('linechartstop', {
        title: {
            text: '',

        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
        },
        yAxis: {
            title: {
                text: '气温 (°C)'
            }
        },
        credits: {
            enabled: false
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '个'
        },

        series: [{
            name: '五一广场',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '橘子洲',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: '中央广场',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '马连洼北路东口',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
}

/*********************线图*************************/
function lineCharts() {
    var chart = new Highcharts.Chart('linecharts', {
        title: {
            text: '',

        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
        },
        yAxis: {
            title: {
                text: '气温 (°C)'
            }
        },
        credits: {
            enabled: false
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '个'
        },

        series: [{
            name: '五一广场',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '橘子洲',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: '中央广场',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '马连洼北路东口',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
}

/*********************柱状图*************************/
function bargraph(){
    $('#bargraph').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                '站点1',
                '站点2',
                '站点3',
                '站点4',
                '站点5',
                '站点6',
                '站点7',
                '站点8',
                '站点9',
                '站点10',
                '站点11',
                '站点12'
            ],
            crosshair: true
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },

        yAxis: {
            min: 0,
            title: {
                text: '单位 (万个)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                borderWidth: 0
            }
        },
        series: [{
            name: '东京',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            color:"#00c286"
        }]
    });
}









