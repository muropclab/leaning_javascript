"use strict";

var list = [
  "大　吉",
  "中　吉",
  "小　吉",
  "　吉　",
  "半　吉",
  "末　吉",
  "末小吉",
  "　凶　",
  "小　凶",
  "半　凶",
  "末　凶",
  "大　凶"
];
var min = 0;
var max = list.length - 1;
var dt = new Date(); // 日付オブジェクトの取り出し
for (var i = 0; i < 7; i++) {
  // 以下は日付の取得
  var year = dt.getFullYear(); // 年
  var month = dt.getMonth() - 1; // 月
  var day = dt.getDate(); // 日
  var day = year + '/' + (month < 10 ? "0" + month : month) + '/' + (day < 10 ? "0" + day : day);

  Math.seedrandom(day); // 日付を元に乱数を作成
  var kuzi = Math.floor(Math.random() * (max + 1 - min)) + min; // くじを引く

  // 以下は表示用処理
  document.write(day);
  document.write("のおみくじは「");
  document.write(list[kuzi]);
  document.write("」でした。<br>\n");

  dt.setDate(dt.getDate() - 1); // 前の日にずらす
}