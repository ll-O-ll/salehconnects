import { Navbar } from "@/components/Navbar"
import { PartnerForm } from "@/components/PartnerForm"
import { ContactSection } from "@/components/ContactSection"

export default function PartnerPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-32 pb-20 px-4">
                <PartnerForm />
            </main>
            <ContactSection />
        </div>
    )
}
