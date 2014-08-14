//Form JS File
function frmHome_frmHome_postshow_seq0(eventobject, neworientation) {
    frmChart.destroy();
};

function frmHome_button6850852413757_onClick_seq0(eventobject) {
    frmCustomButton.show();
};

function frmHome_button6850852413747_onClick_seq0(eventobject) {
    frmChart.show();
};

function addWidgetsfrmHome() {
    var richtext6850852413746 = new kony.ui.RichText({
        "id": "richtext6850852413746",
        "isVisible": true,
        "text": "Demo exercise for native custom widget feature in Kony 5.5",
        "skin": "sknRchTxt"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 1],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {});
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
    }, {});
    var button6850852413747 = new kony.ui.Button({
        "id": "button6850852413747",
        "isVisible": true,
        "text": "Custom Chart Widget (Currently only for Android)",
        "skin": "sknBtn",
        "focusSkin": "sknBtnFocus",
        "onClick": frmHome_button6850852413747_onClick_seq0
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
    }, {});
    frmHome.add(
    richtext6850852413746, button6850852413757, button6850852413747);
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