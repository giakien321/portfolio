import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Ngọc Thảo Trương | Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  );
}
