export default function Sidebar() {
    return (
        <div className="w-64 bg-zinc-900 text-zinc-200 h-screen p-4">
            <h2 className="text-xl font-bold mb-6">LearnLog</h2>
            <ul className="space-y-2">
                <li className="p-2 rounded hover:bg-zinc-800 cursor-pointer">Home</li>
                <li className="p-2 rounded hover:bg-zinc-800 cursor-pointer">Search</li>
                <li className="p-2 rounded hover:bg-zinc-800 cursor-pointer">Library</li>
            </ul>
        </div>
    )
}