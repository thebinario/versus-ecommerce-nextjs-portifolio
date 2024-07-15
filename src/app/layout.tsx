import type { Metadata } from 'next';
import 'tailwindcss/tailwind.css';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header';
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
    title: 'Versus',
    description: 'Versus',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </head>
        <body>
        <Header />
        <ThemeToggle />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
