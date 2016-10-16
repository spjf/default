var roleBuilder2 = {
    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.working == 'false' && creep.carry.energy == 0) {
            creep.memory.working = 'true';
        }
        else if(creep.memory.working == 'true' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = 'false'
        };
        if(creep.memory.working == 'false') {
            if(creep.room.name == 'E44N23') {
                var exits = creep.room.find(FIND_EXIT_TOP)
                var exit = creep.pos.findClosestByRange(exits)
                creep.moveTo(exit)
            } else {
                var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                var target = creep.pos.findClosestByRange(targets)
                    if(creep.build(target) == ERR_NOT_IN_RANGE) {
                           creep.moveTo(target);
                    }
                }
        } else {
            if(creep.memory.working == 'true') {
                if(creep.room.name == 'E44N24') {
                    var exits = creep.room.find(FIND_EXIT_BOTTOM)
                    var exit = creep.pos.findClosestByRange(exits)
                    creep.moveTo(exit)
                } else {
                    var resources = creep.room.find(FIND_DROPPED_RESOURCES);
                    var resource = creep.pos.findClosestByRange(resources)
                    if(creep.pickup(resource) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(resource);
                    }
                }
            }  
        }
        
    }
};        
module.exports = roleBuilder2;
