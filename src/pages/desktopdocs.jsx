import Screenshot1 from "../assets/screenshot1.png";

export default function DesktopAppDocs() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Retail Inventory Automanager (Desktop Application)
        </h1>
        <p style={{ marginTop: "0.75rem", color: "#9ca3af" }}>
          Offline-first desktop inventory system built for small retail businesses.
        </p>
      </header>

      <section>
        <h2>Overview</h2>
        <p>
          This project is a desktop-based inventory management application designed
          to simplify daily operations for small retail stores without requiring
          internet connectivity.
        </p>
      </section>

      <section>
        <h2>Why Desktop</h2>
        <p>
          A desktop application was chosen to support offline usage, faster local
          performance, and ease of use for non-technical users.
        </p>
      </section>

      <section>
        <h2>Problem</h2>
        <p>
          Many small retailers rely on manual record keeping or complex systems
          that are costly and difficult to maintain.
        </p>
      </section>

      <section>
        <h2>Solution</h2>
        <p>
          The application manages inventory locally, tracks sales and inventory levels,
          and generates automated reports.
        </p>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Offline inventory management</li>
          <li>Sales and inventory tracking</li>
          <li>Automated email reports</li>
          <li>Simple desktop UI</li>
        </ul>
      </section>

      {/* Screenshots section */}
      <section>
        <h2>Screenshots</h2>
        <img
          src={Screenshot1}
          alt="Desktop App Screenshot"
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "0.5rem",
            margin: "1rem 0",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}
        />
      </section>

      <section>
        <h2>Architecture & Flow</h2>
        <pre>
{`User
 ↓
Tkinter UI
 ↓
Python Logic
 ↓
Local Storage
 ↓
Email Automation`}
        </pre>
      </section>

      <section>
        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Python</strong> – core logic</li>
          <li><strong>Tkinter</strong> – desktop UI</li>
          <li><strong>Local storage</strong> – offline persistence</li>
          <li><strong>Email automation</strong> – reporting + notifications</li>
        </ul>
      </section>

      <section>
        <h2>Challenges & Trade-offs</h2>
        <p>
          Managing UI responsiveness while performing file operations required
          careful separation of logic and interface updates.
        </p>
      </section>

      <section>
        <h2>Future Improvements</h2>
        <ul>
          <li>Improved UI/UX</li>
          <li>Cross-platform packaging</li>
          <li>Optional cloud sync</li>
        </ul>
      </section>

      <section>
        <h2>Source Code</h2>
        <a
          href="https://github.com/sunilpokharel111-star/inventory-automanager-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </section>

    </main>
  );
}
