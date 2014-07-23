
var user = prompt("What kind of prank do you want to pull? You can choose from CLOCKS, CRICKETS, or GLITTER").toUpperCase();

var adventurePranks = function() {    
    switch (user) {
        case 'CLOCKS':
            var timing = prompt("A classic prank, good choice! Are you going to prank at night? YES or NO?").toUpperCase();
            
            var sneaky = prompt("Can you be super sneaky? YES or NO?").toUpperCase();
            if (timing === "YES" || sneaky === "YES") {
                console.log("You sneak into the enemy camp and quietly place alarm clocks under their bunks. Sit back and wait for the cacophony to ensue!")
            }
            else {
                console.log("You're not sneaky and you tried to place the clocks during the day...you better pray for a rescue mission because your caught!")
            }
            break;
        case 'CRICKETS':
            var creepy = prompt("Creepy crawlies are a great way to give someone the heebie jeebies! Do you have the stomach to handle the crickets? YES or NO?").toUpperCase();
            var timeAlone = prompt("Will you have time alone in a room to place the crickets? YES or NO?").toUpperCase();
            if (creepy && timeAlone === "YES") {
                console.log("You have what it takes! As you walk away from the bathroom you hear the screams of unsuspecting girls as they try to flee from their insect tormentors!");
            }
            else {
                console.log("Pathetic! Your friends shake their heads in dismay as the prank goes horribly wrong! This prank is not for the weak or feeble minded! Get some clocking in and try again later.")
            }
            break;
        case 'GLITTER':
            var counterAttack = prompt("Is this a counter attack? YES or NO?").toUpperCase();
            var takeTheHeat = prompt("Can you take the heat when sweaty glitter covered girls are out for blood? YES or NO?").toUpperCase();
            if (counterAttack != "YES") {
                console.log("You just violated the Squirrel code of conduct! Go home and think about what you've done!");
            }
            else if (counterAttack && takeTheHeat === "YES") {
                console.log("Get em! Glitter goes flying in your carefully calculated counter attack and dozens of screaming girls are wiping glitter from their glistening faces! Time to run!");
            }
            else {
                console.log("Better leave this kinda thing to the professionals, we wouldn't want you breaking a nail.");
            }
            break;
        default :
            console.log("Good idea but you don't have the resources for that one. Go add some more ammo at https://github.com/kgstew/pranks ")
    }
}    

adventurePranks();