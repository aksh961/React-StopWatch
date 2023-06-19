import React from "react";
import $ from 'jquery';
/global $/
 

const Stopwatch = () => {

  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      
      
    } else if (!timerOn) {
      clearInterval(interval);
      $("button").click(function(){
      $(".ed").removeAttr("disabled");
  });
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="Timers">
      <h1>React Stopwatch</h1>
      <p></p>
      <p></p>
       

      <div id="display">
     
   
    
  <p data-testid="button" ></p> {/*// + Math.floor((time / 360000) % 60)).slice(-2)
  //+ Math.floor((time / 6000) % 60)).slice(-2)*/}

      <p data-testid="time">
        <span name="time" >{("00")} : </span>
        <span name="time" >{("00")} : </span>
        <span name="time" >{("0" +  Math.floor((time / 1000) % 60)).slice(-2)} </span></p>
       
{/// ((time / 10) % 100)).slice(-2)/}
   
      <div name="button">
       
        {!timerOn && time === 0 && (
          <><button name="start"   data-testid="start" onClick={() => setTimerOn(true)}> Start </button>

          <button disabled={true}  className="ed"   name="reset" data-testid="reset" onClick={() => setTime(0)}> Reset</button>
         
          </> //echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
        )}



        {!timerOn && time > 0 && (
          <button name="resume" data-testid="resume"  onClick={() => setTimerOn(true)}> Resume </button> 
        )}
       
        {timerOn && <><button  name="pause" data-testid="pause"  onClick={() => setTimerOn(false)}> Pause </button>
        <button name="reset"  className="st" data-testid="reset" disabled={true}onClick={() => setTime(0)}> Reset </button></>}
        
        
        {!timerOn && time > 0 && (
          <button  name="reset" data-testid="reset"  onClick={() => setTime(0)}> Reset </button>
        )}

        { timerOn && time>=0 && (<button disabled={true}  className="ed"   name="reset" data-testid="reset" onClick={() => setTime(0)}> Reset</button>)}
  
         </div>

      </div>
    </div>
  );
        }

export default Stopwatch;
