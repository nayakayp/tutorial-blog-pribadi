import BlogCard from "../../components/BlogCard";
import { client } from "../../lib/client";

export default function Blog({ posts }) {
    return (
        <div className="">
            <h1 className="mt-[74px] mb-10 text-center text-2xl font-bold md:mb-16 md:text-[40px] md:leading-none">
                All posts
            </h1>
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
            <div className="my-10 flex justify-center space-x-2 md:my-16">
                <button className="rounded-[4px] py-3 px-6 shadow-md">
                    Prev
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-accent text-white shadow-md">
                    1
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-[4px] shadow-md">
                    2
                </button>
                <button className="rounded-[4px] py-3 px-6 shadow-md">
                    Next
                </button>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const query = '*[ _type == "post" && !(_id in path("drafts.**"))]';
    const posts = await client.fetch(query);

    return {
        props: { posts },
    };
}
