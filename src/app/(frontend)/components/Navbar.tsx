"use client"
import { cn } from "@/lib/utils";


import {
  Briefcase,
  Folder,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  MoreHorizontal,
 
  User,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '../animations/DockAnimation';

import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "../animations/FramerWrapper";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const data = [
    {
      title: 'Home',
      icon: (
        <HomeIcon  />
      ),
      href: '/',
    },
    {
        title: 'Projects',
        icon: (
            <Folder className='h-full w-full ' />
        ),
        href: '/projects',
    },
    {
        title: 'Hobbies',
        icon: (
            <LightbulbIcon className='h-full w-full ' />
        ),
        href: '/hobbies',
    },
    {
      title: 'About',
      icon: (
        <Mail className='h-full w-full ' />
      ),
      href: '/about',
    },
    {
      title: 'Admin',
      icon: (
        <User className='h-full w-full ' />
      ),
      href: '/admin',
    },
  ];
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <div className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${scrolling ? "hidden":"block"}`}>
    <Dock className='items-end pb-3 rounded-full'>
      {data.map((item, idx) => (
        <Link href={item.href} key={idx}>

        <DockItem
          className={cn("aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",pathname === item.href && " bg-gray-100 !border !border-primary-sky")}
          >
          <DockLabel >{item.title}</DockLabel>
          <DockIcon className={cn("text-black", pathname === item.href && "text-[#2f7df4]")}>{item.icon}</DockIcon>
        </DockItem>
          </Link>
      ))}
    </Dock>
    </div>
  );
};

export default Navbar;