function updateFormFields(amt){

	var pct = document.getElementById("orig_pct_1").value;
	var fee = amt * pct;
	var remaining = amt - fee;
	var secondary_amt = amt/(1-pct);
	var secondary_fee = secondary_amt - amt;

	document.getElementById("initial_1").value = amt;
	document.getElementById("initial_2").value = secondary_amt;
	document.getElementById("remain_1").value = remaining;
	document.getElementById("remain_2").value = amt;
	document.getElementById("orig_amt_2").value = secondary_fee;
	document.getElementById("orig_amt_1").value = fee;
	
	alert("The input value has changed. The new value is: " + amt);

}
