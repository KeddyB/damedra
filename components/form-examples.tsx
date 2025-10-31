"use client"
import { useForm } from "react-hook-form"
import { Mail, User, Calendar, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { FormValidator } from "@/lib/form-validator"

// Define the form values type
interface FormValues {
  username: string
  email: string
  bio: string
  role: string
  message: string
}

export default function FormExamples() {
  const { toast } = useToast()

  // Create a schema using our custom validator
  const formSchema = new FormValidator(
    FormValidator.object([
      FormValidator.string("username")
        .required("Username is required")
        .min(2, "Username must be at least 2 characters"),

      FormValidator.string("email").required("Email is required").email("Please enter a valid email address"),

      FormValidator.string("bio").required("Bio is required").min(10, "Bio must be at least 10 characters"),

      FormValidator.string("role").required("Please select a role"),

      FormValidator.string("message").required("Message is required").min(5, "Message must be at least 5 characters"),
    ]),
  )

  // Initialize the form with our custom resolver
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      message: "",
      role: "",
    },
    resolver: formSchema.resolver,
  })

  function onSubmit(values: FormValues) {
    toast({
      title: "Form submitted!",
      description: "Form data has been successfully submitted.",
      variant: "success",
    })
    console.log(values)
  }

  return (
    <div className="p-6 space-y-12">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Form Components</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" icon={<User className="h-4 w-4" />} {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
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
                    <Input placeholder="Enter your email" type="email" icon={<Mail className="h-4 w-4" />} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about yourself" className="min-h-[120px]" {...field} />
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
                    <Textarea placeholder="Enter your message" className="min-h-[80px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Input Variants</h2>

        <div className="grid gap-6 max-w-md">
          <div>
            <label className="text-sm font-medium mb-2 block">Default Input</label>
            <Input placeholder="Default input" />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Input with Left Icon</label>
            <Input placeholder="Search..." icon={<Search className="h-4 w-4" />} />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Input with Right Icon</label>
            <Input placeholder="Enter date" icon={<Calendar className="h-4 w-4" />} iconPosition="right" />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Error Input</label>
            <Input placeholder="Error input" error />
            <p className="text-sm font-medium text-destructive mt-1">This field is required</p>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Disabled Input</label>
            <Input placeholder="Disabled input" disabled />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Textarea Variants</h2>

        <div className="grid gap-6 max-w-md">
          <div>
            <label className="text-sm font-medium mb-2 block">Default Textarea</label>
            <Textarea placeholder="Default textarea" />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Error Textarea</label>
            <Textarea placeholder="Error textarea" error />
            <p className="text-sm font-medium text-destructive mt-1">This field is required</p>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Disabled Textarea</label>
            <Textarea placeholder="Disabled textarea" disabled />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Select Variants</h2>

        <div className="grid gap-6 max-w-md">
          <div>
            <label className="text-sm font-medium mb-2 block">Default Select</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Error Select</label>
            <Select>
              <SelectTrigger error>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm font-medium text-destructive mt-1">This field is required</p>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Disabled Select</label>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
