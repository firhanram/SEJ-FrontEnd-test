import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'utils/hooks/useLocalStorage';

const BookmarkContext = createContext(null);

export function BookmarkProvider({ children }) {
    const [bookmarks, setBookmarks] = useLocalStorage('bookmarks');
    const [bookmarksState, setBookmarksState] = useState(bookmarks);

    const addBookmark = useCallback(
        (val) => {
            const newBookmarks = [...bookmarks, val];

            setBookmarks(newBookmarks);
            setBookmarksState(newBookmarks);
        },
        [setBookmarks, setBookmarksState]
    );

    const removeBookmark = useCallback(
        (id) => {
            const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
            setBookmarks(newBookmarks);
            setBookmarksState(newBookmarks);
        },
        [setBookmarks, setBookmarksState]
    );

    const isBookAdded = useCallback(
        (id) => {
            const findBookmark = bookmarksState.filter((bookmark) => bookmark.id === id);

            return findBookmark.length > 0;
        },
        [bookmarks]
    );

    const value = useMemo(
        () => ({ bookmarksState, addBookmark, removeBookmark, isBookAdded }),
        [bookmarksState, addBookmark, removeBookmark, isBookAdded]
    );

    return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>;
}

export const useBookmarkContext = () => useContext(BookmarkContext);

BookmarkProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
