import Link from 'next/link';
import { Button } from './_components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-fluid-5xl font-display font-bold text-primary mb-4">404</h1>
        <h2 className="text-fluid-2xl font-semibold text-primary mb-4">Page Not Found</h2>
        <p className="text-fluid-base text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild variant="accent">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}

