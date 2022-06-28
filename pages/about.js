import Image from "next/image";

export default function About() {
	return (
		<>
			<h1 className="mt-[74px] text-center text-2xl font-bold md:text-[40px] md:leading-none">
				About Shakespear
			</h1>
			<h2 className="mt-9 mb-6 text-center text-xl leading-6 md:mx-auto md:mt-16 md:mb-[46px] md:max-w-3xl md:text-[32px] md:leading-normal">
				I’m a Software engineer, open-sourcerer, and lead singer of Floppy and
				the Surfers!
			</h2>
			<div className="mb-6 mt-9 flex justify-center md:mb-6 md:mt-[76px]">
				<Image src="/images/shakespear-about.jpeg" width={822} height={412} />
			</div>
			<div className="flex flex-col space-y-4 md:mx-auto md:max-w-[822px]">
				<p className="text-base md:text-2xl">
					It’s no secret that the digital industry is booming. From exciting
					startups to global brands, companies are reaching out to digital
					agencies, responding to the new possibilities available. However, the
					industry is fast becoming overcrowded, heaving with agencies offering
					similar services — on the surface, at least.
				</p>
				<p className="text-base md:text-2xl">
					Producing creative, fresh projects is the key to standing out. Unique
					side projects are the best place to innovate, but balancing
					commercially and creatively lucrative work is tricky. So, this article
					looks at how to make side projects work and why they’re worthwhile,
					drawing on lessons learned from our development of the ux ompanion
					app.
				</p>
			</div>
		</>
	);
}
