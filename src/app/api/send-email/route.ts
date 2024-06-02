"use server";
import {
  IContactFormValues,
  contactFormSchema,
} from "@/lib/validation/ContactFormSchema";
import {
  ToUserEmailEnv,
  UserEmailEnv,
  UserPasswordEnv,
} from "@/lib/variable/envVariable";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as Yup from "yup";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const { name, email, message } = body as IContactFormValues;

    await contactFormSchema.validate(
      { name, email, message },
      { abortEarly: false }
    );

    if (!UserEmailEnv || !UserPasswordEnv || !ToUserEmailEnv) {
      throw new Error("Missing environment variables");
    }

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "Gmail",
      secure: true,
      auth: {
        user: UserEmailEnv,
        pass: UserPasswordEnv,
      },
    });

    await transporter.sendMail({
      from: email,
      to: ToUserEmailEnv,
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof Yup.ValidationError) {
      // Format validation errors
      const formattedErrors: Partial<IContactFormValues> = error.inner.reduce(
        (acc: Partial<IContactFormValues>, err: Yup.ValidationError) => {
          return {
            ...acc,
            [err.path as keyof IContactFormValues]: err.message,
          };
        },
        {}
      );
      return NextResponse.json({ errors: formattedErrors }, { status: 400 });
    }
    console.error("Server error:", error);

    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
