import React from 'react'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
    text?: string
}

export const CTAButton = React.forwardRef<HTMLAnchorElement, CTAButtonProps>(
    ({ className, ...props }, ref) => {
        return (
            <a
                ref={ref}
                href="#get-started"
                className={cn(
                    'group relative inline-block w-50 cursor-pointer overflow-hidden rounded-full border border-zinc-700 bg-zinc-950 p-6 text-center text-lg font-semibold',
                    className
                )}
                {...props}
            >
                <span className="inline-block translate-x-1 text-white transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    Get Started
                </span>
                <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-zinc-950 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
                    <span>Get Started</span>
                    <Icon icon="tabler:arrow-down" className="text-2xl" />
                </div>
                <div className="absolute top-[45%] left-[20%] h-2 w-2 scale-[1] rounded-lg bg-white transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white"></div>
            </a>
        )
    }
)

CTAButton.displayName = 'CTAButton'
