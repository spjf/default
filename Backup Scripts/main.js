var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleCarrier = require('role.carrier');
var roleMiner = require('role.miner');
var roleMiner1 = require('role.miner1');
var roleBuilder = require('role.builder');
var roleBuilder2 = require('role.builder2');
var roleRepairer = require('role.repairer');
var roleScout = require('role.Scout');
var storagefill = require('storagefill');
var roleSource = require('roleSource');
var construction = _(Game.rooms.W42S49.find(FIND_CONSTRUCTION_SITES)).size();

module.exports.loop = function () {
    console.log('---------------START--------------------START----------------------START------------------')
    for(var name in Memory.creeps) {if(!Game.creeps[name]) {delete Memory.creeps[name];}}

    for(var name in Game.rooms) {console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy with a maximum of '+Game.rooms[name].energyCapacityAvailable+' energy.' );
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
    if(Game.rooms.W42S49.controller.ticksToDowngrade < '1500') {console.log('WARNING DOWNGRADE IMMERMENT')
    Game.notify('WARNING DOWNGRADE IMMERMENT')}
    console.log('The level is '+Game.rooms[name].controller.level+'. The progress to the next level is '+Game.rooms[name].controller.progress+' of a total '+Game.rooms[name].controller.progressTotal)
        console.log('-----------------------------------------------------------------------------------------------')
        console.log('Room "'+name+'" has the following creeps;')}

//Creating Creep Filters
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');     console.log('Harvesters: ' + harvesters.length); 
    var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner'); console.log('miner: ' + miners.length);
    var miners1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner1'); console.log('miner1: ' + miners1.length);
    var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier'); console.log('carrier: ' + carriers.length);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader'); console.log('upgrader: ' + upgraders.length);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder'); console.log('builder: ' + builders.length);
    var builders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder2'); console.log('builder2: ' + builders2.length);
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer'); console.log('repairer : ' + repairers.length);
    var roleScouts = _.filter(Game.creeps, (creep) => creep.memory.role == 'roleScout'); console.log('roleScout: ' +roleScouts.length)
    var storagefills = _.filter(Game.creeps, (creep) => creep.memory.role == 'storagefill'); console.log('storagefill: ' +storagefills.length)
    var roleSources = _.filter(Game.creeps, (creep) => creep.memory.role == 'roleSource'); console.log('roleSource: ' +storagefills.length)
    for(var name in Game.creeps) {var creep = Game.creeps[name]; console.log(creep+' is a "'+creep.memory.role+' They have "'+creep.ticksToLive+'" ticks to live. They are carrying '+_.sum(creep.carry)+'"/"'+creep.carryCapacity+'" energy.');}
        console.log('-----------------------------------------------------------------------------------------------')

//Creating Creeps
   if(harvesters.length < 1) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'harvester'}); console.log('Spawning new harvester: ' + newName);}
    else if(miners.length < 1) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,MOVE,MOVE], undefined, {role: 'miner', working: 'true'}); console.log('Spawning new miner: ' + newName);}
    else if(miners1.length < 1) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,MOVE,MOVE], undefined, {role: 'miner1', working: 'true'}); console.log('Spawning new miner1: ' + newName);}
        else if(carriers.length < 4) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE], undefined, {role: 'carrier', working: 'true'}); console.log('Spawning new carrier: ' + newName);}
        else if(miners.length < 3) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,MOVE,MOVE], undefined, {role: 'miner', working: 'true'}); console.log('Spawning new miner: ' + newName);}
        else if(miners1.length < 3) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,MOVE,MOVE], undefined, {role: 'miner1', working: 'true'}); console.log('Spawning new miner1: ' + newName);}
        else if(storagefills.length < 1) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'storagefill', working: 'true'}); console.log('Spawning new storagefill: ' + newName);}
        else if(roleSources.length < 1) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'roleSource', working: 'true'}); console.log('Spawning new roleSource: ' + newName);}
        else if(upgraders.length < 2) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', working: 'true'}); console.log('Spawning new upgrader: ' + newName);}
        else if(builders.length < 4) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder', working: 'true'}); console.log('Spawning new builder: ' + newName);}
        else if(builders2.length < 4) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder2', working: 'true'}); console.log('Spawning new builder2: ' + newName);}
        else if(repairers.length < 6) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'repairer', working: 'true'}); console.log('Spawning new repairer: ' + newName);}
        else if(construction == '0' && storagefills.length < 10) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'storagefill', working: 'true'}); console.log('Spawning new storagefill: ' + newName);}
        else if(roleScouts.length < 3) {var newName = Game.spawns.Spawn1.createCreep(
            [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,
            MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,ATTACK], undefined, {role: 'roleScout'}); console.log('Spawning new scout: ' +newName);}
//    var linkFrom = Game.getObjectById('578a812625d77d1c4b8e9cfa');
//    var linkTo = Game.getObjectById('578a74cd9868966125a7ff88');
//    if(linkFrom.energy > 600){
//        linkFrom.transferEnergy(linkTo);
//    }
    
    for(var name in Game.creeps) {
            var creep = Game.creeps[name];
                if(creep.memory.role == 'harvester') {roleHarvester.run(creep);}
                if(creep.memory.role == 'upgrader') {roleUpgrader.run(creep);}
                if(creep.memory.role == 'builder') {roleBuilder.run(creep);}
                if(creep.memory.role == 'builder2') {roleBuilder2.run(creep);}
                if(creep.memory.role == 'miner') {roleMiner.run(creep);}
                if(creep.memory.role == 'miner1') {roleMiner1.run(creep);}
                if(creep.memory.role == 'carrier') {roleCarrier.run(creep);}
                if(creep.memory.role == 'repairer') {roleRepairer.run(creep);}
                if(creep.memory.role == 'roleScout') {roleScout.run(creep);}
                if(creep.memory.role == 'storagefill') {storagefill.run(creep);}
                if(creep.memory.role == 'roleSource') {roleSource.run(creep);}

    }

console.log('---------------END--------------------END----------------------END------------------')    
}