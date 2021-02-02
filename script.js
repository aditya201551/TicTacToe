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
    content="X";
    else if(content=="X")
    content="O";
    else
    content="";

    c1.textContent=content;
})

c2.addEventListener("click", function () {
  var content = c2.textContent;
  if (content == "") content = "X";
  else if (content == "X") content = "O";
  else content = "";

  c2.textContent = content;
});

c3.addEventListener("click", function () {
  var content = c3.textContent;
  if (content == "") content = "X";
  else if (content == "X") content = "O";
  else content = "";

  c3.textContent = content;
});

c4.addEventListener("click", function () {
  var content = c4.textContent;
  if (content == "") content = "X";
  else if (content == "X") content = "O";
  else content = "";

  c4.textContent = content;
});

c5.addEventListener("click", function () {
  var content = c5.textContent;
  if (content == "") content = "X";
  else if (content == "X") content = "O";
  else content = "";

  c5.textContent = content;
});

c6.addEventListener("click", function () {
  var content = c6.textContent;
  if (content == "") content = "X";
  else if (content == "X") content = "O";
  else content = "";

  c6.textContent = content;
});

c7.addEventListener("click", function () {
  var content = c7.textContent;
  if (content == "") content = "X";
  else if (content == "X") content = "O";
  else content = "";

  c7.textContent = content;
});

c8.addEventListener("click", function () {
  var content = c8.textContent;
  if (content == "") content = "X";
  else if (content == "X") content = "O";
  else content = "";

  c8.textContent = content;
});

c9.addEventListener("click", function () {
  var content = c9.textContent;
  if (content == "") content = "X";
  else if (content == "X") content = "O";
  else content = "";

  c9.textContent = content;
});