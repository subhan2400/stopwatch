
// var c=0
// var inter=setInterval(function y(){document.write(c);c++},1000)
// setTimeout(function(){
// 	clearInterval(inter)},    2000)
// var count=0;
// var interval;
// function timer(){
// 	count++
// 	document.write(count)
// }

// interval=setInterval(timer,1000)
// setTimeout(function(){clearInterval(interval)},4000)

var interval;
var millihead=document.getElementById("millisec");

var sechead=document.getElementById("sec");


var minhead=document.getElementById("min");

var msec=0;
var sec=0;
var min=0;


function timer(){
     msec++
     millihead.innerHTML = msec;
     millihead.style.fontSize='32px';
      millihead.style.lineHeight="90px";

     if(msec >= 100){
	
	sec++

	sechead.innerHTML= sec
	  sechead.style.fontSize='32px';
	  sechead.style.lineHeight="90px";

	msec=0

	if(sec >= 60){
       
       min++
       minhead.innerHTML=min;
         minhead.style.fontSize='32px';
          minhead.style.lineHeight="90px";


       sec=0


	}
}
     
     

}

function start(){
	interval=setInterval(timer,10)
	if(onclick=true){
		document.getElementById("btn1").disabled=true
			document.getElementById("btn2").disabled=false
			document.getElementById("btn3").disabled=false
	}
    }

function stop(){

	clearInterval(interval);
	if(onclick=true){
		document.getElementById("btn3").disabled=true
			document.getElementById("btn1").disabled=false
			document.getElementById("btn2").disabled=false


	}


}

function reset(){
	min=0;
	sec=0
	msec=0;
	  minhead.innerHTML=min;
	   minhead.style.fontSize='32px';
          minhead.style.lineHeight="90px";
	  sechead.innerHTML=sec
	   sechead.style.fontSize='32px';
          sechead.style.lineHeight="90px";
	  millihead.innerHTML=msec
	   millihead.style.fontSize='32px';
          millihead.style.lineHeight="90px";
	  stop()
	  document.getElementById("btn1").disabled=false
	  document.getElementById("btn3").disabled=false
	  document.getElementById("btn2").disabled=true

}
