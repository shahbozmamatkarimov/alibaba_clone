let api;
try {
    const { data } = await useFetch("https://fakestoreapi.com/products?limit=5&sort=desc");
    api = data;
} catch (error) {
    console.log(error);
}
export const useOffers = () => {
    const getOffers = async () => api;
    return { getOffers };
};