import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/27097700/pexels-photo-27097700/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image
                        src="https://images.pexels.com/photos/5461644/pexels-photo-5461644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=279.825&fit=crop&h=453.05"
                        alt=""
                        fill
                        sizes="25vw" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-xl ring-1 ring-specialPink text-specialPink py-2 px-4 text-sm w-max hover:bg-specialPink hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/27097700/pexels-photo-27097700/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image
                        src="https://images.pexels.com/photos/5461644/pexels-photo-5461644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=279.825&fit=crop&h=453.05"
                        alt=""
                        fill
                        sizes="25vw" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-xl ring-1 ring-specialPink text-specialPink py-2 px-4 text-sm w-max hover:bg-specialPink hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/27097700/pexels-photo-27097700/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image
                        src="https://images.pexels.com/photos/5461644/pexels-photo-5461644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=279.825&fit=crop&h=453.05"
                        alt=""
                        fill
                        sizes="25vw" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-xl ring-1 ring-specialPink text-specialPink py-2 px-4 text-sm w-max hover:bg-specialPink hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/27097700/pexels-photo-27097700/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image
                        src="https://images.pexels.com/photos/5461644/pexels-photo-5461644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=279.825&fit=crop&h=453.05"
                        alt=""
                        fill
                        sizes="25vw" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-xl ring-1 ring-specialPink text-specialPink py-2 px-4 text-sm w-max hover:bg-specialPink hover:text-white">Add to Cart</button>
            </Link>
        </div >
    )
}

export default ProductList
