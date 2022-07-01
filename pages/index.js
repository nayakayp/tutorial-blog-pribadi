import BlogCard from "../components/BlogCard";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { client } from "../lib/client";
import Link from "next/link";

export default function Home({ posts }) {
    return (
        <div>
            <h1 className="mt-[74px] text-center text-2xl font-bold md:text-[40px] md:leading-none">
                Let’s make a beautiful memory for everyone by creating impactful
                story for them
            </h1>
            <h2 className="mt-9 mb-6 text-center text-xl md:mt-16 md:mb-[46px] md:text-[32px]">
                Recent posts
            </h2>
            <div className="grid gap-16 md:grid-cols-2 md:gap-x-[86px] md:gap-y-9">
                {posts.map((post) => (
                    <BlogCard
                        key={post._id}
                        _id={post._id}
                        judul={post.judul}
                        cover={post.cover}
                        konten={post.konten}
                        slug={post.slug}
                        tanggal={post.tanggal}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
            <Link href="/blog">
                <button className="mx-auto mt-[75px] flex items-center justify-center space-x-4 rounded-md bg-accent py-3 px-4">
                    <RiArchiveDrawerLine className="text-lg text-white" />
                    <span className="text-lg text-white">View all posts</span>
                </button>
            </Link>
        </div>
    );
}

export async function getServerSideProps() {
    const query = '*[ _type == "post" && !(_id in path("drafts.**"))][0..3]';
    const posts = await client.fetch(query);

    return {
        props: { posts },
    };
}
