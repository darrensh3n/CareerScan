import Link from "next/link";

export default function Home() {
  return (
    <div className="center" style={{ flexDirection: "column", textAlign: "center", minHeight: "100vh" }}>
      <div className="tl-badge" style={{ marginBottom: "20px" }}>
        <span className="tl-dot red" />
        <span className="tl-dot yellow" />
        <span className="tl-dot green" />
      </div>
      <h1 style={{ fontSize: "48px", color: "#22c55e" }}>Greenlight</h1>
      <p style={{ marginTop: "10px", color: "#a1a1aa" }}>
        AI-powered resume analysis that gives you the green light for your dream job
      </p>
      <h2 style={{ fontSize: "72px", margin: "40px 0" }}>Welcome</h2>
      <Link href="/auth" className="btn">Get Started</Link>
      <div style={{ marginTop: "30px", display: "flex", gap: "20px", color: "#a1a1aa" }}>
        <span>● AI Analysis</span>
        <span>● Instant Results</span>
        <span>● Expert Tips</span>
      </div>
    </div>
  );
}
