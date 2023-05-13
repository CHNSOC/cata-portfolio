import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    return <section
        id="home"
        className="gap-16 py-16 md:h-full md:pb-0"
    >
        {/* Image and Main Header */}
        <motion.div className="md:flex mx-auto w-full items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            {/* Stripe */}

            {/* Main Header */}
            <div className="z-10 mt-32 flex justify-center">
                
                <motion.div
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2.0 }}
                    variants={{
                        hidden: { opacity: 0, },
                        visible: { opacity: 1, },
                    }}>
                    <p className="mt-8 text-2xl">
                        Page under construction...
                    </p>
                </motion.div>

            </div>
        </motion.div>

        {/* Sponsors */}
        {isAboveMediumScreen && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        {/* <p>Sponsors</p> */}

                    </div>
                </div>
            </div>)}

    </section>
};

export default Home;
