/* eslint-disable react/no-unescaped-entities */
import Modal from 'components/Modal';
import { toMinutes } from 'utils/helper';
import PropTypes from 'prop-types';
import closeIcon from 'assets/images/icons8-close-50.png';
import { useBookmarkContext } from 'contexts/bookmarkContext';

function ModalDetailBook({
    open,
    onClose,
    id,
    coverUrl,
    title,
    authors,
    sections,
    audioLength,
    description,
    onBookmark,
}) {
    const { isBookAdded } = useBookmarkContext();

    return (
        <Modal open={open} onClose={onClose}>
            <div className="w-11/12 max-w-lg bg-white rounded absolute transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 overflow-y-scroll p-8 h-5/6 ">
                <div className="flex justify-end">
                    <button onClick={onClose} type="button" className="border border-slate-900 rounded-full p-2">
                        <img src={closeIcon} alt="Close Icon" className="w-5" />
                    </button>
                </div>
                <div className="flex justify-center">
                    <img src={coverUrl} alt={title} className="w-80" />
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        type="button"
                        onClick={onBookmark}
                        className={`focus:outline-none p-2 font-semibold ${
                            isBookAdded(id) ? 'bg-slate-800 text-white' : 'text-slate-800 border border-slate-900'
                        }  rounded-md`}
                    >
                        Bookmark this book
                    </button>
                </div>
                <div className="mt-10">
                    <h3 className="text-lg font-bold text-slate-800">{title}</h3>
                    <div className="space-x-2">
                        {authors.map((author, index) => (
                            <span className="font-semibold text-slate-400" key={author}>
                                {(index ? ', ' : '') + author}
                            </span>
                        ))}
                    </div>
                    <div className="py-4 mt-4 flex space-x-3 items-center border-y border-slate-200">
                        <div className="text-sm text-slate-800 font-semibold">{sections.length} Chapters</div>
                        <div className="text-sm text-slate-800 font-semibold">{toMinutes(audioLength)} Minutes</div>
                    </div>
                    <div className="space-y-1 mt-4">
                        <h4 className="font-bold text-slate-800">What's it about?</h4>
                        <p className="text-slate-400">{description}</p>
                    </div>
                    <div className="space-y-2 mt-4">
                        <h4 className="font-bold text-slate-800">What's inside?</h4>
                        <ul className="list-decimal space-y-4 ml-4">
                            {sections.map((section) => (
                                <li className="text-slate-800" key={section.title}>
                                    {section.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

ModalDetailBook.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    coverUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    audioLength: PropTypes.number.isRequired,
    onBookmark: PropTypes.func.isRequired,
};

export default ModalDetailBook;
