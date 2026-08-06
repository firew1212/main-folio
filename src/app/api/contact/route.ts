import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";


const resend = new Resend(
  process.env.RESEND_API_KEY
);



const contactSchema = z.object({

  name: z
    .string()
    .min(2),

  email: z
    .string()
    .email(),

  message: z
    .string()
    .min(10),

  website: z
    .string()
    .optional(),

});



export async function POST(
  request: Request
) {

  try {


    const body = await request.json();



    const validation =
      contactSchema.safeParse(body);



    if(!validation.success){

      return NextResponse.json(
        {
          message:
          "Please check your information"
        },
        {
          status:400
        }
      );

    }



    const {
  name,
  email,
  message,
  website
} = validation.data;


if(website){

  return NextResponse.json(
    {
      message:"Spam detected"
    },
    {
      status:400
    }
  );

}



    await resend.emails.send({

      from:
      "Portfolio <onboarding@resend.dev>",


      to:
      process.env.CONTACT_EMAIL!,


      subject:
      `New message from ${name}`,


      html:

      `
      <h2>New Portfolio Message</h2>

      <p>
      <b>Name:</b> ${name}
      </p>


      <p>
      <b>Email:</b> ${email}
      </p>


      <p>
      <b>Message:</b>
      </p>


      <p>
      ${message}
      </p>
      `

    });



    return NextResponse.json(
      {
        message:
        "Message sent successfully"
      }
    );



  } catch(error){


    return NextResponse.json(
      {
        message:
        "Server error"
      },
      {
        status:500
      }
    );


  }

}