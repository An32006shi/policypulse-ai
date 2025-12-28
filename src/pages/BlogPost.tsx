import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "./Blog";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar,
  Share2,
  Twitter,
  Linkedin,
  Facebook
} from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  // Convert markdown-like content to simple HTML
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((block, index) => {
        if (block.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mt-10 mb-4">{block.replace('## ', '')}</h2>;
        }
        if (block.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold mt-8 mb-3">{block.replace('### ', '')}</h3>;
        }
        if (block.startsWith('- ')) {
          const items = block.split('\n').filter(item => item.startsWith('- '));
          return (
            <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
              {items.map((item, i) => (
                <li key={i}>{item.replace('- ', '')}</li>
              ))}
            </ul>
          );
        }
        if (block.match(/^\d\./)) {
          const items = block.split('\n').filter(item => item.match(/^\d\./));
          return (
            <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
              {items.map((item, i) => (
                <li key={i}>{item.replace(/^\d\.\s*\*\*([^*]+)\*\*:/, '$1:')}</li>
              ))}
            </ol>
          );
        }
        if (block.trim()) {
          return <p key={index} className="mb-4 leading-relaxed">{block}</p>;
        }
        return null;
      });
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80 animate-fade-up delay-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">{post.author}</p>
                  <p className="text-xs text-primary-foreground/60">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Lead paragraph */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed border-l-4 border-accent pl-6">
              {post.excerpt}
            </p>

            {/* Article content */}
            <article className="prose-policy text-foreground/80">
              {formatContent(post.content)}
            </article>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Share this article</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={`https://www.facebook.com/sharer/sharer.php`} target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 p-6 bg-muted rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-accent-foreground">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-accent text-sm mb-2">{post.authorRole}</p>
                  <p className="text-muted-foreground text-sm">
                    Expert contributor to PolicyPulse AI, specializing in governance 
                    innovation and civic technology solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map(related => (
                    <Link 
                      key={related.id} 
                      to={`/blog/${related.slug}`}
                      className="group card-elevated p-6"
                    >
                      <Badge variant="outline" className="mb-3">{related.category}</Badge>
                      <h3 className="font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
