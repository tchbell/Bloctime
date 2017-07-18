(function () {
    function Timer(Ding, $interval) {
        
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
        
        
        var ding = function(){
            return Ding.noisePlay();
        }
    
        
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
                        if (time > 0) {
                            time -= 1000;
                            console.log(format(time));
                        } else {
                            ding();
                            $interval.cancel(timer);
                            Timer.message = "Timer completed";
                            Timer.isOn = false;
                        }
                    },1000);
            },
            
            
            
            timerStop: function () {
                $interval.cancel(timer);
                Timer.isOn = false;
            }
            
            
        };
  
    
    }
    angular
        .module('Bloctime')
        .factory('Timer', ['Ding', '$interval', Timer])
})();
    
    
    
          