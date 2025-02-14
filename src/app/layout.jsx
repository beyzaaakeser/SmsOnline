import './globals.css';

export const metadata = {
  title: 'Temp Number',
  description: 'Temp Number receive SMS online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
