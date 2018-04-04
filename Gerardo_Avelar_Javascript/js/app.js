// Global variables //

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
  var sumv = false;
  var restv = false;
  var multv = false;
  var divv = false;
  var equalto = false;
  var signcheck = true;
  var value1;
  var value2;
  var result;
  var display;

// ** Global variables ** //



  // Button functions //

      function t1() {

        if (equalto == true){
          display = 0
          display = "";
          display = String(1);
          document.getElementById("display").innerHTML = display;
          equalto = false;
          value1 = 0;
          value2 = 0;
        } else {
          if(sumv == true || restv == true || multv == true || divv == true){
            if (String(display) != 0 || String(display).includes(".")){
              if (display.length <= 7) {
                display += String(1);
                document.getElementById("display").innerHTML = display;
              } else {
                document.getElementById("display").innerHTML = display;
              }
            } else {
              display = String(1);
              document.getElementById("display").innerHTML = display;
            }
          } else {
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
          }
        }
      };

      function t2() {

        if (equalto == true){
          display = 0
          display = "";
          display = String(2);
          document.getElementById("display").innerHTML = display;
          equalto = false;
          value1 = 0;
          value2 = 0;
        } else {
          if(sumv == true || restv == true || multv == true || divv == true){
            if (String(display) != 0 || String(display).includes(".")){
              if (display.length <= 7) {
                display += String(2);
                document.getElementById("display").innerHTML = display;
              } else {
                document.getElementById("display").innerHTML = display;
              }
            } else {
              display = String(2);
              document.getElementById("display").innerHTML = display;
            }
          } else {
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
          }
        }
      };

      function t3() {

        if (equalto == true){
          display = 0
          display = "";
          display = String(3);
          document.getElementById("display").innerHTML = display;
          equalto = false;
          value1 = 0;
          value2 = 0;
        } else {
          if(sumv == true || restv == true || multv == true || divv == true){
            if (String(display) != 0 || String(display).includes(".")){
              if (display.length <= 7) {
                display += String(3);
                document.getElementById("display").innerHTML = display;
              } else {
                document.getElementById("display").innerHTML = display;
              }
            } else {
              display = String(3);
              document.getElementById("display").innerHTML = display;
            }
          } else {
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
          }
        }
      };

      function t4() {

        if (equalto == true){
          display = 0
          display = "";
          display = String(4);
          document.getElementById("display").innerHTML = display;
          equalto = false;
          value1 = 0;
          value2 = 0;
        } else {
          if(sumv == true || restv == true || multv == true || divv == true){
            if (String(display) != 0 || String(display).includes(".")){
              if (display.length <= 7) {
                display += String(4);
                document.getElementById("display").innerHTML = display;
              } else {
                document.getElementById("display").innerHTML = display;
              }
            } else {
              display = String(4);
              document.getElementById("display").innerHTML = display;
            }
          } else {
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
          }
        }
      };

      function t5() {

        if (equalto == true){
          display = 0
          display = "";
          display = String(5);
          document.getElementById("display").innerHTML = display;
          equalto = false;
          value1 = 0;
          value2 = 0;
        } else {
          if(sumv == true || restv == true || multv == true || divv == true){
            if (String(display) != 0 || String(display).includes(".")){
              if (display.length <= 7) {
                display += String(5);
                document.getElementById("display").innerHTML = display;
              } else {
                document.getElementById("display").innerHTML = display;
              }
            } else {
              display = String(5);
              document.getElementById("display").innerHTML = display;
            }
          } else {
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
          }
        }
      };

      function t6() {

        if (equalto == true){
          display = 0
          display = "";
          display = String(6);
          document.getElementById("display").innerHTML = display;
          equalto = false;
          value1 = 0;
          value2 = 0;
        } else {
          if(sumv == true || restv == true || multv == true || divv == true){
            if (String(display) != 0 || String(display).includes(".")){
              if (display.length <= 7) {
                display += String(6);
                document.getElementById("display").innerHTML = display;
              } else {
                document.getElementById("display").innerHTML = display;
              }
            } else {
              display = String(6);
              document.getElementById("display").innerHTML = display;
            }
          } else {
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
          }
        }
      };

      function t7() {

        if (equalto == true){
          display = 0
          display = "";
          display = String(7);
          document.getElementById("display").innerHTML = display;
          equalto = false;
          value1 = 0;
          value2 = 0;
        } else {
          if(sumv == true || restv == true || multv == true || divv == true){
            if (String(display) != 0 || String(display).includes(".")){
              if (display.length <= 7) {
                display += String(7);
                document.getElementById("display").innerHTML = display;
              } else {
                document.getElementById("display").innerHTML = display;
              }
            } else {
              display = String(7);
              document.getElementById("display").innerHTML = display;
            }
          } else {
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
          }
        }
      };

      function t8() {

        if (equalto == true){
          display = 0
          display = "";
          display = String(8);
          document.getElementById("display").innerHTML = display;
          equalto = false;
          value1 = 0;
          value2 = 0;
        } else {
          if(sumv == true || restv == true || multv == true || divv == true){
            if (String(display) != 0 || String(display).includes(".")){
              if (display.length <= 7) {
                display += String(8);
                document.getElementById("display").innerHTML = display;
              } else {
                document.getElementById("display").innerHTML = display;
              }
            } else {
              display = String(8);
              document.getElementById("display").innerHTML = display;
            }
          } else {
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
          }
        }
      };

      function t9() {

        if (equalto == true){
          display = 0
          display = "";
          display = String(9);
          document.getElementById("display").innerHTML = display;
          equalto = false;
          value1 = 0;
          value2 = 0;
        } else {
          if(sumv == true || restv == true || multv == true || divv == true){
            if (String(display) != 0 || String(display).includes(".")){
              if (display.length <= 7) {
                display += String(9);
                document.getElementById("display").innerHTML = display;
              } else {
                document.getElementById("display").innerHTML = display;
              }
            } else {
              display = String(9);
              document.getElementById("display").innerHTML = display;
            }
          } else {
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
          }
        }
      };

      function t0() {

        if (equalto == true){
          display = 0
          display = "";
          display = String(0);
          document.getElementById("display").innerHTML = display;
          equalto = false;
          value1 = 0;
          value2 = 0;
        } else {
          if(sumv == true || restv == true || multv == true || divv == true){
            if (String(display) != 0 || String(display).includes(".")){
              if (display.length <= 7) {
                display += String(0);
                document.getElementById("display").innerHTML = display;
              } else {
                document.getElementById("display").innerHTML = display;
              }
            } else {
              display = String(0);
              document.getElementById("display").innerHTML = display;
            }
          } else {
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
          }
        }
      };

// ** End Number Button functions ** //


// Button functions //

      function clearAll() {

        display = String(0);
        value1 = 0;
        value2 = 0;
        equalto = false;
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
          signcheck = false;
          display = -Math.abs(Number(display));
          display = String(display);
          document.getElementById("display").innerHTML = display;
        } else {
          display = Math.abs(Number(display));
          document.getElementById("display").innerHTML = display;
        }
      };

// ** End Button functions ** //


// Operation functions //



     function sumf() {

       if(sumv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 + value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           return value1;
         } else if(restv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 - value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           restv = false;
           sumv = true;
           return value1;
         } else if(multv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 * value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           multv = false;
           sumv = true;
           return value1;
         } else if(divv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 / value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           divv = false;
           sumv = true;
           return value1;
         } else if (equalto == true){
           value1 = result;
           document.getElementById("display").innerHTML = "";
           display = 0;
           equalto = false;
           sumv = true;
           return value1;
         } else {
         sumv = true;
         value1 = Number(document.getElementById("display").firstChild.nodeValue);
         document.getElementById("display").innerHTML = "";
         display = 0;
         return value1;
       }
     };

     function restf() {

       if(sumv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 + value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           sumv = false;
           restv = true;
           return value1;
         } else if(restv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 - value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           return value1;
         } else if(multv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 * value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           multv = false;
           restv = true;
           return value1;
         } else if(divv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 / value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           divv = false;
           restv = true;
           return value1;
         } else if (equalto == true){
           value1 = result;
           document.getElementById("display").innerHTML = "";
           display = 0;
           equalto = false;
           restv = true;
           return value1;
         } else {
         restv = true;
         value1 = Number(document.getElementById("display").firstChild.nodeValue);
         document.getElementById("display").innerHTML = "";
         display = 0;
         return value1;
       }
     };

     function multf() {

       if(sumv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 + value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           sumv = false;
           multv = true;
           return value1;
         } else if(restv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 - value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           restv = false;
           multv = true;
           return value1;
         } else if(multv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 * value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           return value1;
         } else if(divv == true){
           value1;
           value2 = Number(document.getElementById("display").firstChild.nodeValue);
           value1 = value1 / value2;
           document.getElementById("display").innerHTML = "";
           display = 0;
           divv = false;
           multv = true;
           return value1;
         } else if (equalto == true){
           value1 = result;
           document.getElementById("display").innerHTML = "";
           display = 0;
           equalto = false;
           multv = true;
           return value1;
         } else {
         multv = true;
         value1 = Number(document.getElementById("display").firstChild.nodeValue);
         document.getElementById("display").innerHTML = "";
         display = 0;
         return value1;
       }
     };

     function divf() {

       if(sumv == true){
         value1;
         value2 = Number(document.getElementById("display").firstChild.nodeValue);
         value1 = value1 + value2;
         document.getElementById("display").innerHTML = "";
         display = 0;
         sumv = false;
         divv = true;
         return value1;
       } else if(restv == true){
         value1;
         value2 = Number(document.getElementById("display").firstChild.nodeValue);
         value1 = value1 - value2;
         document.getElementById("display").innerHTML = "";
         display = 0;
         restv = false;
         divv = true;
         return value1;
       } else if(multv == true){
         value1;
         value2 = Number(document.getElementById("display").firstChild.nodeValue);
         value1 = value1 * value2;
         document.getElementById("display").innerHTML = "";
         display = 0;
         multv = false;
         divv = true;
         return value1;
       } else if(divv == true){
         value1;
         value2 = Number(document.getElementById("display").firstChild.nodeValue);
         value1 = value1 / value2;
         document.getElementById("display").innerHTML = "";
         display = 0;
         return value1;
       } else if (equalto == true){
         value1 = result;
         document.getElementById("display").innerHTML = "";
         display = 0;
         equalto = false;
         divv = true;
         return value1;
       } else {
         divv = true;
         value1 = Number(document.getElementById("display").firstChild.nodeValue);
         document.getElementById("display").innerHTML = "";
         display = 0;
         return value1;
       }
     };



     function equals() {
       equalto = true;
       if(sumv == true) {
         value2 = Number(document.getElementById("display").firstChild.nodeValue);
         result = value1 + value2;
         var length = 8;
         var trimmedResult = String(result).substring(0, length);
         document.getElementById("display").innerHTML = trimmedResult;
         sumv = false;
       } else if(restv == true) {
         value2 = Number(document.getElementById("display").firstChild.nodeValue);
         result = value1 - value2;
         var length = 8;
         var trimmedResult = String(result).substring(0, length);
         document.getElementById("display").innerHTML = trimmedResult;
         restv = false;
       } else if(multv == true) {
         value2 = Number(document.getElementById("display").firstChild.nodeValue);
         result = value1 * value2;
         var length = 8;
         var trimmedResult = String(result).substring(0, length);
         document.getElementById("display").innerHTML = trimmedResult;
         multv = false;
       } else if(divv == true) {
         value2 = Number(document.getElementById("display").firstChild.nodeValue);
         result = value1 / value2;
         var length = 8;
         var trimmedResult = String(result).substring(0, length);
         document.getElementById("display").innerHTML = trimmedResult;
         divv = false;
       }
     };

// ** End operation functions ** //


// Event listeners //

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
sumb.addEventListener("click", sumf);
restb.addEventListener("click", restf);
multb.addEventListener("click", multf);
divb.addEventListener("click", divf);
eqb.addEventListener("click", equals);


// ** End Event Listeners ** //
