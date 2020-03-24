const { Router } = require("express");
const router = Router();

const { getNotes, createNotes, getNote, updateNotes, deleteNotes } = require("../controllers/notes.controller");

router
  .route("/")
  .get(getNotes)
  .post(createNotes);

router
  .route("/:id")
  .get(getNote)
  .put(updateNotes)
  .delete(deleteNotes);

//post: guardar un nuevo dato
//put: actualiza todo un objeto
//delete
//patch: guardar un dato como el titulo

module.exports = router;
