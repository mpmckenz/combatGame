// Object constructor
function Creature(options) {
    this.name = options.name
    this.health = options.health || 100
    this.maxHealth = this.health * 2
    this.chanceToCrit = options.chanceToCrit || 0.1
    this.chanceToMiss = options.chanceToMiss || 0.3
    this.baseDamage = options.baseDamage || 10


    this.fight = function (creature) {
        let message
        if (Math.random() < this.chanceToMiss) {
            message = `${this.name} missed ${creature.name}.`
        } else {
            const dmg = Math.random() < this.chanceToCrit
                ? this.baseDamage * 2
                : this.baseDamage
            creature.health -= dmg
            message = `${creature.name} has been hit! It's now at ${creature.health} health.`
        }
        console.log(message)
        return message
    }
}

const paladin = new creature ({
    name: "Lord Frukas The Brave",
    health: 120,
    baseDamage: 15,
    chanceToCrit: 0.25,
})
paladin.prototype.armor = 30
paladin.prototype.weapon = "Hellplague Long sword"

const barbarian = new creature ({
    name: "Gruulvik The Barbarian",
    health: 120,
    baseDamage: 15,
    chanceToCrit: 0.25,
})

const druid = new creature ({
    name: "Astrial"
})

const ranger = new creature ({
    name: "Xavamor The Ghost"
})
