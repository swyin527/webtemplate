let [seconds,minutes,hours] = [0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('start').addEventListener('click', ()=>{
	if (int !== null) {clearInterval(int);}
	int = setInterval(displayTimer, 1000);});
	
document.getElementById('pause').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
	[seconds,minutes,hours] = [0,0,0];
	//console.log("ck1",timerRef.innerHTML)
    timerRef.innerHTML = '<p>00 : 00 : 00 </p>';
	//console.log("ck2",timerRef.innerHTML)
});

function displayTimer(){
    seconds+=1;

    if(seconds == 60){
		seconds = 0;
		minutes++;

		if(minutes == 60){
			minutes = 0;
			hours++;
		}
	}
    
		
 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;

	
 
 timerRef.innerHTML = `<p> ${h} : ${m} : ${s} </p>`;

}
