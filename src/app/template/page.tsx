import ImageGrid from '@/components/ImageGrid'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'

type Props = {}

const TemplatePage = (props: Props) => {
    return (
        <section className='w-full max-w-7xl mx-auto space-y-8'>
            <div className='py-8'>
                <Card>
                    <CardHeader><p className='font-semibold text-2xl'>Guide</p></CardHeader>
                    <CardContent>
                        <p>
                            Press on any template to see the details about the template. There is a lot of great options so pick your favorite ones.
                        </p>
                        <br />
                        <p className='italic dark:text-white/60 text-black/60'>
                            Note: There can be more than one page, so don't forget to explore them.
                        </p>

                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </div>
            <ImageGrid />
        </section>
    )
}

export default TemplatePage