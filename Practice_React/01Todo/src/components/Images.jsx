import { useEffect, useState } from "react";

const Images = () => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();

    if (data && data.products)
      setProducts(data.products)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = (selectedPage) => {
    if(
      selectedPage>=1 && 
      selectedPage<= products.length/10 &&
      selectedPage!=page
    )
    setPage(selectedPage);
  };

  return (
    <>
      {products.length > 0 && <div className="products">
        {
          products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products-single key={prod-id}">
                <img src={prod.images} alt={prod.title} />
                <span>{prod.title}</span>
              </span>);
          })
        }
      </div>
      }

      {/* for declaring products page */}
      {
        products.length > 0 &&
        <div className="pagination">
          <span className={page>1 ?} onClick={()=>handlePageChange(page-1)}>◀</span>
          {
            [...Array(products.length / 10)].map((_, i) => {
              return <span className={page===i+1 ? "pagination-selected":" "} onClick={() => handlePageChange(i + 1)} key={i}>{i + 1}</span>
            })
          }
          <span onClick={()=> handlePageChange(page+1)}>▶</span>
        </div>
      }
    </>
  )
};

export default Images

