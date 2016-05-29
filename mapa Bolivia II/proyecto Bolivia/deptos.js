window.addEventListener('load', inicio );

function inicio()
{	
	var ptrPando  = document.getElementById('ptr_Pando');
	var ptrlp     = document.getElementById('ptr_Lp');
	var ptrOruro  = document.getElementById('ptr_Oruro');
	var ptrCbba   = document.getElementById('ptr_Cbba');
	var ptrSanta  = document.getElementById('ptr_Santa');
	var ptrPotosi = document.getElementById('ptr_Potosi');
	var ptrSucre  = document.getElementById('ptr_Sucre');
	var ptrTarija = document.getElementById('ptr_Tarija');
	var ptrBeni   = document.getElementById('ptr_Beni');	  
	    
	ptrPando.addEventListener('mouseover', encima);
	ptrPando.addEventListener('mouseout', fuera);
	  
	ptrlp.addEventListener('mouseover', encima);
	ptrlp.addEventListener('mouseout', fuera);
	  
	ptrOruro.addEventListener('mouseover', encima);
	ptrOruro.addEventListener('mouseout', fuera);
	  
	ptrCbba.addEventListener('mouseover', encima);
	ptrCbba.addEventListener('mouseout', fuera);
	  
	ptrSanta.addEventListener('mouseover', encima);
	ptrSanta.addEventListener('mouseout', fuera);
	  
	ptrPotosi.addEventListener('mouseover', encima);
	ptrPotosi.addEventListener('mouseout', fuera);
	  
	ptrSucre.addEventListener('mouseover', encima);
	ptrSucre.addEventListener('mouseout', fuera);
	  
	ptrTarija.addEventListener('mouseover', encima);
	ptrTarija.addEventListener('mouseout', fuera);
	  
	ptrBeni.addEventListener('mouseover', encima);
	ptrBeni.addEventListener('mouseout', fuera);
}




function encima (evt) 
{

	var  enlace = evt.target;
	var arrayNombre = enlace.id.split("_");
	var imgDepto = document.getElementById(arrayNombre[1]);
	var sinDep="sin"+arrayNombre[1];
	var sd=document.getElementById(sinDep);

	imgDepto.style.visibility="visible";
    imgDepto.style.width="350px";
    imgDepto.style.height="350px";

    sd.style.visibility="visible";
    sd.style.zIndex=2;
    document.getElementById('bolivia').style.visibility="hidden";
    imgDepto.style.zIndex=3;
    imgDepto.style.transform = "scale(1.1)";
}


function fuera (evt)
{
	var enlace = evt.target;
	var arrayNombre = enlace.id.split("_");
	var imgDepto = document.getElementById(arrayNombre[1]);
	var sinDep="sin"+arrayNombre[1];
	var sd=document.getElementById(sinDep);
	sd.style.visibility="hidden";
    sd.style.zIndex=-1;

	document.getElementById('bolivia').style.visibility="visible";
	imgDepto.style.transform = "none";
    imgDepto.style.width="100px";
    imgDepto.style.height="100px";
    imgDepto.style.visibility="hidden";
    imgDepto.style.zIndex=0;
}

