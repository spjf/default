var roleFindEnergy = {
    /** @param {Creep} creep **/
    run: function(creep) {
        var containers = creep.room.find(FIND_STRUCTURES, {filter: 
           (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > creep.carryCapacity
        });
        var inrange = creep.pos.findInRange(containers, 20);
        var container = creep.pos.findClosestByPath(inrange)
        if(container != null) {
        var withdraw = creep.withdraw(container, RESOURCE_ENERGY)
            if(withdraw == ERR_NOT_IN_RANGE) {
                creep.moveTo(container)
                console.log(withdraw)
            }
        }
        
    		else {
    		var sources = creep.room.find(FIND_STRUCTURES, {filter: 
           (s) => {return (s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_CONTAINER) && s.store[RESOURCE_ENERGY] > 100
        }});
    		    if(sources.length > 0) {
                    var source = creep.pos.findClosestByPath(sources)
                    if(source != undefined) {
                        var path = creep.pos.findPathTo(source)
                        var move = creep.move(path[0].direction);        
            			if(creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            				if(move != OK) {
            					if(move == -11){console.log('Tired')}
            			        else {
            			           // console.log(move)
            			            
            			        }
            				}
            			}
                    }
    		    }
    		    else {
    		        var source = creep.pos.findClosestByPath(FIND_SOURCES)
    		        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
    		            creep.moveTo(source)
    		        }
    		    }
    	
        }
    }
};
module.exports = roleFindEnergy;