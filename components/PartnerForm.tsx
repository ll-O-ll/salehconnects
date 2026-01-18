"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send, ArrowRight } from "lucide-react";

export function PartnerForm() {
    const [formData, setFormData] = useState({
        brandName: '',
        website: '',
        goal: '',
        audience: '',
        budget: '',
        details: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Partnership Inquiry: ${formData.brandName}`;
        const body = `
Hello Saleh Connects Team,

I'm interested in partnering with you. Here are my details:

1. Brand Name: ${formData.brandName}
2. Website: ${formData.website}
3. Primary Goal: ${formData.goal}
4. Target Audience: ${formData.audience}
5. Budget Range: ${formData.budget}
6. Additional Details:
${formData.details}

Looking forward to hearing from you.

Best regards,
        `.trim();

        const mailtoLink = `mailto:babuker@salehconnects.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card className="bg-card border-none shadow-2xl">
                <CardHeader className="text-center space-y-2 pb-8">
                    <CardTitle className="text-3xl font-heading font-bold">Start Your Partnership</CardTitle>
                    <CardDescription className="text-lg">
                        Tell us about your brand and goals. We'll get back to you with a tailored strategy.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="brandName">Brand Name</Label>
                                <Input
                                    id="brandName"
                                    name="brandName"
                                    placeholder="Enter your brand name"
                                    value={formData.brandName}
                                    onChange={handleChange}
                                    required
                                    className="bg-background/50 h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="website">Website URL</Label>
                                <Input
                                    id="website"
                                    name="website"
                                    placeholder="https://yourbrand.com"
                                    value={formData.website}
                                    onChange={handleChange}
                                    required
                                    className="bg-background/50 h-12"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="goal">Primary Goal</Label>
                            <Input
                                id="goal"
                                name="goal"
                                placeholder="e.g. Brand Awareness, Sales, App Installs"
                                value={formData.goal}
                                onChange={handleChange}
                                required
                                className="bg-background/50 h-12"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="audience">Target Audience / Niche</Label>
                            <Input
                                id="audience"
                                name="audience"
                                placeholder="e.g. Tech-savvy travelers, Gen Z gamers"
                                value={formData.audience}
                                onChange={handleChange}
                                required
                                className="bg-background/50 h-12"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="budget">Estimated Monthly Budget</Label>
                            <Input
                                id="budget"
                                name="budget"
                                placeholder="e.g. $5k - $10k, $10k+"
                                value={formData.budget}
                                onChange={handleChange}
                                required
                                className="bg-background/50 h-12"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="details">Additional Details & Questions</Label>
                            <Textarea
                                id="details"
                                name="details"
                                placeholder="Tell us more about your campaign ideas or any specific requirements..."
                                value={formData.details}
                                onChange={handleChange}
                                required
                                className="bg-background/50 min-h-[150px] resize-none"
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl mt-4">
                            Submit Inquiry <Send className="ml-2 w-5 h-5" />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
