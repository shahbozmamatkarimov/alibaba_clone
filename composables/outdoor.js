let api;
try {
    const { data } = await useFetch("https://fakestoreapi.com/products?limit=10");
    api = data;
} catch (error) {
    console.log(error);
}
export const useOutdoor = () => {
    const getOutdoor = async () => api;
    return { getOutdoor };
};