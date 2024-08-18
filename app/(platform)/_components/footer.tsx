
import Link from "next/link"

import { LogoButton } from "./logo-button"

export const Footer = () => {
    return <footer className="bg-muted py-6 w-full">
        <div className="container max-w-7xl flex flex-col items-center justify-between gap-4 sm:flex-row">
            <LogoButton />
            <div className="flex text-xs items-center gap-4 sm:text-sm text-muted-foreground">
                <p>&copy; 2024 A. All rights reserved.</p>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Privacy Policy
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Terms of Service
                </Link>
            </div>
        </div>
    </footer>
}
