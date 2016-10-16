var roleFindEnergy = require('role.FindEnergy');
var roleRampartRepair = {
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
                filter: object => {
                    if(object.structureType == STRUCTURE_RAMPART && object.hits < (object.hitsMax/4))
            });
            targets.sort((a,b) => a.hits - b.hits);
            if(targets.length > 0) {
                var target = creep.pos.findClosestByPath(targets)
                if(creep.repair(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);    
                }
            }
            else { 
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if(targets.length > 0) {
                    var target = creep.pos.findClosestByPath(targets)
                    if(creep.build(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
            }
        }
    }
};

module.exports = roleRampartRepair;