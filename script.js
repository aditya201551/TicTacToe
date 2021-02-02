var c1,c2,c3,c4,c5,c6,c7,c8,c9;
var cell=document.querySelectorAll("td");
c1=cell[0];
c2=cell[1];
c3=cell[2];
c4=cell[3];
c5=cell[4];
c6=cell[5];
c7=cell[6];
c8=cell[7];
c9=cell[8];

c1.addEventListener("click",function(){
    var content=c1.textContent;
    if(content=="")
    c1.textContent="X";
    else if(content=="X")
    c1.textContent="O";
    else
    c1.textContent="";
    // check();
});

c2.addEventListener("click", function () {
  var content = c2.textContent;
  if (content == "") c2.textContent = "X";
  else if (content == "X") c2.textContent = "O";
  else c2.textContent = "";
  // check();
});

c3.addEventListener("click", function () {
  var content = c3.textContent;
  if (content == "") c3.textContent = "X";
  else if (content == "X") c3.textContent = "O";
  else c3.textContent = "";
  // check();
});

c4.addEventListener("click", function () {
  var content = c4.textContent;
  if (content == "") c4.textContent = "X";
  else if (content == "X") c4.textContent = "O";
  else c4.textContent = "";

  // check();
});

c5.addEventListener("click", function () {
  var content = c5.textContent;
  if (content == "") c5.textContent = "X";
  else if (content == "X") c5.textContent = "O";
  else c5.textContent = "";

  // check();
});

c6.addEventListener("click", function () {
  var content = c6.textContent;
  if (content == "") c6.textContent= "X";
  else if (content == "X") c6.textContent = "O";
  else c6.textContent = "";

  // check();
});

c7.addEventListener("click", function () {
  var content = c7.textContent;
  if (content == "") c7.textContent = "X";
  else if (content == "X") c7.textContent = "O";
  else c7.textContent = "";

  // check();
});

c8.addEventListener("click", function () {
  var content = c8.textContent;
  if (content == "") c8.textContent = "X";
  else if (content == "X") c8.textContent = "O";
  else c8.textContent = "";
  // check();
});

c9.addEventListener("click", function () {
  var content = c9.textContent;
  if (content == "") c9.textContent = "X";
  else if (content == "X") c9.textContent = "O";
  else c9.textContent = "";
  // check();
});

// function check()
// {
//   if((c1.textContent==c2.textContent&&c2.textContent==c3.textContent)||(c4.textContent==c5.textContent&&c5.textContent==c6.textContent)||(c7.textContent==c8.textContent&&c8.textContent==c9.textContent)||(c1.textContent==c5.textContent&&c5.textContent==c9.textContent)||(c3.textContent==c5.textContent&&c5.textContent==c7.textContent)||(c1.textContent==c4.textContent&&c4.textContent==c7.textContent)||(c2.textContent==c5.textContent&&c5.textContent==c8.textContent)||(c3.textContent==c6.textContent&&c6.textContent==c9.textContent)){
//   alert(c1.textContent+" wins!")
//   window.location.reload();
// }
// }
