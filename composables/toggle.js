export const useToggle = () => {
    const toggle1 = ref(true);
    const modalToggle = () => {
        toggle1.value = !toggle.value1
    }
    const toggle = computed(()=>toggle1)
    return { toggle, modalToggle };
};