const skills = [
  "React",
  "FastAPI",
  "PostgreSQL",
  "Python",
  "Tkinter",
  "REST APIs",
  "Git & GitHub",
  "Docker",
  "Problem Solving",
  "Adaptability",
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "4rem 2rem", background: "#0f172a", color: "#e5e7eb" }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "1rem",
              borderRadius: "0.5rem",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: "600" }}>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

