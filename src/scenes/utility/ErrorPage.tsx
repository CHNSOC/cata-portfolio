type Props = {}

function ErrorPage({ }: Props) {
    return (
        <div className="flex h-screen justify-center items-center">
            <p className="text-red-500 text-xl text-center">Error 404
            </p>
        </div>
    )
}

export default ErrorPage