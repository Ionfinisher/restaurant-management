"use client"

import Link from "next/link"
import {
  Bell,
  Home,
  LineChart,
  ShoppingCart,
  Package2,
  CalendarArrowDown,
  Salad,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { usePathname } from "next/navigation";


export default function SidebarClient(){
    const path = usePathname();
    return (
        <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Restauran🍴
              </h1>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard"
                className={path=="/dashboard" ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"}
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/reservations"
                className={path=="/dashboard/reservations" ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"}
              >
                <CalendarArrowDown className="h-4 w-4" />
                Reservations
              </Link>
              <Link
                href="/dashboard/plates"
                className={path=="/dashboard/plates" ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"}
              >
                <Salad className="h-4 w-4" />
                Plates
              </Link>
              <Link
                href="/dashboard/tables"
                className={path=="/dashboard/tables" ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"}
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
              </Link>
            </nav>
          </div>
        </div>
      </div>
    )
}