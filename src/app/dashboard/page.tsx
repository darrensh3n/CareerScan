import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "36px" }}>Dashboard Overview</h1>
      <p style={{ color: "#a1a1aa", marginTop: "10px" }}>
        Monitor your resume performance and access optimization tools
      </p>

      <div className="card" style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#22c55e" }}>Latest Analysis Complete</h2>
        <p>Your resume looks great and is ready for applications!</p>
        <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
          <Link href="/dashboard/details" className="btn">View Detailed Results</Link>
          <Link href="/upload" style={{ padding: "10px 20px", border: "1px solid #aaa", borderRadius: "8px" }}>New Analysis</Link>
        </div>
      </div>

      <div style={{ display: "grid", gap: "20px", marginTop: "30px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        <div className="card">
          <h3>Analytics</h3>
          <p>View detailed analytics and insights about your resume performance.</p>
          <Link href="/dashboard/analytics" style={{ color: "#22c55e" }}>Click to explore →</Link>
        </div>
        <div className="card">
          <h3>Optimization</h3>
          <p>Get personalized recommendations to improve your resume.</p>
          <Link href="/dashboard/optimization" style={{ color: "#22c55e" }}>Click to explore →</Link>
        </div>
        <div className="card">
          <h3>Progress</h3>
          <p>Track your resume improvements over time.</p>
          <Link href="/dashboard/progress" style={{ color: "#22c55e" }}>Click to explore →</Link>
        </div>
      </div>
    </div>
  );
}
