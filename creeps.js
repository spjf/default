/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creeps');
 * mod.thing == 'a thing'; // true
 */
 var creeps = {
     run: function(creeps)
        for(var name in Memory.creeps) {if(!Game.creeps[name]) {delete Memory.creeps[name];}}
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'); console.log('Harvesters: ' + harvesters.length); 
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader'); console.log('upgraders: ' + upgraders.length);
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner'); console.log('miners: ' + miners.length);
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder'); console.log('builders: ' + builders.length);
        var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier'); console.log('carriers: ' + carriers.length);
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer'); console.log('repairers: ' + repairers.length);
        
        if(harvesters.length < 4) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'harvester', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new harvester: ' + newName);}
        else if(miners.length < 3) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,MOVE,MOVE], undefined, {role: 'miner', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new miner: ' + newName);}
        else if(upgraders.length < 4) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new upgrader: ' + newName);}
        else if(builders.length < 6) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new builder: ' + newName);}
        else if(harvesters.length < 10) {var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new harvester: ' + newName);}
        //else if(carriers.length < 4) {var newName = Game.spawns.Spawn1.createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'carrier', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new carrier: ' + newName);}
        //else if(repairers.length < 4) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'repairer', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new repairer: ' + newName);}
        //else if(upgraders.length < 4) {var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', working: 'true', source: 'empty', room: 'empty'}); console.log('Spawning new upgrader: ' + newName);}
        
        
    for(var name in Game.creeps) {
                var creep = Game.creeps[name];
                    if(creep.memory.role == 'miner') {roleMiner.run(creep);}
                    if(creep.memory.role == 'harvester') {roleHarvester.run(creep);}
                    if(creep.memory.role == 'upgrader') {roleUpgrader.run(creep);}
                    if(creep.memory.role == 'builder') {roleBuilder.run(creep);}
                    if(creep.memory.role == 'carrier') {roleCarrier.run(creep);}
                    if(creep.memory.role == 'repairer') {roleRepairer.run(creep);}
    } 
 };    
module.exports = {creeps};