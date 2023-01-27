const navigationList = [
  "Résumé", 
  "Recommendation Letter", 
  "LinkedIn Profile", 
  "Home", 
  "The Wonderboard", 
  "ADH Website Redesign", 
  "DHEN Gallery Redesign", 
  "Illustrator Projects", 
  "Magazine Spreads"];

const navigationLinks = [
  "Mark Villondo - Resume.pdf",
"Letter of Recommendation for Mark Villondo.pdf",
"https://www.linkedin.com/in/mark-villondo/",
"index.html",
"wonderboard.html",
"adh-web-redesign.html",
"dhengalleryredesign.html",
"illustratorprojects.html",
"magazinespreads.html",
"mailto:mvillondo97@gmail.com",
"tel:201-580-1789"
];

var n = "";

for (i=0; i < navigationList.length; i++) 
  {
if (i<=2){

  var a = "<a href='" + navigationLinks[i] + "'><b>" + navigationList[i] + "</b></a>";

  n += a;

if (i==2){var s = "<br>"; n += s;}


}

    else {
    var a = "<a href='" + navigationLinks[i] + "'>" + navigationList[i] + "</a>";

    n += a
  }}
document.getElementById("myNav").innerHTML = n;