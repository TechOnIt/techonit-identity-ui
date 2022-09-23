import Image from 'next/image'

export default function Signin() {
    return (
        <>
            <div className="flex flex-col justify-center h-[100%] px-8 md:px-[20%] lg:px-[30%]">
                {/* Image And Text */}
                <div className="text-center flex flex-col mb-12">
                    <div className='grid mb-3'>
                        <Image src="/assets/Sun rise-cuate.svg" alt="Nature view" width={100} height={200} />
                    </div>
                    <div>
                        <label className="text-primary-500 text-2xl font-bold">Welcome</label>
                        <p>Enter your phone number to signin or signup!</p>
                    </div>
                </div>
                {/* Form And Button */}
                <div>
                    <div className="mb-9">
                        <div className="mb-2">
                            <input
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                maxLength={11}
                                type='text'
                                placeholder='Phone Number' />
                        </div>
                        <div>
                            <input
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                maxLength={11}
                                type='text'
                                placeholder='Password' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

Signin.layout = 'auth';