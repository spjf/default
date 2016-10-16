var roletowers = {
    run: function(towers){
        console.log(towers)
        if (hostiles.length > 0) {
            towers.forEach(tower => tower.attack(hostiles[0]));
        } 
    } 
};
module.exports = roletowers
