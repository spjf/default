notification
    run: role.function(room) {
        var timer = room.memory.timer - 1
            if(room.memory.timer = 0) {
                game.notify(
                        console.log('The level is '+Game.rooms[name].controller.level+'. The progress to the next level is '+Game.rooms[name].controller.progress+' of a total '+Game.rooms[name].controller.progressTotal)
                        console.log('-----------------------------------------------------------------------------------------------')
                        console.log('Room "'+name+'" has the following creeps;')}
                        console.log('Harvesters: ' + harvesters.length);
                        console.log('miner: ' + miners.length);
                        console.log('miner1: ' + miners1.length);
                        console.log('carrier: ' + carriers.length);
                        console.log('upgrader: ' + upgraders.length);
                        console.log('builder: ' + builders.length);
                        console.log('repairer : ' + repairers.length);
                        console.log('room2miner: ' +room2miners.length)
                        console.log('storagefill: ' +storagefills.length)
                    
                    
                    )
            }
    }