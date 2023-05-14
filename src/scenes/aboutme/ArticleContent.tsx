import { motion } from "framer-motion"

type Props = {children: React.ReactNode, animID?: string;}

const ArticleContent = ({children, animID}: Props) => {
    return (
        <motion.div key={animID}
            transition={{ duration: 2.5 }}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }} >
            {children}
        </motion.div>
    )
}

export default ArticleContent