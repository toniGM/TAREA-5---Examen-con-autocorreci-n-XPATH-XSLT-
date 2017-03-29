# TAREA-5-Examen-con-autocorrecion-XPATH-XSLT-

Partiendo del examen de autocorrección de la TAREA 3 se realizan las siguientes variaciones y modificaciones sobre la misma.


1) Se ha modificado el acceso al objeto xmlDoc dentro de JavaScript para las opciones de tipo select, select múltiple, checkbox y rádio.
Este acceso se raliza mediante Xpath, y se han modificado las funciones ponerDatosHtml para leer los nodos que salen de la busqueda con Xpath, de donde recuperamos el título y la respuesta correcta en cada pregunta del examen y se presenta en la página Html del examen. Todas estas modificaciones las encontramos en la parte del javaScript ponerDatosHtml.

    
2) Creación del fichero questions.xsl y modificación del fichero questions.xml.
En fichero questions.xml se ha introducido una modificación para que enlace al fichero questions.xsl. Se ha creado este fichero, questións.xsl, a partir del fichero facilitado en la tarea. Tras realizar estas operaciones podemos ver como si abrimos directamente el fichero (questions.xml) en nuestro navegador hace una transformación simple para presentar nuestras preguntas, opciones y respuestas, del examen de autocorrección, en una tabla.


   Se puede ver aquí:
   
   https://rawgit.com/toniGM/TAREA-5-Examen-con-autocorrecion-XPATH-XSLT-/master/xml/questions.xml


3) Se incluye codigo dentro de javaScript para forzar al usuario a responder todas las preguntas.
Se ha introducido la función comprobar, dentro de javaScript, para que se deban responder todas las preguntas antes de poder corregir. En este caso la implementación de dicha función solo me ha sido posible para las tres primeras preguntas, teniendo que ocultar el resto de código al no funcionar, ya que si no, no se podia comprobar la corrección del mismo para poder ver la tabla solicitada en el siguiente punto. Se puede observar la introducción de dicha función al final del javaScript del examen.


4) Modifica el codi per que l'aplicació faci la correcció personalitzada modificant l'objecte xmlDoc i mostrant-ho amb una XSLT al client. Js farà només el càlcul de la nota final i ho mostrará després dels resultats. (Nivell: difícil)
(fins a 2 punts)

5) Aprofita per millorar la presentació, especialment per donar estil a la taula resultant de la XSLT.
(fins a 2 punts)








