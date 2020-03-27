const notesCtrl = {};

const NoteModel = require("../models/Note");

notesCtrl.getNotes = async (req, res) => {
  const notes = await NoteModel.find();
  res.json(notes);
};

notesCtrl.createNotes = async (req, res) => {
    const { title, content, date, author} = req.body;
    const newNote = new NoteModel({
        title:  title,
        content: content,
        date: date,
        author: author
    })

    await newNote.save();
    console.log(newNote);
    res.json({ message: "Nota Creada" });
}

notesCtrl.getNote = async (req, res) => {
    const noteId = req.params.id;
    const note = await NoteModel.findById(noteId)
    res.json(note);
}
notesCtrl.updateNotes = async (req, res) => {
    const { title, content, date, author} = req.body;
    await NoteModel.findByIdAndUpdate(req.params.id, {
    //await NoteModel.findOneAndUpdate(req.params.id, {
        title,
        author,
        content
    })
    res.json({ message: "Nota Actualizada" });
}

notesCtrl.deleteNotes = async (req, res) =>  
{
    const note = await NoteModel.findByIdAndDelete(noteId)
    res.json({ message: "Nota Eliminada" });
}

module.exports = notesCtrl;
