import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon?: JSX.Element;
  image?: JSX.Element;
  title: string;
  description: JSX.Element;
  setSelectedPage: (value: SelectedPage) => void;
};

function SkillCard({ icon, title, description, setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <motion.div
      className={
        isAboveMediumScreen
          ? "flex h-2/3 w-2/5 flex-col border-2 border-gray-400 px-5 py-16 text-center md:max-w-none"
          : "mx-auto my-8 max-w-md flex-col space-y-5 border-2 px-5 py-16 text-center first:mt-12"
      }
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="bg-primary-100 rounded-full border-2 border-gray-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <div className="mt-12">{description}</div>
      <div className="mx-12 mt-auto h-auto w-auto border-spacing-2 border-2 border-gray-400 py-4 hover:bg-gray-100">
        <a
          className="text-primary-500 hover:text-secondary-500 text-xl font-bold underline"
          href={"https://csoc-homesite.vercel.app/netrunner"}
        >
          <button className="">Explore</button>
        </a>
      </div>
    </motion.div>
  );
}

export default SkillCard;
