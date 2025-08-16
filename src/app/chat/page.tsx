'use client';

import { useState } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { functions } from '@/lib/firebase';
import { httpsCallable } from 'firebase/functions';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ChatPage() {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCallBackend = async () => {
    setIsLoading(true);
    setResponse('');
    try {
      const myFunction = httpsCallable(functions, 'myFunction');
      const result = await myFunction({ text: 'Hello from the client!' });
      const data = result.data as { result: string };
      setResponse(data.result);
    } catch (error) {
      console.error("Error calling backend function:", error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not connect to the backend. See console for details.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Backend Communication</CardTitle>
            <CardDescription>
              Click the button to call a sample Firebase Cloud Function.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button onClick={handleCallBackend} disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Call Backend
            </Button>
            {response && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm font-semibold">Response from backend:</p>
                <p className="text-sm text-accent">{response}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}
