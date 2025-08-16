'use client';

import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Logo />
          <p className="text-sm font-semibold">InFlowCash</p>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} InFlowCash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
