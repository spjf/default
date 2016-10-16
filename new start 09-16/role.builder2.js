var roleBuilder2 = {
    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.working == 'false' && creep.carry.energy == 0) {
            creep.memory.working = 'true';
        }
        else if(creep.memory.working == 'true' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = 'false'
        };
        if(creep.memory.working == 'true') {
            if(creep.room.name === 'W36S7') {
                var exits = creep.room.find(FIND_EXIT_BOTTOM)
                var exit = creep.pos.findClosestByPath(exits)
                creep.moveTo(exit)
            } else {
                   var resources = creep.room.find(FIND_DROPPED_RESOURCES);
                    var resource = creep.pos.findClosestByPath(resources)
                    var containers = creep.room.find(FIND_STRUCTURES, ({filter: {structureType: STRUCTURE_CONTAINER}})); 
                    var container = creep.pos.findClosestByPath(containers)
                    if(containers.length > 0)  {
                        if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        	                creep.moveTo(container);   console.log(container) 
                         } console.log(container)
                    } else if(creep.pickup(resource) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(resource);
                    } console.log('energy' +resource)
                }
        } else {
            if(creep.memory.working == 'false') {
                var size = _(creep.room.find(FIND_CONSTRUCTION_SITES)).size();
                    if(size == '0'){
                        var targets = creep.room.find(FIND_STRUCTURES);
                        targets.sort((a,b) => a.hits - b.hits);
                        if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targets[0]); 
                        } console.log('builder is repairing '+target +size)
                    }      
                    else {
                        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                        var target = creep.pos.findClosestByRange(targets)
                            if(creep.build(target) == ERR_NOT_IN_RANGE){
                                   creep.moveTo(target);} 
                    }
            }  
        } 
        
    }
};        
module.exports = roleBuilder2;
