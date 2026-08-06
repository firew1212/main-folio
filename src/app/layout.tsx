import type { Metadata } from "next";

export const metadata: Metadata = {

  title:
  "Firew | Portfolio",


  description:
  "Full Stack Software Engineer building scalable web applications, business systems, and modern digital solutions using Next.js, NestJS, PostgreSQL, and modern architecture.",



  keywords:[

    "Full Stack Developer",

    "Next.js Developer",

    "NestJS Developer",

    "React Developer",

    "PostgreSQL",

    "Software Engineer",

    "Web Application Development"

  ],



  authors:[

    {
      name:"Efi"
    }

  ],



  openGraph:{

    title:
    "Efi | Full Stack Software Engineer",


    description:
    "Building scalable software solutions and business applications.",


    type:"website",

  },
  robots:{
  index:true,
  follow:true,
}


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}