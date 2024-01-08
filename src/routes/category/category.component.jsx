import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import './category.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className='category-route-container'>
      <h2 className='title'>{category}</h2>
      <div className='category-route-products'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
