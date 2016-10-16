var roleClaimer = {
   run: function(creep) {
       var controller = Game.getPositionAt(20,30,'E33S19')
        var claim = creep.claimController(controller)
	    var path = creep.pos.findPathTo(controller)
        if(path != undefined){
            var move = creep.move(path[0].direction);  
            if(claim == ERR_NOT_IN_RANGE){
                if(move != OK) {
                    console.log(move)
                }
            }
        } 
   }
};
module.exports = roleClaimer