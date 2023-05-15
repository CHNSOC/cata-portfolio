import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import bgImg from "@/assets/Exp_Background.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

function Experiences({ setSelectedPage }: Props) {

  return (
    <section id="experiences" style={{ backgroundImage: `url(${bgImg})` }} className={`min-h-full bg-cover md:bg-center bg-top py-16 flex flex-col min-w-[320px]`}>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}></motion.div >
      {/* Header */}
      <motion.div
        className="flex justify-center items-center h-24 text-center text-2xl md:pt-40 pt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}

        transition={{ duration: 2.5 }}
        variants={{
          hidden: { opacity: 0, },
          visible: { opacity: 1, },
        }}
      >
        <div className="relative w-96">
          {/* White Glow */}
          <div className="absolute -inset-0.5 bg-gray-400 blur-[64px] opacity-60 ">
          </div>
          <div className="relative text-white md:text-3xl">
            <p>經驗 - Experiences</p>
            <span className=" text-gray-300 text-sm ">The Neverending path</span>

          </div>
        </div>

      </motion.div>
      {/* Content */}
      <div className="flex-1 mx-auto my-12 justify-center items-center py-auto">
        <motion.div
          className=" py-12 flex flex-col justify-center items-center h-auto text-gray-300 md:text-base text-xs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2.5 }}
          variants={{
            hidden: { opacity: 0, },
            visible: { opacity: 1, },
          }}
        >
          {/* Current */}
          <div className="my-8"><p className="md:text-lg text-sm">{">"} The Future Awaits <motion.div
          className="inline"
            initial={{ opacity:1 }}
            animate={{ opacity:0 }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 2, delay: 1}}>_</motion.div> </p></div>
          {/* Panels and Splitter */}
          <div className="grid grid-cols-2 divide-x divide-gray-500 divide-opacity-50">
            {/* Left Panel */}
            <div className="md:px-8 px-2 py-8 text-right">
              <div className="first:pt-16 md:space-y-24 space-y-12">
                <div>
                  <p>2022</p>
                  <p>IT Specialist trainee at Infineon Technologies (Thailand)</p>
                </div>
                <div>
                  <p>2020</p>
                  <p>Individual columnist on Wechat subscription platform</p>
                </div>
                <div>
                  <p>2018</p>
                  <p>Java Software Engineering student at Tedu, Wuhan</p>
                </div>
              </div>
            </div>
            {/* Right Panel */}
            <div className="md:px-8 px-2 py-8">
              <div className="md:space-y-24 space-y-12">
                <div>
                  <p>2023</p>
                  <p>Full-stack Slash Engineer / Growth Seeker</p>
                </div>
                <div>
                  <p>2021</p>
                  <p>Userscript Developer / Illustration Artist</p>
                </div>
                <div>
                  <p>2019</p>
                  <p>Computer Engineering student at Thammasat Univ. / Freelance composer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experiences