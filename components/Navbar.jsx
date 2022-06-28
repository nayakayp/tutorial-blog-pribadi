import Link from "next/link";

export default function Navbar() {
	const navigations = ["home", "about", "blog", "contact"];
	return (
		<div className="pt-9">
			<p className="uppercase text-4xl text-center">
				<span className="font-light">Shake</span>
				<span className="font-bold">spear</span>
			</p>
			<ul className="flex mt-[10px] justify-center items-center space-x-6 text-lg">
				{navigations.map((nav, index) => (
					<li key={index} className="capitalize">
						<Link href={`/${nav === "home" ? "" : nav}`}>{nav}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
