'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import HireNowButton from '../HireNowButton'
import ArrowSVG from '../../../public/icons/Arrow'
import Link from 'next/link'

const NavSlider = () => {


    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsOpen(true)} variant="outline">Menu</Button>
            <div className="flex flex-col absolute h-[100vh] w-[70vw] right-[-15%] top-[-48%] justify-start pt-16 bg-black z-50">

                <div className="relative gap-8 flex flex-col items-center justify-center ">
                    <Button className='absolute z-[999] bg-white text-black font-semibold top-[-20%] right-[10%]' onClick={() => setIsOpen(false)} variant="outline">Close</Button>

                    <h3 className="font-bold text-4xl">Go To</h3>
                    <Button variant={'ghost'} className="p-0 m-0" type="submit">
                        <Link href={'/'}>Home </Link>
                    </Button>

                    <Link className="flex justify-center items-center" href={'/template'}>
                        Template
                        <ArrowSVG />
                    </Link>

                    <HireNowButton />

                </div>

            </div>
        </>
    )
}

export default NavSlider;