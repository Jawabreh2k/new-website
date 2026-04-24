import { NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const recipient = 'osama_f_h@yahoo.com'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form input.' }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT ?? '587')
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const from =
      process.env.CONTACT_FROM_EMAIL ??
      process.env.SMTP_FROM ??
      process.env.SMTP_USER ??
      'no-reply@htaqgroup.com'

    if (!host || !user || !pass) {
      return NextResponse.json(
        { error: 'Email service is not configured yet.' },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    })

    const { name, email, company, message } = parsed.data
    await transporter.sendMail({
      from,
      to: recipient,
      subject: `Contact form test from ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 },
    )
  }
}
