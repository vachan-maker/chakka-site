import "./globals.css";

export const metadata = {
  title: "Chakka Veno?",
  description: "Chakka Scene Aanu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        {children}
      </body>
    </html>
  );
}
