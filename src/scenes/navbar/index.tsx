import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import { motion, AnimatePresence } from "framer-motion";

import Link from "../Link";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {

    const flexBetween = "flex justify-between items-center";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    const [isMenuToggled, setIsMenuToggled] = useState<Boolean>(false);
   
    return (
        <nav>
            <div className={`fixed top-0 z-30 w-full py-6 ${flexBetween} ${navbarBackground}`}>
                <div className={`${flexBetween} mx-auto w-full`}>
                    <div className={`flex justify-end  w-full gap-16 mr-12 mt-8`}>
                        {isAboveMediumScreen ? (
                            <div className={`items-center flex justify-center w-full`}>
                                <div className={`${flexBetween} gap-16 text-sm`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Skills"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="About Me"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Contact"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-8 w-8 text-black" />
                            </button>
                        )}
                    </div>
                </div>

            </div>
            {/* Mobile Modal */}
            <AnimatePresence>
                {!isAboveMediumScreen && isMenuToggled && (
                    <motion.div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-white bg-opacity-75 drop-shadow-xl"
                        key="sidebar"
                        transition={{ duration: 0.5 }}
                        initial={{x:100, opacity: 0 }}
                        animate={{x:0, opacity: 1 }}
                        exit={{x:100, opacity: 0 }}
                    >
                        {/* Close Icon */}
                        <div className="flex justify-end p-12 mt-4 mr-2">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <XMarkIcon className="h-8 w-8 opacity-0" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About Me"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar