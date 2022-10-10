   //this is a road
var road= [false, false, false, false, true, false, false, false, true, false];


function start(){
     console.log(moveCar(road));
    
}
//determines if the car is broken or just damaged 

function moveCar(roadWithDamages) {
    var i = 0;
    var length = (roadWithDamages && roadWithDamages.length) || 0;
    var isCarDamaged = false;
    var broke = "The car is broken";
    while (i < length) {
        if (roadWithDamages[i]) {
            if (isCarDamaged) {
                console.log("The car is broken");
                return;
            }

            isCarDamaged = true;
            console.log("The car is damaged");

            i++;
            continue;
        }
        
        i++;
        console.log("The car goes to step " + i);
    }
    if( isCarDamaged = true) {
        return;
    }
}
