//Form JS File
function frmCustomButton_button6850852413757_onClick_seq0(eventobject) {
    frmCustomButton.button6850852413757.text = "Updated the text of Kony button widget";
    kony.print(JSON.stringify(frmCustomButton.buttonwidgetcustom6850852414066));
    if (null != frmCustomButton.buttonwidgetcustom6850852414066) {
        frmCustomButton.buttonwidgetcustom6850852414066.text = "Updated the text for custom button widget";
    }
};

function addWidgetsfrmCustomButton() {
    var buttonwidgetcustom207375197360 = new customwidgets.buttonwidget({
        "id": "buttonwidgetcustom207375197360",
        "image": null,
        "isVisible": true,
        "hExpand": true,
        "vExpand": false,
        "text": "Custom Button iOS"
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
    hbox207375197358.add(
    buttonwidgetcustom207375197360);
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
    hbox207375197359.add();
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var buttonwidgetcustom20737519737184 = new customwidgets.buttonwidget({
        "id": "buttonwidgetcustom20737519737184",
        "image": null,
        "isVisible": true,
        "hExpand": true,
        "vExpand": false,
        "text": "Custom Button"
    }, {
        "widgetAlign": 5,
        "containerWeight": 6,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "buttonwidget"
    });
    frmCustomButton.add(
    hbox207375197355, button6850852413757, buttonwidgetcustom20737519737184);
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