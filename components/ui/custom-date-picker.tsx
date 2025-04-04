"use client"

import type React from "react"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface DatePickerProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
  className?: string
}

export function CustomDatePicker({ date, setDate, className }: DatePickerProps) {
  const [inputValue, setInputValue] = useState(date ? format(date, "yyyy-MM-dd") : "")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)

    // Try to parse the date
    const parsedDate = new Date(e.target.value)
    if (!isNaN(parsedDate.getTime())) {
      setDate(parsedDate)
    } else {
      setDate(undefined)
    }
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="start">
          <div className="space-y-2">
            <Input type="date" value={inputValue} onChange={handleInputChange} className="w-full" />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

