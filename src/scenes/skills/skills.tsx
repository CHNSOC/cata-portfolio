import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage, SkillCardType } from "@/shared/types"
import { CodeBracketIcon, MusicalNoteIcon, PaintBrushIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion"
import SkillCard from "./SkillCard";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const skillCards: Array<SkillCardType> = [
  {
    icon: <MusicalNoteIcon className="h-6 w-6" />,
    title: "Music Composition",
    description:
      <div className=" flex-col space-y-4">
        <div>
          <strong>Instruments:</strong>
          <p>Piano, Guitar, String Ensemble, Synths</p>
        </div>
        <div>
          <strong>Genres:</strong>
          <p>Neo Classical, Jazz, EDM </p>
        </div>
      </div>
  }, {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    title: "Software Development",
    description: <div className=" flex-col space-y-4">
      <div>
        <strong>Languages:</strong>
        <p>Python, Java, C#, Typescript </p>
      </div>
      <div>
        <strong>Frameworks:</strong>
        <p>React, Django, Tailwind </p>
      </div>
    </div>
  }, {
    icon: <PaintBrushIcon className="h-6 w-6" />,
    title: "CG Illustration",
    description:
      <div className=" flex-col space-y-4">
        <div>
          <strong>Styles:</strong>
          <p>Painting, 3D Modeling, Concept Painting</p>
        </div>
        <div>
          <strong>Tools:</strong>
          <p>Photoshop, Premiere, Stable Diffusion </p>
        </div>
      </div>
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 }
  }
}

function Skills({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="md:h-full h-auto py-32 px-12">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
      >

      </motion.div>
      {/* Header */}
      <motion.div
        className="flex justify-center items-center h-24 text-center text-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}

        transition={{ duration: 2.5 }}
        variants={{
          hidden: { opacity: 0, },
          visible: { opacity: 1, },
        }}
      >
        <div>
          <p>技能 - Skills</p>
          <span className=" text-gray-500 text-sm ">*Details are not availiable yet.</span>
        </div>
      </motion.div>
      {isAboveMediumScreen ? (<motion.div
        className="md:flex px-24 flex-row items-center justify-between gap-8 md:h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {skillCards.map((skillcard: SkillCardType) => (<SkillCard key={skillcard.title}
          icon={skillcard.icon}
          title={skillcard.title}
          description={skillcard.description}
          setSelectedPage={setSelectedPage} />))}
      </motion.div>
      ) : (
        <div className="flex-col items-center justify-center w-full">
          {skillCards.map((skillcard: SkillCardType) => (<SkillCard key={skillcard.title}
            icon={skillcard.icon}
            title={skillcard.title}
            description={skillcard.description}
            setSelectedPage={setSelectedPage} />))}
        </div>
      )}

    </section>
  )
}

export default Skills