import { create } from 'zustand'

type Page = 'ask' | 'yes' | 'no' | 'food' | 'activity' | 'result';
type Food = 'indian' | 'italian' | 'mexican' | 'asian' | 'brazilian' | 'burmese' | null;
type Activity = 'movie' | 'game' | 'chill' | 'walk' | 'park' | null;

// Replace this URL with your Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;

type State = {
  page: Page;
  setPage: (page: Page) => void;
  food: Food;
  setFood: (food: Food) => void;
  activity: Activity;
  setActivity: (activity: Activity) => void;
  submitSelections: () => Promise<void>;
  isSubmitting: boolean;
};

export const useStore = create<State>((set, get) => ({
  page: 'ask',
  setPage: (page: Page) => set({ page }),
  food: null,
  setFood: (food: Food) => set({ food }),
  activity: null,
  setActivity: (activity: Activity) => set({ activity }),
  isSubmitting: false,
  submitSelections: async () => {
    const { food, activity } = get();
    
    set({ isSubmitting: true });
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ food, activity }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      const result = await response.json();
      if (result.status !== 'success') {
        throw new Error(result.message || 'Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting selections:', error);
      throw error;
    } finally {
      set({ isSubmitting: false });
    }
  },
}))
