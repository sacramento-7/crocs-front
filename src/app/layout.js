import Navbar from "@/components/navbar/Navbar";
import Footer from '@/components/footer/Footer';
import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
          <main className="min-h-[78dvh]">  
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </AuthProvider>
      </body>

    </html>
  );
}

//className="min-h-[78dvh]"
