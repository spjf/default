var roleFindEnergy = require('role.FindEnergy');
var roleHarvester = {
    /** @param {Creep} creep **/
    run: function(creep) {
		if(creep.memory.working == 'false' && creep.carry.energy == 0) {
            creep.memory.working = 'true';
        }
        else if(creep.memory.working == 'true' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = 'false'
        };
		 if(creep.memory.working == 'true') {
            roleFindEnergy.run(creep)
        }
        else if(creep.memory.working == 'false') {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                       // if(structure.structureType == STRUCTURE_STORAGE) {
                    //       return true;
                     //  } 
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
                    });
					var target = creep.pos.findClosestByPath(targets)
					var path = creep.pos.findPathTo(target)
    				if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    					var move = creep.move(path[0].direction)
    					if(move != OK) {
    					    console.log('Harvester cannot move')
    					}
    				}
		 }
    }
};

module.exports = roleHarvester;