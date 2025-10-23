import { create } from "zustand";

export const useUIStore = create((set) => ({
    isMobileMenuOpen: false,
    isFilterOpen: false,
    toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    toggleFilter: () =>
        set((state) => ({ isFilterOpen: !state.isFilterOpen })),
    closeMobileMenu: () => set({ isMobileMenuOpen: false }),
    closeFilter: () => set({ isFilterOpen: false }),
}));