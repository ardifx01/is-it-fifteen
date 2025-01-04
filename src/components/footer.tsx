export const Footer = () => {
    return (
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
    )
}
