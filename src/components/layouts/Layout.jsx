
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Right side: header + content */}
      <div className="flex-1 ml-56">
        
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="min-h-screen">
          {children}
        </main>

      </div>
    </div>
  );
}
