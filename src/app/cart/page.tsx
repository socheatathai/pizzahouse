import Image from "next/image"

const CartPage = () => {
  return (
      <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
        {/* PRODUCT CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full  lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4 ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold ">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4 ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold ">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4 ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold ">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        </div>
        {/* PAYMENT CONTAINER */}
      <div className="h-1/2 bg-fuchsia-50 flex flex-col gap-4  justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        {/* PAYMENT TOTAL */}
          <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span>$81.70</span>
          </div>
        {/* PAYMENT TOTAL */}
        <div className="flex justify-between">
          <span className="">Service (2 items)</span>
          <span>$81.70</span>
        </div>
        {/* REVIEWS TOTAL */}
        <div className="flex justify-between">
          <span className="">Delivery (1 items)</span>
          <span className="text-green-700">FREE</span>
        </div>
          <hr className="my-2" />
        {/* TOTAL */}
        <div className="flex justify-between">
          <span className="">TOTAL (6 items)</span>
          <span className="font-bold">$150</span>
        </div>
        <span className="font-bold">( noted this static can not event at all )</span>
          <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end lg:w-full">CHECKOUT</button>
        </div>
      </div>
  )
}

export default CartPage