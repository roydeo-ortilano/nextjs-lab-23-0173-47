async function slowFetch() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    message: "🎉 Slow data loaded after 3 seconds!",
    timestamp: new Date().toLocaleTimeString(),
  };
}

export default async function SlowData() {
  const data = await slowFetch();

  return (
    <div className="mt-8 flex flex-col items-center justify-center text-center">
      <h2 className="text-lg font-bold mb-2" style={{ color: "#203864" }}>
        Slow Streaming Data
      </h2>
      <p className="text-green-600 font-medium">{data.message}</p>
      <p className="text-gray-400 text-sm mt-1">Loaded at: {data.timestamp}</p>
    </div>
  );
}