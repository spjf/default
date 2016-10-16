var roleSpawnFill = {
    /** @param {Creep} creep **/
    run: function(creep) {
	    var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > '100'}})
        

module.exports = roleSpawnFill;