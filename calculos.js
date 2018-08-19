function fcaltotal(vid) {
	var vdividir = vid.id;
	var vfrag = vdividir.split("_");
	
	var vventa = parseFloat(document.getElementById("tventa_" + vfrag[1]).value);
	var vcant = parseFloat(document.getElementById("ncant_" + vfrag[1]).value);

	var vtotal = 0.1;
	vtotal = vventa * vcant;
	var vidtotal = document.getElementById("ttotal_" + vfrag[1]);
	vidtotal.value =  vtotal.toFixed(3);

	fcaltotales();
}

function fcaltotales() {
	var vtotal = 0;
	var i = 0;
	var numfilas = parseInt(document.getElementById("tabletwo").rows.length - 1);
	for (i=0; i <= numfilas; i++) {
		vtotal += parseFloat(document.getElementById("ttotal_" + i).value);
	}

	var vidtotales = document.getElementById("tdtotal");
	vidtotales.innerHTML = vtotal.toFixed(2);
}
