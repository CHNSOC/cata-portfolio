import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import bgImg from "@/assets/Exp_Background.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Experiences({ setSelectedPage }: Props) {
  return (
    <section
      id="experiences"
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`flex min-h-full min-w-[320px] flex-col bg-cover bg-top py-16 md:bg-center`}
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}
      ></motion.div>
      {/* Header */}
      <motion.div
        className="flex h-24 items-center justify-center pt-32 text-center text-2xl md:pt-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="relative w-96">
          {/* White Glow */}
          <div className="absolute -inset-0.5 bg-gray-400 opacity-60 blur-[64px] "></div>
          <div className="relative text-white md:text-3xl">
            <p>經驗 - Experiences</p>
            <span className=" text-sm text-gray-300 ">
              The Neverending Path
            </span>
          </div>
        </div>
      </motion.div>
      {/* Content */}
      <div className="py-auto mx-auto my-12 flex-1 items-center justify-center">
        <motion.div
          className=" flex h-auto flex-col items-center justify-center py-12 text-xs text-gray-300 md:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {/* Current */}
          <div className="my-8">
            <p className="text-sm md:text-lg">
              {">"} The Future Awaits{" "}
              <motion.div
                className="inline"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  delay: 1,
                }}
              >
                _
              </motion.div>{" "}
            </p>
          </div>
          {/* Panels and Splitter */}
          <div className="grid grid-cols-2 divide-x divide-gray-500 divide-opacity-50">
            {/* Left Panel */}
            <div className="px-2 py-8 text-right md:px-8">
              <div className="space-y-12  md:space-y-24">
                <div>
                  <p>2023</p>
                  <p>Technical Product Manager at HD (Thailand)</p>
                </div>
                <div>
                  <p>2022</p>
                  <p>
                    IT Specialist trainee at Infineon Technologies (Thailand)
                  </p>
                </div>
                <div>
                  <p>2020</p>
                  <p>
                    Individual columnist on the WeChat subscription platform
                  </p>
                </div>
                <div>
                  <p>2018</p>
                  <p>Java Software Engineering student at Tedu, Wuhan</p>
                </div>
              </div>
            </div>
            {/* Right Panel */}
            <div className="px-2 py-8 md:px-8">
              <div className="space-y-12 first:pt-16 md:space-y-24">
                <div>
                  <p>2023</p>
                  <p>Full-Stack engineer / Growth seeker</p>
                </div>
                <div>
                  <p>2021</p>
                  <p>Userscript developer / Illustration artist</p>
                </div>
                <div>
                  <p>2019</p>
                  <p>
                    Computer Engineering student at Thammasat Univ. / Freelance
                    composer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experiences;
