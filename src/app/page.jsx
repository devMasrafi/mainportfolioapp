'use client'

import { useEffect } from "react"

const page = () => {

  useEffect(()=>{
    document.body.style.backgroundColor= '#F0F3E5'
})



  return (
    <main>
      {/* hero */}
      <section className="h-[200rem] ">
        <div>
          <div className="text-center uppercase lg:mt-[15rem] lg:mb-[10rem] ">
            <h2 className="lg:text-6xl font-bold italic ">
              web developer
            </h2>
            <p className="relative lg:text-lg underline underline-offset-[0.5rem] lg:my-3">
              lets give your imagination a way to make reality
            </p>
            <h2 className=" lg:text-6xl font-bold italic ">and designer</h2>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page