'use client';
import React, { useState } from 'react';
import {
  MarketingServices,
  SEOServices,
  plans,
} from '@/features/pricing/constants';
import {
  Calculator,
  Check,
  ChevronDown,
  ChevronUp,
  DollarSign,
  MessagesSquare,
  Timer,
} from 'lucide-react';
import { HeaderBadge, ShimmerButton } from '@/components/ui';
import { ToolsTable } from './ToolsTable';
import { ServiceDetailTable } from './ServiceDetailTable';

export const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  );
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const toggleService = (serviceName: string) => {
    setExpandedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((name) => name !== serviceName)
        : [...prev, serviceName]
    );
  };

  return (
    <section className='pb-10 mt-16'>
      <div className='container mx-auto px-4'>
        {/* Header Section */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <HeaderBadge
            heading='Complete Growth Solutions'
            icon={DollarSign}
            variant='secondary'
          />

          <h2 className='text-4xl font-bold mb-6'>
            Choose Your Digital Growth Plan
          </h2>
          <p className='text-xl text-foreground/70 mb-8'>
            All-in-one digital growth packages combining tools, SEO, and
            marketing services.
          </p>

          {/* Billing Toggle */}
          <div className='flex items-center justify-center gap-4 mb-8'>
            <span
              className={`text-sm font-medium ${
                billingCycle === 'monthly'
                  ? 'text-foreground'
                  : 'text-foreground/50'
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle((prev) =>
                  prev === 'monthly' ? 'yearly' : 'monthly'
                )
              }
              className='relative inline-flex h-6 w-11 items-center rounded-full bg-card'
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-foreground transition ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                billingCycle === 'yearly'
                  ? 'text-foreground'
                  : 'text-foreground/50'
              }`}
            >
              Annual
              <span className='ml-1.5 inline-flex items-center rounded-full bg-secondary-green/10 px-2 py-0.5 text-xs font-medium text-secondary-green'>
                Save 10%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16'>
          {plans.map(({ name, price, description, features, popular }) => (
            <div
              key={name}
              className={`relative rounded-2xl shadow-lg ${
                popular
                  ? 'border-2 border-primary -mt-5'
                  : 'border-card/70 border '
              } bg-background`}
            >
              {popular && (
                <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-br from-blue-300 via-primary to-secondary-blue px-3 py-2 text-sm font-medium text-primary-foreground text-center'>
                  Most Popular
                </div>
              )}

              <div className='p-8'>
                <h3 className='text-xl font-semibold text-foreground mb-2'>
                  {name}
                </h3>
                <p className='text-foreground/70 mb-6'>{description}</p>

                <div className='flex items-baseline mb-8'>
                  {!price ? (
                    <span className='text-4xl font-bold text-foreground'>
                      Custom
                    </span>
                  ) : (
                    <>
                      <span className='text-4xl font-bold text-foreground'>
                        {billingCycle === 'monthly'
                          ? price.monthly
                          : price.yearly}
                      </span>
                      <span className='ml-1 text-foreground/50'>
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    </>
                  )}
                </div>

                <ShimmerButton
                  className='w-full mb-8'
                  variant={popular ? 'primary' : 'secondary'}
                >
                  Get Started
                </ShimmerButton>

                {/* Feature Categories */}
                {features.map((category) => (
                  <div key={category.category} className='mb-6'>
                    <h4 className='text-sm font-semibold text-foreground mb-3'>
                      {category.category}
                    </h4>
                    <ul className='space-y-3'>
                      {category.items.map((feature) => (
                        <li key={feature} className='flex items-start gap-3'>
                          <Check className='w-5 h-5 text-green-500 shrink-0 mt-0.5' />
                          <span className='text-sm text-gray-600 dark:text-gray-300'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <ToolsTable />

        {/* Detailed Services Section */}
        <div className='max-w-7xl mx-auto mt-16'>
          <h3 className='text-2xl font-bold mb-2 text-center text-foreground'>
            Detailed Service Breakdown
          </h3>
          <p className='text-center text-foreground/70 mb-8'>
            Click on each service below to view detailed features and
            comparisons
          </p>

          {/* SEO Services */}
          <div className='mb-12'>
            <h4 className='text-xl font-semibold mb-6 text-foreground'>
              SEO Services
            </h4>
            <div className='space-y-4'>
              {SEOServices.map(({ name, icon: IconElement, details }) => (
                <div key={name}>
                  <button
                    onClick={() => toggleService(name)}
                    className='w-full flex items-center justify-between p-4 bg-card/50 rounded-lg shadow-sm '
                  >
                    <div className='flex items-center gap-3'>
                      <IconElement className='w-5 h-5' />
                      <span className='font-medium text-foreground'>
                        {name}
                      </span>
                    </div>
                    {expandedServices.includes(name) ? (
                      <ChevronUp className='w-5 h-5' />
                    ) : (
                      <ChevronDown className='w-5 h-5' />
                    )}
                  </button>
                  {expandedServices.includes(name) && (
                    <ServiceDetailTable
                      service={{ name, icon: IconElement, details }}
                      details={details}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Services */}
          <div>
            <h4 className='text-xl font-semibold mb-6 text-foreground'>
              Marketing Services
            </h4>
            <div className='space-y-4'>
              {MarketingServices.map(({ name, icon: IconElement, details }) => (
                <div key={name}>
                  <button
                    onClick={() => toggleService(name)}
                    className='w-full flex items-center justify-between p-4 bg-card/50 rounded-lg shadow-sm '
                  >
                    <div className='flex items-center gap-3'>
                      <IconElement className='w-5 h-5' />
                      <span className='font-medium text-foreground'>
                        {name}
                      </span>
                    </div>
                    {expandedServices.includes(name) ? (
                      <ChevronUp className='w-5 h-5' />
                    ) : (
                      <ChevronDown className='w-5 h-5' />
                    )}
                  </button>
                  {expandedServices.includes(name) && (
                    <ServiceDetailTable
                      service={{ name, icon: IconElement, details }}
                      details={details}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className='max-w-7xl mx-auto mt-20 text-center'>
          <div className='bg-gradient-to-b from-primary/10 to-background rounded-2xl p-8'>
            <h3 className='text-2xl font-bold text-foreground mb-4'>
              Need a Custom Plan?
            </h3>

            <p className='text-foreground/70 mb-8 max-w-2xl mx-auto'>
              Looking for specific options, different volumes, or a special
              combination of services? Our team can create a package that fits
              your exact needs and budget.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto'>
              <div className='flex flex-col items-center p-4 rounded-xl bg-card shadow-sm'>
                <Calculator className='w-6 h-6 text-primary mb-2' />
                <span className='text-sm font-medium text-foreground'>
                  Custom Quote
                </span>
              </div>

              <div className='flex flex-col items-center p-4 rounded-xl bg-card shadow-sm'>
                <Timer className='w-6 h-6 text-primary mb-2' />
                <span className='text-sm font-medium text-foreground'>
                  24h Response
                </span>
              </div>

              <div className='flex flex-col items-center p-4 rounded-xl bg-card shadow-sm'>
                <MessagesSquare className='w-6 h-6 text-primary mb-2' />
                <span className='text-sm font-medium text-foreground'>
                  Free Consultation
                </span>
              </div>
            </div>

            <ShimmerButton variant='primary' className='px-8 py-3'>
              Get Custom Pricing
            </ShimmerButton>

            <p className='text-sm text-foreground/50 dark:text-gray-400 mt-4'>
              No commitment - Guaranteed response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
