import fs from 'fs'

export const ServerComponentOne = () => {
    fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
    return (
        <div>
            <h1>Server Component One</h1>
        </div>
    )
}
