let api;
try {
    const { data } = useFetch("https://fakestoreapi.com/products?limit=5&sort=desc");
    api = data;
} catch (error) {
    console.log(error);
}
export const useOffers = () => {
    const getOffers = async () => api;
    return { getOffers };
};