let api;
try {
    const { data } = useFetch("https://fakestoreapi.com/products?limit=4");
    api = data;
} catch (error) {
    console.log(error);
}
export const useServices = () => {
    const getServices = async () => api;
    return { getServices };
};