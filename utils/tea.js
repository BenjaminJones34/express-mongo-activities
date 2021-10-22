const Tea = require("../models/tea");

// All Tea
async function allTea() {
    return await Tea.find({});
}

async function addTea(tea) {
    return await new Tea(tea).save();
}

async function deleteAllTea() {
    return await Tea.deleteMany({});
}

// One Tea
async function oneTea(id) {
    return await Tea.findById(id)
}

async function editTea(id, tea) {
    const currentTea = await oneTea(id);
    return await Tea.updateOne({id}, {$set: {name: tea.name || currentTea.name, origin: tea.origin || currentTea.origin, strength: tea.strength || currentTea.strength}});
}

async function deleteTea(id) {
    return await Tea.deleteOne({id});
}

module.exports = { allTea, addTea, deleteAllTea, oneTea, editTea, deleteTea };