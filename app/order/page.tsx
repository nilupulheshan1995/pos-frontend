"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import OrderApp from '../components/order/app';

type Props = {}

const HomePage = (props: Props) => {

    return (
        <div className=''>
            <div className="transition-all duration-500 ease-in-out hero min-h-screen bg-base-200">
                <OrderApp />
            </div>
        </div>
    )
}

export default HomePage;