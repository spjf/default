var roleFindStructures = {
    /** @param {Creep} creep **/
    run: function(creep) {
        var targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;}});
        var target = creep.pos.findClosestByPath(targets)
        if(target != undefined) {
            var path = creep.pos.findPathTo(target)
            if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    			var move = creep.move(path[0].direction)
    			if(move != OK) {console.log(move)
    			}
        	}
        } else {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length > 0) {
                    var target = creep.pos.findClosestByPath(targets)
                    if(creep.build(target) == ERR_NOT_IN_RANGE) {
                        var path = creep.pos.findPathTo(target)
    					var move = creep.move(path[0].direction)
    					if(move != OK)
    					{console.log(move)}
    				}
            } 
        }
    }
};

module.exports = roleFindStructures;