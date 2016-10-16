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
				var source = sources[0]
				if(source != undefined){
    				if(creep.harvest(source) != OK) {
    					var path = creep.pos.findPathTo(source)
    					var move = creep.move(path[0].direction)
    					if(move != OK)
    					{console.log(move)}
    				}
				}
			} else if(creep.memory.working =='true') {
			    var towers = creep.room.find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity})
			    var transfer = creep.transfer(towers[0], RESOURCE_ENERGY)
    				if(transfer != OK) {
    				    var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] < s.storeCapacity}) 
        				var transfer = creep.transfer(container, RESOURCE_ENERGY)
        				if(transfer != OK) {
        					creep.moveTo(container)
        					console.log(transfer)
        				}
    				} 
			}
    }
};

module.exports = roleMiner;r transfer = creep.transfer(container, RESOURCE_ENERGY)
				if(transfer != OK) {
					creep.moveTo(container)
					console.log(transfer)
				}
			}
		}
    }
};

module.exports = roleMiner;