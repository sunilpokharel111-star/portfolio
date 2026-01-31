import ProjectCard from "./ProjectCard";


const projects = [
  {
    title: "Restaurant Inventory SaaS(Auto Inventory System)",
    desc: "Tracks sales, waste, and stock to save money.",
    tech: "React · FastAPI · PostgreSQL",
    live: "https://auto-inventory-system-phi.vercel.app",
    code: "https://github.com/sunilpokharel111-star/auto_inventory_system",
    docs: "/docs/saas",
  },
  {
    title: "Simple Retail Inventory System( Inventory Automanager App)",
    desc: "Record sales and inventory daily using email notifications and reports",
    tech: "tkinter · Python · email automation · reports · desktop application",
    code: "https://github.com/sunilpokharel111-star/inventory-automanager-app",
    docs: "/docs/desktop",
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ marginBottom: "4rem" }}>
      <h2>Projects</h2>

      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
}
