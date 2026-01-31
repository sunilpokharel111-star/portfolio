import Screenshot2 from "../assets/screenshot2.jpeg"; // optional, add your own screenshot
import Screenshot3 from "../assets/screenshot3.jpeg";
import Screenshot4 from "../assets/screenshot4.jpeg";
import Screenshot5 from "../assets/screenshot5.jpeg";

export default function SaaSDocs() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      
      {/* Header */}
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Restaurant Inventory SaaS (Auto Inventory System)
        </h1>
        <p style={{ marginTop: "0.75rem", color: "#9ca3af" }}>
          Web-based inventory management system for restaurants to track sales, stock, and reduce waste.
        </p>
      </header>

      {/* Overview */}
      <section>
        <h2>Overview</h2>
        <p>
          A cloud-enabled system that helps restaurants manage inventory, track sales, reduce waste,
          and get notifications in real-time. Built for efficiency and scalability.
        </p>
      </section>

      {/* Problem */}
      <section>
        <h2>Problem</h2>
        <p>
          Many restaurants struggle with manual tracking of inventory and waste, which leads to 
          financial losses and operational inefficiencies. Existing solutions are mostly single item-based or too expensive for small businesses.
        </p>
      </section>

      {/* Solution */}
      <section>
        <h2>Solution</h2>
        <p>
            The application provides a comprehensive inventory management system for restaurants.
            Each dish’s ingredients are tracked individually — for example, if a restaurant serves
            “Spaghetti Bolognese”, the system monitors quantities of pasta, tomato sauce, and meat
            separately. Multi-item tracking ensures accurate inventory updates as dishes are sold.
            Additionally, tolerance levels for each ingredient is account for on an average basis 
            to adjust forspoilage or portion variations, helping reduce waste and optimize purchasing.
        </p>
      </section>

      {/* Key Features */}
      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Multi-item inventory tracking with tolerance</li>
          <li>Sales monitoring</li>
          <li>Waste tracking and alerts</li>
          <li>User authentication </li>
          <li>Real-time notifications</li>
        </ul>
      </section>

      {/* Screenshots */}
      <section>
        <h2>Screenshots</h2>
        <img
          src={Screenshot2}
          alt="SaaS App Screenshot"
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "0.5rem",
            margin: "1rem 0",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}
        
        />
        <img
          src={Screenshot3}
          alt="SaaS App Screenshot"
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "0.5rem",
            margin: "1rem 0",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}
        
        />
        <img
          src={Screenshot4}
          alt="SaaS App Screenshot"
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "0.5rem",
            margin: "1rem 0",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}
        
        />
        <img
          src={Screenshot5}
          alt="SaaS App Screenshot"
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "0.5rem",
            margin: "1rem 0",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}
        
        />
      </section>

      {/* Architecture & Flow */}
      <section>
        <h2>Architecture & Flow</h2>
        <pre>
{`Frontend (React)
 ↓
API (FastAPI)
 ↓
Database (PostgreSQL)
 ↓
Notifications & Reporting`}
        </pre>
      </section>

      {/* Tech Stack */}
      <section>
        <h2>Tech Stack</h2>
        <ul>
          <li><strong>React</strong> – frontend UI</li>
          <li><strong>FastAPI</strong> – backend API</li>
          <li><strong>PostgreSQL</strong> – database</li>
          <li><strong>Supabase + render + Vercel</strong> – deployment</li>
        </ul>
      </section>

      {/* Challenges */}
      <section>
        <h2>Challenges & Trade-offs</h2>
        <p>
           Implementing real-life inventory logic was challenging. Supporting multi-item tracking
           with dish-level examples and a flexible tolerance-based system required careful design.
           Maintaining a live backend that updated stock and notifications in real-time while
           ensuring performance and data consistency was one of the toughest parts of the project.
        </p>
      </section>

      {/* Future Improvements */}
      <section>
        <h2>Future Improvements</h2>
        <ul>
          <li>Advanced analytics and reporting</li>
          <li>Multi-restaurant support</li>
          <li>Mobile app integration</li>
          <li>Enhanced user permissions and roles</li>
          <li>Improved design + features(suppliers, categories, etc.)</li>
        </ul>
      </section>

      {/* Source Code */}
      <section>
        <h2>Source Code</h2>
        <a
          href="https://github.com/sunilpokharel111-star/auto_inventory_system"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </section>

      {/* Live App */}
      <section>
        <h2>Live Demo</h2>
        <a
          href="https://auto-inventory-system-phi.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Live App
        </a>
      </section>

    </main>
  );
}
