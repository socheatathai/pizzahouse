import Link from "next/link"

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-5-- flex items-center justify-between">
      <Link href='/' className="font-bold text-xl">PIZZA HOUSE</Link>
      <p>All rights reserved </p>
      
    </div>
  )
}

export default Footer