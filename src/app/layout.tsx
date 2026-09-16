import type { Metadata } from "next";
import { Manrope, Baloo_2 } from "next/font/google";
import "./globals.css";
import { brand } from "@/data/content";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.claim}`,
  description:
    "Leasing de motos de trabajo para repartidores y conductores de apps en Argentina. Sin bancos, cuotas semanales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${manrope.variable} ${baloo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
