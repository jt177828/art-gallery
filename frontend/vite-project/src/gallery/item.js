import {create} from 'zustand';

export const useItemGallery = create((set) => ({
    items: [],
    setItems: (items) => set({ items }),
    createItems: async (newItem) => {
        if (!newItem.name || !newItem.year || !newItem.image) {
            return {success:false, message:"Please fill in all fields"}
        }
        const res = await fetch("/api/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body:JSON.stringify(newItem)
        })
    const data = await res.json();
    set((state => ({items:[... state.items, data.data]})))
    return {success:true, message:"Success"};
    }
}));