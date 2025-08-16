function NoteCard({ title, listItems, onDelete, onEdit }) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-between border-l-4 border-blue-600 rounded-lg shadow-md p-4 bg-white w-[90%] mx-auto">
                <div className="flex justify-between">
                    <div>
                        <div className="font-semibold text-lg mb-2">{title}</div>
                        <ul className="list-disc ml-6">
                            {listItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <button onClick={onEdit} className="bg-blue-600 px-3 py-2 m-2 text-white rounded-lg">Edit</button>
                        <button onClick={onDelete} className="bg-red-600 px-3 py-2 m-2 text-white rounded-lg">Delete</button>
                    </div>
                </div>
                <div className="text-sm text-gray-500 text-right mt-4">
                    Created: {formattedDate}
                </div>
            </div>
        </div>
    );
}

export default NoteCard;