import React, { Suspense } from 'react'
import { Navbar } from './_components/navbar'
import { Footer } from './_components/footer'
import ToastProvider from "@/providers/toast-provider";

function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-[100vh] flex flex-col">
            <ToastProvider />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}

export default HomeLayout