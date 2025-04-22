import { create } from 'zustand';

interface User {
    id: string;
    name: string;
    lastName?: string;
    email: string;
    zipCode?: string;
    state?: string;
    city?: string;
    street?: string;
    houseNumber?: string;
    phoneNumber?: string;
    dob?: string;
    referralCode?: string;
    avatar?: string;
}

interface UserStore {
    data: User | null;
    setUser: (user: User) => void;
}

const useUserStore = create<UserStore>((set) => ({
    data: null,
    setUser: (user: User) => set({ data: user }),
}));

export default useUserStore;
