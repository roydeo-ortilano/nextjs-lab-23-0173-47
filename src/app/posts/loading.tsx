export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 animate-pulse">
      <div className="h-10 w-48 bg-blue-200 rounded-lg mb-8" />
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl p-6 mb-4 border border-blue-200"
          style={{ backgroundColor: "#DAE3F3" }}
        >
          <div className="h-3 w-16 bg-blue-200 rounded mb-3" />
          <div className="h-5 w-3/4 bg-blue-200 rounded mb-3" />
          <div className="h-3 w-full bg-blue-200 rounded mb-2" />
          <div className="h-3 w-5/6 bg-blue-200 rounded" />
        </div>
      ))}
    </div>
  );
}