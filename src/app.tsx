import { DotPattern } from './components/dot-pattern'
import { CTAButton } from './components/cta-button'
import { Card } from './components/card'
import { Icon } from '@iconify/react'
import { Footer } from './components/footer'

const features = [
    {
        title: '🪶 Lightweight and Fast',
        description:
            'At under 1KB, @is-it/fifteen won’t bloat your project. Built for performance and simplicity.',
    },
    {
        title: '💪🏻 Flexible Options',
        description:
            'Strict or loose comparisons? Binary or negative numbers? Customize it your way with our powerful configuration options.',
    },
    {
        title: '🔑 TypeScript Ready',
        description: 'Full TypeScript support ensures type safety and better developer experience.',
    },
    {
        title: '📚 No Dependencies',
        description: 'Stay lean. No unnecessary dependencies—just pure functionality.',
    },
    {
        title: '⚙️ Built for Developers',
        description:
            'Designed to save you time. Integrate seamlessly with JavaScript or TypeScript projects in seconds.',
    },
    {
        title: '🤟🏻 Modern and Open Source',
        description:
            'Actively maintained and built for today’s development needs. Open to contributions from the community.',
    },
]

function App() {
    return (
        <>
            <main className="relative flex min-h-dvh flex-col items-center justify-center text-center">
                <div className="relative z-10 container">
                    <div className="mx-auto max-w-6xl space-y-6">
                        <h1 className="text-4xl leading-[1.25] sm:text-6xl lg:text-7xl xl:text-8xl">
                            Simplify Your Number Validation with
                            <span className="bg-gradient-to-br from-pink-200 via-amber-200 to-cyan-200 bg-clip-text text-transparent">
                                {' '}
                                @is-it/fifteen
                            </span>
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg text-zinc-400 sm:text-xl">
                            A lightweight, flexible, and developer-friendly utility for precise
                            number checks. Optimized for modern JavaScript and TypeScript
                            environments.
                        </p>
                        <div className="flex items-center justify-center gap-6">
                            <CTAButton />
                            <a
                                href="http://github.com/kimmyxpow/is-it-fifteen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-white transition-all duration-300 hover:text-zinc-400"
                            >
                                <Icon icon="tabler:brand-github" />
                            </a>
                        </div>
                    </div>
                </div>
                <DotPattern />
            </main>
            <section className="py-20">
                <div className="container">
                    <h2 className="mb-14 text-3xl sm:text-5xl lg:text-6xl" id="get-started">
                        Get Started
                    </h2>
                    <div className="grid-cols-2 gap-x-10 space-y-10 xl:grid">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {features.map((feature) => (
                                <Card key={feature.title}>
                                    <h3 className="relative z-20 mb-4 text-xl">{feature.title}</h3>
                                    <p className="relative z-20 text-neutral-400">
                                        {feature.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl">Installation</h3>
                            <div className="prose prose-invert max-w-none">
                                <pre className="w-full rounded-xl border border-zinc-800 p-6">
                                    <code>npm install @is-it/fifteen</code>
                                </pre>
                            </div>
                            <h3 className="text-2xl">Usage</h3>
                            <div className="prose prose-invert max-w-none">
                                <pre className="w-full rounded-xl border border-zinc-800 p-6">
                                    <code>
                                        {`import { isItFifteen } from '@is-it/fifteen'

console.log(isItFifteen(15));  // true
console.log(isItFifteen('15'));  // false
console.log(isItFifteen('15', { strict: false }));  // true
console.log(isItFifteen(-15, { allowNegative: true }));  // true
console.log(isItFifteen('1111', { checkBinary: true }));  // true`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default App
