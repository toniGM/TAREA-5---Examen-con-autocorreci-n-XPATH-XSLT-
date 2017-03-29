# TAREA-5-Examen-con-autocorrecion-XPATH-XSLT-

Partiendo del examen de la TAREA 3 del examen de autocorrección se realizan las siguientes variaciones y modificaciones sobre la misma.


1.- Se ha modificado el acceso al objeto xmlDoc dentro de JavaScript para las opciones de tipo select, select múltiple, checkbox y rádio.
    Este acceso se raliza mediante Xpath, y se han modificado las funciones ponerDatosHtml para leer los nodos que salen de la busqueda con Xpath,
    de donde recuperamos el título y la respuesta correcta en cada pregunta del examen y se presenta en la página Html del examen. Todas estas modificaciones las encontramos en la parte del javaScript
    ponerDatosHtml.
    


Cumpliendo con los requisitos de la tarea de esta unidad (UT_5) 
de la asignatura, partiendo de la aplicación web de la unidad anterior, 
se ha modificado el código JavaScript, de tal manera que el acceso y
presentación de los datos contenidos en el archivo XML 
(preguntas, respuestas, etc.) se realiza mediante lenguaje Xpath,
es decir, se accede por la ruta o path a los distintos elementos
que lo componen y aparecen en una página HTML.

1) Modifica l'accés a l'objecte xmlDoc (corresponent al document xml llegit)
per obtenir les opcions de tipus select, select multiple, checkbox i radio.
L'accés s'ha de fer mitjançant Xpath. Modifica les funcions posarDadesHtml
per llegir elsnodes que surten de la cerca amb Xpath. (Nivell: fàcil)
(fins a 3 punts)

2) Crea questions.xsl i modifica el fitxer (o fes una còpia) questions.xml per posar l'enllaç a questions.xsl de tal forma que si obris directament el fitxer questions.xml el navegador fa una transformació simple per presentar les preguntes, totes les opcions i les respostes a una taula. (Nivell: fàcil)
(fins a 3 punts)

3) Inclou codi per forçar a l'usuari a respondre totes les preguntes. (Veure aplicació d'exemple) (Nivell: mitjà)
(fins a 2 punts)

4) Modifica el codi per que l'aplicació faci la correcció personalitzada modificant l'objecte xmlDoc i mostrant-ho amb una XSLT al client. Js farà només el càlcul de la nota final i ho mostrará després dels resultats. (Nivell: difícil)
(fins a 2 punts)

5) Aprofita per millorar la presentació, especialment per donar estil a la taula resultant de la XSLT.
(fins a 2 punts)








