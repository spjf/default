var roleHarvester2 = {
    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.pos.roomName == creep.memory.room) {
		if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            var source = creep.findClosestByPath(sources)
			var path = creep.pos.findPathTo(source)
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.move(path[0].direction);
            }
        }
        else  {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            } 
        }
        } else {
        var exit = creep.findExitTo(creep.memory.room)
        var path = creep.pos-findPathTo(exit)
        creep.move(path[0].direction);
        }
    }
};

module.exports = roleHarvester2;