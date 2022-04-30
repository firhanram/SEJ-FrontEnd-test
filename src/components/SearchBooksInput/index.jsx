function SearchBooksInput() {
    return (
        <div className="px-4">
            <div className="w-full max-w-xl mx-auto transform -translate-y-1/2 ">
                <form className="w-full">
                    <input
                        className="w-full border-transparent shadow-md p-6 rounded-md focus:outline-none t focus:border-slate-900"
                        placeholder="Search Books..."
                    />
                </form>
            </div>
        </div>
    );
}

export default SearchBooksInput;
