'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-slate-900 border-b border-slate-800 fixed w-full z-50 top-0 backdrop-blur-md bg-opacity-80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="PolicyPulse Logo" className="h-8 w-8 object-contain" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                PolicyPulse
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <NavLink href="/simulate" current={pathname}>Simulate</NavLink>
                            <NavLink href="/portal" current={pathname}>Feedback</NavLink>
                            <NavLink href="/blog" current={pathname}>Blogs</NavLink>
                            <NavLink href="/voice" current={pathname}>Citizen Voice</NavLink>
                            <NavLink href="/login" current={pathname}>Login</NavLink>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-slate-900 pb-3 px-2 pt-2 sm:px-3 border-b border-slate-800">
                    <NavLink href="/simulate" mobile>Simulate</NavLink>
                    <NavLink href="/portal" mobile>Feedback</NavLink>
                    <NavLink href="/blog" mobile>Blogs</NavLink>
                    <NavLink href="/voice" mobile>Citizen Voice</NavLink>
                    <NavLink href="/login" mobile>Login</NavLink>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, current, children, mobile }: any) {
    const isActive = current === href;
    const baseClass = mobile
        ? "block px-3 py-2 rounded-md text-base font-medium"
        : "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200";

    // inactive
    let className = `${baseClass} text-gray-300 hover:text-white hover:bg-slate-800`;

    // active
    if (isActive) {
        className = `${baseClass} text-cyan-400 bg-slate-800 shadow-sm shadow-cyan-900/50`;
    }

    return <Link href={href} className={className}>{children}</Link>;
}
