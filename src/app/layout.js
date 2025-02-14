import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./compoments/Navbar";
import Bootstrapclient from "./compoments/Bootstrapclient";
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Footer from "./compoments/Footer";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="bg-light">
        <Navbar />
        {children}
        <Footer />
      </body>
      <Bootstrapclient />

    </html>
  );
}
