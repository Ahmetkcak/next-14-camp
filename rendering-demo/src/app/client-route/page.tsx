'use client'

import { serverSideFuntion } from "@/utils/server-utils"

export default function ClientRoutePage() {
    console.log("Client route rendered");
    const result = serverSideFuntion();
  return (
    <div>
      <h1>Client Route Page</h1>
      <h1>{result}</h1>
    </div>
  )
}
