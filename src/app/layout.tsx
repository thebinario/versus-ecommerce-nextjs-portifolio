import 'tailwindcss/tailwind.css';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header';


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="pt">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Versus</title>
            <meta name="description" content='Versus'/>
        </head>
        <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
