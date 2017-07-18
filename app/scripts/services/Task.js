(function(){
    function Task($firebaseArray){
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);
        
        return {
            all:tasks, 
            
            addTask: function(){
                    tasks.$add({task: this.taskName, created: firebase.database.ServerValue.TIMESTAMP})
            }
            
        }
        
    }
    
    
        angular
            .module("Bloctime")
            .factory('Task', ['$firebaseArray', Task])
})();