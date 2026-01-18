import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CaseStudy {
    type: "image" | "video" | "instagram"
    influencerName: string
    influencerHandle: string
    influencerUrl: string
    brandName: string
    brandUrl: string
    brandImage: string
    contentUrl: string
    result?: string
    description?: string
}

const caseStudies: CaseStudy[] = [
    {
        type: "image",
        influencerName: "Sabbatical",
        influencerHandle: "@Sabbatical",
        influencerUrl: "https://www.youtube.com/@SabbaticalTommy",
        brandName: "Airalo",
        brandUrl: "https://www.airalo.com/",
        brandImage: "/images/brands/airalo.png",
        contentUrl: "/images/influencers/tommy-sabbatical.PNG",
        result: "High Engagement",
        description: "Connecting travel veteran Tommy with global connectivity provider Airalo for a seamless integration associated with travel freedom."
    },
    {
        type: "image",
        influencerName: "BacktoBasics",
        influencerHandle: "@BacktoBasics",
        influencerUrl: "https://www.youtube.com/@BacktoBasics",
        brandName: "Nomad eSim",
        brandUrl: "https://www.nomadesim.com/",
        brandImage: "/images/brands/nomad-esim.png",
        contentUrl: "/images/influencers/back-to-basics-team.PNG",
        result: "Successful Integration",
        description: "Helping the BacktoBasics team stay connected during their off-grid adventures with Nomad eSim."
    },
    {
        type: "instagram",
        influencerName: "Josh Kohler",
        influencerHandle: "@joshpkohler",
        influencerUrl: "https://www.instagram.com/joshpkohler/",
        brandName: "Yesim",
        brandUrl: "https://yesim.app/",
        brandImage: "/images/brands/yesim.png",
        contentUrl: "https://www.instagram.com/reel/DQJxu3EAo4k/embed",
        result: "Viral Reach",
        description: "Biker based in Australia with deep passion for biking and giving more to the world."
    }
]

export function CaseStudiesSection() {
    return (
        <section id="case-studies" className="py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
                        Featured Case Studies
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Real results from our creator partnerships.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
                    {caseStudies.map((item, index) => (
                        <Card key={index} className="bg-card border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full">
                            <CardContent className="p-0 flex flex-col h-full">
                                {/* Media Container */}
                                <div className={`relative w-full bg-black overflow-hidden ${item.type === 'image' ? 'aspect-video' : 'aspect-[9/16]'}`}>
                                    {item.type === "image" ? (
                                        <Image
                                            src={item.contentUrl}
                                            alt={`${item.influencerName} for ${item.brandName}`}
                                            fill
                                            className="object-contain bg-black/50 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : item.type === "instagram" ? (
                                        <iframe
                                            src={item.contentUrl}
                                            className="w-full h-full object-cover"
                                            frameBorder="0"
                                            scrolling="no"
                                            allowTransparency
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white">Video Placeholder</div>
                                    )}
                                    <div className="absolute top-4 right-4 z-10">
                                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background">
                                            {item.result}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="p-6 space-y-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 p-0.5">
                                                <Image
                                                    src={item.brandImage}
                                                    alt={item.brandName}
                                                    width={40}
                                                    height={40}
                                                    className="object-contain w-full h-full rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-base">{item.brandName}</h3>
                                            </div>
                                        </div>
                                        <div className="text-primary text-sm font-bold opacity-50">PARTNERED</div>
                                    </div>

                                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary/20 pl-4 flex-1">
                                        "{item.description}"
                                    </p>

                                    <div className="pt-4 border-t border-border/50 mt-auto">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-muted-foreground mb-0.5">Influencer</p>
                                                <h4 className="font-heading font-medium text-lg">{item.influencerName}</h4>
                                            </div>
                                            <a href={item.influencerUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline bg-primary/10 px-3 py-1 rounded-full transition-colors hover:bg-primary/20">
                                                Visit Profile
                                            </a>
                                        </div>
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
