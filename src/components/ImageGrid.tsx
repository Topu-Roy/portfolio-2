'use client'
import { images } from '@/constants';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

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
            <div className="h-full w-full columns-3">
                {displayImages ? displayImages.map(image => (
                    <div id={`${image.id}`} className='p-2'>
                        <Image src={image.path} alt='image' height={500} width={500} className='rounded-lg mt-3' />
                    </div>
                ))
                    : <div>Loading</div>}
            </div>

            <div className="flex justify-center items-center gap-2 py-8 w-full mx-auto">
                {displayPaginationButtons.map(btn => {
                    return (
                        <button
                            key={btn}
                            className='px-5 py-3 bg-white text-black rounded-md hover:bg-white/90'
                            onClick={() => setCurrentPage(btn)}
                        >
                            {btn}
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default ImageGrid;