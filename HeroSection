'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { ConsultationSection } from './consultation-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ChatWidget } from './chat-widget';

export function HeroSection() {
  return (
      <section className="flex flex-col lg:flex-row gap-12 items-center pt-16 sm:pt-24">
        <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
          <h1 className="text-4xl md:text-6xl font-bold break-words">
            Turn Your Vision into a{' '}
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Thriving Business
            </span>
          </h1>
          <p className="text-lg text-muted-foreground break-words">
            Meet Natalie, your personal business strategist. Get personalized, data-driven advice 24/7 to launch, grow, and scale your venture. Let's build your success story, together.
          </p>
          <ul className="space-y-2 text-muted-foreground self-center lg:self-start">
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> <span>Transform your interests into profitable ventures</span></li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> <span>Drive customer acquisition and revenue growth</span></li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> <span>Develop sustainable passive income streams</span></li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> <span>Receive proven, tailor-made business strategies</span></li>
          </ul>
          <div className="flex gap-4">
            <Button size="lg" asChild>
                <Link href="/chat">
                    <Phone className="mr-2" />
                    Consult Natalie
                </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <Link href="/#pricing">See Plans</Link>
            </Button>
           </div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4 w-full lg:w-auto">
            <div className="w-full max-w-md overflow-hidden rounded-lg shadow-2xl shadow-primary/20">
              <Image
                  src="/natalie.jpg"
                  alt="Natalie - InFlowCash Business Strategist"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover object-top"
                  data-ai-hint="woman business professional"
                />
            </div>
            <div className="text-center mt-4">
              <p className="text-lg font-semibold text-accent">Natalie Sterling</p>
              <p className="text-sm text-muted-foreground">Your Personal Business Strategist</p>
            </div>
        </div>
      </section>
  );
}
