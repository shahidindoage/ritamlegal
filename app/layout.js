import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>

      </head>
      <body
        className={`antialiased`}
      >
        <Header/>
        <div style={{paddingTop:"5.5em"}}>
        {children}
        </div>
        <Footer/>

      </body>
    </html>
  );
}
