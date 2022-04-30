/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
import BookItem from 'components/BookItem';
import BookSkeleton from 'components/BookSkeleton';
import SearchBooksInput from 'components/SearchBooksInput';
import { useBooksByCategory } from 'features/books/queries';
import { useState } from 'react';
// import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function BookLists() {
    const [page] = useState(1);
    const [booksResult, setBooksResult] = useState([]);

    const paramsUrl = useParams();

    const booksQuery = useBooksByCategory({
        categoryId: paramsUrl.categoryID,
        params: {
            categoryId: paramsUrl.categoryID,
            page,
        },
        onSuccess: (res) => {
            setBooksResult(res.data);
        },
    });

    return (
        <>
            <SearchBooksInput />
            <section className="my-16">
                <div className="max-w-screen-xl mx-auto py-20 px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {booksQuery.isLoading ? (
                            <BookSkeleton />
                        ) : booksQuery.isSuccess ? (
                            booksResult.map((book) => (
                                <BookItem
                                    key={book.id}
                                    coverUrl={book.cover_url}
                                    title={book.title}
                                    authors={book.authors}
                                />
                            ))
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BookLists;
