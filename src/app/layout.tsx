import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/data/content";

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
			<body className="antialiased">{children}</body>
		</html>
	);
}
