import Navbar from "@/components/navbar/Navbar";
import Footer from '@/components/footer/Footer';
import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";


export const metadata = {
  title: "Crocs Shop",
  description: "Online shop for Crocs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main>  
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>

    </html>
  );
}

//className="min-h-[78dvh]"
