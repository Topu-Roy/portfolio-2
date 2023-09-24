'use client'

import { images } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from './ui/dialog';
import { Card, CardContent } from './ui/card';


type ImageArrayType = { id: number; path: string; }[]

const ImageGrid = () => {
    const [allImages, setAllImages] = useState<ImageArrayType>()
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 16;

    const totalPages = allImages ? Math.ceil(allImages?.length / itemsPerPage) : 0
    const pageVisited = currentPage * itemsPerPage;

    // * Images to display
    const displayImages = allImages?.slice(pageVisited, pageVisited + itemsPerPage)

    // * Pagination Buttons
    const displayPaginationButtons: number[] = []
    for (let i = 1; i < totalPages; i++) {
        displayPaginationButtons.push(i)
    }

    // * Setting the Images
    useEffect(() => {
        setAllImages(images)
    }, [])


    return (
        <>
            <div className="h-full w-full mx-auto">

                <div className="h-full w-full columns-3">
                    {displayImages ? displayImages.map(image => (
                        <div key={`${image.id}`}>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button>
                                        <Image src={image.path} alt='image' height={500} width={500} className='rounded-lg mt-3 shadow-md' />
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-xl">

                                    <Card>
                                        <CardContent>
                                            <div className='space-y-4'>
                                                <Image src={image.path} alt='image' height={1000} width={1000} className='rounded-lg mt-3 shadow-md' />
                                                <p className='font-semibold text-lg'>Design id = <span className="font-bold text-3xl">{image.id}</span></p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <DialogFooter>
                                        <Button type="submit">Add Favorite</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))
                        : <div>Loading</div>}
                </div>


                <div className="flex justify-center items-center gap-2 py-8 w-full mx-auto">
                    {displayPaginationButtons.map(btn => {
                        return (
                            // * Wrap with Link so it scrolls to top when clicked
                            <Link href={'#to_top'}>
                                <Button
                                    key={btn}
                                    onClick={() => setCurrentPage(btn)}
                                >
                                    {btn}
                                </Button>
                            </Link>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default ImageGrid;