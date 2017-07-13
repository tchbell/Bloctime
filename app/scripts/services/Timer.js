(function(){
    function Timer($interval){
        
        var timer = null;
        
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
        
        return {
            
                timerStart: function(time){
                    this.timerOn = true;
                           timer = $interval(
                                       function(){
                                           if(time > 0){
                                                time -=1000;
                                                console.log(format(time));
                                           }else{
                                               $interval.cancel(timer);
                                           }
                                       }, 1000)

                },
            
                timerStop: function(){
                    $interval.cancel(format(timer));
                }
            
            
            }
  
    
    }
    angular
        .module('Bloctime')
        .factory('Timer', ['$interval', Timer])
})();
    
    
    
          