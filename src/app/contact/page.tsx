import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function submitContact(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  console.log("📨 New Contact Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  revalidatePath("/contact");
  redirect("/contact?sent=true");
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1
        className="text-4xl mb-8"
        style={{ color: "#203864", fontWeight: 900, fontFamily: "'Roboto', sans-serif" }}
      >
        Contact Us
      </h1>

      {/* Success Message */}
      <MessageSent searchParams={searchParams} />

      <form
        action={submitContact}
        className="rounded-2xl p-8 flex flex-col gap-5 transition-shadow duration-200 hover:shadow-[3px_3px_4px_rgba(0,0,0,0.4)] border border-blue-200"
        style={{ backgroundColor: "#DAE3F3", backdropFilter: "blur(4px)" }}
      >
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold" style={{ color: "#203864" }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Juan dela Cruz"
            className="border border-blue-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold" style={{ color: "#203864" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="juan@email.com"
            className="border border-blue-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold" style={{ color: "#203864" }}>
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Write your message here..."
            className="border border-blue-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-2 py-3 rounded-lg font-bold text-white text-sm transition hover:opacity-90"
          style={{ backgroundColor: "#203864" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

async function MessageSent({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  const params = await searchParams;
  if (params.sent !== "true") return null;

  return (
    <div
      className="mb-6 px-5 py-4 rounded-2xl border border-green-300 flex items-center gap-3"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div>
        <p className="text-green-700 font-bold text-sm">Message Sent!</p>
        <p className="text-green-600 text-xs mt-0.5">
          Thank you for reaching out. We will get back to you soon.
        </p>
      </div>
    </div>
  );
}