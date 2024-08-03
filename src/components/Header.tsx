import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-background-light dark:bg-background-dark shadow-md">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="block text-primary-light dark:text-primary-dark">
                            <span className="sr-only">Home</span>
                            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
                        </Link>
                        <nav className="hidden md:flex md:items-center md:gap-8">
                            <ul className="flex items-center gap-6 text-sm">
                                {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <Link href={`#${item.toLowerCase()}`} className="text-text-light dark:text-text-dark transition hover:text-primary-dark dark:hover:text-primary-light">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex sm:gap-4">
                            <Link href="/ecommerce/login" className="rounded-md bg-primary-light dark:bg-primary-dark px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-primary-dark dark:hover:bg-primary-light">
                                Login
                            </Link>
                            <Link href="/ecommerce/register" className="rounded-md bg-secondary-light dark:bg-secondary-dark px-5 py-2.5 text-sm font-medium text-primary-light dark:text-primary-dark shadow-md transition hover:bg-secondary-dark dark:hover:bg-secondary-light">
                                Register
                            </Link>
                        </div>
                        <ThemeToggle />
                        <button className="block md:hidden rounded bg-gray-100 dark:bg-gray-700 p-2 text-gray-600 dark:text-gray-400 transition hover:text-gray-700 dark:hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
