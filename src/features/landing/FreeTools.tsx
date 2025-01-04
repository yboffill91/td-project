'use client';

import { useState } from 'react';
import {
  Search,
  Globe,
  TrendingUp,
  Calculator,
  MessageSquare,
  GitBranch,
  Building2,
  Pencil,
  Bot,
  Layout,
  MapPin,
} from 'lucide-react';
import { HeaderBadge, MagicCard, ShimmerButton } from '@/components/ui';

export function FreeTools() {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const tools = [
    {
      id: 'calculator',
      name: 'Web Cost Calculator',
      description:
        'Get instant, accurate website cost estimates based on your specific needs.',
      icon: <Calculator className='w-4 h-4 text-primary-foreground' />,
      status: 'live',
      color: 'bg-blue-500',
      metrics: [
        { label: 'Accuracy Rate', value: '98%' },
        { label: 'Time Saved', value: '4h' },
      ],
    },
    {
      id: 'seo-scout',
      name: 'SEO Scout',
      description:
        'Analyze and optimize your website for better search engine rankings.',
      icon: <Search className='w-4 h-4 text-primary-foreground' />,
      status: 'live',
      color: 'bg-green-500',
      metrics: [
        { label: 'Ranking Boost', value: '+45%' },
        { label: 'Issues Found', value: '23+' },
      ],
    },
    {
      id: 'website-builder',
      name: 'Website Builder',
      icon: <Layout className='w-4 h-4 text-primary-foreground' />,
      status: 'soon',
      color: 'bg-orange-500',
    },
    {
      id: 'gmb',
      name: 'GMB Manager',
      icon: <MapPin className='w-4 h-4 text-primary-foreground' />,
      status: 'soon',
      color: 'bg-red-500',
    },
    {
      id: 'ai-chat',
      name: 'AI Chat',
      icon: <MessageSquare className='w-4 h-4 text-primary-foreground' />,
      status: 'soon',
      color: 'bg-purple-500',
    },
    {
      id: 'sales-funnel',
      name: 'Sales Funnel',
      icon: <GitBranch className='w-4 h-4 text-primary-foreground' />,
      status: 'soon',
      color: 'bg-pink-500',
    },
    {
      id: 'crm',
      name: 'Business CRM',
      icon: <Building2 className='w-4 h-4 text-primary-foreground' />,
      status: 'soon',
      color: 'bg-indigo-500',
    },
    {
      id: 'writer',
      name: 'AI Writer',
      icon: <Pencil className='w-4 h-4 text-primary-foreground' />,
      status: 'soon',
      color: 'bg-cyan-500',
    },
  ];

  return (
    <section className='py-32 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 container mx-auto'>
      <div className='flex flex-col xl:flex-row items-center justify-between gap-12'>
        {/* Left Column - Content */}
        <div className='relative text-center xl:text-left'>
          {/* Badge */}
          <HeaderBadge
            heading=' AI-Powered Growth'
            icon={Bot}
            variant='secondaryOrange'
          />

          {/* Main Content */}
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
            <span className='text-foreground'>All Free tools you</span>{' '}
            <span className='gradient-text'>need to succeed.</span>
          </h2>

          <p className='text-xl text-foreground/70 mb-8'>
            Our AI quietly works in the background, analyzing your business
            needs and providing actionable insights. The best part? You&apos;ll
            forget it&apos;s even there until you need it.
          </p>

          {/* Tools Grid */}
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-6xl mx-auto'>
            {tools.map((tool) => (
              <ShimmerButton
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className='flex items-center jus-center !px-1 !gap-1'
                variant='orange'
              >
                <div className='p-1.5 rounded-md bg-background/10'>
                  {tool.icon}
                </div>
                <span className='text-[.7rem] font-medium'>{tool.name}</span>
              </ShimmerButton>
            ))}
          </div>
        </div>

        {/* Right Column - Interactive Preview */}
        <MagicCard
          gradientColor='hsl(6 100% 69%)'
          gradientSize={150}
          gradientOpacity={0.5}
          className='max-w-3xl'
        >
          <div className='md:grid md:grid-cols-12 flex flex-col md:grid-rows-3 row-auto p-1 gap-1 md:p-6 md:gap-6 bg-card/10 backdrop-filter backdrop-blur-3xl rounded-xl shadow-lg w-full '>
            <div className='bg-background/50 backdrop-blur-md rounded-xl shadow-lg p-6 md:col-span-7 md:row-span-2'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='p-3 bg-orange-500/10 rounded-xl'>
                  <Bot className='w-5 h-5 text-secondary-orange' />
                </div>
                <div>
                  <h3 className='font-medium text-card-foreground'>
                    AI Assistant
                  </h3>
                  <p className='text-sm text-card-foreground/50'>
                    Processing data...
                  </p>
                </div>
              </div>
              <div className='space-y-2'>
                <div className='h-2 bg-secondary-orange/20 rounded-full w-full animate-pulse' />
                <div className='h-2 bg-secondary-orange/10 rounded-full w-3/4 animate-pulse' />
              </div>
              <div className='space-y-2 mt-2'>
                <div className='h-2 bg-secondary-orange/20 rounded-full w-full animate-pulse' />
                <div className='h-2 bg-secondary-orange/10 rounded-full w-3/4 animate-pulse' />
              </div>
            </div>
            <div className='  bg-background/50 backdrop-blur-sm rounded-xl shadow-lg p-4  border border-primary sm:col-span-5'>
              <div className='flex items-center gap-3'>
                <div className='p-2 bg-primary/10 rounded-lg'>
                  <Globe className='w-4 h-4 text-primary' />
                </div>
                <div>
                  <p className='text-sm font-medium text-accent-foreground'>
                    Analytics
                  </p>
                  <div className='flex items-center gap-1'>
                    <span className='text-xs text-primary'>+127%</span>
                    <span className='text-xs text-accent-foreground/50'>
                      conversion rate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=' bg-background/50 backdrop-blur-sm rounded-xl shadow-lg p-4  border border-secondary-green sm:col-span-5'>
              <div className='flex items-center gap-3'>
                <div className='p-2 bg-secondary-green/10 rounded-lg'>
                  <TrendingUp className='w-4 h-4 text-secondary-green' />
                </div>
                <div>
                  <p className='text-sm font-medium text-card-foreground'>
                    Performance
                  </p>
                  <p className='text-xs text-card-foreground/50'>
                    All metrics on track
                  </p>
                </div>
              </div>
            </div>

            <div className=' bg-background/50 backdrop-blur-sm rounded-xl shadow-lg p-3 sm:col-span-5  border border-secondary-green'>
              <div className='flex items-center gap-2'>
                <div className='p-1.5 bg-secondary-green/10 rounded-lg'>
                  <Globe className='w-3 h-3 text-secondary-green' />
                </div>
                <div>
                  <p className='text-xs font-medium text-card-foreground'>
                    All Systems
                  </p>
                  <p className='text-[10px] text-secondary-green'>
                    Operational
                  </p>
                </div>
              </div>
            </div>

            <div className=' bg-background/50 backdrop-blur-sm rounded-xl shadow-lg p-4  sm:col-span-7 row-span-2'>
              <div className='flex items-center gap-3'>
                <div className='p-2 bg-primary/10 rounded-lg'>
                  <Search className='w-4 h-4 text-primary' />
                </div>
                <div>
                  <p className='text-sm font-medium text-card-foreground'>
                    SEO Progress
                  </p>
                  <p className='text-xs text-card-foreground/50'>
                    892 keywords ranked on page 1
                  </p>
                </div>
              </div>
              <div className='flex gap-2 mt-4 '>
                <div className='h-5 bg-primary/20 rounded-full  animate-pulse w-20' />
                <div className='h-5 bg-primary/20 rounded-full animate-pulse w-8' />
                <div className='h-5 bg-primary/20 rounded-full  animate-pulse w-32' />
                <div className='h-5 bg-primary/20 rounded-full  animate-pulse w-12' />
                <div className='h-5 bg-primary/20 rounded-full  animate-pulse w-20' />
              </div>
              <div className='flex gap-2 mt-4 '>
                <div className='h-5 bg-primary/20 rounded-full  animate-pulse w-12' />
                <div className='h-5 bg-primary/20 rounded-full animate-pulse w-20' />
                <div className='h-5 bg-primary/20 rounded-full  animate-pulse w-10' />
                <div className='h-5 bg-primary/20 rounded-full  animate-pulse w-12' />
                <div className='h-5 bg-primary/20 rounded-full  animate-pulse w-20' />
              </div>
            </div>

            <div className='bg-background/50 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:col-span-5 border border-secondary-orange'>
              <div className='flex items-center gap-3'>
                <div className='p-2 bg-orange-500/10 rounded-lg'>
                  <TrendingUp className='w-4 h-4 text-secondary-orange' />
                </div>
                <div>
                  <p className='text-sm font-medium text-card-foreground'>
                    Growth
                  </p>
                  <p className='text-xs text-card-foreground/50'>
                    +45% increase this month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MagicCard>
      </div>
    </section>
  );
}
