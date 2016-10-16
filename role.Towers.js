var roleTowers = {
	run: function(tower) {
		var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
		if (target.length > 0) {
					tower.attack(target);
				}
		else {
			var targets = tower.pos.findInRange(FIND_MY_CREEPS, filter: (creep) => creep.hits < creep.hitsMax)
			if (targets.length > 0) {
			    targets.sort((a,b) => a.hits - b.hits);
			    tower.heal(targets[0]);
			}
		} //console.log('find energy 'harvesters.length)
	}
};
module.exports = roleTowers;