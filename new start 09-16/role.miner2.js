roleMiner2 = {
    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.room.name === 'W36S7') {
            var exits = creep.room.find(FIND_EXIT_BOTTOM)
            var move = creep.moveTo(exits[0]);
            if(move != OK) {
                console.log(move)
            }
            console.log('finding exit '+exits[0])
        }

        else if(creep.memory.source === 'empty'){
            var sources = creep.room.find(FIND_SOURCES);
            var source = sources[0]
            creep.memory.source = (source).id};

        var target = Game.getObjectById(creep.memory.source)
        var harvest = creep.harvest(target)
        if(harvest != OK) {
            creep.moveTo(target);
        }
    }
};
module.exports = roleMiner2;
