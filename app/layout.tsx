import type { Metadata } from "next";
import { Jost, La_Belle_Aurore } from "next/font/google";
import "@/assets/styles/global.css";
import styles from "@/assets/styles/page.module.css";

const jost = Jost({
	variable: "--ff-jost",
	subsets: ["latin"],
});

const labelle = La_Belle_Aurore({
	weight: ["400"],
	variable: "--ff-labelle",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Design By TACO",
	description:
		"Hi! I'm Nico, uni computer science student. Passionate about UX/UI design. No details spared, never.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<script
					src='https://kit.fontawesome.com/09c6b510c2.js'
					crossOrigin='anonymous'></script>
			</head>
			<body className={`${styles.body_wrapper} ${jost.variable} ${labelle.variable}`}>
				{children}
			</body>
		</html>
	);
}
