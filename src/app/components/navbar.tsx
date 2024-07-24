import Image from "next/image";
import Link from "next/link";

export default function Navbar () {
    return (
            <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                Restauran
                            </h1>
                        </Link>

                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg x-show="!isOpen" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                        
                                <svg x-show="isOpen" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#FEA116] dark:hover:text-[#FEA116] md:mx-4 md:my-0" href="#">Shop</Link>
                            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#FEA116] dark:hover:text-[#FEA116] md:mx-4 md:my-0" href="#">Home</Link>
                            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#FEA116] dark:hover:text-[#FEA116] md:mx-4 md:my-0" href="#">Contact</Link>
                            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#FEA116] dark:hover:text-[#FEA116] md:mx-4 md:my-0" href="#">About</Link>
                        </div>

                        <div className="flex justify-center">
                            <Link className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FEA116] hover:bg-[#FEA116] focus:outline-none focus:ring focus:ring-[#FEA116] focus:ring-opacity-80" href="#">
                                <h1>Book a table</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
    )
};
