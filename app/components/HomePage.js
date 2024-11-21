"use client";
import Image from "next/image";
import Link from "next/link";
import appLogo from "./logo.png";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent-secondary)] mb-4">
            AstroMinchu
          </h1>
          <div className="text-[var(--foreground)] leading-relaxed space-y-4">
            <p>
              AstroMinchu, derived from the Kannada word Minchu, which means glittering or
              lightning, was launched by Jayanth Venkatesh in 2022.
            </p>
            <p>
              The platform is a celebration of the beauty of our universe, as seen through the lens
              of astrophotography. AstroMinchu aims to inspire people to marvel at the various
              astronomical events, galaxies, nebulas, and other wonders that grace our universe.
            </p>
            <p>
              If you are passionate and can handle challenges, astrophotography can be incredibly
              rewarding. The results may be more satisfying than you ever imagined, making the
              journey worthwhile. Join this adventure of awe and inspiration by following
              AstroMinchu on Instagram and YouTube.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="/gallery" className="btn-primary px-6 py-2 rounded-md">
                Band Gallery
              </Link>
              <Link
                href="/contact"
                className="border border-[var(--accent-secondary)] text-[var(--foreground)] px-6 py-2 rounded-md hover:bg-[var(--accent-primary)] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-[var(--accent-primary)]">
            <Image
              src={appLogo}
              alt="Vicious Warfare band members"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
