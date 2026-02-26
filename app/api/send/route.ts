
import { NextRequest } from 'next/server';
import EmailTemplate from '../../../components/contact/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
        return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }
    try {
        const { data, error } = await resend.emails.send({
            from: 'RadheyMugdal <contact@radheymugdal.com>',
            to: ['mugdalradhey@gmail.com'],
            subject: 'Hello world',
            react: EmailTemplate({ name, email, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        console.error(error)
        return Response.json({ error }, { status: 500 });
    }
}
