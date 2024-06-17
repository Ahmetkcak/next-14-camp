export default function ProductDetails({
  params,
}:{
  params:{productId:string}
}) {
    return <h1>Details Page Product {params.productId}</h1>
  }
  