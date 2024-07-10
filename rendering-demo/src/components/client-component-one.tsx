"use client"

import { useState } from "react"
import { ServerComponentOne } from "./server-component-one"

export const ClientComponentOne = ({children}:{children:React.ReactNode}) => {
    const [name, setName] = useState("XYZ")
    return (
        <div>
            <h1>Client Component One</h1>
            {children}
        </div>
    )
}