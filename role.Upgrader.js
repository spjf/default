var roleFindEnergy = require('role.FindEnergy');
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
            roleFindEnergy.run(creep)
		 }
        else if(creep.memory.working == 'false') {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};

module.exports = roleUpgrader;