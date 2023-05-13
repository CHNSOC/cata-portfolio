type Props = {}

const Playfield = ({ }: Props) => {
    return (
        <div>
            <div className="p-6 max-w-sm mx-auto mt-12 flex rounded-lg bg-white drop-shadow-lg space-x-4">
                <div>
                    <img className="w-12 h-12 rounded-full" src="https://picsum.photos/200/300" alt="Pfp"></img>
                </div>
                {/* Text */}
                <div>
                    <div className="text-lg font-bold">
                        ChitChat
                    </div>
                    <div className=" text-slate-500">
                        You have a new Message!
                    </div>
                    <button className=" py-1 mt-2 w-24 text-center text-purple-600 hover:text-white font-montserrat text-sm
                     hover:bg-purple-400 rounded-full border-solid border-2 border-purple-500 hover:border-transparent
                     focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Message
                        
                    </button>
                </div>
            </div>
            <div>
                {/* Component 2 */}
            </div>
        </div>

    )
}

export default Playfield