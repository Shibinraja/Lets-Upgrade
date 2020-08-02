let getTimer;
//var setTimer = document.querySelector('input[type="time"]');


function startTime(){
  
  var setTimer = document.getElementById("appt").value;
      // setTimer = "hh:mm:ss";
  var Times =  setTimer.split(":");
  
  if(Times[0]==1 && Times[1]>0){
    var hour = parseInt(Times[0])
    var minutes = parseInt(Times[1])
    seconds = hour*3600 + minutes * 60;
  }
  else if(Times[0]==0){
    var hour = parseInt(Times[1])
    seconds = hour *60
  }
  else{
      var hour = parseInt(Times[0])
      seconds = hour * 3600;
  }


  console.log(seconds);

  const currentstamp = Date.now();
  const Afterstamp = currentstamp + seconds *1000;
  displayTheTime(seconds);
  
  
  getTimer = setInterval(()=>{
    const timer = Math.round((Afterstamp - Date.now()) /1000);
    
    if(timer>0){
      document.getElementById("start").disabled = true;
    }
    else{
      document.getElementById("start").disabled = false;
    }

    if(timer<= 0){
      clearInterval(getTimer);
      return;
    }

    displayTheTime(timer);
  },1000);
}


function displayTheTime(seconds){
  const display = document.getElementById('timer');
  const Hour  =  Math.floor(seconds/3600);
  const minutes = Math.floor(seconds/60);
  const remainderSeconds = seconds % 60;
  
  var timeDisplay = `${Hour} : ${minutes} : ${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`;
  display.value = timeDisplay;
  console.log(minutes, remainderSeconds);
  // Time = setTimeout("startTime()",1000);

}

function stopTime(){
  clearTimeout(getTimer);
}

function resetTime(){
  const display = document.getElementById('timer');
  clearTimeout(getTimer);
  display.value = "";
  document.getElementById("start").disabled = false;
};