let api;
try {
    const { data } = await useFetch("https://fakestoreapi.com/products?limit=10&sort=desc");
    api = data;
} catch (error) {
    console.log(error);
}
export const useElectronics = () => {
    const getElectronics = async () => api;
    return { getElectronics };
};