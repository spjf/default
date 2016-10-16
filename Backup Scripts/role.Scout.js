roleScout = {
    /** @param {Creep} creep **/
    run: function(creep) {
        for(var name in Game.rooms) {
            var hostiles = Game.rooms[name].find(FIND_HOSTILE_CREEPS);
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTROLLER)}
            });
            
            if(creep.room.name === 'W42S48') {
                var exits = creep.room.find(FIND_EXIT_BOTTOM)
                var exit = creep.pos.findClosestByRange(exits)
                creep.moveTo(exit)
            }
            else if (targets.length > 0) {
                var target = creep.pos.findClosestByRange(targets);
                if(target) {
                    if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target);
                    }
                }
            }
        }
    }
};
module.exports = roleScout;




roleScout = {
    /** @param {Creep} creep **/
    run: function(creep) {
        for (var name in Game.rooms) {
            var hostiles = Game.rooms[name].find(FIND_HOSTILE_CREEPS);
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                    return (structure.structureType == STRUCTURE_KEEPER_LAIR)
        }
        })
            ;
            if (creep.room.name === 'W42S48') {
                var exits = creep.room.find(FIND_EXIT_BOTTOM)
                var exit = creep.pos.findClosestByRange(exits)
                creep.moveTo(exit)
            } else if (hostiles.length > 0) {
                var hostile = creep.pos.findClosestByRange(hostiles);
                if (hostile) {
                    if (creep.attack(hostile) == ERR_NOT_IN_RANGE) {
                        var move = creep.moveTo(hostile);
                        if (move == ERR_NO_PATH) {
                            var target = creep.pos.findClosestByRange(targets);
                            if (target) {
                                if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(target);
                                }
                            }
                        }
                    }
                    Game.notify('Attacking hostile ' + target)
                }
            } else if (hostiles.length < 1) {
                var controller = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTROLLER ||
                    structure.structureType == STRUCTURE_RAMPART ||
                    structure.structureType == STRUCTURE_WALL)
            }
            });
                var target = creep.pos.findClosestByRange(controller)
                console.log('attacking '+target)
                if(creep.attackController(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target)
                }
            }
        }
    }
};
module.exports = roleScout;



if (creep.room.name === 'W42S48') {
    var exits = creep.room.find(FIND_EXIT_BOTTOM)
    var exit = creep.pos.findClosestByRange(exits)
    creep.moveTo(exit)
} else if (hostiles.length > 0) {
    var hostile = creep.pos.findClosestByRange(hostiles);
    if (hostile) {
        if (creep.attack(hostile) == ERR_NOT_IN_RANGE) {
            var move = creep.moveTo(hostile);
            if (move == ERR_NO_PATH) {
                var target = creep.pos.findClosestByRange(targets);
                if (target) {
                    if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
            }
        }
        Game.notify('Attacking hostile ' + target)
    }
}