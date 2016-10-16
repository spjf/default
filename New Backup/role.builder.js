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
            var resources = creep.room.find(FIND_DROPPED_RESOURCES);
            var resource = creep.pos.findClosestByRange(resources)
            if(creep.pickup(resources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(resources[0]);
            }// console.log('builder is getting energy')
        }
        else if(creep.memory.working == 'false') {
            var size = _(creep.room.find(FIND_CONSTRUCTION_SITES)).size();
            if(size == '0'){
                var targets = creep.room.find(FIND_STRUCTURES);
                targets.sort((a,b) => a.hits - b.hits);
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]); 
                }// console.log('builder is repairing '+target +size)
            }      
            else {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            var target = creep.pos.findClosestByRange(targets)
                if(creep.build(target) == ERR_NOT_IN_RANGE){
                       creep.moveTo(target);} 
            }// console.log('builder is building '+ target)
        }
    }
};

module.exports = roleBuilder;
