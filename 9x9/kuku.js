var MAX = 9;

document.write("<table>");
for(var i=0;i<=MAX;i++){
  if(i==0) {
    document.write("<thead>");
    document.write("<tr>");
    for(var ii=0; ii<=MAX; ii++) {
      document.write("<th>"+ii+"</th>");
    }
    document.write("</tr>\n");
    document.write("</thead>\n");
    continue;
  }

  document.write("<tbody>\n");
  document.write("<tr>");
  for(var j=0;j<=MAX; j++){
    if(j==0) {
      document.write("<th scope='row'>"+i+"</th>");
    } else {
      document.write("<td>"+(i*j)+"</td>");
    }
  }
  document.write("</tr>\n");
  document.write("</tbody>");
}
document.write("</table>");
