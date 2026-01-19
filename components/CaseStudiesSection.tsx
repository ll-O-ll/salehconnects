import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface CaseStudy {
    type: "image" | "video" | "instagram" | "carousel"
    images?: string[]
    influencerName: string
    influencerHandle: string
    influencerUrl: string
    brandName: string
    brandUrl: string
    brandImage: string
    contentUrl: string
    result?: string
    description?: string
    influencerLabel?: string
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
    },
]

const oohCampaign: CaseStudy = {
    type: "carousel",
    influencerName: "OOH Campaign",
    influencerHandle: "",
    influencerUrl: "#",
    brandName: "Nomad eSim",
    brandUrl: "https://www.nomadesim.com/",
    brandImage: "/images/brands/nomad-esim.png",
    contentUrl: "/images/campaigns/nomad-esim-yul-1.png",
    images: [
        "/images/campaigns/nomad-esim-yul-1.png",
        "/images/campaigns/nomad-esim-yul-2.png"
    ],
    result: "Brand Awareness",
    description: "A strategic partnership with Nomad eSIM to launch high-impact billboard placements at YUL Airport. We provide comprehensive OOH (Out of Home) campaign opportunities for brands looking to grow awareness across Canadian markets. Our network includes airport billboard placements in YYZ, YUL, YYC, and YVR, as well as greater city transit areas like the TTC and GO.",
    influencerLabel: "Campaign Type"
}

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
                        <Card key={index} className="bg-card border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                            <CardContent className="p-0 flex flex-col">
                                {/* Media Container */}
                                <div className={`relative w-full bg-black overflow-hidden ${item.type === 'image' || item.type === 'carousel' ? 'aspect-video' : 'aspect-[9/16]'}`}>
                                    {item.type === "carousel" && item.images ? (
                                        <Carousel className="w-full h-full">
                                            <CarouselContent className="h-full ml-0">
                                                {item.images.map((image, idx) => (
                                                    <CarouselItem key={idx} className="pl-0 h-full relative">
                                                        <Image
                                                            src={image}
                                                            alt={`${item.brandName} campaign image ${idx + 1}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious className="left-2 bg-black/50 text-white border-none hover:bg-black/70" />
                                            <CarouselNext className="right-2 bg-black/50 text-white border-none hover:bg-black/70" />
                                        </Carousel>
                                    ) : item.type === "image" ? (
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
                                            // @ts-expect-error - allowtransparency is a legacy attribute
                                            allowtransparency="true"
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

                                <div className="p-6 space-y-6 flex flex-col">
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

                                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary/20 pl-4">
                                        "{item.description}"
                                    </p>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-muted-foreground mb-0.5">{item.influencerLabel || "Influencer"}</p>
                                                <h4 className="font-heading font-medium text-lg">{item.influencerName}</h4>
                                            </div>
                                            {item.influencerUrl && item.influencerUrl !== "#" && (
                                                <a href={item.influencerUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline bg-primary/10 px-3 py-1 rounded-full transition-colors hover:bg-primary/20">
                                                    Visit Profile
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Featured OOH Campaign - Full Width */}
                <div className="mt-16">
                    <Card className="bg-card border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                        <CardContent className="p-0 flex flex-col md:flex-row">
                            {/* Media Container - Takes up more space on desktop */}
                            <div className="relative w-full md:w-2/3 bg-black overflow-hidden aspect-video md:aspect-auto md:min-h-[500px]">
                                <Carousel className="w-full h-full [&>div]:h-full">
                                    <CarouselContent className="h-full ml-0">
                                        {oohCampaign.images?.map((image, idx) => (
                                            <CarouselItem key={idx} className="pl-0 h-full relative aspect-video md:aspect-auto">
                                                <Image
                                                    src={image}
                                                    alt={`${oohCampaign.brandName} campaign image ${idx + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-4 bg-black/50 text-white border-none hover:bg-black/70 w-10 h-10" />
                                    <CarouselNext className="right-4 bg-black/50 text-white border-none hover:bg-black/70 w-10 h-10" />
                                </Carousel>
                                <div className="absolute top-6 right-6 z-10">
                                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background px-4 py-1 text-sm">
                                        {oohCampaign.result}
                                    </Badge>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center md:w-1/3 bg-card relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white/10 p-1">
                                            <Image
                                                src={oohCampaign.brandImage}
                                                alt={oohCampaign.brandName}
                                                width={64}
                                                height={64}
                                                className="object-contain w-full h-full rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-2xl md:text-3xl">{oohCampaign.brandName}</h3>
                                        </div>
                                    </div>
                                    <div className="text-primary text-sm font-bold opacity-50 tracking-wider">PARTNERED</div>
                                </div>

                                <p className="text-lg text-muted-foreground italic border-l-4 border-primary/20 pl-6 leading-relaxed">
                                    "{oohCampaign.description}"
                                </p>

                                <div className="pt-6 border-t border-border/50">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">{oohCampaign.influencerLabel}</p>
                                            <h4 className="font-heading font-bold text-xl">{oohCampaign.influencerName}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
