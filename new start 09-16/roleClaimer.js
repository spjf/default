var roleClaimer = {
    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.pos.roomName == creep.memory.room) {
            if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        //else
        //var exit = creep.room.findExitTo(creep.memory.room)
        //var path = creep.pos.findPathTo(exit)
        //var move = creep.move(path[0].direction)
        //if(move != OK) {
        //    console.log('error')
        //} console.log(path + ' ' + move)
    }
};
module.exports = roleClaimer;