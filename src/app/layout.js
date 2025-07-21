import "./globals.css";

export const metadata = {
  title: "Chakka.site | Fresh Chakka",
  description: "Welcome to Chakka.site – a weird and wonderful mix of fun mini-games, handy tools, and random experiments cooked up by me and my friends for absolutely no reason (except fun). “Chakka” means jackfruit in Malayalam—so yeah, expect a site that's a little spiky, kinda sweet, and totally unexpected. Dive in, click stuff, waste time, or maybe even be productive. No ads, no nonsense—just good internet fruit",
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
