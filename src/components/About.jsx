export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(135deg, #0f172a 0%, #1a2233 100%)",
        color: "#e5e7eb",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "2rem" }}>About Me</h2>
      
      <p style={{
        fontSize: "1.1rem",
        lineHeight: "1.8rem",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        I’m a (self-taught)<strong>Fullstack Developer</strong> building <strong>production-grade applications</strong> that solve real problems. 
        I ship end-to-end solutions, iterating quickly and learning continuously along the way. 
        In recent months, I’ve delivered projects like a <strong>restaurant inventory SaaS</strong> and a <strong>desktop automation tool</strong>, 
        demonstrating my ability to turn ideas into <strong>functional, scalable products</strong>. 
        I approach development with <strong>discipline, clarity, and problem-solving focus</strong>, ensuring every project adds real value.
      </p>
    </section>
  );
}
