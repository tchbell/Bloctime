(function(){
    function HomeCtrl($interval){
        
        this.fiveMin = 300000;
        this.timer = null;
        this.pomodoro = 0;
        var time = 5000;
        
        var format = function(time){
            var makeToSeconds = time/1000;
            var seconds = Math.floor(makeToSeconds%60);
            var minutes = Math.floor(makeToSeconds / 60);
                
            if(seconds < 10){
                return  minutes + ":0" + seconds
            }else{
                return minutes + ":" + seconds
            }
        }
        
        this.startTimer = function(){
            //var time = 5000;
            this.message = "Timer Started " + time;
                   this.timer = $interval(
//                       function(){
//                        time -=1000;
//                        this.message = format(time);
//                        console.log(this.message);
//                    }
                     updateTimer()  , 1000)

        }
        
        var updateTimer = function() {
            time -=1000;
            this.message = format(time);
            console.log(this.message);
        }
        
        this.stopTimer = function(){
            this.message = "Timer Stopped";
            $interval.cancel(this.timer);
        }    
    }
    
    angular
        .module("Bloctime")
        .controller("HomeCtrl", ["$interval", HomeCtrl]);
})();