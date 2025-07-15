import "./globals.css";

export const metadata = {
  title: "Chakka Veno?",
  description: "Chakka Scene Aanu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[radial-gradient(circle,_#1e4620_0%,_#143017_60%,_#000000_100%)] min-h-dvh">
        {children}
      </body>
    </html>
  );
}
