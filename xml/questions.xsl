<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<head>
<style rel="stylesheet" type="text/css">
table{width:80%;border:1px solid;background-color:#f8f8ff;margin: 20px auto;font-size: 18px}
th{font-size: 24px;background-color:#4aa3df}
td,tr,th{border:1px solid;padding:2px;vertical-align:top}
span{color:green;padding-left:5px}
#x{color:red}
</style>
</head>
<body>
  <h1 style="text-align:center;">Corrección del cuestionario</h1>
  <table>
    <tr>
      <th>Pregunta realizada</th>
      <th>Opción/es correcta/s</th>
      <th>Respuesta introducida</th>
    </tr>
    <xsl:for-each select="questions/question">      
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td>
       <xsl:for-each select="answer">
        <xsl:choose>
         <xsl:when test="../type = 'text'">
          <span><xsl:value-of select="text()"/></span>
         </xsl:when>
        </xsl:choose>         
       </xsl:for-each>
       <xsl:for-each select="option">
         <xsl:variable name="optposition" select="position()-1"/>
         <xsl:value-of select="$optposition+1"/>: <xsl:value-of select="text()"/>
         <xsl:for-each select="../answer">
          <xsl:variable name="correctanswer" select="text()"/>
          <xsl:if test="$optposition=$correctanswer">
            <span>&#x2713;</span>
          </xsl:if>
         </xsl:for-each><br/><br/>
       </xsl:for-each>
      </td>
      <td>
       <xsl:for-each select="useranswer">
        <xsl:variable name="useranswer" select="text()"/>
        <xsl:value-of select="text()"/>
        <xsl:for-each select="../answer">
          <xsl:choose>
           <xsl:when test="../type = 'text'">
            <xsl:variable name="correctanswertext" select="text()"/>
            <xsl:if test="$useranswer=$correctanswertext">
              <span>&#x2713;</span>
            </xsl:if>
           </xsl:when>
           <xsl:otherwise>
            <xsl:variable name="correctanswer" select="text()+1"/>
           <xsl:if test="$useranswer=$correctanswer">
              <span>&#x2713;</span>
            </xsl:if>
           </xsl:otherwise>
          </xsl:choose>
         </xsl:for-each>
         <!--<xsl:if test="$count=1">
           <span id='x'>&#x2715;</span>
         </xsl:if> -->
         <br/><br/>
       </xsl:for-each>       
     </td>
    </tr>
    </xsl:for-each>
  </table>
 </body>
 </html>
</xsl:template>

</xsl:stylesheet>