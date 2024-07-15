import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-white dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link href="#" className="block text-teal-600 dark:text-teal-400">
                            <span className="sr-only">Home</span>
                            <Image src="/logo.svg" alt="Logo" width={80} height={80}/>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <Link href="#"
                                              className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link href="/ecommerce/login"
                                  className="rounded-md bg-teal-600 dark:bg-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow">
                                Login

                            </Link>
                            <div className="hidden sm:flex">
                                <Link href="#"
                                      className="rounded-md bg-gray-100 dark:bg-gray-700 px-5 py-2.5 text-sm font-medium text-teal-600 dark:text-teal-400">
                                    Register

                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <ThemeToggle/>
                        </div>
                        <div className="block md:hidden">
                            <button
                                className="rounded bg-gray-100 dark:bg-gray-700 p-2 text-gray-600 dark:text-gray-400 transition hover:text-gray-600/75 dark:hover:text-gray-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
