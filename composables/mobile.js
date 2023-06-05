let api;
try {
    const { data } = await useFetch("https://fakestoreapi.com/products?limit=8");
    api = data;
} catch (error) {
    console.log(error);
}
export const useMobile = () => {
    const getMobile = async () => api;
    return { getMobile };
};