import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Temp Number',
  description: 'Temp Number Çevrimiçi SMS Al',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
