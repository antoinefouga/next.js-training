
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "./style.css"

const navLinks = [
    {
        name : "cv", href:"/cv"
    },
    {
        name:"contact", href:"/contact"
    }
    ,
    {
        name:"products", href:"/products"
    }
    ,
    {
        name:"blog", href:"/blog"
    }

]

export default function Header(){
    const pathname = usePathname();
    

    return(
        <ul className="flex justify-evenly gap-4">
            {navLinks.map((link)=>{
                const isActive = pathname.startsWith(link.href)
                return(
                    <li key={link.name}>
                        <Link 
                            href={link.href} 
                            className={isActive ? "text-green-500" : "text-blue-500"}>
                        {link.name} 
                        </Link>
                    </li>
                )
            }
            )}
        </ul>
    )
}