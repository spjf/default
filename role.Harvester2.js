var roleFindEnergy = require('role.FindEnergy');
var roleEnergy = {
    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.working == 'false' && creep.carry.energy == 0) {
            creep.memory.working = 'true';
        }
        else if(creep.memory.working == 'true' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = 'false'
        };
		 if(creep.memory.working == 'true') {
            if(creep.room != 'E33S19') {
                var path = creep.pos.FindPathTo(20,43,'E33S19')
                var move = creep.move(path[0].direction)
                if(move != OK) {console.log(move)}
            } else {
                roleFindEnergy.run(creep)
            }
		 } else if(creep.memory.working == 'false') {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};

module.exports = roleEnergy;