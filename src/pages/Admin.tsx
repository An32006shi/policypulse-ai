import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  FileText,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Plus,
  Edit,
  Trash2,
  Search,
  Shield,
  Eye,
  Activity,
  BarChart3,
  PieChart,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPie,
  Pie,
  Cell,
} from "recharts";
import api from "@/lib/api";

const stats = [
  { label: "Total Users", value: "52,431", change: "+12%", positive: true, icon: Users },
  { label: "Active Policies", value: "47", change: "+3", positive: true, icon: FileText },
  { label: "Feedback Received", value: "8,923", change: "+24%", positive: true, icon: MessageSquare },
  { label: "Citizen Issues", value: "1,247", change: "-8%", positive: false, icon: Activity },
];

const engagementData = [
  { month: "Jul", users: 32000, feedback: 4200, issues: 890 },
  { month: "Aug", users: 35000, feedback: 4800, issues: 920 },
  { month: "Sep", users: 38000, feedback: 5400, issues: 1050 },
  { month: "Oct", users: 42000, feedback: 6200, issues: 1180 },
  { month: "Nov", users: 48000, feedback: 7500, issues: 1320 },
  { month: "Dec", users: 52431, feedback: 8923, issues: 1247 },
];

const policyDistribution = [
  { name: "Active", value: 18, color: "hsl(243, 75%, 59%)" },
  { name: "Proposed", value: 12, color: "hsl(162, 63%, 41%)" },
  { name: "Implemented", value: 15, color: "hsl(38, 92%, 50%)" },
  { name: "Under Review", value: 2, color: "hsl(220, 9%, 46%)" },
];

const sentimentData = [
  { policy: "Education", support: 78, oppose: 22 },
  { policy: "Healthcare", support: 82, oppose: 18 },
  { policy: "Environment", support: 65, oppose: 35 },
  { policy: "Economy", support: 71, oppose: 29 },
  { policy: "Infrastructure", support: 89, oppose: 11 },
];

const users = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", role: "Citizen", status: "Active", joined: "Dec 15, 2024" },
  { id: 2, name: "Priya Patel", email: "priya@example.com", role: "Citizen", status: "Active", joined: "Dec 14, 2024" },
  { id: 3, name: "Admin User", email: "admin@policypulse.gov.in", role: "Admin", status: "Active", joined: "Jan 1, 2024" },
  { id: 4, name: "Vikram Singh", email: "vikram@example.com", role: "Citizen", status: "Active", joined: "Dec 10, 2024" },
  { id: 5, name: "Anjali Gupta", email: "anjali@example.com", role: "Citizen", status: "Inactive", joined: "Dec 8, 2024" },
];

const policies = [
  { id: 1, title: "Digital India Education Initiative 2024", status: "Active", votes: 9745, feedback: 342 },
  { id: 2, title: "Green Energy Transition Act", status: "Proposed", votes: 16825, feedback: 892 },
  { id: 3, title: "Universal Healthcare Expansion", status: "Active", votes: 18019, feedback: 567 },
  { id: 4, title: "Startup India Tax Relief 2025", status: "Implemented", votes: 11419, feedback: 234 },
];

const blogs = [
  { id: 1, title: "How AI is Transforming Public Policy", author: "Dr. Rajesh Kumar", status: "Published", views: 2341 },
  { id: 2, title: "Citizen Participation in the Digital Age", author: "Ananya Patel", status: "Published", views: 1892 },
  { id: 3, title: "Data Privacy in Public Sector", author: "Dr. Priya Sharma", status: "Draft", views: 0 },
];

const insights = [
  {
    type: "success",
    title: "Healthcare Policy Gaining Momentum",
    description: "82% citizen support rate - highest among active policies. Consider prioritizing implementation.",
    icon: CheckCircle2,
  },
  {
    type: "warning",
    title: "Environment Policy Needs Attention",
    description: "35% opposition rate detected. AI suggests additional public consultations.",
    icon: AlertTriangle,
  },
  {
    type: "info",
    title: "User Engagement Peak",
    description: "December saw 24% increase in feedback. Capitalize on citizen interest.",
    icon: Lightbulb,
  },
];

export default function Admin() {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuth();
  const [statsData, setStatsData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get('/admin/stats');
        setStatsData(data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
        toast({
          title: "Error",
          description: "Failed to load dashboard statistics",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  const handleAction = (action: string, item: string) => {
    toast({
      title: `${action} Action`,
      description: `${action} operation on "${item}" would be performed here.`,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-12">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-accent" />
                <h1 className="text-3xl md:text-4xl font-display font-bold">Admin Dashboard</h1>
              </div>
              <p className="text-primary-foreground/80">
                Manage users, policies, and content across PolicyPulse AI
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold">
                  {user?.name?.[0] || user?.email?.[0]?.toUpperCase() || "A"}
                </span>
              </div>
              <div className="text-sm">
                <p className="font-medium">{user?.name || "Admin"}</p>
                <p className="text-primary-foreground/60 text-xs">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Users", value: statsData.users?.total || 0, change: "+12%", positive: true, icon: Users },
              { label: "Active Policies", value: statsData.policies?.active || 0, change: "+3", positive: true, icon: FileText },
              { label: "Policies Analyzed", value: statsData.policies?.total || 0, change: "+24%", positive: true, icon: MessageSquare },
              { label: "Citizen Issues", value: statsData.issues?.total || 0, change: "-8%", positive: false, icon: Activity },
            ].map((stat: any, index: number) => (
              <Card key={stat.label} className="card-elevated animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold mt-1">{stat.value}</p>
                      <p className={`text-sm mt-1 flex items-center gap-1 ${stat.positive ? 'text-success' : 'text-destructive'}`}>
                        {stat.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {stat.change} this month
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Analytics Section */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Engagement Chart */}
            <Card className="card-elevated lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Platform Engagement
                </CardTitle>
                <CardDescription>User growth and feedback trends over 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={engagementData}>
                      <defs>
                        <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(243, 75%, 59%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(243, 75%, 59%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="feedbackGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(162, 63%, 41%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(162, 63%, 41%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                      <XAxis dataKey="month" stroke="hsl(220, 9%, 46%)" fontSize={12} />
                      <YAxis stroke="hsl(220, 9%, 46%)" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(0, 0%, 100%)",
                          border: "1px solid hsl(220, 13%, 91%)",
                          borderRadius: "12px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="users"
                        stroke="hsl(243, 75%, 59%)"
                        strokeWidth={2}
                        fill="url(#userGradient)"
                        name="Users"
                      />
                      <Area
                        type="monotone"
                        dataKey="feedback"
                        stroke="hsl(162, 63%, 41%)"
                        strokeWidth={2}
                        fill="url(#feedbackGradient)"
                        name="Feedback"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Policy Distribution */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  Policy Status
                </CardTitle>
                <CardDescription>Distribution by status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPie>
                      <Pie
                        data={policyDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {policyDistribution.map((entry, index) => (
                          <Cell key={`cell - ${index} `} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPie>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {policyDistribution.map((item) => (
                    <div key={item.name} className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-medium ml-auto">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sentiment Analysis */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="card-elevated lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Public Sentiment Analysis
                </CardTitle>
                <CardDescription>Support vs Opposition by policy category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sentimentData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                      <XAxis type="number" domain={[0, 100]} stroke="hsl(220, 9%, 46%)" fontSize={12} />
                      <YAxis dataKey="policy" type="category" stroke="hsl(220, 9%, 46%)" fontSize={12} width={90} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(0, 0%, 100%)",
                          border: "1px solid hsl(220, 13%, 91%)",
                          borderRadius: "12px",
                        }}
                      />
                      <Bar dataKey="support" fill="hsl(162, 63%, 41%)" name="Support %" radius={[0, 4, 4, 0]} />
                      <Bar dataKey="oppose" fill="hsl(0, 84%, 60%)" name="Oppose %" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  AI Policy Insights
                </CardTitle>
                <CardDescription>Explainable recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className={`p - 4 rounded - xl border ${insight.type === "success"
                      ? "bg-success/5 border-success/20"
                      : insight.type === "warning"
                        ? "bg-warning/5 border-warning/20"
                        : "bg-info/5 border-info/20"
                      } `}
                  >
                    <div className="flex items-start gap-3">
                      <insight.icon
                        className={`w - 5 h - 5 flex - shrink - 0 ${insight.type === "success"
                          ? "text-success"
                          : insight.type === "warning"
                            ? "text-warning"
                            : "text-info"
                          } `}
                      />
                      <div>
                        <p className="font-medium text-sm">{insight.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="users" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
              <TabsTrigger value="blogs">Blogs</TabsTrigger>
            </TabsList>

            {/* Users Tab */}
            <TabsContent value="users">
              <Card className="card-elevated">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle>User Management</CardTitle>
                      <CardDescription>View and manage registered users</CardDescription>
                    </div>
                    <div className="relative w-full sm:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search users..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                              <Badge variant={user.role === "Admin" ? "default" : "secondary"}>
                                {user.role}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={user.status === "Active" ? "text-success border-success/30" : "text-muted-foreground"}
                              >
                                {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{user.joined}</TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleAction("View", user.name)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleAction("Edit", user.name)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Policies Tab */}
            <TabsContent value="policies">
              <Card className="card-elevated">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle>Policy Management</CardTitle>
                      <CardDescription>Manage policies and view engagement</CardDescription>
                    </div>
                    <Button onClick={() => handleAction("Create", "New Policy")}>
                      <Plus className="w-4 h-4" />
                      Add Policy
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Policy Title</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Total Votes</TableHead>
                          <TableHead>Feedback</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {policies.map((policy) => (
                          <TableRow key={policy.id}>
                            <TableCell className="font-medium max-w-xs truncate">{policy.title}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  policy.status === "Active"
                                    ? "default"
                                    : policy.status === "Proposed"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {policy.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{policy.votes.toLocaleString()}</TableCell>
                            <TableCell>{policy.feedback}</TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleAction("Edit", policy.title)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleAction("Delete", policy.title)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Blogs Tab */}
            <TabsContent value="blogs">
              <Card className="card-elevated">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle>Blog Management</CardTitle>
                      <CardDescription>Create and manage blog articles</CardDescription>
                    </div>
                    <Button onClick={() => handleAction("Create", "New Blog Post")}>
                      <Plus className="w-4 h-4" />
                      New Post
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Author</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Views</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {blogs.map((blog) => (
                          <TableRow key={blog.id}>
                            <TableCell className="font-medium max-w-xs truncate">{blog.title}</TableCell>
                            <TableCell>{blog.author}</TableCell>
                            <TableCell>
                              <Badge variant={blog.status === "Published" ? "default" : "secondary"}>
                                {blog.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{blog.views.toLocaleString()}</TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleAction("Edit", blog.title)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleAction("Delete", blog.title)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
