let api;
try {
    const { data } = await useFetch("https://fakestoreapi.com/products?limit=4");
    api = data;
} catch (error) {
    console.log(error);
}
export const useServices = () => {
    const getServices = async () => api;
    return { getServices };
};