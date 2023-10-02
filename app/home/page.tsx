"use client"
import React, { useState } from 'react'
import RegisterForm from '../components/registerForm';
import WelcomeBanner from '../components/welcomeBanner';
import { useRouter } from 'next/navigation';

type Props = {}

const HomePage = (props: Props) => {
    const [showBanner, setShowBanner] = useState(false)
    const router = useRouter()

    const handleGetStarted = () => {
        setShowBanner(e => !e);
    }

    const handleSignIn = () => {
        router.push("/order")
    }


    return (
        <div className=''>
            <div className="transition-all duration-500 ease-in-out hero min-h-screen bg-base-200">
                <div className={`hero-content text-center flex ${showBanner ? 'flex-row' : 'flex-col'}`}>
                    <WelcomeBanner handleShow={handleGetStarted}/>
                    <div className={`transition-all duration-500 ease-in-out ${showBanner ? 'opacity-100' : 'opacity-0 invisible'}`}>
                        <RegisterForm onClickSubmit={handleSignIn}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;