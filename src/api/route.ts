import nodemailer from "nodemailer";
export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact from ${name}`,
            text:message,
        }); 
        return new Response("OK", { status: 200 });
    }
    catch(err) {
        console.error(err);
        return new Response("Error sending email", { status: 400 });
    }
} 