import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";


export const ContactPage = () => {
    return (
        <>
             <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1645255315921-09c386465750?q=80&w=1470&auto=format&fit=crop"
        title="Contact Us"
        height="h-96"
        breadcrumbs={[
          { label: "Home", href: "/", active: false },
          { label: "Contact", href: "/contactus", active: true },
        ]}
      />

      <ContactSection />
      
        
        </>
    )
}