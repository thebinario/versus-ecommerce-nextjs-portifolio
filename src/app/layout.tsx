// src/app/layout.tsx ou src/app/(root)/layout.tsx dependendo da estrutura do seu projeto
import 'tailwindcss/tailwind.css';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header';
import { CartProvider } from '@/context/CartContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Versus</title>
            <meta name="description" content="Versus" />
        </head>
        <body>
        <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
        </CartProvider>
        </body>
        </html>
    );
}
