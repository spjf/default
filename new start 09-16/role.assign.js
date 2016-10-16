roleAssign = {
var roleHarvester = require('role.harvester');
var roleHarvester2 = require('role.harvester2');
var roleUpgrader = require('role.upgrader');
var roleCarrier = require('role.carrier');
var roleCarrier2 = require('role.carrier2');
var roleMiner = require('role.miner');
var roleMiner1 = require('role.miner1');
var roleMiner2 = require('role.miner2');
var roleBuilder = require('role.builder');
var roleBuilder2 = require('role.builder2');
var roleRepairer = require('role.repairer');
var roleScout = require('role.Scout');
var storagefill = require('storagefill');
var roleSource = require('roleSource');
var roletowers = require('towers');
var roleClaimer = require('roleClaimer');

if(creep.pos.roomName != creep.memory.room) {
	if(creep.memory.path = 'empty') {
		creep.memory.path = creep.pos.findPathTo(creep.memory.room)
	};
	var path = creep.memory.path
    creep.move(path[0].direction)
}
else {
	if(creep.memory.role == 'harvester') {roleHarvester.run(creep);};
	if(creep.memory.role == 'harvester2') {roleHarvester2.run(creep);};
	if(creep.memory.role == 'upgrader') {roleUpgrader.run(creep);};
	if(creep.memory.role == 'builder') {roleBuilder.run(creep);};
	if(creep.memory.role == 'builder2') {roleBuilder2.run(creep);};
	if(creep.memory.role == 'miner') {roleMiner.run(creep);};
	if(creep.memory.role == 'miner1') {roleMiner1.run(creep);};
	if(creep.memory.role == 'miner2') {roleMiner2.run(creep);};
	if(creep.memory.role == 'carrier') {roleCarrier.run(creep);};
	if(creep.memory.role == 'carrier2') {roleCarrier2.run(creep);};
	if(creep.memory.role == 'repairer') {roleRepairer.run(creep);};
	if(creep.memory.role == 'roleScout') {roleScout.run(creep);};
	if(creep.memory.role == 'storagefill') {storagefill.run(creep);};
	if(creep.memory.role == 'roleSource') {roleSource.run(creep);};
	if(creep.memory.role == 'claimer') {roleClaimer.run(creep);};
}	
};
module.exports = roleAssign