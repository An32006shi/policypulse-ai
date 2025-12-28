import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Legend
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Building2,
  Briefcase,
  AlertTriangle,
  CheckCircle2,
  Info,
  RefreshCw
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import api from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";

const baseData = [
  { year: '2024', employment: 62, gdp: 3.2, inflation: 5.5, poverty: 21 },
  { year: '2025', employment: 63, gdp: 3.4, inflation: 5.2, poverty: 20 },
  { year: '2026', employment: 64, gdp: 3.6, inflation: 4.9, poverty: 19 },
  { year: '2027', employment: 65, gdp: 3.8, inflation: 4.7, poverty: 18 },
  { year: '2028', employment: 66, gdp: 4.0, inflation: 4.5, poverty: 17 },
];

export default function Simulation() {
  const [taxRate, setTaxRate] = useState([28]);
  const [subsidies, setSubsidies] = useState([15]);
  const [infraSpending, setInfraSpending] = useState([8]);
  const [education, setEducation] = useState([4]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [hasSimulated, setHasSimulated] = useState(false);

  const calculateImpact = () => {
    const taxImpact = (taxRate[0] - 28) * -0.05;
    const subsidyImpact = (subsidies[0] - 15) * 0.03;
    const infraImpact = (infraSpending[0] - 8) * 0.08;
    const eduImpact = (education[0] - 4) * 0.06;

    return baseData.map((item, index) => ({
      ...item,
      employment: Math.max(50, Math.min(80, item.employment + (taxImpact + subsidyImpact + infraImpact + eduImpact) * (index + 1))),
      gdp: Math.max(1, Math.min(8, item.gdp + (taxImpact * 0.5 + infraImpact + eduImpact * 0.3) * (index + 1) * 0.1)),
      inflation: Math.max(2, Math.min(10, item.inflation + (subsidyImpact * 2 - taxImpact) * (index + 1) * 0.1)),
      poverty: Math.max(10, Math.min(30, item.poverty - (subsidyImpact + eduImpact * 2) * (index + 1))),
    }));
  };

  const simulatedData = calculateImpact();

  const getImpactAnalysis = () => {
    const finalYear = simulatedData[simulatedData.length - 1];
    const baselineYear = baseData[baseData.length - 1];

    return {
      employment: {
        change: (finalYear.employment - baselineYear.employment).toFixed(1),
        positive: finalYear.employment > baselineYear.employment,
      },
      gdp: {
        change: (finalYear.gdp - baselineYear.gdp).toFixed(2),
        positive: finalYear.gdp > baselineYear.gdp,
      },
      inflation: {
        change: (finalYear.inflation - baselineYear.inflation).toFixed(1),
        positive: finalYear.inflation < baselineYear.inflation,
      },
      poverty: {
        change: (finalYear.poverty - baselineYear.poverty).toFixed(1),
        positive: finalYear.poverty < baselineYear.poverty,
      },
    };
  };

  const impact = getImpactAnalysis();

  const runSimulation = async () => {
    setIsSimulating(true);
    toast({
      title: "Running AI Analysis",
      description: "Processing policy parameters through our simulation model...",
    });

    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate calculation time

      await api.post('/simulation', {
        parameters: {
          taxRate: taxRate[0],
          subsidies: subsidies[0],
          infraSpending: infraSpending[0],
          education: education[0]
        },
        results: getImpactAnalysis()
      });

      setHasSimulated(true);
      toast({
        title: "Simulation Complete",
        description: "AI analysis has generated impact predictions and saved to history.",
      });
    } catch (error) {
      console.error("Simulation save failed", error);
      toast({
        title: "Simulation Complete (Offline)",
        description: "Analysis generated but failed to save to history.",
      });
      setHasSimulated(true);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Policy Simulation Lab
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up delay-100">
              Explore how different policy parameters affect economic and social outcomes
              using our AI-powered predictive modeling system.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Controls Panel */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-accent" />
                    Policy Parameters
                  </CardTitle>
                  <CardDescription>
                    Adjust the sliders to simulate different policy scenarios
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Corporate Tax Rate</label>
                      <span className="text-sm text-accent font-semibold">{taxRate[0]}%</span>
                    </div>
                    <Slider
                      value={taxRate}
                      onValueChange={setTaxRate}
                      min={15}
                      max={40}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Current: 28%</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Agricultural Subsidies</label>
                      <span className="text-sm text-accent font-semibold">₹{subsidies[0]}K Cr</span>
                    </div>
                    <Slider
                      value={subsidies}
                      onValueChange={setSubsidies}
                      min={5}
                      max={30}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Current: ₹15K Cr</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Infrastructure Spending</label>
                      <span className="text-sm text-accent font-semibold">{infraSpending[0]}% GDP</span>
                    </div>
                    <Slider
                      value={infraSpending}
                      onValueChange={setInfraSpending}
                      min={4}
                      max={15}
                      step={0.5}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Current: 8% GDP</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Education Budget</label>
                      <span className="text-sm text-accent font-semibold">{education[0]}% GDP</span>
                    </div>
                    <Slider
                      value={education}
                      onValueChange={setEducation}
                      min={2}
                      max={8}
                      step={0.5}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Current: 4% GDP</p>
                  </div>

                  <Button
                    variant="accent"
                    className="w-full"
                    onClick={runSimulation}
                    disabled={isSimulating}
                  >
                    {isSimulating ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Simulating...
                      </>
                    ) : (
                      "Run AI Simulation"
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Impact Summary */}
              {hasSimulated && (
                <Card className="card-elevated animate-fade-up">
                  <CardHeader>
                    <CardTitle className="text-lg">AI Impact Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Employment</span>
                      </div>
                      <div className={`flex items-center gap-1 ${impact.employment.positive ? 'text-success' : 'text-destructive'}`}>
                        {impact.employment.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span className="text-sm font-semibold">{impact.employment.positive ? '+' : ''}{impact.employment.change}%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">GDP Growth</span>
                      </div>
                      <div className={`flex items-center gap-1 ${impact.gdp.positive ? 'text-success' : 'text-destructive'}`}>
                        {impact.gdp.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span className="text-sm font-semibold">{impact.gdp.positive ? '+' : ''}{impact.gdp.change}%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Inflation</span>
                      </div>
                      <div className={`flex items-center gap-1 ${impact.inflation.positive ? 'text-success' : 'text-destructive'}`}>
                        {impact.inflation.positive ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                        <span className="text-sm font-semibold">{impact.inflation.change}%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Poverty Rate</span>
                      </div>
                      <div className={`flex items-center gap-1 ${impact.poverty.positive ? 'text-success' : 'text-destructive'}`}>
                        {impact.poverty.positive ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                        <span className="text-sm font-semibold">{impact.poverty.change}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Charts Panel */}
            <div className="lg:col-span-2">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Economic Projections (2024-2028)</CardTitle>
                  <CardDescription>
                    Simulated outcomes based on your policy configuration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="employment" className="w-full">
                    <TabsList className="grid grid-cols-4 mb-6">
                      <TabsTrigger value="employment">Employment</TabsTrigger>
                      <TabsTrigger value="gdp">GDP Growth</TabsTrigger>
                      <TabsTrigger value="inflation">Inflation</TabsTrigger>
                      <TabsTrigger value="poverty">Poverty</TabsTrigger>
                    </TabsList>

                    <TabsContent value="employment" className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={simulatedData}>
                          <defs>
                            <linearGradient id="employmentGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(180, 55%, 42%)" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="hsl(180, 55%, 42%)" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                          <XAxis dataKey="year" stroke="hsl(220, 10%, 45%)" />
                          <YAxis domain={[50, 80]} stroke="hsl(220, 10%, 45%)" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'hsl(0, 0%, 100%)',
                              border: '1px solid hsl(214, 20%, 88%)',
                              borderRadius: '8px'
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="employment"
                            stroke="hsl(180, 55%, 42%)"
                            strokeWidth={3}
                            fill="url(#employmentGradient)"
                            name="Employment Rate (%)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </TabsContent>

                    <TabsContent value="gdp" className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={simulatedData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                          <XAxis dataKey="year" stroke="hsl(220, 10%, 45%)" />
                          <YAxis domain={[1, 8]} stroke="hsl(220, 10%, 45%)" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'hsl(0, 0%, 100%)',
                              border: '1px solid hsl(214, 20%, 88%)',
                              borderRadius: '8px'
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="gdp"
                            stroke="hsl(220, 60%, 25%)"
                            strokeWidth={3}
                            dot={{ fill: 'hsl(220, 60%, 25%)', strokeWidth: 2 }}
                            name="GDP Growth (%)"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </TabsContent>

                    <TabsContent value="inflation" className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={simulatedData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                          <XAxis dataKey="year" stroke="hsl(220, 10%, 45%)" />
                          <YAxis domain={[0, 10]} stroke="hsl(220, 10%, 45%)" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'hsl(0, 0%, 100%)',
                              border: '1px solid hsl(214, 20%, 88%)',
                              borderRadius: '8px'
                            }}
                          />
                          <Bar
                            dataKey="inflation"
                            fill="hsl(45, 90%, 55%)"
                            radius={[4, 4, 0, 0]}
                            name="Inflation Rate (%)"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </TabsContent>

                    <TabsContent value="poverty" className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={simulatedData}>
                          <defs>
                            <linearGradient id="povertyGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                          <XAxis dataKey="year" stroke="hsl(220, 10%, 45%)" />
                          <YAxis domain={[10, 30]} stroke="hsl(220, 10%, 45%)" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'hsl(0, 0%, 100%)',
                              border: '1px solid hsl(214, 20%, 88%)',
                              borderRadius: '8px'
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="poverty"
                            stroke="hsl(0, 72%, 51%)"
                            strokeWidth={3}
                            fill="url(#povertyGradient)"
                            name="Poverty Rate (%)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* AI Insights */}
              {hasSimulated && (
                <Card className="card-elevated mt-6 animate-fade-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5 text-accent" />
                      AI-Generated Policy Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Positive Economic Trajectory</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          The proposed policy mix shows a net positive impact on employment and GDP growth.
                          Infrastructure and education investments are key drivers.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-4 bg-warning/10 rounded-lg border border-warning/20">
                      <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Inflation Watch</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Higher subsidies may exert upward pressure on inflation. Consider phased
                          implementation or targeted distribution to minimize inflationary effects.
                        </p>
                      </div>
                    </div>
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
