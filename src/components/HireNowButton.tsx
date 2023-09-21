import React from 'react'
import { Button } from './ui/button'

type Props = {}

const HireNowButton = (props: Props) => {
    return (
        <Button>
            <a href="https://www.fiverr.com/topu_web_dev?up_rollout=true" target='_blank'>Hire Me</a>
        </Button>
    )
}

export default HireNowButton