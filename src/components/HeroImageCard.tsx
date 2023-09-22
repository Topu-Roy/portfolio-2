'use client'
import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type Props = {}

const HeroImageCard = (props: Props) => {
    return (
        <Card className='max-w-5xl'>
            <CardContent className='pt-6'>
                <div className="flex justify-center items-center gap-4">
                    <div>
                        <Image className="rounded-xl dark:grayscale-[70%] dark:hover:grayscale-0 transition-all duration-200" src={'/Topu Roy.jpg'} alt='' height={400} width={400} />
                    </div>
                    <div className="flex flex-1 justify-center items-center gap-4 flex-col">
                        <Card className='w-full pt-6'>
                            <CardContent>
                                <div className="flex justify-start items-center gap-4">
                                    <div className="relative w-10">
                                        <Avatar>
                                            <AvatarImage src={'/Topu Roy.jpg'} alt="@topu_web_dev" />
                                            <AvatarFallback>TR</AvatarFallback>
                                        </Avatar>
                                        <div className='absolute h-3 w-3 rounded-full bg-green-500 -bottom-1 right-0' />
                                    </div>
                                    <div>
                                        <p className='font-semibold text-lg'>@topu_web_dev</p>
                                        <p className='font-medium text-sm'>Full Stack Web Developer</p>
                                    </div>
                                </div>
                                <div className='pl-14 pt-4'>
                                    <p>
                                        I work full time on Fiverr as a full stack web developer.
                                    </p>
                                    <p className='flex gap-2'>
                                        Visit my
                                        <span className='flex justify-center items-center gap-2'>
                                            <a href='https://www.fiverr.com/users/topu_web_dev/' target='_blank' className='text-blue-700 underline'>Fiverr profile</a>
                                            <span>
                                                <Image alt='' src={'/icons/link.png'} height={18} width={18} />
                                            </span>
                                        </span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='w-full pt-6'>
                            <CardContent>
                                <p>
                                    I am an experienced Full Stack Web Developer. I create excellent web applications using the latest technology. I prioritize delivering value for my clients and strive to produce top-notch work. This approach ensures client satisfaction and builds trust. I am both skilled and approachable when interacting with clients. I consistently aim to surpass their expectations and deliver exceptional outcomes.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default HeroImageCard