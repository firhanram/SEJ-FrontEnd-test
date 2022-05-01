import BookItem from 'components/BookItem';
import ModalDetailBook from 'components/ModalDetailBook';
import { useBookmarkContext } from 'contexts/bookmarkContext';
import { useState } from 'react';
import { useToggle } from 'utils/hooks/useToggle';

function MyBookmarks() {
    const [selectedBookmark, setSelectedBookmark] = useState(0);
    const { bookmarksState, isBookAdded, removeBookmark, addBookmark } = useBookmarkContext();
    const [open, setOpen] = useToggle();

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10">
            {bookmarksState.length > 0 ? (
                <>
                    <h2 className="text-slate-800 text-3xl font-bold text-center mb-10">My Bookmarks</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                        {bookmarksState.map((book, index) => (
                            <BookItem
                                key={book.id}
                                coverUrl={book.cover_url}
                                title={book.title}
                                authors={book.authors}
                                onClick={() => {
                                    setOpen();
                                    setSelectedBookmark(index);
                                }}
                            />
                        ))}
                    </div>
                    <ModalDetailBook
                        open={open}
                        onClose={setOpen}
                        key={bookmarksState[selectedBookmark].id}
                        coverUrl={bookmarksState[selectedBookmark]?.cover_url}
                        title={bookmarksState[selectedBookmark]?.title}
                        authors={bookmarksState[selectedBookmark]?.authors}
                        sections={bookmarksState[selectedBookmark]?.sections}
                        audioLength={bookmarksState[selectedBookmark]?.audio_length}
                        description={bookmarksState[selectedBookmark]?.description}
                        id={bookmarksState[selectedBookmark]?.id}
                        onBookmark={() => {
                            if (isBookAdded(bookmarksState[selectedBookmark].id)) {
                                setOpen();
                                return removeBookmark(bookmarksState[selectedBookmark].id);
                            }

                            setOpen();
                            return addBookmark(bookmarksState[selectedBookmark]);
                        }}
                    />
                </>
            ) : null}
        </section>
    );
}

export default MyBookmarks;
