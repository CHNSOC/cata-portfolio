import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    return <section
        id="home"
        className="gap-16 py-16 h-full md:pb-0 items-center"
    >
        {/* Image and Main Header */}
        <AnimatePresence>
            <motion.div className="flex mx-auto w-full items-center justify-center h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                initial={{ background: 'radial-gradient(#F3f4f6 20%, #F3f4f6, #F3f4f6)' }}
                animate={{ background: 'radial-gradient(#dcdcdc 20%, #F3f4f6, #F3f4f6)' }}
                exit={{ background: 'radial-gradient(#F3f4f6 20%, #F3f4f6, #F3f4f6)' }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror', }}>

                {/* Main Header */}
                <div className="z-10 mt-24 md:mt-32 flex justify-center">

                    <motion.div
                        className="md:-mt-24 sm: text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 2.5 }}
                        variants={{
                            hidden: { opacity: 0, },
                            visible: { opacity: 1, },
                        }}>
                        {isAboveMediumScreen ? (<div>
                            <p className="text-4xl">
                                清心明志，
                                從容求真。
                            </p>
                            <p className="mt-8 pl-8 text-4xl">
                                心領神會，
                                大道至簡。
                            </p>
                        </div>) : (<div className="flex gap-12">
                            <p className="idiom pt-8 text-4xl">
                                心領神會，
                                大道至簡。
                            </p>
                            <p className="idiom  text-4xl">
                                清心明志，
                                從容求真。
                            </p>
                        </div>)}

                    </motion.div>

                </div>
            </motion.div>
        </AnimatePresence>
        {/* Nextpage Arrow */}
        {isAboveMediumScreen && (
            <div className="h-[150px] w-full bg-primary-100 bg-opacity-0 py-10 flex items-center">
                <div className="mx-auto">
                    <div className="flex items-center justify-between gap-8">
                        <AnchorLink className="text-sm font-bold text-primary-500 hover:text-secondary-500"
                            onClick={() => { setSelectedPage(SelectedPage.Experiences) }}
                            href={`#${SelectedPage.Experiences}`}>
                            <ArrowDownIcon className="h-6 w-6 text-primary-500" />
                        </AnchorLink>
                    </div>
                </div>
            </div>)}

    </section>
};

export default Home;
