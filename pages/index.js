import BlogCard from "../components/BlogCard";
import { RiArchiveDrawerLine } from "react-icons/ri";

export default function Home() {
	return (
		<div>
			<h1 className="mt-[74px] text-center text-2xl font-bold md:text-[40px] md:leading-none">
				Let’s make a beautiful memory for everyone by creating impactful story
				for them
			</h1>
			<h2 className="mt-9 mb-6 text-center text-xl md:mt-16 md:mb-[46px] md:text-[32px]">
				Recent posts
			</h2>
			<div className="grid gap-16 md:grid-cols-2 md:gap-x-[86px] md:gap-y-9">
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
			<button className="mx-auto mt-[75px] flex items-center justify-center space-x-4 rounded-md bg-accent py-3 px-4">
				<RiArchiveDrawerLine className="text-lg text-white" />
				<span className="text-lg text-white">View all posts</span>
			</button>
		</div>
	);
}
