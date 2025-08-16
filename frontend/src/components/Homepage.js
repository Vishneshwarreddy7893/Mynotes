import { useState, useEffect } from 'react';
import NoteCard from './NoteCard';
import NewNoteForm from './NewNoteForm';

function Homepage() {
    const [notes, setNotes] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingNote, setEditingNote] = useState(null);

    // Fetch notes from backend
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/notes', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                console.log("Fetched notes:", data);

                // Ensure data is an array
                setNotes(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error fetching notes:", error);
                setNotes([]);
            }
        };

        fetchNotes();
    }, []);

    // Add or update a note
    const handleSave = async (note) => {
        try {
            if (editingNote) {
                // Edit existing note
                const response = await fetch(`http://localhost:5000/api/notes/${editingNote._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                    body: JSON.stringify(note),
                });
                const updatedNote = await response.json();
                setNotes(notes =>
                    notes.map(n => n._id === updatedNote._id ? updatedNote : n)
                );
            } else {
                // Add new note
                const response = await fetch('http://localhost:5000/api/notes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                    body: JSON.stringify(note),
                });
                const newNote = await response.json();
                setNotes(notes => [...notes, newNote]);
            }

            // Reset form state
            setShowForm(false);
            setEditingNote(null);
        } catch (error) {
            console.error("Error saving note:", error);
        }
    };

    // Delete a note
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/notes/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setNotes(notes => notes.filter(note => note._id !== id));
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    // Edit a note
    const handleEdit = (id) => {
        const noteToEdit = notes.find(note => note._id === id);
        setEditingNote(noteToEdit);
        setShowForm(true);
    };

    return (
        <div>
            <header className="bg-gray-800 text-center text-white text-3xl py-5 font-serif">
                📝 My Notes App
            </header>

            <div className="flex justify-center items-center m-6">
                <button
                    onClick={() => { setShowForm(true); setEditingNote(null); }}
                    className="bg-green-400 text-white rounded-full text-1xl p-4"
                >
                    + Add New Note
                </button>
            </div>

            {showForm && (
                <NewNoteForm
                    onSave={handleSave}
                    onCancel={() => {
                        setShowForm(false);
                        setEditingNote(null);
                    }}
                    initialData={editingNote}
                />
            )}

            <div className="space-y-6 px-4">
                {Array.isArray(notes) && notes.length > 0 ? (
                    notes.map((note) => (
                        <NoteCard
                            key={note._id}
                            title={note.title}
                            listItems={note.listItems}
                            onDelete={() => handleDelete(note._id)}
                            onEdit={() => handleEdit(note._id)}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No notes yet. Add one!</p>
                )}
            </div>
        </div>
    );
}

export default Homepage;