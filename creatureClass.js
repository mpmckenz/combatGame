// Combat Status Messages
const battleResults = document.getElementById("combatMessage")
function messageContainer(battle) {
    let battleResult = document.createTextNode(battle.message);
    let container = document.createElement("p");
    let battleMessage = document.createElement("h3");
    battleMessage.appendChild(battleResult);
    container.appendChild(battleMessage);
    battleResults.appendChild(container);
}

// Object Constructor
function Creature(options) {
    this.name = options.name
    this.class = options.class;
    this.health = options.health;
    this.chanceToCrit = options.chanceToCrit;
    this.chanceToMiss = options.chanceToMiss;
    this.baseDamage = options.baseDamage
    this.healthOutputElement = options.healthOutputElement
    // this.handleEvent = function(event) {
    // }


    // function chooseHero() {
    //     document.getElementById("myHeroSelection").bind(Creature)
    // }

    // this.boundclickevent = this.clickevent.bind(this)

    this.fight = function (creature) {
        if (Math.random() < this.chanceToMiss) {
            const dodgeMessage = {
                message: `DODGE STATUS: ${creature.name} dodged ${this.name}'s attack.`
            }
            messageContainer(dodgeMessage);
        } else {
            const dmg = Math.floor(Math.random() < this.chanceToCrit
                ? this.baseDamage * 2
                : this.baseDamage)
            creature.health -= dmg
            const attackMessage = {
                message: `ATTACK STATUS: ${creature.name} has been ${this.attackVerb} by the ${this.class}'s ${this.weapon} dealing ${dmg}! The ${creature.class} is now at ${creature.health} health.`
            }
            messageContainer(attackMessage)
            // Updates Health in Character's Table
            creature.healthOutputElement.textContent = creature.health;
            this.healthOutputElement.textContent = this.health;
        }
    }
}

function heroCreature(options) {
    Creature.call(this, options)
    // this.chooseHero = 
        this.maxHealth = this.health * 1.25;
}

heroCreature.prototype = Object.create(Creature.prototype)
heroCreature.prototype.constructor = heroCreature

function battle(hero, ...monsters) {
    for (let monster of monsters) {
        while (hero.health > 0 && monster.health > 0) {
            hero.fight(monster)
            monster.fight(hero)
            // const healthMessage = {
            //     message: `HEALTH STATUS: ${hero.name} is at ${hero.health} health and ${monster.name} is ${monster.health} health.`
            // }
            // messageContainer(healthMessage)
        }
        if (hero.health <= 0 || monster.health <= 0) {
            const deadMessage = {
                message: `CHARACTER STATUS: ${hero.name} died and ${monster.name} survived.`
            }
            messageContainer(deadMessage)
        }
        
        // Updates health
        hero.healthOutputElement.textContent = hero.health;
        monster.healthOutputElement.textContent = monster.health;
    }
}


// hero.health = Math.floor(Math.random() > 0.9)
//     ? hero.maxHealth
//     : hero.health

function resetGame() {
    location.reload();
}

document.getElementById("fightButton").addEventListener("click", function () {
    battle(paladin, barbarian, wizard, ranger);
});

// document.getElementById("paladinVSgoblin").addEventListener("click", function () {
//     battle(paladin, goblin, goblin1, goblin2, goblin3, goblin4);
// });

// document.getElementById("goblinFightButton").addEventListener("click", function () {
//     battle(chooseHero());
// });

document.getElementById("resetbutton").addEventListener("click", function () {
    resetGame();
});
