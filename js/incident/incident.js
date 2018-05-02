$(ready)
function ready() {
    muiTab();
    resize();
    IncidentSector;
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

}

/***************************事件统计tab切换***********************************/
function muiTab(){
    var html2 = '<ul class="mui-table-view"><li class="mui-table-view-cell">222222</li></ul>';
    var html3 = '<ul class="mui-table-view"><li class="mui-table-view-cell">3333333-1</li></ul>';
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
}