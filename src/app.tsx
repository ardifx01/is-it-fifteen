import { DotPattern } from './components/dot-pattern'
import { CTAButton } from './components/cta-button'
import { ScrollProgress } from './components/scroll-progress'
import { Card } from './components/card'

function App() {
    return (
        <>
            <ScrollProgress />
            <div className="min-h-dvh overflow-hidden bg-zinc-950">
                <main className="relative flex min-h-dvh flex-col items-center justify-center text-center">
                    <div className="relative z-10 container">
                        <div className="mx-auto max-w-6xl space-y-6">
                            <h1 className="text-8xl leading-[1.25]">
                                Simplify Your Number Validation with
                                <span className="bg-gradient-to-br from-pink-200 via-amber-200 to-cyan-200 bg-clip-text text-transparent">
                                    {' '}
                                    @is-it/fifteen
                                </span>
                            </h1>
                            <p className="mx-auto max-w-3xl text-xl text-zinc-400">
                                A lightweight, flexible, and developer-friendly utility for precise
                                number checks. Optimized for modern JavaScript and TypeScript
                                environments.
                            </p>
                            <CTAButton />
                        </div>
                    </div>
                    <DotPattern />
                </main>
                <section className="py-20">
                    <div className="container">
                        <h2 className="mb-14 text-6xl">Get Started</h2>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="grid grid-cols-2 gap-4">
                                <Card>
                                    <h3 className="relative z-20 mb-4 text-xl">
                                        🪶 Lightweight and Fast
                                    </h3>
                                    <p className="relative z-20 text-neutral-400">
                                        At under 1KB, @is-it/fifteen won’t bloat your project. Built
                                        for performance and simplicity.
                                    </p>
                                </Card>
                                <Card>
                                    <h3 className="relative z-20 mb-4 text-xl">
                                        💪🏻 Flexible Options
                                    </h3>
                                    <p className="relative z-20 text-neutral-400">
                                        Strict or loose comparisons? Binary or negative numbers?
                                        Customize it your way with our powerful configuration
                                        options.
                                    </p>
                                </Card>
                                <Card>
                                    <h3 className="relative z-20 mb-4 text-xl">
                                        🔑 TypeScript Ready
                                    </h3>
                                    <p className="relative z-20 text-neutral-400">
                                        Full TypeScript support ensures type safety and better
                                        developer experience.
                                    </p>
                                </Card>
                                <Card>
                                    <h3 className="relative z-20 mb-4 text-xl">
                                        📚 No Dependencies
                                    </h3>
                                    <p className="relative z-20 text-neutral-400">
                                        Stay lean. No unnecessary dependencies—just pure
                                        functionality.
                                    </p>
                                </Card>
                                <Card>
                                    <h3 className="relative z-20 mb-4 text-xl">
                                        ⚙️ Built for Developers
                                    </h3>
                                    <p className="relative z-20 text-neutral-400">
                                        Designed to save you time. Integrate seamlessly with
                                        JavaScript or TypeScript projects in seconds."
                                    </p>
                                </Card>
                                <Card>
                                    <h3 className="relative z-20 mb-4 text-xl">
                                        🤟🏻 Modern and Open Source
                                    </h3>
                                    <p className="relative z-20 text-neutral-400">
                                        Actively maintained and built for today’s development needs.
                                        Open to contributions from the community.
                                    </p>
                                </Card>
                            </div>
                            <div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl">Installation</h3>
                                    <div className="prose prose-invert">
                                        <pre className="rounded-xl border border-zinc-800 p-6">
                                            <code>npm install @is-it/fifteen</code>
                                        </pre>
                                    </div>
                                    <h3 className="text-2xl">Usage</h3>
                                    <div className="prose prose-invert">
                                        <pre className="rounded-xl border border-zinc-800 p-6">
                                            <code>
                                                {`import { isItFifteen } from '@is-it/fifteen'

console.log(isItFifteen(15));  // true
console.log(isItFifteen('15'));  // true
console.log(isItFifteen(15, { strict: false }));  // true
console.log(isItFifteen(-15, { allowNegative: true }));  // true
console.log(isItFifteen('1111', { checkBinary: true }));  // true`}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="border-t border-zinc-800">
                    <div className="container">
                        <div className="py-8 text-center">
                            <p className="text-zinc-400">
                                &copy; 2025 - {new Date().getFullYear()} @is-it/fifteen. All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default App
