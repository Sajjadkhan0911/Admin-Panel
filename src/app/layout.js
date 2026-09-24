import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >

      <body>


        <div className="flex min-h-screen ">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>

        </div>
      </body>
    </html>
  );
}
