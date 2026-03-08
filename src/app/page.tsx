import Hello from "@/app/components/Hello";
import UserCard from "@/app/components/UserCard";
import Counter from "@/app/components/Counter";

const cardStyle = {
  backgroundColor: "#DAE3F3",
  backdropFilter: "blur(4px)",
};

const hoverClass = "rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-[3px_3px_4px_rgba(0,0,0,0.4)] border border-blue-200";

export default function Home() {
  return (
    <main>
      <Hello />
      <div className="px-10 py-8 flex flex-col gap-8">

        <section>
          <h2 className="text-xl mb-4" style={{ color: "#203864", fontWeight: 900 }}>
            User Cards
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Roy Deo Ortilano", role: "Programmer", department: "Computer Science" },
              { name: "Henry Dave Tacuyan", role: "Documentarian", department: "Computer Science" },
              { name: "Ken Dhraven Hijosa", role: "System Analyst", department: "Computer Science" },
              { name: "Rosemarie Martinete", role: "Assistant Developer", department: "Information Technology" },
            ].map((user) => (
              <div key={user.name} className={hoverClass} style={cardStyle}>
                <UserCard name={user.name} role={user.role} department={user.department} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl mb-4" style={{ color: "#203864", fontWeight: 900 }}>
            Counter
          </h2>
          <div className={hoverClass} style={cardStyle}>
            <Counter />
          </div>
        </section>

      </div>
    </main>
  );
}