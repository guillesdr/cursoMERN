const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message: 'GET Request'});
notesCtrl.createNotes = (req, res) => res.json({ message: "POST Request" });

notesCtrl.getNote = (req, res) => res.json({ titulo: "Nota 1" });
notesCtrl.updateNotes = (req, res) => res.json({ message: "Nota Actualizada" });
notesCtrl.deleteNotes = (req, res) => res.json({ message: "Nota Eliminada" });

module.exports = notesCtrl;