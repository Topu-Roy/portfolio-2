'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

type Props = {}

const CTA = (props: Props) => {
    return (
        <div className="flex w-full mx-auto justify-center items-center gap-4 pb-8 my-8">
            <Button className='h-12 w-28' variant={'outline'}><a target='_blank' href="https://github.com/Topu-Roy/">Github</a></Button>
            <Button className='h-12 w-28'>
                <Link href={'/template'}>Templates</Link>
            </Button>
        </div>
    )
}

export default CTA