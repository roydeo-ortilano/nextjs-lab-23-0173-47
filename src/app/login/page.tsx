export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-6 py-20 flex flex-col items-center">
      <div
        className="rounded-2xl p-10 w-full text-center transition-shadow duration-200 hover:shadow-[3px_3px_4px_rgba(0,0,0,0.4)] border border-blue-200"
        style={{ backgroundColor: "#DAE3F3", backdropFilter: "blur(4px)" }}
      >
        <h1
          className="text-4xl font-black mb-4"
          style={{ color: "#203864", fontWeight: 900, fontFamily: "'Roboto', sans-serif" }}
        >
          Login Page
        </h1>
        <p className="text-gray-500 text-sm">
          You need to be logged in to access this page.
        </p>
      </div>
    </div>
  );
}