"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface InquiryFormProps {
  defaultSubject?: string;
  defaultPlot?: string;
}

export default function InquiryForm({
  defaultSubject = "General Investment Inquiry",
  defaultPlot,
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          plot: data.get("plot"),
          message: data.get("message"),
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error ?? "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-8 gap-3">
        <CheckCircle2 className="h-12 w-12 text-kic-green" />
        <h3 className="text-lg font-semibold">Inquiry Submitted</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Thank you for your interest in Kigali Innovation City. Our team will be in touch within 2 business days.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" required placeholder="John Smith" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" required placeholder="john@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company / Organisation</Label>
          <Input id="company" name="company" placeholder="Your company" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+250 ..." />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" defaultValue={defaultSubject} />
        </div>
        {defaultPlot && (
          <div className="space-y-2">
            <Label htmlFor="plot">Plot of Interest</Label>
            <Input id="plot" name="plot" defaultValue={defaultPlot} readOnly className="bg-muted" />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your investment interest, timeline, and any specific requirements..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-destructive text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <Button type="submit" variant="cta" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </Button>
    </form>
  );
}
