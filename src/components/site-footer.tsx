'use client';

import { useState, useEffect } from 'react';
import { Logo } from "./logo";

export function SiteFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Logo />
          <p className="text-sm font-semibold">InFlowCash</p>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} InFlowCash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
