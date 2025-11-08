"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import toast from "react-hot-toast";
const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10).max(10),
  email: z.string().email(),
  service: z.string().min(2),
  message: z.string().min(2),
});

const DEFAULT_VALUES =  {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    }

interface GetQuoteDialogProps {
  defaultValues?: typeof DEFAULT_VALUES;
  title?: string;
  variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost";
  className?: string;
}

export function GetQuoteDialog(props: GetQuoteDialogProps) {
  const [open, setOpen] = useState(false);
  const { defaultValues = DEFAULT_VALUES, title = "Get Quote", variant="default", className="w-full md:w-auto" } = props;
  const [disable, setDisable] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  async function onSubmit(values: any) {
    setDisable(true);
    try {
      const res = await fetch("/api/get-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Quote request submitted!");
        setOpen(false);
        form.reset();
      } else {
        toast.error("Failed to submit. Try again.");
      }
    } catch (error) {
      toast.error("Server error");
    }finally {
      setDisable(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>{title}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem className="sm:col-span-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="phone" control={form.control} render={({ field }) => (
                <FormItem className="sm:col-span-1">
                  <FormLabel>Phone</FormLabel>
                  <FormControl><Input type="number" placeholder="+91 XXXXX XXXXX" {...field} /></FormControl>
                  <FormMessage  />
                </FormItem>
              )} />

              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input placeholder="you@example.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="service" control={form.control} render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Service</FormLabel>
                  <FormControl><Input placeholder="Business Cards / T-Shirts / Banners" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="message" control={form.control} render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl><Textarea placeholder="Enter your requirements?" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <Button type="submit" disabled={disable} className="w-full sm:w-auto">
               {disable ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        </Form>

      </DialogContent>
    </Dialog>
  );
}
