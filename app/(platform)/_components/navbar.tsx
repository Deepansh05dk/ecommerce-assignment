"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { CircleUser, Search, ShoppingBagIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import useCart from "@/hooks/use-cart";
import { LogoButton } from "./logo-button";

export function Navbar() {
    return (
        <header className="flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
            <LogoButton />
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div>
                    <CartButton />
                </div>
            </div>
        </header>
    );
}



function CartButton() {
    const router = useRouter();
    const cart = useCart();

    const onClick = () => {
        router.push("/cart");
    };
    return (
        <button
            onClick={onClick}
            className={
                "relative rounded-full flex items-center justify-center bg-white border shadow-md p-2 transition"
            }
        >
            <ShoppingBagIcon className="h-5 w-5" />
            <div className="absolute top-0 right-0 w-4 h-4 bg-black text-white text-xs rounded-full flex items-center justify-center">
                {cart.items.length || 0}
            </div>
        </button>
    );
}