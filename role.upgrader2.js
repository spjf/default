var roleFindEnergy = require('role.FindEnergy');
var roleUpgrader = {
    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.working == 'false' && creep.carry.energy == 0) {
            creep.memory.working = 'true';
        }
        else if(creep.memory.working == 'true' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = 'false'
        };
		 if(creep.memory.working == 'true') {
		    var source = Game.getObjectById('579fa97c0700be0674d2f666')
            var path = creep.pos.findPathTo(source)
            if(path != undefined){
                var move = creep.move(path[0].direction);  
                if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                    if(move != OK) {
                        console.log(move)
                    }
                }
            }
    	     
		 }
        else if(creep.memory.working == 'false') {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};

module.exports = roleUpgrader;
