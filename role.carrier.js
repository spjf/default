var roleFindEnergy = require('role.FindEnergy')
var roleCarrier = {
    run: function(creep) {
        if(creep.memory.working == 'false' && creep.carry.energy == 0) {
            creep.memory.working = 'true';
        }
        else if(creep.memory.working == 'true' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = 'false'
        };
            if(creep.memory.working == 'true') { 
                       var containers = creep.room.find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 99});
                            var container = creep.pos.findClosestByPath(containers)
                            if(container != null) {
                            var withdraw = container.transfer(creep, RESOURCE_ENERGY)
                                if(withdraw == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(container)
                                    console.log(withdraw)
                                }
                            }
            };
    		if(creep.memory.working == 'false'){
    		    var targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => structure.structureType == STRUCTURE_TOWER});
                var target = creep.pos.findClosestByPath(targets)
                if(target != undefined) {
                var path = creep.pos.findPathTo(target)
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            			var move = creep.move(path[0].direction)
            			if(move != OK) {console.log(move)}
            		}
                }
    		};// creep.say('hi')
	}
};
module.exports = roleCarrier;