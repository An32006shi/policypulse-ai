import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import api from "@/lib/api"; // Import API client
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageSquarePlus,
  Droplets,
  Zap,
  Car,
  Shield,
  Building2,
  TreePine,
  GraduationCap,
  Stethoscope,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const categories = [
  { value: "water", label: "Water Supply", icon: Droplets },
  { value: "electricity", label: "Electricity", icon: Zap },
  { value: "roads", label: "Roads & Transport", icon: Car },
  { value: "safety", label: "Public Safety", icon: Shield },
  { value: "sanitation", label: "Sanitation", icon: Building2 },
  { value: "environment", label: "Environment", icon: TreePine },
  { value: "education", label: "Education", icon: GraduationCap },
  { value: "health", label: "Healthcare", icon: Stethoscope },
  { value: "other", label: "Other", icon: MessageSquarePlus },
];

const statusConfig: any = {
  pending: { label: "Pending Review", color: "bg-warning/10 text-warning border-warning/20", icon: Clock },
  investigating: { label: "Under Investigation", color: "bg-accent/10 text-accent border-accent/20", icon: AlertCircle },
  resolved: { label: "Resolved", color: "bg-success/10 text-success border-success/20", icon: CheckCircle2 },
  inProgress: { label: "In Progress", color: "bg-primary/10 text-primary border-primary/20", icon: Loader2 },
};

interface Issue {
  _id: string; // MongoDB ID
  title: string;
  category: string;
  location: string;
  status: string;
  createdAt: string;
  upvotes: number;
  description: string;
}

export default function CitizenVoice() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoadingIssues, setIsLoadingIssues] = useState(true);

  // Fetch issues on load
  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const { data } = await api.get('/issues');
      setIssues(data);
    } catch (error) {
      console.error("Failed to fetch issues", error);
    } finally {
      setIsLoadingIssues(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.category || !formData.location || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to backend
      await api.post('/issues', formData);

      toast({
        title: "Issue Submitted Successfully",
        description: "Your complaint has been registered. It is now visible to the community.",
      });

      setFormData({ title: "", category: "", location: "", description: "" });
      fetchIssues(); // Refresh list
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your issue. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCategoryIcon = (categoryValue: string) => {
    const category = categories.find(c => c.value === categoryValue);
    return category ? category.icon : MessageSquarePlus;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Citizen Voice Portal
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up delay-100">
              Report issues, submit suggestions, and track resolutions. Your community
              concerns go directly to the relevant authorities.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Submission Form */}
            <div>
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquarePlus className="w-5 h-5 text-accent" />
                    Submit New Issue
                  </CardTitle>
                  <CardDescription>
                    Describe your concern and we'll route it to the appropriate department
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Issue Title *</Label>
                      <Input
                        id="title"
                        placeholder="Brief description of the issue"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select issue category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              <div className="flex items-center gap-2">
                                <category.icon className="w-4 h-4" />
                                {category.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="location"
                          placeholder="Street address, area, city"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Detailed Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Provide as much detail as possible about the issue, including when it started, how it affects you, and any other relevant information..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Issue
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Category Quick Links */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Quick Category Selection</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setFormData({ ...formData, category: category.value })}
                      className={`p-4 rounded-xl border transition-all text-center hover:shadow-md ${formData.category === category.value
                          ? 'bg-accent text-accent-foreground border-accent'
                          : 'bg-card border-border hover:border-accent/50'
                        }`}
                    >
                      <category.icon className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-xs font-medium">{category.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Issues */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Community Issues</h2>
                <Badge variant="secondary">{issues.length} Active</Badge>
              </div>

              {isLoadingIssues ? (
                <div className="text-center py-10">
                  <Loader2 className="w-8 h-8 animate-spin mx-auto text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mt-2">Loading issues...</p>
                </div>
              ) : issues.length === 0 ? (
                <div className="text-center py-10 border rounded-xl bg-card">
                  <p className="text-muted-foreground">No issues reported yet. Be the first!</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
                  {issues.map((issue, index) => {
                    const CategoryIcon = getCategoryIcon(issue.category);
                    const StatusIcon = statusConfig[issue.status]?.icon || Clock;
                    const statusData = statusConfig[issue.status] || statusConfig.pending;

                    return (
                      <Card
                        key={issue._id}
                        className="card-elevated animate-fade-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                              <CategoryIcon className="w-5 h-5 text-accent" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="font-semibold text-sm line-clamp-1">{issue.title}</h3>
                                <Badge
                                  variant="outline"
                                  className={`flex-shrink-0 ${statusData.color}`}
                                >
                                  <StatusIcon className="w-3 h-3 mr-1" />
                                  {statusData.label}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                                {issue.description}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {issue.location}
                                </span>
                                <span>{new Date(issue.createdAt).toLocaleDateString()}</span>
                                <span className="text-accent font-medium">
                                  {issue.upvotes} upvotes
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}

              <Button variant="outline" className="w-full mt-6">
                View All Community Issues
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
