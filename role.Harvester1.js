var roleFindEnergy = require('role.FindEnergy');
var roleFindStructures = require('role.FindStructures');
var roleUpgrader = require('role.Upgrader');
var roleHarvester = {
    /** @param {Creep} creep **/
    run: function(creep) {
		if(creep.memory.working == 'true' && creep.carry.energy == 0) {
            creep.memory.working = 'false';
        }
        else if(creep.memory.working == 'false' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = 'true'
        };
		if(creep.memory.working == 'true') {
		    var targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;}});
		    var constructurion = creep.room.find(FIND_CONSTRUCTION_SITES);
		    if(targets.length > 0) {roleFindStructures.run(creep)} else if(constructurion.length >0){roleFindStructures.run(creep)} else {roleUpgrader.run(creep)}
        } else if(creep.memory.working == 'false') {
                
            roleFindEnergy.run(creep)
        }
    }
};

module.exports = roleHarvester;