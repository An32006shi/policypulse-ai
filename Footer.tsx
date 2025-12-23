import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-400 py-8 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-white text-lg font-bold mb-4">PolicyPulse</h3>
                        <p className="max-w-xs text-sm">
                            Empowering citizens and governments with data-driven policy simulation and real-time public feedback.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/simulate" className="hover:text-cyan-400">Simulate Policy</Link></li>
                            <li><Link href="/portal" className="hover:text-cyan-400">Feedback Portal</Link></li>
                            <li><Link href="/blog" className="hover:text-cyan-400">Latest Insights</Link></li>
                            <li><Link href="/voice" className="hover:text-cyan-400">Citizen Voice</Link></li>
                            <li><Link href="/login" className="hover:text-cyan-400">Admin Login</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-900 text-sm text-center">
                    &copy; {new Date().getFullYear()} PolicyPulse. All rights reserved. GovTech India.
                </div>
            </div>
        </footer>
    );
}
