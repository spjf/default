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
            var resources = creep.room.find(FIND_DROPPED_RESOURCES);
            var resource = creep.pos.findClosestByRange(resources)
            if(creep.pickup(resource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(resource);
            }
        }
        else 
        if(creep.memory.working == 'false') {
            var targets = creep.room.find(FIND_STRUCTURES, {
             filter: object => object.hits < (object.hitsMax/4)
            });
            targets.sort((a,b) => a.hits - b.hits);
            var target = creep.pos.findClosestByRange(targets)
            if(targets.length > 0) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);    
                }
            }
        }
    }
};

module.exports = roleRepairer;