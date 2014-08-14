//Form JS File
function frmDoubleSlider_doubleslidercustom6850852414255_updatedMinValueAndMaxValue_seq0(minValue, maxValue) {
    minAndMaxValue.call(this, minValue, maxValue);
};

function addWidgetsfrmDoubleSlider() {
    var doubleslidercustom6850852414255 = new customwidgets.doubleslider({
        "id": "doubleslidercustom6850852414255",
        "image": null,
        "isVisible": true,
        "hExpand": true,
        "vExpand": false,
        "updatedMinValueAndMaxValue": frmDoubleSlider_doubleslidercustom6850852414255_updatedMinValueAndMaxValue_seq0,
        "minimumValue": 0,
        "maximumValue": 100,
        "selectedMinimumValue": 0,
        "selectedMaximumValue": 100,
        "minimumRange": 5,
        "minThumbImageName": "handle.png",
        "maxThumbImageName": "handle.png",
        "trackBackgroundImageName": null,
        "trackHightlightImageName": null
    }, {
        "widgetAlign": 5,
        "containerWeight": 8,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "doubleslider"
    });
    var lblResult = new kony.ui.Label({
        "id": "lblResult",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmDoubleSlider.add(
    doubleslidercustom6850852414255, lblResult);
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
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};