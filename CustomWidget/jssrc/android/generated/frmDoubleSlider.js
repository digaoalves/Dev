//Form JS File
function addWidgetsfrmDoubleSlider() {
    var lblResult = new kony.ui.Label({
        "id": "lblResult",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmDoubleSlider.add(
    lblResult);
};

function frmDoubleSliderGlobals() {
    var MenuId = [];
    frmDoubleSlider = new kony.ui.Form2({
        "id": "frmDoubleSlider",
        "title": "Custom Double Slider Widget",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBgg",
        "addWidgets": addWidgetsfrmDoubleSlider
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