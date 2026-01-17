import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"

export function PricingSection() {
    return (
        <section id="pricing" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Focus on results with our flexible retainer model.
                    </p>
                </div>

                <div className="max-w-md mx-auto">
                    <div className="relative p-8 rounded-2xl bg-card border border-border shadow-2xl">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-lg">
                            MOST POPULAR
                        </div>

                        <div className="text-center space-y-4 mb-8">
                            <h3 className="text-2xl font-heading font-bold">Monthly Retainer</h3>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-5xl font-bold tracking-tight text-primary">Custom</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Tailored to your volume &amp; KPIs
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm">Initial setup fee <span className="text-primary font-bold">(Currently waived)</span></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm">End-to-End Creator Management</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm">Negotiation &amp; Contract Handling</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm">Performance Tracking &amp; Reporting</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm">Upsell &amp; Resell Opportunities</span>
                            </li>
                        </ul>

                        <Button asChild className="w-full h-12 text-lg font-bold rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all">
                            <a href="#contact">Get a Quote</a>
                        </Button>

                        <p className="text-xs text-center text-muted-foreground mt-4">
                            <Info className="w-3 h-3 inline mr-1" />
                            Review depending on volume of creators
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
