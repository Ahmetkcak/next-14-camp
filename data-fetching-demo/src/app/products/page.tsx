import { cookies } from "next/headers";
// export const fetchCache = "default-cache";

type Product = {
    id:number,
    title:string,
    price:number,
    description:string
}

export default async function ProductPage() {
    const detailsResponse = await fetch("http://localhost:3001/products",{
      next:{
        revalidate:10
      }
    });
    const details = await detailsResponse.json();

    const cookieStore = cookies();
    cookieStore.get("theme");
    //Once you specify the no-store option for a fetch request, subsequent fetch requests will also not be cached
    // const response = await fetch("http://localhost:3001/products",{
    //     cache:"no-store"
    // });

    const response = await fetch("http://localhost:3001/products");
    const products = await response.json();
    return (
        <ul className="space-y-4 p-4">
          {products.map((product: Product) => (
            <li
              key={product.id}
              className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-medium">${product.price}</p>
              <p>{details.price}</p>
            </li>
          ))}
        </ul>
      );
}
