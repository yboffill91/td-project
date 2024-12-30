'use client';
import { useState, useEffect, useCallback } from 'react';
import { steps } from '@/features/landing/utils';

export const useAutoProgress = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNextStep = useCallback(() => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  }, []);

  const goToStep = useCallback((step: number) => {
    setCurrentStep(step);
    setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(goToNextStep, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, goToNextStep]);

  return {
    currentStep,
    goToStep,
    isAutoPlaying,
    setIsAutoPlaying,
  };
};
