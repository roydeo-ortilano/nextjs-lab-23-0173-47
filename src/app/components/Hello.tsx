export default function Hello() {
  return (
    <div
      className="w-full px-10 py-16"
      style={{ backgroundColor: "#203864" }}
    >
      <h1
        className="text-5xl font-bold text-white mb-4"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
      >
        Welcome to my Next.JS Lab!
      </h1>
      <p className="text-blue-200 text-lg max-w-xl">
        This is a mini-application built to demonstrate 10 essential
        Next.js component patterns using the App Router.
      </p>
    </div>
  );
}