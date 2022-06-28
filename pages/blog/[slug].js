import Image from "next/image";
import { MdDateRange } from "react-icons/md";

import styles from "./[slug].module.css";

export default function BlogDetail() {
    return (
        <div>
            <h1 className="mt-[74px] text-center text-2xl font-bold md:mx-auto md:max-w-4xl md:text-[64px] md:leading-none">
                The AGI hype train is running out of steam
            </h1>
            <div className="mt-4 mb-6 flex items-center justify-center space-x-6 md:mb-9 md:mt-6">
                <div className="flex items-center space-x-4">
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
                <div className="flex items-center space-x-4">
                    <MdDateRange className="text-primary/75" />
                    <span className="text-xs text-primary/75">Dec 5, 2022</span>
                </div>
            </div>
            <article className={styles.root}>
                <div className="oveflow-hidden mb-9 flex min-h-[164px] min-w-[319px] justify-center md:mb-16 md:min-h-[500px] md:min-w-[970px]">
                    <Image
                        src="https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg"
                        width={970}
                        height={500}
                        className="object-cover"
                    />
                </div>
                <div className="mx-auto max-w-4xl">
                    <h2>The AGI hype train has hit some heavy traffic.</h2>
                    <p>
                        While futurists and fundraisers used to make bullish
                        predictions about artificial general intelligence,
                        they’ve become quieter lately. Peter Thiel — the tech
                        billionaire and rumored vampire — says Silicon Valley
                        big brains have lost enthusiasm for AGI.
                    </p>
                    <p>
                        “Elon’s not talking about it anymore and Larry Page is
                        off to Fiji and doesn’t seem to be working on it quite
                        as hard,” Thiel said at a recent event.
                    </p>
                    <p>
                        “Elon’s not talking about it anymore and Larry Page is
                        off to Fiji and doesn’t seem to be working on it quite
                        as hard,” Thiel said at a recent event.
                    </p>
                    <p>
                        While futurists and fundraisers used to make bullish
                        predictions about artificial general intelligence,
                        they’ve become quieter lately. Peter Thiel — the tech
                        billionaire and rumored vampire — says Silicon Valley
                        big brains have lost enthusiasm for AGI.
                    </p>
                    <h2>The AGI hype train has hit some heavy traffic.</h2>
                    <p>Can self-healing security software fight cybercrime?</p>
                    <p>
                        Thiel described Musk as “a weathervane for the
                        zeitgeist,” who’s stopped talking about AGI because
                        interest has declined.
                    </p>
                    <p>
                        Scientists are also increasingly skeptical. A recent
                        study paper posited that AGI is “in principle
                        impossible,” while other researchers have mocked the
                        term’s proponents.
                    </p>
                </div>
            </article>
        </div>
    );
}
