/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
import BookItem from 'components/BookItem';
import BookSkeleton from 'components/BookSkeleton';
import SearchBooksInput from 'components/SearchBooksInput';
import { useBooksByCategory } from 'features/books/queries';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDebounce } from 'utils/hooks/useDebounce';
import notFoundImg from 'assets/images/not-found.png';
import img404 from 'assets/images/404.png';

function BookLists() {
    const [page] = useState(1);
    const [booksResult, setBooksResult] = useState([]);
    const [querySearch, setQuerySearch] = useState('');

    const debounceSearch = useDebounce(querySearch, 500);

    const paramsUrl = useParams();

    const booksQuery = useBooksByCategory({
        categoryId: paramsUrl.categoryID,
        params: {
            categoryId: paramsUrl.categoryID,
            page,
            size: 20,
        },
        onSuccess: (res) => {
            setBooksResult(res.data);
        },
    });

    const handleSearchChange = (e) => setQuerySearch(e.target.value);

    useEffect(() => {
        if (booksQuery.isSuccess) {
            if (debounceSearch) {
                const results = booksQuery.data.data.filter(
                    (book) =>
                        book.title.toLowerCase().includes(debounceSearch.toLowerCase()) ||
                        book.authors.filter((author) => author.toLowerCase().includes(debounceSearch.toLowerCase()))
                            .length > 0
                );
                return setBooksResult(results);
            }

            return setBooksResult(booksQuery.data.data);
        }
    }, [debounceSearch]);

    const renderBooks = () => {
        if (booksQuery.isLoading) {
            return (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <BookSkeleton />
                </div>
            );
        }

        if (booksQuery.isSuccess) {
            if (booksResult?.length > 0 || booksQuery.data.data.length > 0) {
                return (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {booksResult?.map((book) => (
                            <BookItem
                                key={book.id}
                                coverUrl={book.cover_url}
                                title={book.title}
                                authors={book.authors}
                            />
                        ))}
                    </div>
                );
            }
            return (
                <div className="flex items-center justify-center flex-col">
                    <img src={notFoundImg} alt="Not Found" className="w-96" />
                    <p className="text-xl font-bold text-slate-800 text-center mt-4">Book Not Found</p>
                </div>
            );
        }

        if (booksQuery.isError) {
            return (
                <div className="flex items-center justify-center flex-col">
                    <img src={img404} alt="Not Found" className="w-96" />
                    <h3 className="text-2xl font-bold text-slate-800 text-center mt-4">
                        {booksQuery.error.response.status}
                    </h3>
                    <p className="text-slate-800 text-xl text-center">Something Went Wrong</p>
                </div>
            );
        }

        return null;
    };

    return (
        <>
            <SearchBooksInput onChange={handleSearchChange} />
            <section className="my-10">
                <div className="max-w-screen-xl mx-auto py-20 px-4">{renderBooks()}</div>
            </section>
        </>
    );
}

export default BookLists;
