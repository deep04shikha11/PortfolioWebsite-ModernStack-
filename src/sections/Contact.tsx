"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Contact() {
    const [status, setStatus] = useState<string>("");
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("Setting...");
        const form = new FormData(e.currentTarget);
        const res = await fetch("api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: form.get("name"),
                email: form.get("email"),
                message: form.get("message"),
            }),
        });
        if (res.ok) setStatus("✅ Message Sent!");
        else setStatus("❌ Error sending message.");
    }
    return (
        <section className="py-20 container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">contact me</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
                <input type="text" name="name" placeholder="Enter Name" required className="p-2 border rounded" />
                <input type="email" name="email" placeholder="Enter Email" required className="p-2 border rounded" />
                <textarea name="message" rows={4} placeholder="Enter Message" required className="p-2 border rounded"> </textarea>
                <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send</button>
                <p>{status}</p>
            </form>
            <div className="mt-8 flex justify-center gap-6 text-3xl">
                <a href="https://github.com/deep04shikha11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/deepshikha-verma-66636910b/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                <FaLinkedin/>
                </a>
            </div> 

        </section>
    );
}