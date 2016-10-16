var roleBuilder = {
    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.working == 'false' && creep.carry.energy == 0) {
            creep.memory.working = 'true';
        }
        else if(creep.memory.working == 'true' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = 'false';
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
        else if(creep.memory.working == 'false') {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            var target = creep.pos.findClosestByRange(targets)
                if(creep.build(target) == ERR_NOT_IN_RANGE){
                       creep.moveTo(target);} 
            }// console.log('builder is building '+ target)
             //console.log(targets)
    }
};

module.exports = roleBuilder;
