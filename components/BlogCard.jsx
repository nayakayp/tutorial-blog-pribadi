import Image from "next/image";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";

export default function BlogCard() {
	return (
		<Link href="/blog/" className="w-[320px] md:w-[577px]">
			<a>
				<div className="h-[200px] w-[320px] overflow-hidden rounded-lg md:h-[361px] md:w-[577px]">
					<Image
						src="https://via.placeholder.com/320.png"
						width={320}
						height={200}
						className="object-cover"
						layout="responsive"
					/>
				</div>
				<div className="mt-[21px] flex items-center space-x-4">
					<MdDateRange className="text-primary/75" />
					<span className="text-xs text-primary/75">Dec 5, 2022</span>
				</div>
				<h3 className="py-[21px] text-lg font-bold md:text-2xl">
					The AGI hype train is running out of steam
				</h3>
				<p className="text-base text-primary/75 md:text-lg">
					While futurists and fundraisers used to make bullish prediction about
					artificial general intelligence, they’ve become quiter lately. Peter
					Thiel...
				</p>
				<div className="mt-[21px] flex items-center space-x-4">
					<div className="h-[35px] w-[35px] overflow-hidden rounded-md">
						<Image
							src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
							width={35}
							height={35}
							className="object-cover"
						/>
					</div>
					<p className="text-xs text-primary/75">
						by <strong>Shakespear</strong>
					</p>
				</div>
			</a>
		</Link>
	);
}
