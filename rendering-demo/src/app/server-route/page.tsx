import { ImageSlider } from "@/components/image-slider";
import { serverSideFuntion } from "@/utils/server-utils"

export default function ServerRoutePage() {
    console.log('Server route rendering');
    
    const result = serverSideFuntion()
  return (
    <div>
      <h1>Server Route Page</h1>
      <p>{result}</p>
      <ImageSlider/>
    </div>
  )
}
