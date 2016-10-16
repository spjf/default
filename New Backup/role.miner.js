roleMiner = {
    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.source == 'empty'){
            var sources = creep.room.find(FIND_SOURCES);
            var source = sources[0]
            creep.memory.source = (source).id
            console.log('miner assigning source')};
        var target = Game.getObjectById(creep.memory.source)
            if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
    }
};
module.exports = roleMiner;
