import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Testimonial {
    type: "image" | "video"
    influencerName: string
    influencerHandle: string
    influencerUrl: string
    brandName: string
    brandUrl: string
    brandImage: string
    contentUrl: string
    result?: string
    description?: string
    thumbnail?: string
}

const testimonials: Testimonial[] = [
    {
        type: "video",
        influencerName: "MyerTravels",
        influencerHandle: "@MyerTravels",
        influencerUrl: "https://www.youtube.com/channel/UCFKiXXD3aVWU60VQCuUvPHA",
        brandName: "Yesim",
        brandUrl: "https://yesim.app/",
        brandImage: "/images/brands/yesim.png",
        contentUrl: "/videos/myertravels-testimonials.mp4",
        result: "Video Testimonial",
        description: "Showcasing Yesim's ease of use for frequent flyers through an authentic video walkthrough.",
        thumbnail: "/images/influencers/myer-travels-testimonials-thumbnails.PNG"
    }
]

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-32 bg-muted/30">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <p className="text-muted-foreground text-lg">
                        We bridge the gap between <strong>Travel Influencers</strong> and brands that service the travel industry.
                    </p>
                </div>

                {/* Using items-start to prevent cards from stretching to match the tallest one */}
                <div className="flex justify-center">
                    {testimonials.map((item, index) => (
                        <Card key={index} className="bg-card border-none overflow-hidden hover:shadow-2xl transition-all duration-300 group max-w-md w-full">
                            <CardContent className="p-0">
                                {/* Media Container - Dynamic Aspect Ratio based on content type */}
                                {/* We allow the container to take its natural height based on the ratio, not forced by other cards */}
                                <div className={`relative w-full bg-black overflow-hidden ${item.type === 'video' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                                    {item.type === "image" ? (
                                        <Image
                                            src={item.contentUrl}
                                            alt={`${item.influencerName} for ${item.brandName}`}
                                            fill
                                            className="object-contain bg-black/50 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <video
                                            src={item.contentUrl}
                                            controls
                                            className="w-full h-full object-cover"
                                            poster={item.thumbnail || "/images/placeholder-video-poster.jpg"}
                                        />
                                    )}
                                    <div className="absolute top-4 right-4">
                                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background">
                                            {item.result}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="p-8 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 p-1">
                                                <Image
                                                    src={item.brandImage}
                                                    alt={item.brandName}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain w-full h-full rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{item.brandName}</h3>
                                                <a href={item.brandUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                                                    Visit Brand
                                                </a>
                                            </div>
                                        </div>
                                        <div className="text-primary">
                                            <span className="text-2xl font-bold">X</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary/20 pl-4">
                                        "{item.description}"
                                    </p>
                                    <div className="pt-4 border-t border-border mt-auto">
                                        <p className="text-sm text-muted-foreground mb-1">Influencer</p>
                                        <h4 className="font-heading font-medium text-xl">{item.influencerName}</h4>
                                        <a href={item.influencerUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                                            {item.influencerHandle}
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
