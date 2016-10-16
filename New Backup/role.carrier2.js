var roleCarrier1 = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.working == 'false' && creep.carry.energy == 0) {
            creep.memory.working = 'true';
        }
        else if(creep.memory.working == 'true' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = 'false'
        };

        if(creep.memory.working == 'true') {
            console.log('working')
            var resource = creep.room.find(FIND_DROPPED_RESOURCES);
            if(creep.room.name === 'W42S48') {
                var exits = creep.room.find(FIND_EXIT_BOTTOM)
                var exit = creep.pos.findClosestByRange(exits)
                creep.moveTo(exit)
            } else if(creep.pickup(resource[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(resource[0]);
            }
        };
        if (creep.memory.working == 'false') {
            var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN ||
                    structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
        }
        });
//            console.log(targets)
            var target = creep.pos.findClosestByRange(targets)
            if(creep.room.name === 'W42S49') {
                var exits = creep.room.find(FIND_EXIT_TOP)
                var exit = creep.pos.findClosestByRange(exits)
                creep.moveTo(exit)
            } else if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target)
            }
        }
    }
};

module.exports = roleCarrier1;