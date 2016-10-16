var roleFindEnergy = require('role.FindEnergy');
var roleBuilder = require('role.Builder')
var roleRepairer = {
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
            var targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < (object.hitsMax/2)});
            targets.sort((a,b) => a.hits - b.hits);
            if(targets.length > 0) {
//                console.log('repairing '+targets)
                var target = creep.pos.findClosestByPath(targets)
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);    
                }
            }
            else { 
            roleBuilder.run(creep)
            }
        }
    }
};

module.exports = roleRepairer;