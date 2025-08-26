import Image from "next/image"
export default function About() {
    return (
        <section className="py-20 container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About me</h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
                <Image src="/profile.jpg"  alt="profile" width={200} height={200} className="rounded-full shadow-lg" />
                <div className="text-left">
                    <p className="mb-4 text-gray-700"> I’m a passionate developer with 6+ years of experience building scalable web apps.
                        I love working with Python, Laravel, Next.js, React, and modern stacks.
                    </p>
                    <ul className="border-1-2 border-blue-500 pl-4 space-y-3">
                        <li> <strong>2024</strong> Joined <strong>B.I.R Solutions Pvt Ltd </strong> as Senior Developer</li>
                        <li> <strong>2023</strong> Joined <strong>SKAD IT Solutions </strong> as Senior Web Developer</li>
                        <li> <strong>2022</strong> Joined <strong>Grawlix Software Private Limited </strong> as Software Developer</li>
                        <li> <strong>2021</strong> Joined <strong>7EYE It Solutions Pvt.Ltd </strong> as Web Developer</li>
                        <li> <strong>2019</strong> Joined <strong>REAK INFOTECH LLP </strong> as Junior Developer</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}