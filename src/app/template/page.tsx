import ImageGrid from '@/components/ImageGrid'
import React from 'react'

type Props = {}

const TemplatePage = (props: Props) => {
    return (
        <section className='w-full max-w-7xl mx-auto'>
            <ImageGrid />
        </section>
    )
}

export default TemplatePage