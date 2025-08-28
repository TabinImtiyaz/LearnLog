import Sidebar from "./sidebar/Sidebar"
import Content from "./workspace/Content"
export default function Layout() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <Content />
        </div>
    )
}