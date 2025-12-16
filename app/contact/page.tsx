"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const ContactPage = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const onSubmit = async (data: FormValues) => {
        try {
            setIsSubmitting(true)
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!res.ok || res.status !== 200) throw new Error()

            toast.success("Message sent successfully")
            form.reset()
        } catch {
            toast.error("Failed to send message")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="mx-auto max-w-2xl pt-28 px-8 space-y-12">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                    Contact
                </h1>
                <p className="opacity-60 text-sm md:text-base">
                    I will get back to you as soon as possible.
                </p>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 max-w-lg mx-auto"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name*</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email*</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea rows={10} placeholder="Enter your message" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={isSubmitting} className="w-full mt-4">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactPage
