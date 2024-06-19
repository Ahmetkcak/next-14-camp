import { Metadata } from "next"

export const metadata : Metadata = {
  title:"Blog"
}

// export const metadataProp : Metadata = {
//   title:{
//     absolute :""
//   }
// }

export default function Blog() {
    return <h1>Blog Page</h1>
  }
  