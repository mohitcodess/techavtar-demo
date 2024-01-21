import Heading from '../assets/heading.png'
export default function Navbar() {
  return (
    <nav className="flex text-white  px-20 items-center">
        <div className=" w-56">
            <img  src={Heading} />

        </div>
        <div className="flex gap-8 ml-auto text-xl">
            <a href="">HOME</a>
            <a href="">PRICING</a>
            <a href="">BLOG</a>
            <a href="">CONTACT US</a>
        </div>

    </nav>
  )
}
