interface UserCardProps {
  name: string;
  role: string;
  department?: string;
}

export default function UserCard({ name, role, department }: UserCardProps) {
  const dept = department ?? "No Department Assigned";

  return (
    <div className="flex items-center gap-4 p-5 w-72">
      {/* Avatar */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
        style={{ backgroundColor: "#203864" }}
      >
        {name.charAt(0)}
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <h2 className="font-bold text-base" style={{ color: "#203864" }}>
          {name}
        </h2>
        <span className="text-gray-600 text-sm">{role}</span>
        <span className="text-gray-400 text-xs mt-1">{dept}</span>
      </div>
    </div>
  );
}