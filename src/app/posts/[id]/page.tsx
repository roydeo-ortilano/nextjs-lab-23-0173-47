import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }));
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  const post: Post = await res.json();

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Link
        href="/posts"
        className="inline-flex items-center gap-2 font-medium mb-8 transition hover:opacity-70"
        style={{ color: "#203864" }}
      >
        ← Back to Posts
      </Link>

      <div
        className="rounded-2xl p-8 transition-shadow duration-200 hover:shadow-[3px_3px_4px_rgba(0,0,0,0.4)] border border-blue-200"
        style={{ backgroundColor: "#DAE3F3", backdropFilter: "blur(4px)" }}
      >
        <span
          className="text-xs font-medium block mb-2"
          style={{ color: "#203864", opacity: 0.6 }}
        >
          Post #{post.id} · User #{post.userId}
        </span>
        <h1
          className="text-3xl font-black mb-6 capitalize"
          style={{ color: "#203864", fontWeight: 900, fontFamily: "'Roboto', sans-serif" }}
        >
          {post.title}
        </h1>
        <p className="text-gray-600 leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
}