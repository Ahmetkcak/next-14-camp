"use client"
import { useState } from "react"

export default function DashboardPage() {
    console.log("Dashboard Client Component");
    
    const [name, setName] = useState("")
  return (    
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} style={{"color":"red"}}/>
      <p>Hello, {name}!</p>
    </div>
  )
}
