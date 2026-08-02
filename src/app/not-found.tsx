import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import CitisquareLogo from "@/components/brand/CitisquareLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-citisquare-dark flex flex-col items-center justify-center px-6 text-center">
      <CitisquareLogo variant="light" showWordmark className="mb-12" />
      <p className="text-citisquare-gold text-8xl font-bold mb-4">404</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-white/60 max-w-md mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        Explore our projects and partnership opportunities instead.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="cta" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
          <Link href="/#projects-showcase">
            <ArrowLeft className="mr-2 h-4 w-4" />
            View Projects
          </Link>
        </Button>
      </div>
    </div>
  );
}
