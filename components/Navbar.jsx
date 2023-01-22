import Link from 'next/link';

const LINKS_ARR = ["Destinations", "Hotels", "Flights", "Bookings"]

const Navbar = () => {
  return (
    <nav className="w-full p-4 py-6 relative">
      <div className="max-w-6xl flex items-center justify-between mx-auto">
        <Link href="/">
          <img src="/assets/logo.svg" width={100} height={30} alt="Jadoo" />
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-[2rem]">
          {LINKS_ARR.map((item, index) => (
            <div key={index} className="cursor-pointer nav-item text-[#212832]">
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 lg:gap-[2rem]">
          <p className="nav-item">Login</p>
          <button className="nav-item py-1 px-3 hover:text-white hover:bg-[#212832] border-2 rounded-md border-[#212832]">Sign up</button>
          <select className="nav-item cursor-pointer outline-none border-none bg-transparent">
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="SP">SP</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
