import { useState, useEffect } from "react";

function NewNoteForm({ onSave, onCancel, initialData }) {
    const [title, setTitle] = useState(initialData ? initialData.title : "");
    const [items, setItems] = useState(initialData ? initialData.listItems : [""]);

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setItems(initialData.listItems.length > 0 ? initialData.listItems : [""]);
        } else {
            setTitle("");
            setItems([""]);
        }
    }, [initialData]);

    const handleItemChange = (value, index) => {
        const updated = [...items];
        updated[index] = value;
        setItems(updated);
    };

    const handleAddItem = () => {
        setItems([...items, ""]);
    };

    const handleRemoveItem = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {
            title,
            listItems: items.filter(item => item.trim() !== "")
        };
        onSave(note);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md w-[90%] mx-auto">
            <input
                className="w-full border p-2 mb-2"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {items.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input
                        className="flex-1 border p-2"
                        placeholder={`List item ${index + 1}`}
                        value={item}
                        onChange={(e) => handleItemChange(e.target.value, index)}
                    />
                    <button
                        className="ml-2 text-red-600"
                        onClick={() => handleRemoveItem(index)}
                    >
                        ❌
                    </button>
                </div>
            ))}
            <button className="text-blue-600 mb-2" onClick={handleAddItem}>+ Add Item</button>
            <div className="flex gap-4 mt-4">
                <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Save Note</button>
                <button onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
            </div>
        </div>
    );
}

export default NewNoteForm;