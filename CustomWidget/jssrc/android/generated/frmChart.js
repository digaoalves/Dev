//Form JS File
function addWidgetsfrmChart() {
    var chartwidgetcustom6850852413 = new customwidgets.chartwidget({
        "id": "chartwidgetcustom6850852413",
        "image": null,
        "isVisible": true,
        "hExpand": true,
        "vExpand": false,
        "ChartType": "ColumnChart",
        "Data": "1000,500,250",
        "ZoomOptionNeeded": true,
        "Names": "2012,2013,2014"
    }, {
        "widgetAlign": 5,
        "containerWeight": 69,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "chartwidget"
    });
    frmChart.add(
    chartwidgetcustom6850852413);
};

function frmChartGlobals() {
    var MenuId = [];
    frmChart = new kony.ui.Form2({
        "id": "frmChart",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBg",
        "addWidgets": addWidgetsfrmChart
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};