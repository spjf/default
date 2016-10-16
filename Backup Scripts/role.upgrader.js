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
            var resource = creep.room.find(FIND_DROPPED_RESOURCES);
            if(creep.pickup(resource[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(resource[0]);
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