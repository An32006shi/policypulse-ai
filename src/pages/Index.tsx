import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Activity,
  BarChart3,
  Users,
  MessageSquare,
  Shield,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Globe2,
  Zap
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Policy Simulation",
    description: "Test policy impacts before implementation with AI-powered predictive modeling.",
    href: "/simulation",
  },
  {
    icon: MessageSquare,
    title: "Public Feedback",
    description: "Voice your opinion on active policies and participate in democratic discourse.",
    href: "/feedback",
  },
  {
    icon: Users,
    title: "Citizen Voice",
    description: "Submit complaints and suggestions directly to relevant government bodies.",
    href: "/citizen-voice",
  },
  {
    icon: Lightbulb,
    title: "AI Insights",
    description: "Get data-driven recommendations and impact analysis for better governance.",
    href: "/blog",
  },
];

const stats = [
  { value: "50K+", label: "Active Citizens" },
  { value: "1,200+", label: "Policies Analyzed" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "24/7", label: "AI Assistance" },
];

const principles = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Every decision, every analysis, fully documented and open to public scrutiny.",
  },
  {
    icon: Globe2,
    title: "Accessibility",
    description: "Policy information made simple and accessible to every citizen, regardless of background.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "AI-powered tools that reduce bureaucracy and accelerate policy implementation.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="container section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-8 animate-fade-up">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Governance Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-up leading-tight">
              AI-Powered <br />
              <span className="text-accent">Intelligent</span> Analysis
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up delay-200 leading-relaxed text-left space-y-2">
              PolicyPulse AI empowers citizens and governments with real-time, data-driven insights.
              Our platform bridges the gap between public opinion and policy implementation through
              advanced simulation, transparent feedback loops, and actionable analytics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/simulation">
                  Explore Simulation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="container pb-16 relative">
          <div className="bg-card/10 backdrop-blur-lg rounded-2xl p-8 border border-primary-foreground/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Policy Tools
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to understand, analyze, and influence public policy decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                to={feature.href}
                className="group card-elevated p-6 block animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-glow">
                  <feature.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Trust Through{" "}
                <span className="text-accent">Transparency</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                PolicyPulse AI bridges the gap between government decision-making and citizen
                understanding. Our platform uses advanced artificial intelligence to make
                complex policy impacts accessible, predictable, and participatory.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time policy impact predictions",
                  "Secure and anonymous feedback channels",
                  "Data-driven governance recommendations",
                  "Inclusive participation for all citizens",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-6 animate-slide-in-right">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="card-elevated p-6 flex gap-4"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Shape the Future of Governance?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Join thousands of citizens and policymakers using PolicyPulse AI to create
              more transparent, efficient, and inclusive governance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/feedback">View Active Policies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
