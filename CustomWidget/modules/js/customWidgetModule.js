function onClickForButton ()
{
	kony.print ("Entering into onClickForButton");
	alert ("This alert is from onClickForButton");
	kony.print ("Exiting out of onClickForButton");
}

function minAndMaxValue(min,max)
{ 
 	frmDoubleSlider.lblResult.text = " Your Selected Values are, MIN : " + Math.round(min) + " & MAX : " + Math.round(max);
}