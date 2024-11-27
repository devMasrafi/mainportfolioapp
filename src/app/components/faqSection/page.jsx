"use client";

import { motion } from "framer-motion"; // Import Framer Motion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  // Define animations for the Accordion items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3, // Delay for each item based on the index
        duration: 0.5, // Duration for the animation
      },
    }),
  };

  // FAQ items data
  const faqData = [
    {
      value: "item-1",
      question: "What services do you offer as a web developer?",
      answer:
        "Web design & development, responsive design, user-friendly experience, customization of websites as requested, and making changes according to needs.",
    },
    {
      value: "item-2",
      question: "Will my website be mobile-friendly?",
      answer:
        "In today's world, most people use mobile devices or small devices. My website solutions will include responsive and animation-friendly features.",
    },
    {
      value: "item-3",
      question: "Can you redesign my existing website?",
      answer:
        "Yes, I can redesign and code your design. If you want to know more, feel free to contact me anytime.",
    },
    {
      value: "item-4",
      question: "Are you open for work?",
      answer:
        "Yes, I am currently not working in any office or organization, so I'm open for work and expanding my knowledge.",
    },
  ];

  return (
    <main className="lg:my-[20rem]">
      <section className="container mx-auto flex justify-between">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}

          className="lg:w-[20rem]"
        >
          <h2 className="lg:text-5xl uppercase font-bold tracking-widest">FAQ</h2>
          <h3 className="lg:mt-3 lg:text-lg">Have any question for me?</h3>
          <button className="capitalize lg:py-2 lg:px-5 bg-darkBlue text-mainColor lg:rounded-md lg:mt-5">
            Contact me
          </button>
        </motion.div>
        <div className="lg:w-[30rem]">
          <Accordion type="single" collapsible className="w-full">
            {/* Map over faqData to generate AccordionItems with animations */}
            {faqData.map((item, index) => (
              <motion.div
                key={item.value}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                custom={index} // Pass the index to control the delay
              >
                <AccordionItem value={item.value}>
                  <AccordionTrigger className="lg:text-3xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="lg:text-lg">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default FaqSection;
