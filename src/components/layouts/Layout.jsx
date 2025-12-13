
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-56">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
