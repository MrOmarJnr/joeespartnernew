'use client'
import {useState} from 'react';
import {FaCaretDown} from "react-icons/fa6";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Dropdown({title, titleClassName, items, itemClassName, itemClassNameActive, itemClassNameInActive}) {
    const pathname = usePathname()
    const [dropdownState, setDropdownState] = useState(false)
    const toggleDropdown = () => {
        setDropdownState(!dropdownState);
    }
    return (
        <>
            <li onClick={()=>{toggleDropdown()}} className={`${titleClassName} w-full cursor-pointer flex justify-between ${pathname === title.src ? itemClassNameActive : itemClassNameInActive}`}>
                <Link href={title.src}>{title.name}</Link>&nbsp;&nbsp;<FaCaretDown className={`inline transition-transform duration-300 ease-linear ${dropdownState === true ? 'rotate-180' : 'rotate-0'}`}/>
            </li>
            <ul className={`w-full flex flex-col items-starts gap-4 ${dropdownState === true ? 'block' : 'hidden'}`}>
                {items.map((item, index) => (
                    <li key={index} className={`${itemClassName} ${pathname === item.src ? itemClassNameActive : itemClassNameInActive}`}>
                        <Link href={item.src}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}