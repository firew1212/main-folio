"use client";

import { Mail,Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";


export default function Contact() {

  const [form, setForm] = useState({
  name:"",
  email:"",
  message:""
});


const [status,setStatus]=useState("");
const [loading,setLoading] = useState(false);

async function handleSubmit(
 e: React.FormEvent
){

e.preventDefault();


setLoading(true);

setStatus("Sending...");


try{


const response =
await fetch("/api/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:
JSON.stringify(form)

});



const data =
await response.json();



if(response.ok){

setStatus(
"Message sent successfully!"
);


setForm({
name:"",
email:"",
message:""
});


}else{

setStatus(data.message);

}


}
catch{

setStatus(
"Something went wrong"
);


}
finally{

setLoading(false);

}


}

  return (

    <section
      id="contact"
      className="
        max-w-6xl
        mx-auto
        px-4
        md:px-6
        py-7
      "
    >


      {/* Header */}

      <div className="mb-12">

        <p className="
          text-blue-400
          mb-3
        ">
          Contact
        </p>


        <h2 className="
          text-3xl
          md:text-4xl
          font-bold
        ">
          Message Me Here
        </h2>


        <p className="
          mt-4
          text-gray-400
          max-w-2xl
        ">
          Have a project idea or need a full-stack developer?
          Let's discuss how I can help turn your idea into
          a reliable software solution.
        </p>


      </div>





      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
        "
      >


        {/* Contact Information */}


        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
          "
        >


          <h3 className="
            text-2xl
            font-semibold
            mb-8
          ">
            Social links
          </h3>



          <div className="
            space-y-6
            text-gray-300
          ">


            <a
              href="mailto:kibretmulat@gmail.com"
              className="
                flex
                items-center
                gap-4
                hover:text-blue-400
                transition
              "
            >

              <Mail />

              <span>
                kibretmulat@gmail.com
              </span>

            </a>




            <a
              href="https://github.com/firew1212"
              target="_blank"
              className="
                flex
                items-center
                gap-4
                hover:text-blue-400
                transition
              "
            >

              <FaGithub />

              <span>
                GitHub
              </span>

            </a>





            <a
              href="https://linkedin.com/in/firew-mulat"
              target="_blank"
              className="
                flex
                items-center
                gap-4
                hover:text-blue-400
                transition
              "
            >

              <FaLinkedin />

              <span>
                LinkedIn
              </span>

            </a>


          </div>



        </div>







        {/* Contact Form */}


        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
          "
        >


          <form 
          onSubmit={handleSubmit}
          className="
            space-y-5
          ">


            <input
              type="text"
              placeholder="Your Name"
               
                 value={form.name}

            onChange={(e)=>
            setForm({
            ...form,
            name:e.target.value
            })
            }

              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/20
                px-5
                py-3
                outline-none
                focus:border-blue-500
              "


            />



            <input
              type="email"
              placeholder="Your Email"
              
              value={form.email}

             onChange={(e)=>
setForm({
...form,
email:e.target.value
             })
             }

              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/20
                px-5
                py-3
                outline-none
                focus:border-blue-500
              "
            />

             <input
  type="text"
  name="website"
  className="hidden"
  tabIndex={-1}
  autoComplete="off"
/>


            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              
              value={form.message}

              onChange={(e)=>
             setForm({
             ...form,
             message:e.target.value
              })
              }

              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/20
                px-5
                py-3
                outline-none
                focus:border-blue-500
              "
            />

                  {
                 status && (

               <p className="
               text-sm
               text-blue-400
               ">

               {status}

               </p>
               )}   


            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-blue-600
                py-3
                font-medium
                transition
                hover:bg-blue-700
              "
            >

             {
loading ? (

<div className="
flex
items-center
justify-center
gap-2
">

<Loader2
className="
animate-spin
"
/>

Sending...

</div>


) : (

"Send Message"

)
}

            </button>



          </form>



        </div>



      </div>



    </section>

  );
}