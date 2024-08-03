"use server"
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import Emailtemplate from '../../../components/Emailtemplate';

const resend = new Resend('re_Dnr8iwYz_NprukQW2W2DnrTMxCwkU8hhS');

export const prueba = async (formData) => {
  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const message = formData.get("message");

  // console.log('datos::::::', fullname, email, message)

  if (!fullname || !email || !message) return NextResponse.json({ message: 'Error: Missing fields' }, { status: 400 });

  try {
    const data = await resend.emails.send({
      from: 'Portafolio <onboarding@resend.dev>',
      to: 'luduchar@gmail.com',
      subject: 'Solicitud desde el portafolio',
      react: Emailtemplate({ fullname: fullname, email: email, message: message }),
    });

    // console.log('data', data);
    return { status: 200, message: 'Email sent', data };
  } catch (error) {
    console.error('error', error);
    return { status: 500, message: 'Error en el servidor', error };
  }
};
