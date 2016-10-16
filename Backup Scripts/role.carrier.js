var roleCarrier = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.working == 'false' && creep.carry.energy == 0) {
            creep.memory.working = 'true';
        }
        else if(creep.memory.working == 'true' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = 'false'
        };
       
        
        if(creep.memory.working == 'true') {
            var resource = creep.room.find(FIND_DROPPED_RESOURCES);
            if(creep.pickup(resource[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(resource[0]);
            }
        }
        else if (creep.memory.working == 'false') {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
//            console.log(targets)
                var target = creep.pos.findClosestByRange(targets)
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target)
                }
            else {
                var storage = Game.rooms.E44N23.storage;
                    if (creep.pos.isNearTo(storage)) {
                        creep.transfer(storage, RESOURCE_ENERGY);
                    } else {
                        creep.moveTo(storage);
                    }
            } 
            
        }
    }
};

module.exports = roleCarrier;