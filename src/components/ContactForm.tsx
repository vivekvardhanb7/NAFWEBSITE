import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import AnimatedButton from "./AnimatedButton";

const formSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  company: z.string().min(2, "Company is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(5, "Phone number is required").max(50),
  location: z.string().min(2, "Location is required").max(100),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
  dehogaYes: z.boolean().optional(),
  dehogaNo: z.boolean().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  gdprConsent: z.boolean().refine((val) => val === true, "You must agree to the GDPR terms"),
});

const ContactForm = () => {
  const { t } = useLanguage();
  const { addRef } = useScrollAnimation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      location: "",
      interests: [],
      dehogaYes: false,
      dehogaNo: false,
      message: "",
      gdprConsent: false,
    },
  });

  const interestsList = [
    { id: "gourmet", label: "Gourmet Vending Machine (hot meals)" },
    { id: "pizza", label: "Pizza Vending Machine" },
    { id: "softice", label: "Soft-Ice Machine" },
    { id: "snack", label: "Snack Machine" },
    { id: "beverage", label: "Beverage Machine" },
    { id: "return", label: "Return Station" },
    { id: "cloud", label: "NAF.Cloud & Software Solutions" },
  ];

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      console.log("Form data:", data);
      toast.success("Form submitted successfully!");
      
      navigate("/thank-you", { 
        state: { 
          isDehogaMember: data.dehogaYes 
        } 
      });
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div ref={addRef} className="scroll-fade-up text-center mb-12">
          <h2 className="font-power font-bold text-4xl md:text-5xl text-foreground mb-6">
            {t.form.title}
          </h2>
        </div>

        <div ref={addRef} className="scroll-fade-up">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-satoshi">Full Name / Contact Person</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-card border-border text-foreground h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-satoshi">Company / Organization</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-card border-border text-foreground h-12" />
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
                    <FormLabel className="text-foreground font-satoshi">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} className="bg-card border-border text-foreground h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-satoshi">Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-card border-border text-foreground h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-satoshi">Location / Region</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-card border-border text-foreground h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interests"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-foreground font-satoshi">Areas of Interest</FormLabel>
                    <div className="space-y-3 mt-2">
                      {interestsList.map((interest) => (
                        <FormField
                          key={interest.id}
                          control={form.control}
                          name="interests"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(interest.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, interest.id])
                                      : field.onChange(
                                          field.value?.filter((value) => value !== interest.id)
                                        );
                                  }}
                                  className="rounded-sm data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal cursor-pointer text-foreground !mt-0">
                                {interest.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel className="text-foreground font-satoshi">Are you a DEHOGA Member?</FormLabel>
                <div className="space-y-2 mt-2">
                  <FormField
                    control={form.control}
                    name="dehogaYes"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="rounded-sm data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          />
                        </FormControl>
                        <label className="text-sm cursor-pointer text-foreground">
                          Yes, I am a DEHOGA Member
                        </label>
                      </div>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dehogaNo"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="rounded-sm data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          />
                        </FormControl>
                        <label className="text-sm cursor-pointer text-foreground">
                          No, not yet
                        </label>
                      </div>
                    )}
                  />
                </div>
              </FormItem>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-satoshi">Message / Project Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={2} className="bg-card border-border text-foreground resize-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gdprConsent"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                        className="rounded-sm data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground mt-1"
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal cursor-pointer text-foreground leading-relaxed !mt-0">
                      I agree to the storage and processing of my data for contact purposes in accordance with GDPR.
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center pt-6">
                <AnimatedButton type="submit">
                  {t.form.fields.submit}
                </AnimatedButton>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;