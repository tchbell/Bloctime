(function(){
    function HomeCtrl($interval){
        
        this.fiveMin = 3000;
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
        
        this.startTimer = function(time){
            this.message = "Timer Started " + time;
                   this.timer = $interval(
                               function(){
                                   if(time > 0){
                                        time -=1000;
                                        this.message = format(time);
                                        console.log(time);
                                   }else{
                                       $interval.cancel;
                                   }
                               }, 1000)
                    
        }
        
        var timerStop = $interval.cancel(this.timer);
        
//        var updateTimer = function() {
//            time -=1000;
//            this.message = format(time);
//            console.log(this.message);
//        }
        
        this.stopTimer = function(){
            this.message = "Timer Stopped";
            $interval.cancel(this.timer);
        }    
    }
    
    angular
        .module("Bloctime")
        .controller("HomeCtrl", ["$interval", HomeCtrl]);
})();