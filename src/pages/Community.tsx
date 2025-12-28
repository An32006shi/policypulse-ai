
import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, User } from "lucide-react";
import api from "@/lib/api";
import { format } from "date-fns";

interface FeedbackItem {
    _id: string;
    userId: {
        _id: string;
        name: string;
    };
    policyId: {
        _id: string;
        title: string;
    };
    comment: string;
    createdAt: string;
}

export default function Community() {
    const [issues, setIssues] = useState<FeedbackItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const { data } = await api.get('/feedback');
                setIssues(data);
            } catch (error) {
                console.error("Failed to fetch community issues", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchIssues();
    }, []);

    return (
        <Layout>
            <section className="bg-gradient-hero text-primary-foreground py-16">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
                        Community Voices
                    </h1>
                    <p className="text-xl text-primary-foreground/80 animate-fade-up delay-100">
                        See what citizens are saying about policies and governance.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {issues.map((issue, index) => (
                            <Card key={issue._id} className="card-elevated animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="outline" className="text-xs">
                                            {issue.policyId?.title || "General Feedback"}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground">
                                            {format(new Date(issue.createdAt), 'MMM d, yyyy')}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <User className="w-4 h-4 text-primary" />
                                        </div>
                                        <CardTitle className="text-base font-medium">{issue.userId?.name || "Anonymous"}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm line-clamp-4">
                                        "{issue.comment}"
                                    </p>
                                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <MessageSquare className="w-3 h-3" />
                                            Community Issue
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        {issues.length === 0 && !isLoading && (
                            <div className="col-span-full text-center py-12 text-muted-foreground">
                                No community issues reported yet. Be the first to share your voice!
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
