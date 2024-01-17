import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const CategoryProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

const Title = styled.h2`
  font-size: 43px;
  margin-bottom: 25px;
  text-transform: uppercase;
  text-align: center;
`;

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div>
      <Title>{category}</Title>
      <CategoryProductsContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryProductsContainer>
    </div>
  );
};

export default Category;
