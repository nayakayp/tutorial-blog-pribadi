import Image from "next/image";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";
import { urlFor } from "../lib/client";

export default function BlogCard({
    _id,
    judul,
    cover,
    konten,
    slug,
    tanggal,
    excerpt,
}) {
    return (
        <div className="w-[320px] md:w-[577px]">
            <div>
                <Link href={`/blog/${slug.current}`}>
                    <div className="h-[200px] w-[320px] cursor-pointer overflow-hidden rounded-lg md:h-[361px] md:w-[577px]">
                        <Image
                            //src="https://via.placeholder.com/320.png"
                            src={urlFor(cover).url()}
                            width={320}
                            height={200}
                            className="object-cover"
                            layout="responsive"
                        />
                    </div>
                </Link>
                <div className="mt-[21px] flex items-center space-x-4">
                    <MdDateRange className="text-primary/75" />
                    <span className="text-xs text-primary/75">Dec 5, 2022</span>
                </div>
                <Link href="/blog/">
                    <h3 className="cursor-pointer py-[21px] text-lg font-bold md:text-2xl">
                        {judul}
                    </h3>
                </Link>
                <p className="text-base text-primary/75 md:text-lg">
                    {excerpt}
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
            </div>
        </div>
    );
}
