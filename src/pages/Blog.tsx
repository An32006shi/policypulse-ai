import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Clock, 
  User,
  ArrowRight,
  TrendingUp,
  BookOpen
} from "lucide-react";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-transforming-public-policy",
    title: "How Artificial Intelligence is Transforming Public Policy Making",
    excerpt: "Discover how machine learning and predictive analytics are revolutionizing the way governments analyze, simulate, and implement policies for better citizen outcomes.",
    content: `
The intersection of artificial intelligence and public policy represents one of the most significant transformations in governance since the digital revolution. As governments worldwide grapple with increasingly complex challenges—from climate change to healthcare accessibility—AI offers unprecedented tools for analysis, prediction, and decision-making.

## The Evolution of Policy Analysis

Traditional policy analysis relied heavily on historical data, expert opinions, and limited statistical models. While valuable, these methods often failed to capture the full complexity of social systems. Today, machine learning algorithms can process vast datasets, identify patterns invisible to human analysts, and simulate policy outcomes across multiple scenarios simultaneously.

## Key Applications in Governance

### Predictive Modeling
AI systems can forecast the potential impacts of policy changes before implementation. For instance, our PolicyPulse simulation engine analyzes economic, social, and environmental variables to project outcomes across five-year horizons. This allows policymakers to refine proposals, identify unintended consequences, and optimize resource allocation.

### Sentiment Analysis
Natural Language Processing (NLP) enables governments to analyze public opinion at scale. By processing millions of social media posts, news articles, and public comments, AI can gauge citizen sentiment toward specific policies, identifying concerns and support patterns that traditional surveys might miss.

### Resource Optimization
AI algorithms can optimize the distribution of public resources—from healthcare supplies to infrastructure investments—ensuring maximum impact for every rupee spent. Machine learning models continuously learn from outcomes, improving recommendations over time.

## Challenges and Considerations

### Transparency and Explainability
One critical challenge is ensuring AI decision-making processes remain transparent. Citizens have a right to understand how algorithms influence policies that affect their lives. At PolicyPulse, we prioritize explainable AI, providing detailed breakdowns of how our simulations reach their conclusions.

### Bias Mitigation
AI systems can inadvertently perpetuate or amplify existing biases in training data. Rigorous testing, diverse datasets, and ongoing monitoring are essential to ensure fair outcomes across all demographic groups.

### Human Oversight
AI should augment, not replace, human judgment in policy-making. The most effective governance models use AI as a powerful analytical tool while maintaining human decision-makers who consider ethical, cultural, and contextual factors that algorithms cannot fully capture.

## The Path Forward

The future of AI-powered governance lies in collaborative systems that combine computational power with human wisdom. As these technologies mature, we can expect:

- More responsive governance that adapts to changing conditions in real-time
- Greater citizen participation through AI-facilitated feedback mechanisms
- Evidence-based policies with measurable outcomes
- Reduced administrative burden, allowing governments to focus on strategic priorities

At PolicyPulse, we're committed to developing AI tools that serve democracy, ensuring technology amplifies citizen voices rather than replacing them.
    `,
    category: "Technology",
    author: "Dr. Rajesh Kumar",
    authorRole: "Chief Technology Officer",
    date: "December 18, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "citizen-participation-digital-age",
    title: "Citizen Participation in the Digital Age: Building Inclusive Democracy",
    excerpt: "Exploring how digital platforms are enabling new forms of civic engagement and what this means for the future of democratic participation in India.",
    content: `
Democracy thrives when citizens actively participate in governance. Yet, traditional mechanisms of civic engagement—public hearings, town halls, and written petitions—have often excluded large segments of the population. Digital platforms are changing this dynamic, creating new pathways for inclusive participation.

## The Digital Transformation of Civic Engagement

India's digital infrastructure has expanded dramatically, with over 800 million internet users and rising smartphone penetration in rural areas. This connectivity creates unprecedented opportunities for citizen-government dialogue.

## Breaking Down Barriers

### Geographic Accessibility
A farmer in rural Rajasthan can now submit feedback on agricultural policy without traveling to the state capital. Digital platforms eliminate the distance barrier that historically silenced rural voices in urban-centric policy discussions.

### Language Inclusivity
AI-powered translation enables citizens to engage in their preferred language. PolicyPulse supports all 22 scheduled languages, ensuring no citizen is excluded due to language barriers.

### Time Flexibility
Working citizens can participate during convenient hours rather than taking time off for daytime public meetings. Asynchronous digital engagement fits modern lifestyles.

## Quality of Participation

Digital tools don't just increase participation quantity—they can enhance quality too. Interactive simulations help citizens understand policy trade-offs. Visualized data makes complex issues accessible. Discussion forums enable deeper deliberation than time-limited public hearings.

## Challenges in Digital Democracy

### The Digital Divide
Despite progress, significant disparities in digital access persist. Effective digital governance must complement, not replace, offline engagement mechanisms.

### Misinformation
Digital platforms can spread misinformation rapidly. Robust fact-checking, verified information sources, and media literacy programs are essential safeguards.

### Meaningful vs. Performative Engagement
True participation requires that citizen input genuinely influences decisions. Governments must demonstrate responsiveness to maintain trust and sustained engagement.

## Best Practices for Inclusive Digital Governance

1. **Multi-channel approaches**: Combine digital with traditional engagement methods
2. **Accessibility standards**: Ensure platforms work for users with disabilities
3. **Feedback loops**: Show citizens how their input influenced decisions
4. **Community facilitators**: Deploy local ambassadors to help less digital-literate citizens participate
5. **Regular evaluation**: Continuously assess who participates and who doesn't

The future of Indian democracy depends on leveraging technology to include every citizen in governance, regardless of their location, language, or digital literacy level.
    `,
    category: "Governance",
    author: "Ananya Patel",
    authorRole: "Head of Policy Research",
    date: "December 15, 2024",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "3",
    slug: "data-privacy-public-sector",
    title: "Balancing Data Privacy and Public Sector Innovation",
    excerpt: "An examination of how governments can harness data for improved services while maintaining robust privacy protections for citizens.",
    content: `
The tension between data-driven governance and individual privacy represents one of the defining challenges of our digital age. As governments collect more data to improve services, citizens rightfully demand strong protections for their personal information.

## The Data Opportunity

Government agencies possess vast datasets that, when properly analyzed, can dramatically improve public services. Health departments can predict disease outbreaks. Transport agencies can optimize traffic flow. Social services can identify vulnerable populations needing support.

## Privacy Concerns

Citizens provide sensitive information to governments—health records, income data, family details—trusting it will be protected. Breaches of this trust undermine the social contract essential to effective governance.

## Key Privacy Principles

### Data Minimization
Collect only what's necessary. Many government forms request information never used for stated purposes. Regular audits should eliminate unnecessary data collection.

### Purpose Limitation
Data collected for one purpose shouldn't be repurposed without consent. A census response shouldn't become marketing data.

### Anonymization and Aggregation
Statistical analysis often doesn't require individual identification. Properly anonymized datasets can drive policy insights without privacy risks.

### Citizen Control
Individuals should know what data government holds about them and have mechanisms to correct inaccuracies.

## Technical Safeguards

Modern privacy-enhancing technologies enable data utility while protecting individual privacy:

- **Differential privacy**: Adding statistical noise prevents identification of individuals
- **Federated learning**: AI models train on distributed data without centralizing sensitive information
- **Secure multi-party computation**: Multiple agencies can jointly analyze data without any party seeing raw data from others

## Building Trust Through Transparency

Governments should publish clear privacy policies, conduct regular impact assessments, and establish independent oversight. At PolicyPulse, we maintain detailed transparency reports showing exactly how citizen data is used and protected.

Privacy and innovation aren't opposites—thoughtful governance can achieve both.
    `,
    category: "Privacy",
    author: "Dr. Priya Sharma",
    authorRole: "Chief Executive Officer",
    date: "December 12, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "4",
    slug: "policy-simulation-economic-planning",
    title: "Using Policy Simulation for Economic Planning: A Case Study",
    excerpt: "How Karnataka used AI-powered simulation to optimize its industrial policy, resulting in 23% higher investment attraction.",
    content: `
When Karnataka's Industries Department faced declining foreign direct investment in 2023, they turned to AI-powered policy simulation. The results exceeded expectations, demonstrating the practical value of predictive analytics in governance.

## The Challenge

Karnataka had historically attracted significant industrial investment, but competition from neighboring states and changing global supply chains were eroding this advantage. Traditional approaches—lower taxes, more incentives—were fiscally unsustainable.

## The Simulation Approach

Using PolicyPulse's simulation engine, the department modeled dozens of policy variations across multiple variables:

- Tax incentive structures
- Infrastructure investment priorities
- Skill development programs
- Regulatory streamlining
- Sector-specific support packages

Each simulation projected outcomes over five years, measuring:
- Total investment attracted
- Job creation
- Tax revenue (accounting for incentives)
- Environmental impact
- Regional distribution of benefits

## Key Findings

The simulations revealed counterintuitive insights:

1. **Infrastructure over incentives**: Investments in logistics infrastructure showed 2.3x better ROI than equivalent tax breaks
2. **Skill premium**: Sectors with strong local talent pools grew faster regardless of incentive levels
3. **Regulatory certainty**: Predictable timelines mattered more than faster approvals

## Implementation and Results

Based on simulation insights, Karnataka restructured its industrial policy:

- Redirected ₹2,000 crore from tax incentives to logistics infrastructure
- Launched targeted skill development partnerships with industry
- Published guaranteed timelines for all regulatory approvals

Within 18 months, FDI increased 23% year-over-year, outperforming national growth of 8%.

## Lessons Learned

- AI simulation doesn't replace human judgment but informs it with better data
- Stakeholder buy-in is essential—officials initially skeptical became advocates after seeing results
- Continuous model refinement improves predictions over time
- Transparency in methodology builds public trust

This case demonstrates that evidence-based policy-making, supported by modern analytical tools, can deliver measurable improvements in governance outcomes.
    `,
    category: "Case Study",
    author: "Vikram Singh",
    authorRole: "Head of Citizen Engagement",
    date: "December 8, 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: "5",
    slug: "future-civic-technology",
    title: "The Future of Civic Technology: Trends to Watch in 2025",
    excerpt: "From blockchain-based voting to AI assistants for citizen services, explore the emerging technologies that will reshape government-citizen interactions.",
    content: `
As we look toward 2025, several emerging technologies promise to fundamentally transform how citizens interact with their governments. Understanding these trends helps us prepare for a more connected, responsive, and efficient public sector.

## Trend 1: Conversational AI in Citizen Services

AI chatbots and voice assistants are moving beyond basic queries to handle complex government interactions. Imagine completing a property registration through a conversation with an AI that guides you through requirements, schedules appointments, and answers questions in your preferred language.

## Trend 2: Blockchain for Transparency

Distributed ledger technology offers immutable records of government transactions, procurement, and even voting. While full-scale election blockchain remains experimental, smaller applications in land records and supply chain tracking are proving successful.

## Trend 3: Predictive Public Safety

AI systems can analyze patterns to predict where public safety resources will be needed—from ambulance positioning to crime prevention patrols. The ethical implementation of such systems requires careful oversight to prevent discriminatory outcomes.

## Trend 4: Digital Identity Evolution

India's Aadhaar system continues to evolve. The next phase includes verifiable credentials that give citizens control over their data while enabling secure identity verification across services.

## Trend 5: Participatory Budgeting at Scale

AI-facilitated deliberation tools enable meaningful citizen input on budget priorities across large populations. Rather than simple voting, these systems help citizens understand trade-offs and reach informed consensus.

## Trend 6: Real-time Policy Monitoring

Dashboards that show policy implementation progress and outcomes in real-time increase accountability and enable rapid course correction when programs underperform.

## Implementation Considerations

Technology alone doesn't transform governance. Success requires:

- Investment in digital literacy
- Inclusive design that works for all citizens
- Strong cybersecurity foundations
- Regulatory frameworks that balance innovation with protection
- Change management within government institutions

The governments that thrive in 2025 will be those that thoughtfully integrate these technologies while maintaining focus on citizen outcomes rather than technological novelty.
    `,
    category: "Trends",
    author: "Dr. Rajesh Kumar",
    authorRole: "Chief Technology Officer",
    date: "December 5, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "6",
    slug: "environmental-policy-modeling",
    title: "AI-Powered Environmental Policy Modeling: Protecting India's Future",
    excerpt: "How advanced climate modeling is helping Indian states develop resilient environmental policies that balance development with sustainability.",
    content: `
Climate change poses existential challenges for India—from rising seas threatening coastal cities to shifting monsoons affecting agricultural heartlands. AI-powered modeling offers new tools for developing policies that protect both environment and economy.

## The Modeling Challenge

Environmental systems are immensely complex, with interactions across atmosphere, ocean, land, and human activity. Traditional models often failed to capture these interdependencies. Modern machine learning approaches can identify patterns across massive datasets that human analysts would miss.

## Key Applications

### Agricultural Adaptation
AI models can project how changing rainfall patterns will affect different crops in different regions, enabling targeted support for farmers transitioning to more suitable varieties.

### Urban Resilience
City planners use simulation to identify neighborhoods most vulnerable to flooding, heat waves, or air pollution, prioritizing infrastructure investments accordingly.

### Industrial Policy
Emissions modeling helps governments design regulations that achieve environmental goals with minimum economic disruption.

### Conservation Planning
Machine learning identifies ecological corridors and biodiversity hotspots requiring protection, optimizing the allocation of limited conservation resources.

## Case Study: Gujarat Coastal Resilience

Gujarat's coastal communities face rising sea levels and intensifying cyclones. AI modeling identified:

- 47 villages requiring priority relocation
- Optimal locations for storm shelters
- Mangrove restoration areas with maximum protective benefit
- Infrastructure investments with highest resilience returns

Implementation of model recommendations has already reduced cyclone casualties by 40% compared to pre-modeling baselines.

## Challenges and Ethics

Environmental modeling involves significant uncertainty. Responsible use requires:

- Communicating uncertainty ranges, not false precision
- Regular model validation against actual outcomes
- Inclusive consideration of affected communities
- Integration of local knowledge with computational models

AI-powered environmental policy represents our best hope for navigating the climate crisis while maintaining development progress. The technology exists—what's needed now is the political will to act on its insights.
    `,
    category: "Environment",
    author: "Ananya Patel",
    authorRole: "Head of Policy Research",
    date: "December 1, 2024",
    readTime: "7 min read",
    featured: false,
  },
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Blog & Insights
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up delay-100">
              Expert analysis on policy, governance, and civic technology from the 
              PolicyPulse team and guest contributors.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          {/* Search */}
          <div className="max-w-md mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h2 className="text-2xl font-bold">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="group animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="card-elevated h-full overflow-hidden">
                    <div className="h-48 bg-gradient-hero flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-primary-foreground/30" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                            <User className="w-4 h-4 text-accent" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.date}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-accent" />
              <h2 className="text-2xl font-bold">All Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="group animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="card-elevated h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
