import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
