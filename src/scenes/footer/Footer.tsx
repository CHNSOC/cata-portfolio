
const Footer = () => {
  return (
    <footer className='py-8 bg-gray-100'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='space-y-6 mt-16 basis-1/2 md:mt-0'>
                <p className='my-5'>Designed by Catastasis</p>
                <p>Powered by React TS and Tailwind.</p>
                <p>© 2077 All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'><a href="https://www.linkedin.com/in/catastasis">LinkedIn</a></p>
                <p className='my-5'><a href="https://github.com/CHNSOC">Github</a></p>
                <p className='my-5'><a href="https://music.163.com/#/artist?id=12405941">Musician Homepage</a></p>
            </div>
            <div className=' mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact</h4>
                <p className='my-5'><a href="mailto:CHNSOC@gmail.com"></a>CHNSOC@gmail.com</p>
                
            </div>
        </div>

    </footer>
  )
}

export default Footer