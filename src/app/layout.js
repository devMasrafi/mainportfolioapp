
import NavBar from "@/components/navBar/page";
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Roboto">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}