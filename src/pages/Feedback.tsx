import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Clock,
  Users,
  Filter,
  Search,
  ChevronDown,
  Send
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import api from "@/lib/api";
import { useEffect } from "react";

interface Policy {
  id?: string;
  _id?: string;
  title: string;
  category: string;
  status: 'active' | 'proposed' | 'implemented';
  summary: string;
  supportVotes: number;
  opposeVotes: number;
  comments: number;
  stats?: {
    support: number;
    oppose: number;
    comments: number;
  };
  deadline: string;
  department: string;
}

const policies: Policy[] = [
  {
    id: "1",
    title: "Digital India Education Initiative 2024",
    category: "Education",
    status: "active",
    summary: "Proposal to provide free tablets and internet connectivity to all government school students from grades 6-12, along with digital literacy training for teachers.",
    supportVotes: 8542,
    opposeVotes: 1203,
    comments: 342,
    deadline: "March 15, 2025",
    department: "Ministry of Education",
  },
  {
    id: "2",
    title: "Green Energy Transition Act",
    category: "Environment",
    status: "proposed",
    summary: "Mandating 40% renewable energy usage for all industries by 2030, with tax incentives for early adopters and penalties for non-compliance.",
    supportVotes: 12304,
    opposeVotes: 4521,
    comments: 892,
    deadline: "April 30, 2025",
    department: "Ministry of Environment",
  },
  {
    id: "3",
    title: "Universal Healthcare Expansion",
    category: "Healthcare",
    status: "active",
    summary: "Expanding Ayushman Bharat coverage to include mental health services, dental care, and annual preventive health checkups for all eligible citizens.",
    supportVotes: 15678,
    opposeVotes: 2341,
    comments: 567,
    deadline: "February 28, 2025",
    department: "Ministry of Health",
  },
  {
    id: "4",
    title: "Startup India Tax Relief 2025",
    category: "Economy",
    status: "implemented",
    summary: "Three-year tax holiday for registered startups with annual turnover under ₹25 crore, along with simplified compliance requirements.",
    supportVotes: 9876,
    opposeVotes: 1543,
    comments: 234,
    deadline: "Implemented",
    department: "Ministry of Commerce",
  },
  {
    id: "5",
    title: "Rural Infrastructure Development Fund",
    category: "Infrastructure",
    status: "active",
    summary: "₹50,000 crore fund allocation for building all-weather roads, bridges, and public transportation in underserved rural districts.",
    supportVotes: 11234,
    opposeVotes: 876,
    comments: 445,
    deadline: "May 15, 2025",
    department: "Ministry of Rural Development",
  },
];

const statusColors = {
  active: "bg-success/10 text-success border-success/20",
  proposed: "bg-warning/10 text-warning border-warning/20",
  implemented: "bg-accent/10 text-accent border-accent/20",
};

const CommentsList = ({ policyId }: { policyId?: string }) => {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    if (!policyId) return;
    const fetchComments = async () => {
      try {
        const { data } = await api.get(`/feedback/${policyId}`);
        setComments(data);
      } catch (error) {
        console.error("Failed to fetch comments");
      }
    };
    fetchComments();
  }, [policyId]);

  if (comments.length === 0) return <p className="text-sm text-muted-foreground">No comments yet. Be the first!</p>;

  return (
    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
      {comments.map((c: any) => (
        <div key={c._id} className="bg-muted/50 p-3 rounded-lg text-sm">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-primary">{c.userId?.name || "User"}</span>
            <span className="text-xs text-muted-foreground">{new Date(c.createdAt).toLocaleDateString()}</span>
          </div>
          <p className="text-foreground/90">{c.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default function Feedback() {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [policiesData, setPoliciesData] = useState<Policy[]>([]);
  const [comment, setComment] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [userVotes, setUserVotes] = useState<Record<string, 'support' | 'oppose'>>({});

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const { data } = await api.get('/policies');
        // Map backend data to frontend interface
        const mappedData = data.map((p: any) => ({
          ...p,
          id: p._id,
          supportVotes: p.stats?.support || 0,
          opposeVotes: p.stats?.oppose || 0,
          comments: p.stats?.comments || 0,
        }));
        setPoliciesData(mappedData);
      } catch (error) {
        console.error("Failed to fetch policies", error);
        toast({
          title: "Error",
          description: "Failed to load policies. Please try again later.",
          variant: "destructive"
        });
      }
    };
    fetchPolicies();
  }, [refreshKey]); // Also refresh policies to update counts

  const handleVote = async (policyId: string, type: 'support' | 'oppose') => {
    try {
      await api.post(`/policies/${policyId}/vote`, { type });
      setUserVotes(prev => ({ ...prev, [policyId]: type }));

      // Optimistic update or refetch
      setPoliciesData(prev => prev.map(p => {
        if (p.id === policyId || p._id === policyId) {
          return {
            ...p,
            supportVotes: type === 'support' ? (p.supportVotes || p.stats?.support) + 1 : (p.supportVotes || p.stats?.support),
            opposeVotes: type === 'oppose' ? (p.opposeVotes || p.stats?.oppose) + 1 : (p.opposeVotes || p.stats?.oppose)
          };
        }
        return p;
      }));

      toast({
        title: "Vote Recorded",
        description: `Your ${type === 'support' ? 'support' : 'opposition'} has been recorded. Thank you for participating!`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit vote. You may have already voted.",
        variant: "destructive"
      });
    }
  };

  const handleComment = async () => {
    if (!comment.trim()) {
      toast({
        title: "Comment Required",
        description: "Please enter a comment before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!selectedPolicy) return;

    try {
      await api.post(`/feedback/${selectedPolicy.id || selectedPolicy._id}/comment`, { content: comment });
      toast({
        title: "Comment Submitted",
        description: "Your feedback has been submitted for review.",
      });
      setComment("");
      setRefreshKey(prev => prev + 1); // Refresh data
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit comment.",
        variant: "destructive"
      });
    }
  };

  const filteredPolicies = policiesData.filter(policy => {
    const matchesFilter = filter === "all" || policy.status === filter;
    const matchesSearch = policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getVotePercentage = (support: number, oppose: number) => {
    const total = support + oppose;
    return total > 0 ? (support / total) * 100 : 50;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Public Feedback Portal
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up delay-100">
              Your voice matters. Review active policies, vote on proposals, and share your
              perspective to shape the future of governance.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search policies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Policies</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="proposed">Proposed</SelectItem>
                <SelectItem value="implemented">Implemented</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Policy List */}
            <div className="lg:col-span-2 space-y-4">
              {filteredPolicies.map((policy, index) => (
                <Card
                  key={policy.id}
                  className={`card-elevated cursor-pointer transition-all animate-fade-up ${selectedPolicy?.id === policy.id ? 'ring-2 ring-accent' : ''
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedPolicy(policy)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="outline" className={statusColors[policy.status]}>
                            {policy.status.charAt(0).toUpperCase() + policy.status.slice(1)}
                          </Badge>
                          <Badge variant="secondary">{policy.category}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold">{policy.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{policy.department}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {policy.summary}
                    </p>

                    {/* Vote Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-success font-medium">{policy.supportVotes.toLocaleString()} Support</span>
                        <span className="text-destructive font-medium">{policy.opposeVotes.toLocaleString()} Oppose</span>
                      </div>
                      <Progress
                        value={getVotePercentage(policy.supportVotes, policy.opposeVotes)}
                        className="h-2"
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {policy.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {policy.deadline}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant={userVotes[policy.id] === 'support' ? 'success' : 'outline'}
                          onClick={(e) => { e.stopPropagation(); handleVote(policy.id, 'support'); }}
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant={userVotes[policy.id] === 'oppose' ? 'destructive' : 'outline'}
                          onClick={(e) => { e.stopPropagation(); handleVote(policy.id, 'oppose'); }}
                        >
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-1">
              {selectedPolicy ? (
                <Card className="card-elevated sticky top-24 animate-fade-up">
                  <CardHeader>
                    <Badge variant="outline" className={`w-fit ${statusColors[selectedPolicy.status]}`}>
                      {selectedPolicy.status.charAt(0).toUpperCase() + selectedPolicy.status.slice(1)}
                    </Badge>
                    <CardTitle className="mt-2">{selectedPolicy.title}</CardTitle>
                    <CardDescription>{selectedPolicy.department}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Policy Summary</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selectedPolicy.summary}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Public Sentiment</h4>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-success">{getVotePercentage(selectedPolicy.supportVotes, selectedPolicy.opposeVotes).toFixed(1)}% Support</span>
                        <span className="text-destructive">{(100 - getVotePercentage(selectedPolicy.supportVotes, selectedPolicy.opposeVotes)).toFixed(1)}% Oppose</span>
                      </div>
                      <Progress
                        value={getVotePercentage(selectedPolicy.supportVotes, selectedPolicy.opposeVotes)}
                        className="h-3"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        {(selectedPolicy.supportVotes + selectedPolicy.opposeVotes).toLocaleString()} total votes
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Share Your Feedback</h4>
                      <Textarea
                        placeholder="What are your thoughts on this policy? Share suggestions, concerns, or support..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={4}
                        className="resize-none"
                      />
                      <Button
                        variant="accent"
                        className="w-full mt-3"
                        onClick={handleComment}
                      >
                        <Send className="w-4 h-4" />
                        Submit Feedback
                      </Button>
                    </div>

                    {/* Comments List */}
                    <div className="pt-6 border-t border-border">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Recent Comments
                      </h4>
                      <CommentsList key={refreshKey} policyId={selectedPolicy.id || selectedPolicy._id} />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="card-elevated">
                  <CardContent className="p-12 text-center">
                    <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-semibold mb-2">Select a Policy</h3>
                    <p className="text-sm text-muted-foreground">
                      Click on any policy card to view details and submit your feedback.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
