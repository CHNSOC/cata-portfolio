import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage, SkillCardType } from "@/shared/types"
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion"
import SkillCard from "./SkillCard";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const skillCards: Array<SkillCardType> = [
  {
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
    icon: <CodeBracketIcon className="h-6 w-6" />,
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
  }, {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    title: "Knowledge Acquisition",
    description: 
    <div className=" flex-col space-y-4">
        <div>
          <strong>Reading Preferences:</strong>
          <p>Social Science, Cognitive Psychology</p>
        </div>
        <div>
          <strong>Productivity:</strong>
          <p>Notion, Dedao </p>
        </div>
      </div>
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

function Skills({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="h-screen py-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
      >

      </motion.div>
      {isAboveMediumScreen ? (<motion.div
        className="md:flex flex-row items-center justify-between gap-8 h-screen pb-36"
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
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex h-1/4">01</div>
          <div className="flex h-1/4">02</div>
          <div className="flex h-1/4">03</div>
          <div className="flex h-1/4">04</div>
        </div>
      )}

    </section>
  )
}

export default Skills