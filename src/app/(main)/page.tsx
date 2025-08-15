import { HeroSection } from '@/components/hero-section';
import { PricingSection } from '@/components/pricing-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from '@/components/ui/toaster';
import { ConsultationSection } from '@/components/consultation-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChatWidget } from '@/components/chat-widget';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4">
        <HeroSection />
        <ConsultationSection />
        <div className="hidden">
            <ChatWidget />
        </div>
        <PricingSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
