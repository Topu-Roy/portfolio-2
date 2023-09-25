import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import Image from 'next/image';
import { BenefitsArray } from '@/constants';

const Features = () => {
    return (
        <>
            <h3 className="font-bold w-full text-center text-4xl py-8 hover:underline">Benefits of choosing Next.JS</h3>

            <div className="flex justify-center gap-4 items-center flex-wrap">
                {BenefitsArray.map(item => (
                    <Card className='w-full md:w-[48%] xl:w-[35rem] h-[12rem] md:h-[15rem] lg:h-[12rem]' key={`${item.id}`}>
                        {/* md:w-[23rem] lg:w-[30rem] xl:w-[35rem] */}
                        <CardHeader>
                            <div className='flex justify-start gap-3 items-center'>
                                <div className="h-8 w-8 ring-1 dark:ring-0 ring-black bg-white rounded-full flex justify-center items-center">
                                    <Image src={item.image} alt='' height={20} width={20} />
                                </div>
                                <h3 className='font-medium text-lg'>{item.headline}</h3>
                            </div>

                        </CardHeader>
                        <CardContent>
                            <p className='text-black/70 dark:text-white/70'>{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Features