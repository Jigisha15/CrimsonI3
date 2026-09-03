import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}