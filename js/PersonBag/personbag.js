$(ready)
function ready(){
    personBagTab();
    resize();
    siteSector()
    $(window).resize(resize)
}
function resize(){
    var h = window.innerHeight;
    var headHeight = ($('.mui-bar').height());
    var tabOneHeight = ($('.PersonBag-tab').height());
    var footerHeight = ($('.mui-bar-tab').height());
    var conHeight = h - tabOneHeight -footerHeight -headHeight -10;
    var tabCon = conHeight -40;
    $('.mui-tab-one').height(conHeight)
    $('.mui-slider-group').height(tabCon)
}
$(".mui-btn").click(function(){
    alert("Text: " + $(this).text());
})
$(".searContBtn").click(function(){
    $(".personBagSecorCont").hide()
})

/*********************tab切换*************************/
function personBagTab(){
    var html2 = '<ul class="mui-table-view"><li class="mui-table-view-cell">222222</li></ul>';
    var html3 = '<ul class="mui-table-view"><li class="mui-table-view-cell">3333333-1</li></ul>';
    var item2 = document.getElementById('item2mobile');
    var item3 = document.getElementById('item3mobile');
    document.getElementById('slider').addEventListener('slide', function (e) {
        if (e.detail.slideNumber === 1) {
            if (item2.querySelector('.mui-loading')) {
                setTimeout(function () {
                    item2.querySelector('.mui-scroll').innerHTML = html2;
                }, 500);
            }
        } else if (e.detail.slideNumber === 2) {
            if (item3.querySelector('.mui-loading')) {
                setTimeout(function () {
                    item3.querySelector('.mui-scroll').innerHTML = html3;
                }, 500);
            }
        }
    });
    var sliderSegmentedControl = document.getElementById('sliderSegmentedControl');
    $('.mui-input-group').on('change', 'input', function () {
        if (this.checked) {
            sliderSegmentedControl.className = 'mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-' + this.value;
            //force repaint
            sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
        }
    });
}
/*******************线路筛选*********************/
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