//Form JS File
function frmCustomButton_button6850852413757_onClick_seq0(eventobject) {
    frmCustomButton.button6850852413757.text = "Updated the text of Kony button widget";
    kony.print(JSON.stringify(frmCustomButton.buttonwidgetcustom6850852414061));
    if (null != frmCustomButton.buttonwidgetcustom6850852414061) {
        frmCustomButton.buttonwidgetcustom6850852414061.text = "Updated the text for custom button widget";
    }
};

function addWidgetsfrmCustomButton() {
    var hbox207375197358 = new kony.ui.Box({
        "id": "hbox207375197358",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 31,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox207375197358.add();
    var buttonwidgetcustom207375197361 = new customwidgets.buttonwidget({
        "id": "buttonwidgetcustom207375197361",
        "image": null,
        "isVisible": true,
        "hExpand": true,
        "vExpand": false,
        "text": "Custom Button Android"
    }, {
        "widgetAlign": 5,
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "buttonwidget"
    });
    var hbox207375197359 = new kony.ui.Box({
        "id": "hbox207375197359",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 31,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox207375197359.add(
    buttonwidgetcustom207375197361);
    var vbox207375197357 = new kony.ui.Box({
        "id": "vbox207375197357",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox207375197357.add(
    hbox207375197358, hbox207375197359);
    var hbox207375197355 = new kony.ui.Box({
        "id": "hbox207375197355",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 38,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox207375197355.add(
    vbox207375197357);
    var button6850852413757 = new kony.ui.Button({
        "id": "button6850852413757",
        "isVisible": true,
        "text": "Kony Button",
        "skin": "sknBtn",
        "focusSkin": "sknBtnFocus",
        "onClick": frmCustomButton_button6850852413757_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [5, 10, 5, 10],
        "padding": [3, 3, 3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmCustomButton.add(
    hbox207375197355, button6850852413757);
};

function frmCustomButtonGlobals() {
    var MenuId = [];
    frmCustomButton = new kony.ui.Form2({
        "id": "frmCustomButton",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBgg",
        "addWidgets": addWidgetsfrmCustomButton
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