'use client';
import { BookAIcon } from 'lucide-react';
import React from 'react';
import { steps, stepColors, useAutoProgress } from '@/features/landing/utils';
import { DetailCard, TimelineIcon, TimelineLine } from '@/features/landing';
import { Clock, CheckSquare, Package } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { HeaderBadge } from '@/components/ui';

export function GrowthJourney() {
  const { currentStep, goToStep } = useAutoProgress();

  return (
    <div className='w-full container mx-auto sm:px-4 sm:py-12 '>
      <div className='text-center mb-12'>
        <HeaderBadge
          heading='Growth Journey'
          variant='secondaryOrange'
          icon={BookAIcon}
        />
        <h1 className='text-4xl font-bold mb-4'>
          Your Path to <span className='gradient-text'>Digital Excellence</span>
        </h1>
        <p className='text-foreground/70'>
          Follow our proven process to transform your digital presence
        </p>
      </div>

      {/* Timeline */}
      <div className='flex items-center justify-between mb-20 px-8'>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <button
              onClick={() => goToStep(index)}
              className='relative focus:outline-none group'
            >
              <TimelineIcon
                icon={step.icon}
                index={index}
                isActive={currentStep === index}
                isCompleted={currentStep > index}
                title={step.title}
              />
              <div
                className={`
                absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                w-1 h-1 rounded-full transition-all duration-300
                ${
                  currentStep === index
                    ? `${stepColors[index]}`
                    : 'bg-transparent'
                }
              `}
              />
            </button>
            {index < steps.length - 1 && (
              <TimelineLine index={index} isActive={currentStep > index} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Current Step Details */}
      <div className='text-center mb-12'>
        <div
          className={`
            inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 
            transform transition-all duration-500 ease-in-out
            ${stepColors[currentStep]}
          `}
        >
          <TimelineIcon
            icon={steps[currentStep].icon}
            index={currentStep}
            isActive={true}
            isCompleted={true}
          />
        </div>
        <h2 className='text-3xl font-bold mb-4'>{steps[currentStep].title}</h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          {steps[currentStep].description}
        </p>
      </div>

      {/* Detail Cards */}
      <AnimatePresence>
        <div className='grid md:grid-cols-3 gap-1 max-w-[930px] mx-auto'>
          <DetailCard
            title='Duration'
            icon={<Clock className='size-5 text-foreground' />}
            content={steps[currentStep].details.duration}
            color={stepColors[currentStep]}
          />
          <DetailCard
            title='Key Points'
            icon={<CheckSquare className='size-5 text-foreground' />}
            content={steps[currentStep].details.keyPoints}
            color={stepColors[currentStep]}
          />
          <DetailCard
            title='Deliverables'
            icon={<Package className='size-5 text-foreground' />}
            content={steps[currentStep].details.deliverables}
            color={stepColors[currentStep]}
          />
        </div>
      </AnimatePresence>
    </div>
  );
}
