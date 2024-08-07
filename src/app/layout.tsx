import type {Metadata} from "next";
import "./globals.css";

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
        </html>
    );
}
