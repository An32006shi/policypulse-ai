import { Layout } from "@/components/layout/Layout";
import { 
  Target, 
  Eye, 
  Users, 
  Shield, 
  Brain, 
  Scale,
  Award,
  Globe
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Every algorithm, every data source, every decision is documented and open for public review. We believe trust is built through openness.",
  },
  {
    icon: Scale,
    title: "Fairness",
    description: "Our AI models are rigorously tested for bias. We ensure equitable outcomes across all demographic groups and regions.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Policy affects everyone. Our platform is designed to be accessible to citizens of all backgrounds, languages, and technical abilities.",
  },
  {
    icon: Brain,
    title: "Intelligence",
    description: "We leverage cutting-edge AI and machine learning to provide insights that were previously impossible at this scale and speed.",
  },
];

const team = [
  {
    name: "Dr. Priya Sharma",
    role: "Chief Executive Officer",
    description: "Former IAS officer with 15 years in policy implementation",
  },
  {
    name: "Rajesh Kumar",
    role: "Chief Technology Officer",
    description: "AI researcher from IIT Delhi, expert in NLP and predictive modeling",
  },
  {
    name: "Ananya Patel",
    role: "Head of Policy Research",
    description: "PhD in Public Policy from Harvard Kennedy School",
  },
  {
    name: "Vikram Singh",
    role: "Head of Citizen Engagement",
    description: "10+ years in civic tech and community organizing",
  },
];

const milestones = [
  { year: "2021", event: "PolicyPulse AI founded with Digital India grant" },
  { year: "2022", event: "Launched pilot program in 5 states" },
  { year: "2023", event: "Reached 50,000 active citizen users" },
  { year: "2024", event: "Expanded to all 28 states and 8 union territories" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              About PolicyPulse AI
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up delay-100">
              We're on a mission to democratize policy understanding and empower 
              every citizen to participate in shaping their nation's future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-elevated p-8 animate-fade-up">
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 shadow-glow">
                <Target className="w-7 h-7 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between government policy-making and citizen understanding 
                through transparent, AI-powered analysis. We believe that informed citizens 
                are the foundation of a thriving democracy, and that technology should serve 
                to amplify voices, not replace them.
              </p>
            </div>
            
            <div className="card-elevated p-8 animate-fade-up delay-100">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A future where every policy decision is made with full understanding of its 
                impacts, where citizens actively participate in governance, and where AI serves 
                as a tool for equity and inclusion. We envision governance that is truly 
                of the people, by the people, and for the people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How PolicyPulse Helps
            </h2>
            <p className="text-muted-foreground text-lg">
              Our platform creates a seamless connection between governments and citizens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-4 animate-fade-up">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Policy Ingestion</h3>
                  <p className="text-muted-foreground">
                    Government policies are automatically parsed and analyzed by our AI, 
                    extracting key provisions, affected demographics, and potential impacts.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-up delay-100">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Impact Simulation</h3>
                  <p className="text-muted-foreground">
                    Our predictive models simulate policy outcomes across various scenarios, 
                    helping stakeholders understand potential consequences before implementation.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-up delay-200">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Citizen Feedback</h3>
                  <p className="text-muted-foreground">
                    Citizens review simplified policy summaries, vote on provisions, 
                    and submit detailed feedback through our secure platform.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-up delay-300">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Data-Driven Decisions</h3>
                  <p className="text-muted-foreground">
                    Aggregated insights are shared with policymakers, creating a continuous 
                    feedback loop that improves governance outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-up delay-200">
              <div className="aspect-square rounded-2xl bg-gradient-hero p-8 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <Globe className="w-24 h-24 mx-auto mb-6 opacity-80" />
                  <p className="text-lg font-medium">Connecting Citizens & Government</p>
                  <p className="text-primary-foreground/70 text-sm mt-2">Through transparent AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do at PolicyPulse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="card-elevated p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Experts in policy, technology, and civic engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="card-elevated p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center gap-8 mb-8 animate-fade-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <div className="card-elevated p-4">
                      <span className="text-accent font-bold text-lg">{milestone.year}</span>
                      <p className="text-muted-foreground mt-1">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center md:-translate-x-1/2 shadow-glow">
                    <Award className="w-4 h-4 text-accent-foreground" />
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
