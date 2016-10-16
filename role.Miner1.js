var roleMiner = {
    /** @param {Creep} creep **/
    run: function(creep) {  
    		if(creep.memory.working == 'true' && creep.carry.energy == 0) {
                creep.memory.working = 'false';
            }
            else if(creep.memory.working == 'false' && creep.carry.energy == creep.carryCapacity) {
                creep.memory.working = 'true'
            };
			
			if(creep.memory.working == 'false') {
				var sources = creep.room.find(FIND_SOURCES)
				var source = sources[1]
				if(source != undefined){
    				if(creep.harvest(source) != OK) {
    					var path = creep.pos.findPathTo(source)
    					var move = creep.move(path[0].direction)
    					if(move != OK)
    					{console.log(move)}
    				}
				}
			} else if(creep.memory.working =='true') {
			    var targets = creep.pos.findInRange(creep.room.find(FIND_CONSTRUCTION_SITES), 0);
            if(targets.length > 0) {
                    var target = creep.pos.findClosestByPath(targets)
                    if(creep.build(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
            }  else {
                var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_CONTAINER})
				var transfer = creep.transfer(container, RESOURCE_ENERGY)
				if(transfer != OK) {
					creep.moveTo(container)
					console.log(transfer)
				}
            }
			}
    }
};

module.exports = roleMiner;