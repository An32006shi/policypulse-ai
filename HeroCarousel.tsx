'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Data-Driven Policy Making',
        subtitle: 'Simulate the impact of decisions before implementation using synthetic population models.',
        cta: 'Start Simulation',
        href: '/simulate'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Voice of the Citizen',
        subtitle: 'Direct feedback channels bridging the gap between government and people.',
        cta: 'Share Feedback',
        href: '/voice'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Transparent Governance',
        subtitle: 'Real-time analytics and insights for a better future.',
        cta: 'View Insights',
        href: '/dashboard'
    },
];

export default function HeroCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    return (
        <div className="relative h-[600px] w-full overflow-hidden bg-slate-900" ref={emblaRef}>
            <div className="flex h-full">
                {slides.map((slide) => (
                    <div className="flex-[0_0_100%] min-w-0 relative h-full" key={slide.id}>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center text-center px-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 drop-shadow-md">
                                {slide.subtitle}
                            </p>
                            <div className="flex gap-4">
                                <Link href={slide.href} className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-cyan-500/30">
                                    {slide.cta}
                                </Link>
                                <Link href="/about" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full font-semibold transition-all backdrop-blur-sm">
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        <Image
                            src={slide.url}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={slide.id === 1}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
