
  var b1 = document.getElementById("1");
  var b2 = document.getElementById("2");
  var b3 = document.getElementById("3");
  var b4 = document.getElementById("4");
  var b5 = document.getElementById("5");
  var b6 = document.getElementById("6");
  var b7 = document.getElementById("7");
  var b8 = document.getElementById("8");
  var b9 = document.getElementById("9");
  var b0 = document.getElementById("0");
  var onc = document.getElementById("on");
  var sumb = document.getElementById("mas");
  var restb = document.getElementById("menos");
  var multb = document.getElementById("por");
  var divb = document.getElementById("dividido");
  var eqb = document.getElementById("igual");
  var dotb = document.getElementById("punto");
  var signb = document.getElementById("sign");
  var display;


  // Button functions

      function t1() {
        display = document.getElementById("display").firstChild.nodeValue;
        if (String(display) != 0 || String(display).includes(".")){
          if (display.length <= 7) {
          display += String(1);
          document.getElementById("display").innerHTML = display;
          } else {
            document.getElementById("display").innerHTML = display;
            }
        } else {
          display = "";
          display = String(1);
          document.getElementById("display").innerHTML = display;
        }
      };

      function t2() {
        display = document.getElementById("display").firstChild.nodeValue;
        if (String(display) != 0 || String(display).includes(".")){
          if (display.length <= 7) {
          display += String(2);
          document.getElementById("display").innerHTML = display;
          } else {
            document.getElementById("display").innerHTML = display;
            }
        } else {
          display = "";
          display = String(2);
          document.getElementById("display").innerHTML = display;
        }
      };

      function t3() {
        display = document.getElementById("display").firstChild.nodeValue;
        if (String(display) != 0 || String(display).includes(".")){
          if (display.length <= 7) {
          display += String(3);
          document.getElementById("display").innerHTML = display;
          } else {
            document.getElementById("display").innerHTML = display;
            }
        } else {
          display = "";
          display = String(3);
          document.getElementById("display").innerHTML = display;
        }
      };

      function t4() {
        display = document.getElementById("display").firstChild.nodeValue;
        if (String(display) != 0 || String(display).includes(".")){
          if (display.length <= 7) {
          display += String(4);
          document.getElementById("display").innerHTML = display;
          } else {
            document.getElementById("display").innerHTML = display;
            }
        } else {
          display = "";
          display = String(4);
          document.getElementById("display").innerHTML = display;
        }
      };

      function t5() {
        display = document.getElementById("display").firstChild.nodeValue;
        if (String(display) != 0 || String(display).includes(".")){
          if (display.length <= 7) {
          display += String(5);
          document.getElementById("display").innerHTML = display;
          } else {
            document.getElementById("display").innerHTML = display;
            }
        } else {
          display = "";
          display = String(5);
          document.getElementById("display").innerHTML = display;
        }
      };

      function t6() {
        display = document.getElementById("display").firstChild.nodeValue;
        if (String(display) != 0 || String(display).includes(".")){
          if (display.length <= 7) {
          display += String(6);
          document.getElementById("display").innerHTML = display;
          } else {
            document.getElementById("display").innerHTML = display;
            }
        } else {
          display = "";
          display = String(6);
          document.getElementById("display").innerHTML = display;
        }
      };

      function t7() {
        display = document.getElementById("display").firstChild.nodeValue;
        if (String(display) != 0 || String(display).includes(".")){
          if (display.length <= 7) {
          display += String(7);
          document.getElementById("display").innerHTML = display;
          } else {
            document.getElementById("display").innerHTML = display;
            }
        } else {
          display = "";
          display = String(7);
          document.getElementById("display").innerHTML = display;
        }
      };

      function t8() {
        display = document.getElementById("display").firstChild.nodeValue;
        if (String(display) != 0 || String(display).includes(".")){
          if (display.length <= 7) {
          display += String(8);
          document.getElementById("display").innerHTML = display;
          } else {
            document.getElementById("display").innerHTML = display;
            }
        } else {
          display = "";
          display = String(8);
          document.getElementById("display").innerHTML = display;
        }
      };

      function t9() {
        display = document.getElementById("display").firstChild.nodeValue;
        if (String(display) != 0 || String(display).includes(".")){
          if (display.length <= 7) {
          display += String(9);
          document.getElementById("display").innerHTML = display;
          } else {
            document.getElementById("display").innerHTML = display;
            }
        } else {
          display = "";
          display = String(9);
          document.getElementById("display").innerHTML = display;
        }
      };

      function t0() {
        display = document.getElementById("display").firstChild.nodeValue;
        if (String(display) != 0 || String(display).includes(".")){
          if (display.length <= 7) {
          display += String(0);
          document.getElementById("display").innerHTML = display;
          } else {
            document.getElementById("display").innerHTML = display;
            }
        } else {
          display = "";
          display = String(0);
          document.getElementById("display").innerHTML = display;
        }
      };

      function clearAll() {
        display = document.getElementById("display").firstChild.nodeValue;
        display = String(0);
        document.getElementById("display").innerHTML = display;
      };

      function dot() {
        display = document.getElementById("display").firstChild.nodeValue;
        if(String(display).includes(".")) {
          return;
        } else {
          display += ".";
          document.getElementById("display").innerHTML = display;
        }
      };

      function posNeg() {
        display = document.getElementById("display").firstChild.nodeValue;
        if(Math.sign(display) == 1) {
          display = -Math.abs(Number(display));
          display = String(display);
          document.getElementById("display").innerHTML = display;
        } else {
          display = Math.abs(Number(display));
          document.getElementById("display").innerHTML = display;
        }
      };


// ** End button functions

      b1.addEventListener("click", t1);
      b2.addEventListener("click", t2);
      b3.addEventListener("click", t3);
      b4.addEventListener("click", t4);
      b5.addEventListener("click", t5);
      b6.addEventListener("click", t6);
      b7.addEventListener("click", t7);
      b8.addEventListener("click", t8);
      b9.addEventListener("click", t9);
      b0.addEventListener("click", t0);
      onc.addEventListener("click", clearAll);
      dotb.addEventListener("click", dot);
      signb.addEventListener("click", posNeg);


      /*  b2.addEventListener("click", function(){
          display += String(2);
        });
        b3.addEventListener("click", function(){
          display += String(3);
        });
        b4.addEventListener("click", function(){
          display += String(4);
        });
        b5.addEventListener("click", function(){
          display += String(5);
        });
        b6.addEventListener("click", function(){
          display += String(6);
        });
        b7.addEventListener("click", function(){
          display += String(7);
        });
        b8.addEventListener("click", function(){
          display += String(8);
        });
        b9.addEventListener("click", function(){
          display += String(9);
        });


      document.getElementById("display").innerHTML = display
    }
*/
