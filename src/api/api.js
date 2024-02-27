

const url = "https://api.pujakaitem.com/api/products"

export const getAllProducts = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
};

export const getSingleProduct = async (url) =>{
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error('Failed to fetch single product')
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.error('Error fetching single product:',error);
        return null
    }
};

