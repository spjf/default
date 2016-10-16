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
            var resources = creep.room.find(FIND_DROPPED_RESOURCES);
            var resource = creep.pos.findClosestByPath(resources)
            if(creep.pickup(resources[0]) == ERR_NOT_IN_RANGE) {
               move = creep.moveTo(resources[0]);
               if(move != OK) {
                            console.log(move)
                        }
            }
        }
        else if (creep.memory.working == 'false') {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => { 
                       if(structure.structureType == STRUCTURE_STORAGE) {
                           return true;
                       } 
                       return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    } 
            }); //console.log(targets.store && targets.storeCapacity)
//            console.log(targets)
                var target = creep.pos.findClosestByPath(targets)
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        move = creep.moveTo(target)
                        if(move != OK) {
                            console.log(move)
                        }
                } else {
                    var containersWithoutEnergy = creep.room.find(FIND_STRUCTURES, { filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER) 
                    }
            });
                var total = _.sum(containersWithoutEnergy.store);
                var container = containersWithoutEnergy && total < containersWithoutEnergy.storeCapacity;
                var container = creep.pos.findClosestByPath(containersWithoutEnergy);
                if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                           var move = creep.moveTo(container)
                           if(move != OK) {
                               console.log(move)
                           }
                    } 
            //        else {
            //            var storage = Game.rooms.E44N23.storage;
            //                if (creep.pos.isNearTo(storage)) {
            //                    creep.transfer(storage, RESOURCE_ENERGY);
            //                } else {
            //                    creep.moveTo(storage);
            //                }
            //        }
                }
        } 
    }
};

module.exports = roleCarrier;