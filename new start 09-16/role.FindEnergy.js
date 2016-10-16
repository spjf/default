var roleFindEnergy = {
    /** @param {Creep} creep **/
    run: function(creep) {
		var sources = creep.room.find(FIND_SOURCES);
        var source = creep.pos.findClosestByPath(sources)
		var path = creep.pos.findPathTo(source)
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.move(path[0].direction);
        }
    }
};

module.exports = roleFindEnergy;