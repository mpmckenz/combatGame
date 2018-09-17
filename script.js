// Enemies
const goblin = new Creature({
    name: "1st Goblin",
    class: "goblin",
    health: 30,
    chanceToCrit: 0.05,
    chanceToMiss: 0.45,
    baseDamage: 6,
    healthOutputElement: document.getElementById("goblinCurrentHealth")
})
const goblin1 = new Creature({
    name: "2nd Goblin",
    class: "goblin",
    health: 30,
    chanceToCrit: 0.05,
    chanceToMiss: 0.45,
    baseDamage: 6,
    healthOutputElement: document.getElementById("goblin1CurrentHealth")
})
const goblin2 = new Creature({
    name: "3rd Goblin",
    class: "goblin",
    health: 30,
    chanceToCrit: 0.05,
    chanceToMiss: 0.45,
    baseDamage: 6,
    healthOutputElement: document.getElementById("goblin2CurrentHealth")
})
const goblin3 = new Creature({
    name: "4th Goblin",
    class: "goblin",
    health: 30,
    chanceToCrit: 0.05,
    chanceToMiss: 0.45,
    baseDamage: 6,
    healthOutputElement: document.getElementById("goblin3CurrentHealth")
})
const goblin4 = new Creature({
    name: "5th Goblin",
    class: "goblin",
    health: 30,
    chanceToCrit: 0.05,
    chanceToMiss: 0.45,
    baseDamage: 6,
    healthOutputElement: document.getElementById("goblin4CurrentHealth")
})
const goblin5 = new Creature({
    name: "6th Goblin",
    class: "goblin",
    health: 30,
    chanceToCrit: 0.05,
    chanceToMiss: 0.45,
    baseDamage: 6,
    healthOutputElement: document.getElementById("goblin5CurrentHealth")
})
const goblin6 = new Creature({
    name: "7th Goblin",
    class: "goblin",
    health: 30,
    chanceToCrit: 0.05,
    chanceToMiss: 0.45,
    baseDamage: 6,
    healthOutputElement: document.getElementById("goblin6CurrentHealth")
})

// Heros
const paladin = new heroCreature({
    name: "Lord Farkas The Brave",
    class: "paladin",
    health: 110,
    baseDamage: 17,
    chanceToCrit: 0.09,
    chanceToMiss: 0.42,
    healthOutputElement: document.getElementById("paladinCurrentHealth")
})

const barbarian = new heroCreature({
    name: "Gruulvik The Raider",
    class: "barbarian",
    health: 120,
    baseDamage: 19,
    chanceToCrit: 0.04,
    chanceToMiss: 0.49,
    healthOutputElement: document.getElementById("barbarianCurrentHealth")
})

const wizard = new heroCreature({
    name: "Astrial The Wise",
    class: "wizard",
    health: 80,
    chanceToCrit: 0.56,
    chanceToMiss: 0.27,
    baseDamage: 6,
    healthOutputElement: document.getElementById("wizardCurrentHealth")
})

const ranger = new heroCreature({
    name: "Xavamor The Ghost",
    class: "ranger",
    health: 60,
    chanceToCrit: 0.85,    
    chanceToMiss: 0.20,
    baseDamage: 4.5,
    healthOutputElement: document.getElementById("rangerCurrentHealth")
})

Creature.prototype.weapon = function () {
}
paladin.weapon = "Long Sword of Light"
barbarian.weapon = "Cursed Battleaxe"
wizard.weapon = "Cataclysmic Staff"
ranger.weapon = "Enchanted Bow"
goblin.weapon = "dagger"

Creature.prototype.attackVerb = function () {
}

// Goblin Attacks
let goblinAttack = ["jabbed", "shanked", "wounded"];
let choosegoblinAttack = goblinAttack[Math.floor(Math.random() * goblinAttack.length)]
// Paladin Attacks
let paladinAttack = ["stabbed", "sliced", "gutted", "jabbed", "struck"];
let choosepaladinAttack = paladinAttack[Math.floor(Math.random() * paladinAttack.length)]
// Barbarian Attacks
let barbarianAttack = ["lascerated", "hacked", "cleaved", "disembowelled", "slashed", "pulverized"];
let choosebarbarianAttack = barbarianAttack[Math.floor(Math.random() * barbarianAttack.length)]
// Wizard Attacks
let wizardAttack = ["incinerated", "crushed", "attacked by reanimated zombies", "shocked by a lightning storm", "mutilated"];
let choosewizardAttack = wizardAttack[Math.floor(Math.random() * wizardAttack.length)]
// Ranger Attacks
let rangerAttack = ["shot", "burned", "poisoned", "struck", "blinded"];
let chooserangerAttack = rangerAttack[Math.floor(Math.random() * rangerAttack.length)]

// Apply Attack to Attack Status
goblin.attackVerb = choosegoblinAttack
// goblin1.attackVerb = choosegoblinAttack
// goblin2.attackVerb = choosegoblinAttack
// goblin3.attackVerb = choosegoblinAttack
// goblin4.attackVerb = choosegoblinAttack
// goblin5.attackVerb = choosegoblinAttack
// goblin6.attackVerb = choosegoblinAttack
// goblin7.attackVerb = choosegoblinAttack
paladin.attackVerb = choosepaladinAttack
barbarian.attackVerb = choosebarbarianAttack
wizard.attackVerb = choosewizardAttack
ranger.attackVerb = chooserangerAttack

// paladin.prototype.armor = 30
