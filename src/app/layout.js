
import "./globals.css";
import NavBar from "./components/navBar/page";
import WebDefaultBgColor from "./components/webDefaultColor/page";



export const metadata = {
  title: "devMasrafi PortFolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" font-Roboto text-darkBlue ">
        <WebDefaultBgColor/>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
