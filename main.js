var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.Upgrader');
var roleMiner = require('role.Miner');
var roleMiner1 = require('role.Miner1');
var roleHarvester1 = require('role.Harvester1');
var roleHarvester2 = require('role.Harvester2');
var roleCarrier = require('role.carrier');
var roleClaimer = require('role.Claimer');
var roleUpgrader1 = require('role.upgrader1');
var roleUpgrader2 = require('role.upgrader2');
var roleRepairer = require('role.Repairer');

module.exports.loop = function () {

    for(var name in Game.rooms) {
//        var linkFrom = Game.getObjectById('57f0d3f9d37203ed5cd46d7b')
//        var linkTo = linkTo =  Game.getObjectById('57ef93376b6ad77b5d09e336')
//        if(linkFrom.energy > 0) {linkFrom.transferEnergy(linkTo)};
        var towers = Game.rooms[name].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        for (let tower of towers) {
            		var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            		if(target != undefined) {tower.attack(target);}
//            		else if(tower.energy > 950) {
//            			var targets = Game.rooms[name].find(FIND_STRUCTURES, {filter: (structure) => {return (structure.hits < 100000 && (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART)) || (structure.hits < structure.hitsMax/2 && structure.structureType == STRUCTURE_CONTAINER)}});
//            	        targets.sort((a,b) => a.hits - b.hits);
//            		    if(targets != undefined) {tower.repair(targets[0]);}
//            		};
        }
    }
    
     for(var name in Memory.creeps) {if(!Game.creeps[name]) {delete Memory.creeps[name];}}
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.ticksToLive > 50); console.log('Harvesters: ' + harvesters.length); 
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader'); console.log('Upgraders: ' + upgraders.length); 
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.ticksToLive > 50); console.log('Miners: ' + miners.length);
        var miner1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner1' && creep.ticksToLive > 50); console.log('Miner1s: ' + miner1s.length); 
        var harvester1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester1' && creep.ticksToLive > 50); console.log('Harvester1s: ' + harvester1s.length);
        var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2' && creep.ticksToLive > 50); console.log('Harvesters2: ' + harvesters2.length); 
        var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier' && creep.ticksToLive > 50); console.log('Carriers: ' + carriers.length); 
        var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer'); console.log('claimers: ' + claimers.length);
        var upgrader1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader1'); console.log('upgrader1s: ' + upgrader1s.length);
        var upgrader2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader2'); console.log('upgrader2s: ' + upgrader1s.length);
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer'); console.log('repairers: ' + repairers.length);
        
        
        if(harvesters.length < 2) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new harvester: ' + newName);}
        else if(upgraders.length < 1) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new upgrader: ' + newName);}
        else if(harvester1s.length < 4) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester1', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new harvester1: ' + newName);}
        else if(upgraders.length < 3) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new upgrader: ' + newName);}
        else if(miners.length < 2) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'miner', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new miner: ' + newName);}
        else if(miner1s.length < 1) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'miner1', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new miner1: ' + newName);}
        else if(repairers.length < 1) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'repairer', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new repairer: ' + newName);}
//        else if(carriers.length < 1) {var newName = Game.spawns.Spawn1.createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'carrier', working: 'true'}); console.log('Spawning new carrier: ' + newName);}
//        else if(harvesters1.length < 4) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester1', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new harvester1: ' + newName);}
//        else if(harvesters2.length < 4) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester2', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new harvester2: ' + newName);}
//        else if(claimers.length < 1) {var newName = Game.spawns.Spawn1.createCreep([CLAIM,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'claimer', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new claimer: ' + newName);}        
//        else if(upgrader1s.length < 2) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader1', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new upgrader1: ' + newName);}
//        else if(upgrader2s.length < 2) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader2', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new upgrader2: ' + newName);}
        
    for(var name in Game.creeps) {
                var creep = Game.creeps[name];
                //console.log(creep+' is a '+creep.memory.role+' and has '+ creep.ticksToLive)
                    if(creep.memory.role == 'harvester') {roleHarvester.run(creep);}
                    if(creep.memory.role == 'upgrader') {roleUpgrader.run(creep);}
                    if(creep.memory.role == 'miner') {roleMiner.run(creep);}
                    if(creep.memory.role == 'miner1') {roleMiner1.run(creep);}
                    if(creep.memory.role == 'harvester1') {roleHarvester1.run(creep);}
                    if(creep.memory.role == 'harvester2') {roleHarvester2.run(creep);}
                    if(creep.memory.role == 'carrier') {roleCarrier.run(creep);}
                    if(creep.memory.role == 'claimer') {roleClaimer.run(creep);}
                    if(creep.memory.role == 'upgrader1') {roleUpgrader1.run(creep);}
                    if(creep.memory.role == 'upgrader2') {roleUpgrader1.run(creep);}
                    if(creep.memory.role == 'repairer') {roleRepairer.run(creep);}
    }           

    for(var name in Game.rooms) {console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy with a maximum of '+Game.rooms[name].energyCapacityAvailable+' energy.' )
        if(Game.rooms[name].controller.safeMode > 0) {
        console.log('-- SAFE MODE ENABLED IN ROOM '+name+' ----  The are '+ Game.rooms[name].controller.safeMode +' ticks left until it is disabled -----------------------------------------------------')
        }
    };
    console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------')
}