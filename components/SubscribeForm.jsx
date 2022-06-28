import { AiOutlineUserAdd } from "react-icons/ai";

export default function SubscribeForm() {
	return (
		<div className="mt-16">
			<h3 className="mb-[33px] text-center text-xl font-normal md:mx-auto md:max-w-md md:text-2xl">
				Get latest posts delivered right to your inbox
			</h3>
			<form className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-center md:space-x-4 md:space-y-0">
				<input
					type="email"
					placeholder="Your email address"
					className="rounded-md border border-primary/75 px-4 py-3 placeholder:text-center placeholder:text-base placeholder:text-primary/75 focus:border-none focus:outline-none focus:ring focus:ring-accent md:min-w-[446px]"
				/>
				<button
					type="submit"
					className="flex items-center justify-center space-x-4 rounded-md border border-primary/75 py-3 md:min-w-[171px]"
				>
					<AiOutlineUserAdd className="text-xl text-primary" />
					<span className="text-base text-primary">Join today</span>
				</button>
			</form>
		</div>
	);
}
