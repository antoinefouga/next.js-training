export const metadata = {
  title: "Antoine Fouga",
  description: "Entrainement next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "black",
            padding: "2rem",
          }}
        >
          <p style={{ color: "white" }}>Mon header</p>
        </header>

        <main
          style={{
            padding: "2rem",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            backgroundColor: "red",
            padding: "2rem",
          }}
        >
          <p style={{ color: "white" }}>Mon footer</p>
        </footer>
      </body>
    </html>
  );
}
