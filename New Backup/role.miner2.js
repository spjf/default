roleMiner2 = {
    /** @param {Creep} creep **/
    run: function(creep) {
        console.log('test')
        if(creep.room.name === 'W42S48') {
            var exits = creep.room.find(FIND_EXIT_BOTTOM)
            var exit = creep.pos.findClosestByRange(exits)
            creep.moveTo(exit);
        }

        else if(creep.memory.source == 'empty'){
            var sources = creep.room.find(FIND_SOURCES);
            var source = sources[0]
            creep.memory.source = (source).id};

            var target = Game.getObjectById(creep.memory.source)
        var harvest = creep.harvest(target)
        if(harvest != OK) {
            creep.moveTo(target);
        } console.log(harvest)
    }
};
module.exports = roleMiner2;
