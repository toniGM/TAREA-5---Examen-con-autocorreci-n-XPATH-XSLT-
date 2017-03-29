# TAREA-5-Examen-con-autocorrecion-XPATH-XSLT-

Partiendo del examen de autocorrección de la TAREA 3 se realizan las siguientes variaciones y modificaciones sobre la misma.


#### 1.- Modificación del acceso al objeto xmlDoc dentro de JavaScript para las opciones de tipo select, select múltiple, checkbox y rádio.

Este acceso se raliza mediante Xpath, y se han modificado las funciones ponerDatosHtml para leer los nodos que salen de la busqueda con Xpath, de donde recuperamos el título y la respuesta correcta en cada pregunta del examen y se presenta en la página Html del examen. Todas estas modificaciones las encontramos en la parte del javaScript ponerDatosHtml.

    
#### 2.- Creación del fichero questions.xsl y modificación del fichero questions.xml.

En fichero questions.xml se ha introducido una modificación para que enlace al fichero questions.xsl. Se ha creado este fichero, questións.xsl, a partir del fichero facilitado en la tarea. Tras realizar estas operaciones podemos ver como si abrimos directamente el fichero (questions.xml) en nuestro navegador hace una transformación simple para presentar nuestras preguntas, opciones y respuestas, del examen de autocorrección, en una tabla.


   Se puede ver aquí:
   
   https://rawgit.com/toniGM/TAREA-5-Examen-con-autocorrecion-XPATH-XSLT-/master/xml/questions.xml
   
   
#### 3.- Inclusión de código dentro de javaScript para forzar al usuario a responder todas las preguntas.

Se ha introducido la función comprobar, dentro de javaScript, para que se deban responder todas las preguntas antes de poder corregir. En este caso la implementación de dicha función solo me ha sido posible para las tres primeras preguntas, teniendo que ocultar el resto de código al no funcionar, ya que si no, no se podia comprobar la corrección del mismo para poder ver la tabla solicitada en el siguiente punto. Se puede observar la introducción de dicha función al final del javaScript del examen.


#### 4.- Modificación de código para que la aplicación realice la corrección personalizada.

Se ha modificado el objeto xmlDoc en las funciones de corrección de todas las preguntas, dentro de javaScript, para que estas sean presentadas en una tabla (XSLT) al cliente. En dicha tabla una vez modificado el código de javaScript observamos que nos aparecen por orden las preguntas formuladas en el examen, así como las opciones de respuesta correspondiente a la misma marcado con un visto en verde las que son correctas. También nos aparece en la tabla, en la última columna, la respuesta que el cliente a formulado, marcandose también en verde, o con un visto verde, si es correcta. Al final del cuestionario nos aparece la nota global.


#### 5.- Presentación de la tabla de preguntas, opciones y respuestas.

Se ha mejorado la presentación de la tabla resultante de la XSLT sobre la original. Tambien se le ha dado estilo personalizado acorde con el que estaba implantado en el examen de autocorreción.





Ver el esultado de todo lo realizado en esta tarea:

https://rawgit.com/toniGM/TAREA-5-Examen-con-autocorrecion-XPATH-XSLT-/master/index.html


