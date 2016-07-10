var hoge ="ンゴ";

for(var i=1;i<=100;i++){
  if(i%3==0 || i%10==3 || (30 <= i && i <= 39)){
    document.write(i+" "+hoge+"<br>\n");
  } else {
    document.write(i+"<br>\n");
  }
}
