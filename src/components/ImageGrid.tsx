'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { Button } from './ui/button';
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from './ui/dialog';
import { Card, CardContent } from './ui/card';
import { Skeleton } from './ui/skeleton';

import { images } from '@/constants';
import { toast } from './ui/use-toast';


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


    // * Copy to clipboard
    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = (CopyText: string) => {
        copyTextToClipboard(CopyText)
            .then(() => {
                setIsCopied(true)
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        if (isCopied) {
            toast({
                title: "Copied to clipboard",
                description: "The Design ID is copied to clipboard 🎉",
            })
        }
    }, [isCopied])


    return (
        <>
            <div className="h-full w-full mx-auto">

                <div className="h-full w-full columns-2 sm:columns-3">
                    {displayImages ? displayImages.map(image => {
                        const CopyText = `Design id is ${image.id}`
                        return (
                            image ? (
                                <div key={`${image.id}`}>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button>
                                                <Image src={image.path} alt='image' height={500} width={500} className='rounded-lg mt-3 shadow-md' />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-xl w-full">

                                            <Card>
                                                <CardContent>
                                                    <div className='space-y-4'>
                                                        <Image src={image.path} alt='image' height={500} width={500} className='rounded-lg mt-3 shadow-md' />
                                                        <div className="flex justify-between items-center">
                                                            <input className='p-2 rounded-md px-4 focus:outline-none' type="text" value={CopyText} readOnly />
                                                            <Button onClick={() => handleCopyClick(CopyText)}>Copy</Button>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            <DialogFooter>
                                                <Button type="submit">Add Favorite</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            ) : (
                                <div className="h-full w-full">
                                    <Skeleton className='w-[500px] h-[400px] rounded-md' />
                                </div>
                            )
                        )
                    })
                        : <div className='h-full w-full flex justify-between items-center flex-wrap mx-auto space-y-4'>
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                            <Skeleton className='w-[500px] h-[400px] rounded-md' />
                        </div>}
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