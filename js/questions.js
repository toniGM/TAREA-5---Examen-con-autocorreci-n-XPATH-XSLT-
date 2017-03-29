var formElement=null;
var textoSecreto1=null;
var textoSecreto2=null;
var respuestaSelect1=null;
var respuestaSelect2=null;
var respuestasCheckbox1 = [];
var respuestasCheckbox2 = [];
var respuestasMultiple1 = [];
var respuestasMultiple2 = [];
var respuestasRadio1 = [];
var respuestasRadio2 = [];
var nota = 0.0;  
var xmlDoc = null;
var xslDoc = null;

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

 //CORREGIR al apretar el botón
 formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
   //inicializar();     he quitado inicializar
   if (comprobar()){
    corregirText1();
    corregirSelect1();
    corregirCheckbox1();
	corregirMultiple1();
	corregirRadio1();
	corregirText2();
    corregirSelect2();
    corregirCheckbox2();
	corregirMultiple2();
	corregirRadio2();
    presentarNota();
   }
   return false;
 }
 
 //LEER XML de xml/questions.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "xml/questions.xml", true); 
 xhttp.send();
 
 //LEER XSL de xml/questions.xml
 var xhttp2 = new XMLHttpRequest();
 xhttp2.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   xslDoc=this.responseXML;
  }
 };
 xhttp2.open("GET", "xml/questions.xsl", true);   
 xhttp2.send();
}

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/questions.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
 xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
 
  //TEXT 1 
 var tituloInput1=xmlDoc.getElementsByTagName("title")[0].innerHTML;
 ponerDatosInputHtml1(tituloInput1);
 textoSecreto1=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
 
  //SELECT1
 var tituloSelect1=xmlDoc.getElementsByTagName("title")[1].innerHTML;
 var xpath="/questions/question[@id='p002']/option";
 var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
 ponerDatosSelectHtml1(tituloSelect1,nodesSelect); 
 respuestaSelect1=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);

  //CHECKBOX1
 var tituloCheckbox1 = xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var xpath="/questions/question[@id='p003']/option";
 var nodesCheckbox = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
 ponerDatosCheckboxHtml1(tituloCheckbox1,nodesCheckbox);
 var nres = xmlDoc.getElementById("p003").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox1[i]=xmlDoc.getElementById("p003").getElementsByTagName("answer")[i].innerHTML;
 }
 
  //MULTI1
 var tituloMultiple1=xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var xpath="/questions/question[@id='p004']/option";
 var nodesMultiple = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
 ponerDatosMultipleHtml1(tituloMultiple1,nodesMultiple);
 var nres = xmlDoc.getElementById("p004").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasMultiple1[i]=xmlDoc.getElementById("p004").getElementsByTagName("answer")[i].innerHTML;
 }
 
   //RADIO1
 var tituloRadio = xmlDoc.getElementsByTagName("title")[4].innerHTML;
 var xpath="/questions/question[@id='p005']/option";
 var nodesRadio = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
 ponerDatosradio1(tituloRadio,nodesRadio);
 var nres = xmlDoc.getElementById("p005").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasRadio1[i]=xmlDoc.getElementById("p005").getElementsByTagName("answer")[0].innerHTML;
 }

   //TEXT 2
 var tituloInput2=xmlDoc.getElementsByTagName("title")[5].innerHTML;
 ponerDatosInputHtml2(tituloInput2);
 textoSecreto2=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);

  //SELECT2
 var tituloSelect2=xmlDoc.getElementsByTagName("title")[6].innerHTML;
 var xpath="/questions/question[@id='p007']/option";
 var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
 ponerDatosSelectHtml2(tituloSelect2,nodesSelect); 
 respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);

  //CHECKBOX2
 var tituloCheckbox2 = xmlDoc.getElementsByTagName("title")[7].innerHTML;
 var xpath="/questions/question[@id='p008']/option";
 var nodesCheckbox = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
 ponerDatosCheckboxHtml2(tituloCheckbox2,nodesCheckbox);
 var nres = xmlDoc.getElementById("p008").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox2[i]=xmlDoc.getElementById("p008").getElementsByTagName("answer")[i].innerHTML;
 }

  //MULTI2
 var tituloMultiple2=xmlDoc.getElementsByTagName("title")[8].innerHTML;
 var xpath="/questions/question[@id='p009']/option";
 var nodesMultiple = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
 ponerDatosMultipleHtml2(tituloMultiple2,nodesMultiple);
 var nres = xmlDoc.getElementById("p009").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasMultiple2[i]=xmlDoc.getElementById("p009").getElementsByTagName("answer")[i].innerHTML;
 }
 
  //RADIO2
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var tituloRadio = xmlDoc.getElementsByTagName("title")[9].innerHTML;
 var xpath="/questions/question[@id='p010']/option";
 var nodesRadio = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
 ponerDatosradio2(tituloRadio,nodesRadio);
 var nres = xmlDoc.getElementById("p010").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasRadio2[i]=xmlDoc.getElementById("p010").getElementsByTagName("answer")[0].innerHTML;
 }
}

//****************************************************************************************************
//implementación de la corrección

function corregirText1(){
  var s=formElement.elements[0].value;     
  if (s==textoSecreto1) {
   darRespuestaHtml("P1: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P1: Incorrecto");
  var useranswer = xmlDoc.createElement("useranswer");   
  useranswer.innerHTML = s;
  xmlDoc.getElementById("p001").appendChild(useranswer);
}

function corregirText2(){
  var s=formElement.elements[5].value;     
  if (s==textoSecreto2) {
   darRespuestaHtml("P6: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P6: Incorrecto");
  var useranswer = xmlDoc.createElement("useranswer");   
  useranswer.innerHTML = s;
  xmlDoc.getElementById("p006").appendChild(useranswer);
}

function corregirSelect1(){
  var sel = formElement.elements[1];  
  if (sel.selectedIndex-1==respuestaSelect1) { 
   darRespuestaHtml("P2: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P2: Incorrecto");
  var useranswer = xmlDoc.createElement("useranswer");   
  useranswer.innerHTML = sel.selectedIndex;
  xmlDoc.getElementById("p002").appendChild(useranswer);
}

function corregirSelect2(){
  var sel = formElement.elements[6];  
  if (sel.selectedIndex-1==respuestaSelect2) { 
   darRespuestaHtml("P7: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P7: Incorrecto");
  var useranswer = xmlDoc.createElement("useranswer");   
  useranswer.innerHTML = sel.selectedIndex;
  xmlDoc.getElementById("p007").appendChild(useranswer);
}

function corregirCheckbox1(){
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color.length; i++) {  
   if (f.color[i].checked) {
	var useranswer = xmlDoc.createElement("useranswer");   
    useranswer.innerHTML = i+1;
    xmlDoc.getElementById("p003").appendChild(useranswer);
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox1.length; j++) {
     if (i==respuestasCheckbox1[j]) {escorrecta[i]=true;} //he puesto los corchetes..
    }
    if (escorrecta[i]) {
     nota +=1.0/respuestasCheckbox1.length;    
     darRespuestaHtml("P3: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasCheckbox1.length;     
     darRespuestaHtml("P3: "+i+" incorrecta");
    }   
   } 
  }
}

function corregirCheckbox2(){
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color.length; i++) {  
   if (f.color[i].checked) {
	var useranswer = xmlDoc.createElement("useranswer");   
    useranswer.innerHTML = i+1;
    xmlDoc.getElementById("p008").appendChild(useranswer);
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox2.length; j++) {
     if (i==respuestasCheckbox2[j]) escorrecta[i]=true;
    }
    if (escorrecta[i]) {
     nota +=1.0/respuestasCheckbox2.length;    
     darRespuestaHtml("P8: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasCheckbox2.length;     
     darRespuestaHtml("P8: "+i+" incorrecta");
    }   
   } 
  }
}

function corregirMultiple1(){
  var mySel = formElement.elements[3];  
  if (mySel.selectedIndex==respuestasMultiple1) {
   darRespuestaHtml("P4: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P4: Incorrecto");
  var useranswer = xmlDoc.createElement("useranswer");   
  useranswer.innerHTML = mySel.selectedIndex;
  xmlDoc.getElementById("p004").appendChild(useranswer);
}

function corregirMultiple2(){
  var mySel = formElement.elements[8];  
  if (mySel.selectedIndex==respuestasMultiple2) {
   darRespuestaHtml("P9: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P9: Incorrecto");
  var useranswer = xmlDoc.createElement("useranswer");   
  useranswer.innerHTML = mySel.selectedIndex;
  xmlDoc.getElementById("p009").appendChild(useranswer);
}

function corregirRadio1(){
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.radio1.length; i++) {  
   if (f.radio1[i].checked) {  
	var useranswer = xmlDoc.createElement("useranswer");   
    useranswer.innerHTML = i+1;
    xmlDoc.getElementById("p005").appendChild(useranswer);  
    escorrecta[i]=false;     
    for (j = 0; j < respuestasRadio1.length; j++) {
     if (i==respuestasRadio1[j]) {escorrecta[i]=true;}
    }
    if (escorrecta[i]) {
     nota +=1.0/respuestasRadio1.length;    
     darRespuestaHtml("P5: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasRadio1.length;     
     darRespuestaHtml("P5: "+i+" incorrecta");
    }   
   } 
  }
}

function corregirRadio2(){
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.radio2.length; i++) {  
   if (f.radio2[i].checked) {  
	var useranswer = xmlDoc.createElement("useranswer");   
    useranswer.innerHTML = i+1;
    xmlDoc.getElementById("p010").appendChild(useranswer); 
    escorrecta[i]=false;     
    for (j = 0; j < respuestasRadio2.length; j++) {
     if (i==respuestasRadio2[j]) escorrecta[i]=true;
    }
    if (escorrecta[i]) {
     nota +=1.0/respuestasRadio2.length;    
     darRespuestaHtml("P10: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasRadio2.length;     
     darRespuestaHtml("P10: "+i+" incorrecta");
    }   
   } 
  }
}

//****************************************************************************************************
// poner los datos recibios en el HTML
function ponerDatosInputHtml1(t){
 document.getElementById("tituloInput1").innerHTML = t;
}

function ponerDatosSelectHtml1(t,nodes){
  document.getElementById("tituloSelect1").innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  var result = nodes.iterateNext();
  i=0;
  while (result) {
   var option = document.createElement("option");
   option.text = result.innerHTML;
   option.value=i+1; i++;
   select.options.add(option);
   result = nodes.iterateNext();
  }  
}

function ponerDatosCheckboxHtml1(t,nodes){
 var checkboxContainer=document.getElementById('checkboxDiv1');
 document.getElementById('tituloCheckbox1').innerHTML = t;
  var result = nodes.iterateNext();
  i=0;
  while (result) {
   var input = document.createElement("input");
   var label = document.createElement("label");   
   label.innerHTML = result.innerHTML;
   label.setAttribute("for", "color_"+i);
   input.type="checkbox";
   input.name="color";
   input.id="color_"+i; i++;
   checkboxContainer.appendChild(input);
   checkboxContainer.appendChild(label);
   checkboxContainer.appendChild(document.createElement("br"));
   result = nodes.iterateNext();
  }    
}

function ponerDatosMultipleHtml1(t,nodes){
  document.getElementById("tituloMultiple1").innerHTML=t;
  var select = document.getElementsByTagName("select")[1];
  var result = nodes.iterateNext();
  i=0;
  while (result) {
   var option = document.createElement("option");
   option.text = result.innerHTML;
   option.value=i+1; i++;
   select.options.add(option);
   result = nodes.iterateNext();
  }  
}

function ponerDatosradio1(t,nodes){
 var radioContainer=document.getElementById('tituloRadio1');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 radioContainer.appendChild(h3); 
  var result = nodes.iterateNext();
  i=0;
  while (result)  { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML = result.innerHTML;
    label.setAttribute("for", "radio1_"+i);
    input.type="radio";
    input.name="radio1";
    input.id="radio1_"+i; i++;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
	radioContainer.appendChild(document.createElement("br"));
	result = nodes.iterateNext();
 }  
}

function ponerDatosInputHtml2(t){
 document.getElementById("tituloInput2").innerHTML = t;
}

function ponerDatosSelectHtml2(t,nodes){
  document.getElementById("tituloSelect2").innerHTML=t;
  var select = document.getElementsByTagName("select")[2];
  var result = nodes.iterateNext();
  i=0;
  while (result) {
   var option = document.createElement("option");
   option.text = result.innerHTML;
   option.value=i+1; i++;
   select.options.add(option);
   result = nodes.iterateNext();
  }  
}

function ponerDatosCheckboxHtml2(t,nodes){
 var checkboxContainer2=document.getElementById('checkboxDiv2');
 document.getElementById('tituloCheckbox2').innerHTML = t;
  var result = nodes.iterateNext();
  i=0;
  while (result) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML = result.innerHTML;
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i; i++; 
    checkboxContainer2.appendChild(input);
    checkboxContainer2.appendChild(label);
    checkboxContainer2.appendChild(document.createElement("br"));
	result = nodes.iterateNext();
 }  
}

function ponerDatosMultipleHtml2(t,nodes){
  document.getElementById("tituloMultiple2").innerHTML=t;
  var select = document.getElementsByTagName("select")[3];
  var result = nodes.iterateNext();
  i=0;
  while (result) {
   var option = document.createElement("option");
   option.text = result.innerHTML;
   option.value=i+1; i++;
   select.options.add(option);
   result = nodes.iterateNext();
  }  
}

function ponerDatosradio2(t,nodes){
 var radioContainer2=document.getElementById('tituloRadio2');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 radioContainer2.appendChild(h3); 
 var result = nodes.iterateNext();
  i=0;
  while (result) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=result.innerHTML;
    label.setAttribute("for", "radio2_"+i);
    input.type="radio";
    input.name="radio2";
    input.id="radio2_"+i; i++;    
    radioContainer2.appendChild(input);
    radioContainer2.appendChild(label);
	radioContainer2.appendChild(document.createElement("br"));
	result = nodes.iterateNext();
 }  
}

//****************************************************************************************************
/*Gestionar la presentación de las respuestas*/
function darRespuestaHtml(r){
  var p = document.createElement("p");
  p.innerHTML=r;
  document.body.appendChild(p);
}

function presentarNota(){
  //bloquear formulario (recargar para volver a empezar)
  document.body.innerHTML="";
  document.body.style.display = "block";
  //Código transformación xslt con xmlDoc y xslDoc
  if (document.implementation && document.implementation.createDocument){
    xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xslDoc);
    resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
    document.body.appendChild(resultDocument);
  }
  darRespuestaHtml("<h3>Nota: "+nota+" puntos sobre 10</h3>");
  document.getElementById("h1").focus();
}

//quitamos la funcion inicializar
/*function inicializar(){
   document.getElementById('resultadosDiv').innerHTML = "";
   nota=0.0;
}
*/

//Comprobar que se han introducido datos en el formulario
function comprobar(){
   
   
   var f=formElement;
   var checked=false;
   for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
      if (f.color[i].checked) checked=true;
   }
 //recomendamos focus para input y select "normal", scrollIntoView para el título de select múltiple, radio y checkbox  
   
   if (f.elements[0].value=="") {  
    f.elements[0].focus();
    alert("Escribe algo en la pregunta 1");
    return false;
	} 
   
   if (f.elements[1].selectedIndex==-0) {
    f.elements[1].focus();
    alert("Selecciona una opción select de la pregunta 2");
    return false;
	} 
   
   if (!checked) {    
    document.getElementsByTagName("h3")[2].scrollIntoView(); //cambio focus por scrollintoview
    alert("Selecciona una opción del checkbox de la pregunta 3");
    return false;
	} 
	
   /*if (f.elements[3].selectedIndex==-0) {
    f.elements[3].focus();
    alert("Selecciona una opción selectmultiple de la pregunta 4");
    return false;
	}
	
   if (!checked) {    
    f.elements[4].scrollIntoView(); //cambio focus por scrollintoview
    alert("Selecciona una opción del radio de la pregunta 5");
    return false;
	} 
	
	
   if (f.elements[5].value=="") {  
    f.elements[5].focus();
    alert("Escribe algo en la pregunta 6");
    return false;
	} 
   
   if (f.elements[6].selectedIndex==null || f.elements[6].selectedIndex==0) {
    f.elements[6].focus();
    alert("Selecciona una opción select de la pregunta 7");
    return false;
	} 
   
   if (!checked) {    
    document.getElementsByTagName("h3")[7].scrollIntoView(); //cambio focus por scrollintoview
    alert("Selecciona una opción del checkbox de la pregunta 8");
    return false;
	}*/
	
   else  return true;  
   
   
   
 
}