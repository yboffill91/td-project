import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { notify } from '@/lib';
import {
  LANDING_CATEGORIES,
  PLANS,
} from '@/features/tools/landing-generator/model';

interface PlanPurchase {
  id: string;
  categoryId: string;
  planId: string;
  purchaseTime: number;
}

interface CompletedPlan extends PlanPurchase {
  promptData: any;
}

interface FormData {
  [key: string]: any;
}

interface WizardStore {
  purchasedPlans: PlanPurchase[];
  completedPlans: CompletedPlan[];
  addPurchasedPlan: (categoryId: string, planId: string) => void;
  setCompletedPlan: (plan: CompletedPlan) => void;
  selectedCategory: string | null;
  setSelectedCategory: (categoryId: string | null) => void;
  selectedPlan: string | null;
  setSelectedPlan: (planId: string | null) => void;
  paymentMethod: string | null;
  setPaymentMethod: (method: string | null) => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const useWizardStore = create<WizardStore>()(
  persist(
    (set, get) => ({
      purchasedPlans: [],
      completedPlans: [],
      addPurchasedPlan: (categoryId, planId) => {
        const newPurchase = {
          id: `${categoryId}-${planId}-${Date.now()}`,
          categoryId,
          planId,
          purchaseTime: Date.now(),
        };
        set((state) => ({
          purchasedPlans: [...state.purchasedPlans, newPurchase],
        }));

        const category = LANDING_CATEGORIES.find(
          (cat) => cat.id === categoryId
        );
        const plan = PLANS.find((p) => p.id === planId);
        if (category && plan) {
          notify({
            title: 'Plan Purchased',
            message: `You've successfully purchased the ${plan.name} plan for ${category.title} landing pages.`,
            type: 'success',
            persistent: true,
          });
        }
      },
      setCompletedPlan: (completedPlan) =>
        set((state) => ({
          completedPlans: [...state.completedPlans, completedPlan],
          purchasedPlans: state.purchasedPlans.filter(
            (plan) => plan.id !== completedPlan.id
          ),
        })),
      selectedCategory: null,
      setSelectedCategory: (categoryId) =>
        set({ selectedCategory: categoryId }),
      selectedPlan: null,
      setSelectedPlan: (planId) => set({ selectedPlan: planId }),
      paymentMethod: null,
      setPaymentMethod: (method) => set({ paymentMethod: method }),
      formData: {},
      setFormData: (data) => set({ formData: data }),
      currentStep: 0,
      setCurrentStep: (step) => set({ currentStep: step }),
    }),
    {
      name: 'wizard-store',
    }
  )
);
