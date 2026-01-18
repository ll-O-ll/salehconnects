import { Button } from "@/components/ui/button"
import { Mail, Instagram, Phone, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
    return (
        <footer id="contact" className="py-24 bg-card relative overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-tr-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-4">
                                Let's Talk Business
                            </h2>
                            <p className="text-xl text-muted-foreground font-light">
                                Ready to scale your brand? Reach out and let's discuss your custom strategy.
                            </p>
                        </div>

                        <div className="space-y-6 pt-8">
                            <a href="mailto:babuker@salehconnects.com" className="flex items-center gap-4 text-xl md:text-2xl hover:text-primary transition-colors group">
                                <span className="p-3 rounded-full bg-muted/50 group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </span>
                                babuker@salehconnects.com
                            </a>
                            <a href="https://www.instagram.com/salehconnects/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl md:text-2xl hover:text-primary transition-colors group">
                                <span className="p-3 rounded-full bg-muted/50 group-hover:bg-primary/20 transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </span>
                                @salehconnects
                            </a>
                            <a href="https://wa.me/16479145240" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl md:text-2xl hover:text-primary transition-colors group">
                                <span className="p-3 rounded-full bg-muted/50 group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-6 h-6" />
                                </span>
                                +1 (647) 914-5240
                            </a>
                        </div>
                    </div>

                    <div className="bg-muted/10 p-8 md:p-12 rounded-3xl border border-border/50">
                        <h3 className="text-2xl font-bold mb-6">Accepted Payment Methods</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-background rounded-xl border border-border">
                                <div className="font-medium">Bank Transfer</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-widest">Global</div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-background rounded-xl border border-border">
                                <div className="font-medium">e-Transfer (Interac)</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-widest">Canada</div>
                            </div>
                            <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                                <p className="text-sm text-center font-medium">
                                    Secure payments via invoice. Contact for details.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-muted-foreground text-sm mb-4">Saleh Connect © {new Date().getFullYear()}. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
