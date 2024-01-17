import styled from 'styled-components';
import CategoryItem from '../category-item/category-item-component';

const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CategoriesList = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoriesList;
