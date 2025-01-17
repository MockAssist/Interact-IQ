"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const MessagesLanding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const userMessage =
    "Hey, I'm working on a repository crawler project, and I need some help with the preparation for my upcoming interview. Can you help me out?";

  const aiMessage = `Absolutely! 🚀 Your repository crawler project sounds fascinating. Here are a few engaging questions to put it to the test: 1. How does your crawler handle repositories with a large number of branches? 2. Can it accurately identify and classify different file types within a repository? 3. What strategies does it use to handle complex nested directory structures? 4. How well does it adapt to changes in the structure of a repository over time?`;

  const userMessageArr = Array.from(userMessage);
  const aiMessageArr = Array.from(aiMessage);

  useEffect(() => {
    const show = () => {
      controls.start({ opacity: 1, translateX: 0 });
    };

    if (isInView) {
      setTimeout(() => {
        show();
      }, 1600);
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="w-full mx-auto flex items-center justify-center">
        <p className="text-3xl text-white mx-8 lg:mx-0 lg:text-6xl font-extrabold max-w-4xl text-center">
          Getting ready for an interview has never been easier
        </p>
      </div>
      <motion.div
        // variants={fadeInVariants}
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: true, amount: 0.5 }}
        className="bg-diagonal-strips bg-blue-4 mx-8 lg:mx-32 my-6 lg:my-12 rounded-3xl xl:px-28"
      >
        <div className="flex flex-col-reverse lg:flex-row gap-16 md:gap-2 py-40 md:py-44 mx-6 lg:py-20 xl:py-20 2xl:py-52 min-h-screen items-center justify-between overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            animate={controls}
            transition={{
              delay: 0.05,
            }}
            className="w-full px-4 py-6 bg-blue-0 text-white rounded-3xl text-xl place-self-end"
          >
            {aiMessageArr.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{
                  duration: 0.012,
                  delay: index * 0.012,
                }}
                // whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <div className="w-full px-4 py-6 bg-blue-1 text-white rounded-3xl text-xl place-self-start">
            {userMessageArr.map((char, index) => (
              <motion.span
                ref={ref}
                key={index}
                initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                transition={{ duration: 0.015, delay: index * 0.015 }}
                whileInView={{ opacity: 1 }}
                viewport={{
                  once: true,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
