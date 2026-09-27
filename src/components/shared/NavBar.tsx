"use client";

// import { ExerciseContext } from '@/context/ExerciseContext';
import Link from 'next/link';
// import React, { useContext } from 'react';
import NavBadges from './NavBadges';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from "@/assets/logo.png";

const NavBar = () => {
    // const {exercisePlan, exerciseSave} = useContext(ExerciseContext)
    const pathname = usePathname();
    return (

        <div className="navbar bg-[#0d1117] border-b border-gray-800 shadow-sm font-bold text-xs py-2 px-4 sm:px-6 sticky top-0 z-50">


            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-400 p-2">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>


                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-[#11141a] border border-gray-800 rounded-xl z-50 mt-3 w-52 p-2 shadow text-gray-400"
                    >
                        <li><Link href="/" className="hover:text-white">Workouts</Link></li>
                        <li><Link href="/my-plan" className="hover:text-white">My Plan</Link></li>
                    </ul>
                </div>

                <Link href="/" className="btn btn-ghost text-white text-base font-black tracking-widest uppercase hover:bg-transparent">

                    <div className="w-6 h-6 relative overflow-hidden">
                        <Image
                            src={Logo}
                            alt="FitLog Logo"
                            width={24}
                            height={24}
                            className="object-contain w-full h-full"
                        />
                    </div>

                    FITLOG
                </Link>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-1 text-gray-400 font-bold">
                    <li>
                        <Link
                            href="/"
                            className={`px-5 py-2 rounded-full font-bold transition-all ${pathname === '/'
                                ? 'text-[#b6ff00] bg-[#1a2312]'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Workouts
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/my-plan"
                            className={`px-5 py-2 rounded-full font-bold transition-all ${pathname === '/my-plan'
                                ? 'text-[#b6ff00] bg-[#1a2312]'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>


            <div className="navbar-end">
                <NavBadges />
            </div>

        </div>
    );
};

export default NavBar;