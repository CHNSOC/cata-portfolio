import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const childVariant = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }

type Props = { icon?: JSX.Element, image?: JSX.Element, title: string, description: JSX.Element, setSelectedPage: (value: SelectedPage) => void }

function SkillCard({ icon, title, description, setSelectedPage }: Props) {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    return (
        <motion.div
            
            className={isAboveMediumScreen? ('flex flex-col px-5 py-16 text-center md:max-w-none w-2/5 h-2/3 border-2 border-gray-400') 
            : ('flex-col text-center px-5 py-16 border-2 max-w-md mx-auto space-y-5 my-8 first:mt-12' )}
            variants={childVariant}
        >
            <div className='mb-4 flex justify-center'>
                <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                    {icon}
                </div>
            </div>
            <h4 className='font-bold'>{title}</h4>
            <div className='mt-12'>{description}</div>
            <div className='w-auto h-auto border-spacing-2 border-gray-400 border-2 mt-auto py-4 mx-12 hover:bg-gray-100'>
                <AnchorLink className="text-xl font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => { setSelectedPage(SelectedPage.Contact) }}
                    href={`#${SelectedPage.Contact}`}>
                    <button className=''>Explore</button>
                </AnchorLink>
            </div>
        </motion.div>
    )
}

export default SkillCard