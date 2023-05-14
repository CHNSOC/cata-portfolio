import { Language, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useState } from "react";
import ArticleContent from "./ArticleContent";

type Props = {
    setSelectedPage: (value: SelectedPage) => void,
    setLanguage?: (value: Language) => void
}


const AboutMe = ({ setSelectedPage }: Props) => {
    const [language, setLanguage] = useState<Language>(Language.ENG);

    // Using i18n could be better for actual implementation on a larger scale.

    const translations = {
        eng: {
            article: (<ArticleContent animID="eng_p">
                <div className="flex justify-center text-center items-center w-full h-full border-b-2 border-t-2 py-3">
                    <p className="italic text-lg">"The young boy finally lifted his gaze. Before him, the enclosing walls faded into the background, giving way to a radiant expanse of stars."</p>
                </div>
                <div className=" mt-12 flex:col md:space-y-8 space-y-4 justify-left w-full h-full text-left tracking-wide leading-relaxed">
                    <p className="indent-10">Welcome to my portfolio page. It's a pleasure to make your acquaintance here.</p>
                    <p className="indent-10">If I were, to sum up my identity in a nutshell, I would gladly label myself as a software engineer with a deep yearning for the beauty that life offers.
                     Drawing inspiration from the <i>"Principles,"</i> I'm a dedicated growth seeker, constantly striving for improvement and refinement.</p>
                    <p className="indent-10">I believe that the ideas of hackers and painters apply to the nuances of daily life. Each line of code serves as an indispensable brushstroke within the grand canvas,
                     while every musical phrase embodies the notion of an efficient, concise logic of a well-crafted program.
                    Amidst the chaos and uncertainty of this ever-evolving world with subversive technological revolutions on the horizon, I focus on pressing tasks in the present while embracing the mysterious and unpredictable future. </p>
                    <p className="indent-10"></p>
                </div>
            </ArticleContent>)
        },
        chs: {
            article: (<ArticleContent animID="chs_p">
                <div className="flex justify-center text-center items-center w-full h-full border-b-2 border-t-2 py-3">
                    <p className="italic">“少年终于抬起头来。眼前的围墙隐入背景，取而代之的是一片璀璨的星海。"</p>
                </div>
                <div className=" mt-12 flex:col md:space-y-8 space-y-4 justify-left w-full h-full tracking-wide leading-relaxed">
                    <p className="indent-10">欢迎来到我的个人页面，很高兴在这里认识你。</p>
                    <p className="indent-10">如果要用一句话来形容我自己，我愿意称自己为一位对生命中美好事物充满向往的软件工程师。
                    若按照《原则》这本书里的话来讲，则是一位追求终生成长的修行者。</p>
                    <p className="indent-10">我相信，黑客与画家的处事法则适用于生活中的点点滴滴。每一行代码都是一幅画作中不可或缺的笔触，每一行乐句都是一段程序中高效简洁的逻辑。
                    在这个充满混乱与不确定，技术转折即将到来的新世界里，我专注着做好眼前重要的事情，同时也欢迎难以捉摸，变化莫测的未来。 </p>
                    <p className="indent-10"></p>
                </div>
            </ArticleContent>)
        },
        cht: {
            article: (<ArticleContent animID="cht_p">
                <div className="flex justify-center text-center items-center w-full h-full border-b-2 border-t-2 py-3">
                    <p className="italic">“少年終於抬起頭來。眼前的圍牆隱入背景，取而代之的是一片璀璨的星海。"</p>
                </div>
                <div className=" mt-12 flex:col md:space-y-8 space-y-4 justify-left w-full h-full tracking-wide leading-relaxed">
                    <p className="indent-10">歡迎來到我的個人頁面，很高興在這裡認識你。</p>
                    <p className="indent-10">如果要用一句話來形容我自己，我願意稱自己為一位對生命中美好事物充滿嚮往的軟件工程師。
                    若按照《原則》這本書裡的話來講，則是一位追求終生成長的修行者。</p>
                    <p className="indent-10">我相信，黑客與畫家的處事法則適用於生活中的點點滴滴。每一行代碼都是一幅畫作中不可或缺的筆觸，每一行樂句都是一段程序中高效簡潔的邏輯。
                    在這個充滿混亂與不確定，技術轉折即將到來的新世界裡，我專注著做好眼前重要的事情，同時也歡迎難以捉摸，變化莫測的未來。</p>
                    <p className="indent-10"></p>
                </div>
            </ArticleContent>)
        }
    };

    return (
        <section id="aboutme" className="gap-16 h-auto min-h-full pt-24">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}></motion.div >

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
                    <p>關於 - About me</p>
                    <span className=" text-gray-500 text-sm ">Story of a Traveller.</span>
                </div>
            </motion.div>

            <motion.div
                className="flex justify-center items-center space-x-3 mt-2 md:mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}

                transition={{ duration: 2.5 }}
                variants={{
                    hidden: { opacity: 0, },
                    visible: { opacity: 1, },
                }}>
                <button className={`${language === Language.ENG ? ' border-gray-500 md:border-b-2' : ''} transition duration-500`} onClick={() => setLanguage(Language.ENG)}>English</button>
                <button className={`${language === Language.CHS ? ' border-gray-500 md:border-b-2 font-nssc' : 'font-nssc'} transition duration-500`} onClick={() => setLanguage(Language.CHS)}>简体中文</button>
                <button className={`${language === Language.CHT ? ' border-gray-500 md:border-b-2' : ''} transition duration-500`} onClick={() => setLanguage(Language.CHT)}>繁體中文</button>
            </motion.div>

            <div className="md:px-16 px-8 md:py-24 py-16">
                <div className="mx-auto max-w-7xl">
                    <article>
                        <div>
                        </div>
                        <motion.div className={`${language === Language.CHS ? "font-nssc " : ""} text-gray-800 md:text-xl text-lg`}>
                            {translations[language].article}
                        </motion.div>
                    </article>
                </div>
            </div>
            
        </section>
    )
}

export default AboutMe