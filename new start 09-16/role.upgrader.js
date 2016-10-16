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
            // var theContainer = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            //    filter: (structure) => {
            //    return (structure.structureType == STRUCTURE_STORAGE );
            //    }
            //});

            //if ( creep.withdraw( theContainer, RESOURCE_ENERGY ) == ERR_NOT_IN_RANGE ) {
            //    creep.moveTo( theContainer );
            //} //console.log(theContainer)
            var resources = creep.room.find(FIND_DROPPED_RESOURCES);
            var resource = creep.pos.findClosestByPath(resources)
            if(creep.pickup(resource) == ERR_NOT_IN_RANGE) {
               move = creep.moveTo(resource);
               if(move != OK) {
                            console.log(move)
                        }
            }
        }
        else if (creep.memory.working == 'false') {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};

module.exports = roleUpgrader;