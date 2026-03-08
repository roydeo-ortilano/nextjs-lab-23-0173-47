import Link from "next/link";
import { Suspense } from "react";
import SlowData from "./SlowData";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts: Post[] = await res.json();
  const firstTen = posts.slice(0, 10);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1
        className="text-4xl mb-8"
        style={{ color: "#203864", fontWeight: 900, fontFamily: "'Roboto', sans-serif" }}
      >
        Posts
      </h1>

      <ul className="flex flex-col gap-4">
        {firstTen.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div
                className="rounded-2xl p-6 cursor-pointer transition-shadow duration-200 hover:shadow-[3px_3px_4px_rgba(0,0,0,0.4)] border border-blue-200"
                style={{ backgroundColor: "#DAE3F3", backdropFilter: "blur(4px)" }}
              >
                <span
                  className="text-xs font-medium mb-1 block"
                  style={{ color: "#203864", opacity: 0.6 }}
                >
                  Post #{post.id}
                </span>
                <h2
                  className="text-lg font-bold capitalize mb-2"
                  style={{ color: "#203864" }}
                >
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm line-clamp-2">{post.body}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Suspense
        fallback={
          <div className="mt-8 flex flex-col items-center animate-pulse">
            <div className="h-5 w-40 bg-blue-200 rounded mb-3" />
            <div className="h-4 w-64 bg-blue-200 rounded mb-2" />
            <div className="h-3 w-32 bg-blue-200 rounded" />
          </div>
        }
      >
        <SlowData />
      </Suspense>
    </div>
  );
}