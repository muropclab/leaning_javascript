var MAX = 9;

document.write("<table>");
document.write("<tbody>\n");
for(var i=0;i<=MAX;i++){
  if(i==0) {
    document.write("<tr>");
    for(var ii=0; ii<=MAX; ii++) {
      document.write("<td>"+ii+"</td>");
    }
    document.write("</tr>\n");
    continue;
  }

  document.write("<tr>");
  for(var j=0;j<=MAX; j++){
    if(j==0) {
      document.write("<td>"+i+"</td>");
    } else {
      document.write("<td>"+(i*j)+"</td>");
    }
  }
  document.write("</tr>\n");
}
document.write("</tbody>");
document.write("</table>");
