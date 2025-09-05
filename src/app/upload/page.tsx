"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Upload() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);

  const handleAnalyze = () => {
    router.push("/analyzing");
  };

  return (
    <div className="center" style={{ flexDirection: "column", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "48px" }}>Drop your resume below</h1>
      <label style={{ marginTop: "30px", border: "2px dashed #22c55e", padding: "40px", borderRadius: "12px", cursor: "pointer" }}>
        <input type="file" style={{ display: "none" }} onChange={e => setFile(e.target.files?.[0] ?? null)} />
        Drop your resume here or click to browse
      </label>
      {file && <p style={{ marginTop: "15px" }}>Selected: {file.name}</p>}
      <button onClick={handleAnalyze} className="btn" style={{ marginTop: "20px" }}>Analyze</button>
    </div>
  );
}
