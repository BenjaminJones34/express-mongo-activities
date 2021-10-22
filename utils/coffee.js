const Coffee = require("../models/coffee");

// All coffee
async function allCoffee() {
    return await Coffee.find({});
}

async function addCoffee(coffee) {
    return await new Coffee(coffee).save();
}

async function deleteAllCoffee() {
    return await Coffee.deleteMany({});
}

// One coffee
async function oneCoffee(id) {
    return await Coffee.findById(id)
}

async function editCoffee(id, coffee) {
    const currentCoffee = await oneCoffee(id);
    return await Coffee.updateOne({id}, {$set: {name: coffee.name || currentCoffee.name, origin: coffee.origin || currentCoffee.origin, strength: coffee.strength || currentCoffee.strength}});
}

async function deleteCoffee(id) {
    return await Coffee.deleteOne({id});
}

module.exports = { allCoffee, addCoffee, deleteAllCoffee, oneCoffee, editCoffee, deleteCoffee };