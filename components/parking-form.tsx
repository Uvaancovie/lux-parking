"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, MapPinIcon, BuildingIcon, CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

const formSchema = z.object({
  // Event Details
  name: z.string().min(2, {
    message: "Event name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  event_date: z.date({
    required_error: "Please select a date.",
  }),

  // Location Details
  location: z.string().min(2, {
    message: "Location is required.",
  }),
  city: z.string().min(2, {
    message: "City is required.",
  }),

  // Additional Details
  popularity: z.coerce.number().int().min(1).max(100).default(50),
})

export default function EventForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      city: "",
      popularity: 50,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Format the date for Supabase
      const formattedValues = {
        ...values,
        event_date: values.event_date.toISOString(),
      }

      // Insert data into Supabase events table
      const { data, error } = await supabase.from("events").insert([formattedValues]).select()

      if (error) throw error

      toast.success("Event created successfully!", {
        description: `Event "${values.name}" has been added to the database.`,
      })

      form.reset()
      setStep(1)
    } catch (error) {
      console.error("Error inserting event:", error instanceof Error ? error.message : JSON.stringify(error))
      toast.error("Error creating event", {
        description: "There was a problem saving your event. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = async () => {
    if (step === 1) {
      const eventFields = ["name", "description", "event_date"]
      const result = await form.trigger(eventFields as any)
      if (!result) return
    } else if (step === 2) {
      const locationFields = ["location", "city"]
      const result = await form.trigger(locationFields as any)
      if (!result) return
    }

    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto" suppressHydrationWarning>
      <CardHeader>
        <CardTitle className="text-2xl">Create New Event</CardTitle>
        <CardDescription>Add a new event to your database with all the necessary details.</CardDescription>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold",
                step >= 1 ? "bg-primary text-primary-foreground" : "border-muted-foreground text-muted-foreground",
              )}
            >
              1
            </div>
            <Separator className="w-8" />
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold",
                step >= 2 ? "bg-primary text-primary-foreground" : "border-muted-foreground text-muted-foreground",
              )}
            >
              2
            </div>
            <Separator className="w-8" />
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold",
                step >= 3 ? "bg-primary text-primary-foreground" : "border-muted-foreground text-muted-foreground",
              )}
            >
              3
            </div>
          </div>
          <div className="text-sm text-muted-foreground">Step {step} of 3</div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Event Details</h3>
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Annual Conference 2023" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Provide details about your event..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="event_date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Event Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? field.value.toLocaleDateString() : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Location Details</h3>
                </div>
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Convention Center" {...field} />
                      </FormControl>
                      <FormDescription>Enter the venue or address where the event will be held.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="San Francisco" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <BuildingIcon className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Additional Details</h3>
                </div>
                <FormField
                  control={form.control}
                  name="popularity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expected Popularity (1-100)</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4">
                          <Input type="range" min="1" max="100" className="w-full" {...field} />
                          <span className="w-12 text-center">{field.value}</span>
                        </div>
                      </FormControl>
                      <FormDescription>
                        Estimate how popular this event will be on a scale from 1 to 100.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 ? (
          <Button variant="outline" onClick={prevStep}>
            Previous
          </Button>
        ) : (
          <div></div>
        )}
        {step < 3 ? (
          <Button onClick={nextStep}>Next</Button>
        ) : (
          <Button onClick={form.handleSubmit(onSubmit)} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="mr-2">Saving</span>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              </>
            ) : (
              <>
                <span className="mr-2">Create Event</span>
                <CheckIcon className="h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

