package com.konylabs.customwidget;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;

import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;
import com.konylabs.api.ui.KonyCustomWidget;

public class N_customwidgets extends JSLibrary {

 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[2];
 libs[0] = new chartwidget();
 libs[1] = new buttonwidget();
 return libs;
 }
		
		public N_customwidgets(){
	}
	public String getNameSpace() {
		return "customwidgets";
	}

static class chartwidget extends JSLibrary {
 
	String[] methods = { };
 String[] props = { "ChartType", "Data", "ZoomOptionNeeded", "Names" };
 private static Hashtable<String, Integer> propertyTypeMappings = null;
 public Object createInstance(final Object[] properties, long jsobject) {
 if(propertyTypeMappings == null) {
 propertyTypeMappings = new Hashtable<String, Integer>();
 propertyTypeMappings.put("ChartType",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 propertyTypeMappings.put("Data",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 propertyTypeMappings.put("ZoomOptionNeeded",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_BOOLEAN);
 propertyTypeMappings.put("Names",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 
 }

 KonyCustomWidget widget = new com.customwidgets.ChartWidget();
 widget.initProperties(properties,jsobject,propertyTypeMappings);
 return widget;
 }
 
	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "chartwidget";
	}
	public String[] getProperties() {
		// TODO Auto-generated method stub
		return props;
	}
	/*
	 * return should be status(0 and !0),address
	 */
 
}
 
static class buttonwidget extends JSLibrary {
 
	String[] methods = { };
 String[] props = { "text", "onClick" };
 private static Hashtable<String, Integer> propertyTypeMappings = null;
 public Object createInstance(final Object[] properties, long jsobject) {
 if(propertyTypeMappings == null) {
 propertyTypeMappings = new Hashtable<String, Integer>();
 propertyTypeMappings.put("text",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 propertyTypeMappings.put("onClick",KonyCustomWidget.NATIVE_DATA_TYPE_FUNCTION);
 
 }

 KonyCustomWidget widget = new com.customwidgets.ButtonWidget();
 widget.initProperties(properties,jsobject,propertyTypeMappings);
 return widget;
 }
 
	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "buttonwidget";
	}
	public String[] getProperties() {
		// TODO Auto-generated method stub
		return props;
	}
	/*
	 * return should be status(0 and !0),address
	 */
 
}

};
