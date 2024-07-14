import type {Metadata} from "next";
import 'tailwindcss/tailwind.css';
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "Versus",
    description: "Versus",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
        <body>{children}</body>
        <Footer/>
        </html>
    );
}
