let api;
try {
    const { data } = useFetch("https://fakestoreapi.com/products?limit=8");
    api = data;
} catch (error) {
    console.log(error);
}
export const useMobile = () => {
    const getMobile = async () => api;
    return { getMobile };
};