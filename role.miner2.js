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
    		    var source = Game.getObjectById('576a9bd757110ab231d880ba')
                var path = creep.pos.findPathTo(source)
	            if(path != undefined){
                    var harvest = creep.harvest(source)
    		        if(creep.harvest(source) != OK) {
    		            var move = creep.move(path[0].direction);
    		            console.log(harvest)
    		            if(move != OK) {
    		                console.log(move)
    		            }
    		        }
	            }
    		} else if(creep.memory.working =='true') {
            var container = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] < s.storeCapacity})
            var transfer = creep.transfer(container, RESOURCE_ENERGY)
            if(transfer != OK) {
                creep.moveTo(container)
                console.log(transfer)
            }
		}
    }
};

module.exports = roleMiner;