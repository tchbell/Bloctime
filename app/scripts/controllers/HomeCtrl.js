(function(){
    function HomeCtrl(Timer, $interval){

        this.timerOn = false;
        
        
        var startTimer = function(time){
            this.timerOn = true;
            this.message = "Timer has started";
            Timer.timerStart(time);

            }
        
        this.workTimer = function(){
            startTimer(3000);
        }
        
        
        this.restTimer = function(){
            startTimer(2000);
            
        };
        

        
//        var updateTimer = function() {
//            time -=1000;
//            this.message = format(time);
//            console.log(this.message);
//        }
        
        this.stopTimer = function(){
            Timer.timerStop();
            this.timerOn = false;
            this.message = "Timer has stopped";
            
        }    
    }
    
    angular
        .module("Bloctime")
        .controller("HomeCtrl", ["Timer", "$interval", HomeCtrl]);
})();