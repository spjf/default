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
            var resource = creep.room.find(FIND_DROPPED_RESOURCES);
            if(creep.room.name === 'W36S7') {
                var exits = creep.room.find(FIND_EXIT_BOTTOM)
                creep.moveTo(exits[0])
            } else {if(creep.pickup(resource[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(resource[0])};
            } 
        } else if(creep.memory.working == 'false') {
            
            var containersWithoutEnergy = creep.room.find(FIND_STRUCTURES, { filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER ) && structure.energy < structure.energyCapacity;
                    }
            });
            var total = _.sum(containersWithoutEnergy.store);
            var containers = containersWithoutEnergy 
            var container = creep.pos.findClosestByPath(containers);
            if(creep.room.name === 'W36S8') {
                var exits = creep.room.find(FIND_EXIT_TOP)
                var exit = creep.pos.findClosestByPath(exits)
                creep.moveTo(35,0)
            } else if(creep.room.name === 'W36S7') { 
                        if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                           var move = creep.moveTo(container)
                           if(move != OK) {
                               console.log(move)
                           }
                    } 
            }
        } console.log (containers)
    }
};

module.exports = roleCarrier1;