let api;
try {
    const { data } = useFetch("https://fakestoreapi.com/products?limit=10&sort=desc");
    api = data;
} catch (error) {
    console.log(error);
}
export const useElectronics = () => {
    const getElectronics = async () => api;
    return { getElectronics };
};