'use client'
import { clientBenefits } from '@/constants'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

const MySellingFeatures = () => {

    const [displayCount, setDisplayCount] = useState(8);

    return (
        <div className='w-full relative'>
            <h3 className="font-bold w-full text-center text-4xl py-8 hover:underline">Why Choose Me?</h3>

            <div className="flex justify-center gap-4 items-center flex-wrap">
                {clientBenefits.slice(0, displayCount).map(item => (
                    <Card className='w-full md:w-[48%] xl:w-[35rem] h-[12rem]' key={`${item.id}`}>
                        <CardHeader>
                            <div className='flex justify-start gap-3 items-center'>
                                <div className="h-8 w-8 ring-1 dark:ring-0 ring-black bg-white rounded-full flex justify-center items-center">
                                    <Image src={item.image} alt={`${item.headline}`} height={20} width={20} />
                                </div>
                                <h3 className='font-medium text-lg'>{item.headline}</h3>
                            </div>

                        </CardHeader>
                        <CardContent>
                            <p className='text-black/70 dark:text-white/70'>{item.description}</p>
                        </CardContent>
                    </Card>
                ))}

                <div className={`${displayCount === 8 ? '-mt-[14rem] bg-gradient-to-t from-white dark:from-[#0A0A0A] to-transparent items-end h-[12rem]' : ''} flex w-[71rem] py-8 max-w-[71rem] justify-center`}>
                    <Button onClick={() => setDisplayCount(prev => prev === 8 ? clientBenefits.length : 8)} className="hover:underline">
                        {displayCount === 8 ? 'Show More' : 'Show Less'}
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default MySellingFeatures