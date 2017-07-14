(function(){
    function HomeCtrl(Timer, $interval){
        var pomodoro = 2;
        var onBreak = false;
        
        
        
        
        //config telling if timer is running or not
        //not final
        this.timerOn = function(){
           return Timer.isOn;
        };
        
        this.timer = function(){
            if(Timer.isOn === true){
                Timer.isOn = false;
            }else{
                Timer.isOn = true;
            }
            console.log(this.timerOn());
        };
        
       
        //starting work and rest timer
        //works but might edit later
        
        //Instructions
        this.startSession = "Start Here";
        this.sessionRest = "";
        
        var startTimer = function(time){
            Timer.timerStart(time);
            };
        
        this.stopTimer = function(){
            Timer.timerStop();
            this.message = "Timer has stopped";
            pomodoro = 0;
            
        } 
        
        this.workTimer = function(){
            pomodoro++;
            startTimer(3000);
            if(pomodoro < 4){
                this.startSession = "";
                this.sessionRest = "Once timer completes click here to start rest period";
                onBreak = true;
            }else{
                this.startSession = "";
                this.sessionRest = "Click here to start your long rest break";
            }
        };
        
        
        
        
        this.restTimer = function(){
            if(pomodoro === 4){
                startTimer(5000);
                onBreak = false;
                pomodoro = 0;
            }else{
                startTimer(2000);
                onBreak = false;
            }
            this.startSession = "Now click here to start another work session";
            this.sessionRest = "";
        };
        
        //disable button method
        this.checkForBreak = function(){
            if(onBreak === true){
            return true;
            }
        }
        
        this.disable = function(){
            if(onBreak === true || this.timerOn() === true){
                return true;
            }
        }
        
         
        
        
        //showing timer
        //needs work
        this.getMessage = function(){
            return Timer.message;
            console.log(Timer.message);
        }
        

        
//        var updateTimer = function() {
//            time -=1000;
//            this.message = format(time);
//            console.log(this.message);
//        }
        
          
    }
    
    angular
        .module("Bloctime")
        .controller("HomeCtrl", ["Timer", "$interval", HomeCtrl]);
})();