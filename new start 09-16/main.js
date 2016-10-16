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
var construction = 0 // _(Game.rooms.W42S48.find(FIND_CONSTRUCTION_SITES)).size();

module.exports.loop = function () {


//Creating Creep Filters
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');     console.log('Harvesters: ' + harvesters.length); 
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader'); console.log('upgrader: ' + upgraders.length);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder'); console.log('builder: ' + builders.length);
    var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner'); console.log('miner: ' + miners.length);
    var miners1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner1'); console.log('miner1: ' + miners1.length);
    var miners2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner2'); //console.log('miner2: ' + miners2.length);
    var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier'); console.log('carrier: ' + carriers.length);
    var carriers2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier2'); //console.log('carrier2: ' + carriers2.length);
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer'); console.log('repairer : ' + repairers.length);
    var builders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder2'); //console.log('builder2: ' + builders2.length);
    var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');     console.log('Harvesters2: ' + harvesters2.length); 
    var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer'); console.log('Claimers: ' + claimers.length)
  // console.log(Game.spawn1.energyAvailable)
    
    if(harvesters.length < 2) { var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'harvester', working: 'true', room: 'empty'}); console.log('Spawning new harvester: ' + newName);}
    else if(miners.length < 2) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,MOVE,MOVE], undefined, {role: 'miner', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new miner: ' + newName);}
    else if(carriers.length < 1) {var newName = Game.spawns.Spawn1.createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'carrier', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new carrier: ' + newName);}
    else if(miners1.length < 3) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,MOVE,MOVE], undefined, {role: 'miner1', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new miner1: ' + newName);}
    else if(carriers.length < 4) {var newName = Game.spawns.Spawn1.createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'carrier', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new carrier: ' + newName);}
    else if(upgraders.length < 2) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new upgrader: ' + newName);}
    else if(builders.length < 2) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new builder: ' + newName);}
    else if(upgraders.length < 6) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new upgrader: ' + newName);}
    else if(repairers.length < 3) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'repairer', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new repairer: ' + newName);}
    //else if(harvesters2.length < 1) { var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester2', working: 'true', SourcePath: 'empty', StoragePath: 'empty', room: 'W37S7'}); console.log('Spawning new harvester2: ' + newName);}
    //else if(claimers.length < 1) {var newName = Game.spawns.Spawn1.createCreep([CLAIM,CLAIM,CLAIM,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'claimer', path: 'empty', room: 'W37S7'}); console.log('Spawning new claimer: ' +newName)};
    
    
    for(var name in Game.rooms) {
       var hostiles = Game.rooms[name].find(FIND_HOSTILE_CREEPS);
        if(hostiles.length > 0) {
            var username = hostiles[0].owner.username;
        //   Game.notify(`User ${username} spotted in room ${roomName}`);
           var towers = Game.rooms[name].find(
                FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
          towers.forEach(tower => tower.attack(hostiles[0]));
       }
   }

    for(var name in Game.creeps) {
            var creep = Game.creeps[name];
                if(creep.memory.role == 'harvester2') {roleHarvester2.run(creep);}
                if(creep.memory.role == 'upgrader') {roleUpgrader.run(creep);}
                if(creep.memory.role == 'builder') {roleBuilder.run(creep);}
                if(creep.memory.role == 'builder2') {roleBuilder2.run(creep);}
                if(creep.memory.role == 'miner') {roleMiner.run(creep);}
                if(creep.memory.role == 'miner1') {roleMiner1.run(creep);}
                if(creep.memory.role == 'miner2') {roleMiner2.run(creep);}
                if(creep.memory.role == 'carrier') {roleCarrier.run(creep);}
                if(creep.memory.role == 'carrier2') {roleCarrier2.run(creep);}
                if(creep.memory.role == 'repairer') {roleRepairer.run(creep);}
                if(creep.memory.role == 'roleScout') {roleScout.run(creep);}
                if(creep.memory.role == 'storagefill') {storagefill.run(creep);}
                if(creep.memory.role == 'roleSource') {roleSource.run(creep);}
                if(creep.memory.role == 'claimer') {roleClaimer.run(creep);}
                if(creep.memory.role == 'harvester') {roleHarvester.run(creep);}
    }
for(var name in Game.rooms) {console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy with a maximum of '+Game.rooms[name].energyCapacityAvailable+' energy.' )};
console.log('---------------END--------------------END----------------------END------------------')    
}