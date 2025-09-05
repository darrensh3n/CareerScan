"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="center" style={{ flexDirection: "column", minHeight: "100vh" }}>
      <div className="tl-badge" style={{ marginBottom: "20px" }}>
        <span className="tl-dot red" />
        <span className="tl-dot yellow" />
        <span className="tl-dot green" />
      </div>
      <h1>Greenlight</h1>
      <h2 style={{ fontSize: "32px", marginTop: "20px" }}>Sign in to your account</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}>
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ padding: "10px", borderRadius: "8px" }}/>
        <input placeholder="Password (min 6 chars)" type="password" value={pw} onChange={e => setPw(e.target.value)} style={{ padding: "10px", borderRadius: "8px" }}/>
        <button className="btn" style={{ width: "100%" }}>Sign In</button>
      </form>
      <button onClick={() => router.push("/dashboard")} style={{ marginTop: "10px" }}>Continue as Demo</button>
      <p style={{ marginTop: "20px" }}>
        Don&apos;t have an account? <Link href="/auth" style={{ color: "#22c55e" }}>Sign up</Link>
      </p>
    </div>
  );
}
