import type { Metadata } from "next";
import { Poppins, Libre_Baskerville, IBM_Plex_Mono} from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const libre = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre',
  display: 'swap',
});

const mono = IBM_Plex_Mono({ 
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Frankz | Ingeniero de Software",
  description: "Portafolio profesional de Frankz, desarrollador especializado en Backend, DevOps, Infraestructura Cloud (AWS) y Microservicios.",
  keywords: ["Backend Developer", "DevOps", "Infrastructure", "AWS", "Node.js", "Portfolio", "Kubernetes", "Spring Boot"],
  authors: [{ name: "Frankz" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://frankz.dev",
    title: "Frankz - Ingeniero de Software",
    description: "Ingeniero de software experto en sistemas distribuidos y arquitectura cloud.",
    siteName: "Frankz Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${libre.variable} ${mono.variable}`}>
      <body className="font-sans antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
