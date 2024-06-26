import Navbar from "@/components/navbar/Navbar";
import Footer from '@/components/footer/Footer';
import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import localFont from 'next/font/local';


export const metadata = {
  title: "Crocs Shop",
  description: "Online shop for Crocs",
};

const Iran = localFont({src: '../../public/fonts/iran/ttf/IRAN.ttf'})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${Iran.className}`}>
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
