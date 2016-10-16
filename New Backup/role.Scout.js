roleScout = {
    /** @param {Creep} creep **/
    run: function(creep) {
        for (var name in Game.rooms) {
            var spawn = creep.room.find(FIND_HOSTILE_STRUCTURES);
            var attack = creep.attack(spawn)
            var exits = creep.room.find(FIND_EXIT_BOTTOM)
            var exit = creep.pos.findClosestByPath(exits)

            if (spawn > 1) {
                if (attack != OK) {
                    creep.moveTo(spawn);
                }
            }

        else  {

                var move = creep.moveTo(exit)
                if(move != OK) {
                    console.log(move)
                }
            }
        }
    }
};
module.exports = roleScout;
