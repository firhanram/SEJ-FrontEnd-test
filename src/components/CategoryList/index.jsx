import CategoryItem from 'components/CategoryItem';
import CategorySkeleton from 'components/CategorySkeleton';
import { useCategory } from 'features/categories/queries';
import React from 'react';

function CategoryList() {
    const categoryQuery = useCategory();

    const renderCategory = () => {
        if (categoryQuery.isLoading) {
            return <CategorySkeleton />;
        }

        if (categoryQuery.isSuccess) {
            return categoryQuery.data.map((category) => (
                <CategoryItem id={category.id.toString()} key={category.id} name={category.name} />
            ));
        }

        return null;
    };

    return (
        <section>
            <h2 className="text-slate-800 text-3xl font-bold text-center mb-10">Explore Book Categories</h2>
            <div className="flex gap-x-4 gap-y-8 justify-center flex-wrap">{renderCategory()}</div>
        </section>
    );
}

export default CategoryList;
