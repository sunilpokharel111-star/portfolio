import { Link } from "react-router-dom";
import DesktopAppDocs from "../pages/desktopdocs";

export default function ProjectCard({ title, desc, tech, live, code, docs }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "0.5rem",
        padding: "1.5rem",
        background: "linear-gradient(135deg, #0f172a 0%, #1a2233 100%)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        marginBottom: "2rem"
      }}
    >
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ marginBottom: "0.5rem", color: "#4b5563" }}>{desc}</p>
      <small style={{ display: "block", marginBottom: "1rem", color: "#6b7280" }}>{tech}</small>
      
      <div>
        {/* Only show Live link if live URL exists */}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem", color: "#f97316", fontWeight: "500" }}
          >
            Live
          </a>
        )}
        {/* Always show Code link if code URL exists */}
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3b82f6", fontWeight: "500" }}
          >
            Code
          </a>

        )}

        {docs && (
          <Link
            to={docs}
            style={{ marginLeft: "1rem", color: "#10b981", fontWeight: "500" }}
          >
            Docs
          </Link>
        )}
      </div>
    </div>
  );
}

