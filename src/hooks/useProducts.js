const { useState, useEffect } = require("react");

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://ema-john-server-mauve.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return [products, setProducts];
}

export default useProducts;