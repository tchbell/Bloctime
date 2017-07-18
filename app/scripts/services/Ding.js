(function(){
    function Ding(){

        var mySound = new buzz.sound( "/assets/ding.mp3", {
          preload: true
        });
        
        
            
        return {
            noise: new buzz.sound( "/assets/ding.mp3", {
                  preload: true
                }),
            
            noisePlay: function(){
            return mySound.play();
            }
        }
    }
    
    angular
        .module('Bloctime')
        .factory('Ding', [Ding])
})();