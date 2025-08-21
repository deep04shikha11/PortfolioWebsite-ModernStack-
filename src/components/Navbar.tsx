import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50" >
            <div className="max-w-6l mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-800"> MyPortfolio </Link>
            </div>
        </nav>
    );
    
}