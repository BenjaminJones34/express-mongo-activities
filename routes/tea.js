const router = require("express").Router();
const { allTea, oneTea, addTea, editTea, deleteTea, deleteAllTea } = require("../utils/tea");

// All Tea
router.get("/", async (req, res) => {
    res.status(200).json({msg: "All Tea", data: await allTea()});
});

router.post("/", async (req, res) => {
    res.status(201).json({msg: "Add Tea", data: await addTea(req.body)});
});

router.delete("/", async (req, res) => {
    res.status(200).json({msg: "Delete All Tea", data: await deleteAllTea()});
});

// One Tea
router.get("/:id", async (req, res) => {
    res.status(200).json({msg: "One Tea", data: await oneTea(req.params.id)});
});

router.put("/:id", async (req, res) => {
    res.status(200).json({msg: "Edited One Tea", data: await editTea(req.params.id, req.body)});
})

router.delete("/:id", async (req, res) => {
    res.status(200).json({msg: "Deleted One Tea", data: await deleteTea(req.params.id)});
})

module.exports = router;