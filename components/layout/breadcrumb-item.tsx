import Link from "next/link";

export const BreadCrumbItem = (item: any) => {
    return (
        <li>
            <Link href={item.href} 
            className={
                `text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700`
            }>{item.name}</Link>
        </li>
    )
}

