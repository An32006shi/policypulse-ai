import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, MessageCircle, Mail, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is PolicyPulse AI and how does it work?",
    answer: "PolicyPulse AI is an artificial intelligence-powered platform that helps citizens understand, analyze, and provide feedback on government policies. Our system uses advanced machine learning algorithms to simulate policy impacts, analyze public sentiment, and create accessible summaries of complex policy documents. The platform connects citizens directly with governance processes through interactive tools and transparent feedback mechanisms.",
  },
  {
    question: "How does the policy simulation feature work?",
    answer: "Our policy simulation uses predictive modeling trained on historical economic, social, and environmental data. When you adjust policy parameters (like tax rates, subsidies, or budget allocations), the system calculates projected outcomes across multiple metrics including GDP growth, employment, inflation, and poverty rates. These projections are based on peer-reviewed economic models and are continuously refined as new data becomes available. While simulations provide valuable insights, they represent projections with inherent uncertainty and should inform—not replace—expert analysis.",
  },
  {
    question: "Is my feedback actually considered by policymakers?",
    answer: "Yes, all feedback submitted through PolicyPulse is aggregated and shared with relevant government departments. We provide regular reports to policymakers showing citizen sentiment, key concerns, and suggestions. Many policies have been modified based on public input gathered through our platform. You can track policy outcomes in our transparency dashboard to see how citizen feedback has influenced decisions.",
  },
  {
    question: "How do you protect my data and privacy?",
    answer: "We take privacy seriously. Personal data is stored securely with industry-standard encryption. Feedback can be submitted anonymously if preferred. We never sell user data to third parties. When sharing aggregated insights with government, all personally identifiable information is removed. Our complete privacy policy details our data handling practices, and we publish regular transparency reports on data usage.",
  },
  {
    question: "Who can use PolicyPulse AI?",
    answer: "PolicyPulse is free for all Indian citizens. You can browse policies and simulations without an account. Registration (free) enables voting, commenting, and submitting issues. Government officials and researchers may request additional access for policy development purposes. We're committed to keeping core civic participation features free and accessible to everyone.",
  },
  {
    question: "How are policies selected for the platform?",
    answer: "We track all major policy proposals at central and state levels. Policies are added based on: public interest (measured by media coverage and citizen requests), impact scope (number of people affected), feedback window (active consultation periods), and government partnership agreements. Citizens can also request specific policies be added for analysis.",
  },
  {
    question: "What makes your AI analysis trustworthy?",
    answer: "Our AI models are built on transparent methodologies. We publish detailed documentation on how simulations work, what data sources we use, and what assumptions underlie our projections. All models undergo regular third-party audits for accuracy and bias. When presenting results, we always show confidence intervals and acknowledge limitations. We believe explainable AI is essential for maintaining public trust.",
  },
  {
    question: "How can I report an issue in my community?",
    answer: "Use our Citizen Voice portal to submit community issues. Select the relevant category (water, roads, electricity, etc.), provide location details, and describe the problem. Your submission is automatically routed to the appropriate municipal or state department. You'll receive a tracking number and can monitor resolution progress. Issues with many upvotes receive priority attention.",
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6 animate-fade-up">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Help Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up delay-100">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up delay-200">
              Find answers to common questions about PolicyPulse AI, our platform features, 
              and how you can participate in governance.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-elevated border-none animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:text-accent">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <Card className="card-elevated mt-16">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-12 h-12 mx-auto text-accent mb-4" />
              <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Can't find what you're looking for? Our support team is here to help 
                with any questions about PolicyPulse AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="accent" asChild>
                  <a href="mailto:support@policypulse.gov.in">
                    <Mail className="w-4 h-4" />
                    Contact Support
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/citizen-voice">
                    Submit an Issue
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
