import Image from "next/image";
import { MdDateRange } from "react-icons/md";
import { client } from "../../lib/client";
import { urlFor } from "../../lib/client";
import moment from "moment";
import { PortableText } from "@portabletext/react";

import styles from "./[slug].module.css";

export default function BlogDetail({ post }) {
    const { cover, judul, konten, tanggal } = post;
    const tanggalTerbit = moment(tanggal).format("LL");

    return (
        <div>
            <h1 className="mt-[74px] text-center text-2xl font-bold md:mx-auto md:max-w-4xl md:text-[64px] md:leading-none">
                {judul}
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
                    <span className="text-xs text-primary/75">
                        {tanggalTerbit}
                    </span>
                </div>
            </div>
            <article className={styles.root}>
                <div className="oveflow-hidden mb-9 flex min-h-[164px] min-w-[319px] justify-center md:mb-16 md:min-h-[500px] md:min-w-[970px]">
                    <Image
                        src={urlFor(cover).url()}
                        width={970}
                        height={500}
                        className="object-cover"
                    />
                </div>
                <div className="mx-auto max-w-4xl">
                    <PortableText
                        value={konten}
                        //  components={} /* optional object of custom components to use */
                    />
                </div>
            </article>
        </div>
    );
}

export async function getServerSideProps(context) {
    const query = `*[slug.current == "${context.params.slug}"][0]`;
    const post = await client.fetch(query);

    return {
        props: {
            post,
        },
    };
}
