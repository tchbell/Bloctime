(function () {
    function Timer($interval) {
        
        var timer = null;
        
        var format = function (time) {
            var makeToSeconds = time / 1000;
            var seconds = Math.floor(makeToSeconds % 60);
            var minutes = Math.floor(makeToSeconds / 60);
                
            if (seconds < 10) {
                return minutes + ":0" + seconds;
            } else {
                return minutes + ":" + seconds;
            }
        };
    
        
        return {
            
            isOn: false,
            
            turnOn: function(){
                Timer.isOn = true;
            },
            
            timerStart: function (time) {
            // Console says its not a function
             //   Timer.turnOn();
                timer = $interval(
                    function () {
                        Timer.isOn = true;
                        console.log(Timer.isOn);
                        if (time > 0) {
                            Timer.message = "Timer has started " + format(time);
                            console.log(Timer.message);
                            time -= 1000;
                        } else {
                            $interval.cancel(timer);
                            Timer.message = "Timer completed";
                            console.log(Timer.message);
                            Timer.isOn = false;
                        }
                    },1000);
            },
            
            
            
            timerStop: function () {
                $interval.cancel(timer);
                Timer.isOn = false;
                console.log(Timer.message);
            }
            
            
        };
  
    
    }
    angular
        .module('Bloctime')
        .factory('Timer', ['$interval', Timer])
})();
    
    
    
          