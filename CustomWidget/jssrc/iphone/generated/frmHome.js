//Form JS File
function frmHome_frmHome_postshow_seq0(eventobject, neworientation) {
    frmChart.destroy();
};

function frmHome_button6850852413757_onClick_seq0(eventobject) {
    frmCustomButton.show();
};

function frmHome_button6850852414148_onClick_seq0(eventobject) {
    frmDoubleSlider.show();
};

function addWidgetsfrmHome() {
    var richtext6850852413746 = new kony.ui.RichText({
        "id": "richtext6850852413746",
        "isVisible": true,
        "text": "Demo exercise for native custom widget feature in Kony 5.5",
        "skin": "sknRchTxt"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var button6850852413757 = new kony.ui.Button({
        "id": "button6850852413757",
        "isVisible": true,
        "text": "Custom Button Widget(Implemented both for iOS & Android)",
        "skin": "sknBtn",
        "focusSkin": "sknBtnFocus",
        "onClick": frmHome_button6850852413757_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [5, 5, 5, 5],
        "padding": [3, 3, 3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button6850852414148 = new kony.ui.Button({
        "id": "button6850852414148",
        "isVisible": true,
        "text": "Custom Double Slider Widget (Currently only for iOS)",
        "skin": "sknBtn",
        "focusSkin": "sknBtnFocus",
        "onClick": frmHome_button6850852414148_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [5, 5, 5, 5],
        "padding": [3, 3, 3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmHome.add(
    richtext6850852413746, button6850852413757, button6850852414148);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBgg",
        "postShow": frmHome_frmHome_postshow_seq0,
        "addWidgets": addWidgetsfrmHome
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