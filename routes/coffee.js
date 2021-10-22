const router = require("express").Router();
const { allCoffee, oneCoffee, addCoffee, editCoffee, deleteCoffee, deleteAllCoffee } = require("../utils/coffee");

// All coffee
router.get("/", async (req, res) => {
    res.status(200).json({msg: "All Coffee", data: await allCoffee()});
});

router.post("/", async (req, res) => {
    res.status(201).json({msg: "Add Coffee", data: await addCoffee(req.body)});
});

router.delete("/", async (req, res) => {
    res.status(200).json({msg: "Delete All Coffee", data: await deleteAllCoffee()});
});

// One coffee
router.get("/:id", async (req, res) => {
    res.status(200).json({msg: "One Coffee", data: await oneCoffee(req.params.id)});
});

router.put("/:id", async (req, res) => {
    res.status(200).json({msg: "Edited One Coffee", data: await editCoffee(req.params.id, req.body)});
})

router.delete("/:id", async (req, res) => {
    res.status(200).json({msg: "Deleted One Coffee", data: await deleteCoffee(req.params.id)});
})

module.exports = router;