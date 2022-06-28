import Navbar from "./Navbar";
import Head from "next/head";

import Footer from "./Footer";
import SubscribeForm from "./SubscribeForm";

export default function Layout({ children }) {
	return (
		<div className="bg-gradient-to-b from-[#EFEFFE] to-white px-5 text-primary">
			<Head>
				<title>Shakespear - The little blog</title>
			</Head>
			<header className="">
				<Navbar />
			</header>
			<main className="min-h-[80vh] md:px-[100px]">{children}</main>
			<footer className="">
				<SubscribeForm />
				<Footer />
			</footer>
		</div>
	);
}
