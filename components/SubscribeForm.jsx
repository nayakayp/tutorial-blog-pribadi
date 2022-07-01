import { AiOutlineUserAdd } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";

export default function SubscribeForm() {
    const [state, handleSubmit] = useForm("mzboqnew");

    if (state.succeeded) {
        return (
            <div className="mt-4 flex w-full flex-col items-center justify-center">
                <p className="rounded bg-green-500 px-10 py-4 text-2xl text-white">
                    Berhasil subscribe!
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-2 text-lg font-bold underline"
                >
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div className="mt-16">
            <h3 className="mb-[33px] text-center text-xl font-normal md:mx-auto md:max-w-md md:text-2xl">
                Get latest posts delivered right to your inbox
            </h3>

            <form
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-center md:space-x-4 md:space-y-0"
            >
                <input
                    name="email"
                    type="email"
                    required
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
