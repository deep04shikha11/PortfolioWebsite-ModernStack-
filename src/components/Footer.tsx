export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} MyPortfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
}