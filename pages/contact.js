import SubscribeForm from "../components/SubscribeForm";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

export default function Contact() {
    return (
        <div className="">
            <h1 className="mt-[74px] text-center text-2xl font-bold md:text-[40px] md:leading-none">
                Contact
            </h1>
            <div className="mt-8 md:mt-16 md:grid md:grid-cols-2 md:gap-28">
                <div>
                    <h3 className="mb-[18px] text-xl md:mb-6 md:text-[32px]">
                        Contact Me
                    </h3>
                    <p className="mb-5 md:mb-8 md:text-lg">
                        I’m here to help and answer any questions you might
                        have. I look forward to hearing from you
                    </p>
                    <h3 className="mb-[18px] text-xl md:mb-6 md:text-2xl">
                        Hate forms? <br /> Write an email or make a call
                    </h3>
                    <div className="mb-4 flex items-center space-x-4">
                        <AiOutlinePhone className="text-xs md:text-base" />
                        <span className="text-xs md:text-base">
                            +62 3456 7890
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <AiOutlineMail className="text-xs md:text-base" />
                        <span className="text-xs md:text-base">
                            contact@shakespear.com
                        </span>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <h3 className="mb-[18px] text-xl md:mb-6 md:text-[32px]">
                        Contact Me
                    </h3>
                    <form action="" className="flex flex-col space-y-5">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Your message"
                            className="w-full rounded-md border border-primary/50 bg-white p-4 text-xs md:text-base"
                        ></textarea>
                        <input
                            type="email"
                            placeholder="Your email address"
                            name=""
                            id=""
                            className="w-full rounded-md border border-primary/50 bg-white p-4 text-xs md:text-base"
                        />
                        <input
                            type="text"
                            placeholder="Your name here"
                            name=""
                            id=""
                            className="w-full rounded-md border border-primary/50 bg-white p-4 text-xs md:text-base"
                        />
                        <button
                            type="submit"
                            className="flex w-fit items-center space-x-4 rounded-md bg-accent px-4 py-3 text-white"
                        >
                            <span>Send</span>
                            <FiSend />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
