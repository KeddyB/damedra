"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { FormValidator } from "@/lib/form-validator"

// Define the form schema using our custom validator instead of zod
const formSchema = new FormValidator(
  FormValidator.object([
    FormValidator.string("name")
      .required("Name must be at least 2 characters.")
      .min(2, "Name must be at least 2 characters."),

    FormValidator.string("email")
      .required("Please enter a valid email address.")
      .email("Please enter a valid email address."),

    FormValidator.string("company")
      .required("Company name must be at least 2 characters.")
      .min(2, "Company name must be at least 2 characters."),

    FormValidator.string("service").required("Please select a service."),

    FormValidator.string("message")
      .required("Message must be at least 10 characters.")
      .min(10, "Message must be at least 10 characters."),
  ]),
)

// Define the form values type
interface FormValues {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Use our custom validator resolver instead of zodResolver
  const form = useForm<FormValues>({
    resolver: formSchema.resolver,
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      service: "",
    },
  })

  function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
    }, 1500)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Interested In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="original">Original Composition</SelectItem>
                  <SelectItem value="licensing">Music Licensing</SelectItem>
                  <SelectItem value="anthem">Brand Anthem</SelectItem>
                  <SelectItem value="voiceover">Voice-Over Work</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="performance">Live Performance</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project and how we can help..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  )
}
