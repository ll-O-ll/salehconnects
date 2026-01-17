import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <p className="text-secondary font-medium tracking-widest uppercase text-sm md:text-base animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Influencer Marketing Agency
                    </p>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight text-foreground leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Provide brands with a <span className="text-primary italic">ROAS funnel</span> with influencers
                    </h1>
                </div>

                <p className="text-base md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    We strictly focus on connecting <strong>Travel Creators</strong> with brands that provide essential <strong>services to travelers</strong>.
                    Scale your brand with data-driven campaigns.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                    <Button asChild size="lg" className="h-14 px-8 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all hover:scale-105">
                        <Link href="#contact">
                            Start Your Campaign <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-medium border-muted-foreground/20 hover:bg-muted/50 rounded-full">
                        <Link href="#testimonials">
                            View Case Studies
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
