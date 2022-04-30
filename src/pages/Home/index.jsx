import CategoryList from 'components/CategoryList';

function Home() {
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center">
            <div className="max-w-screen-xl mx-auto py-20">
                <CategoryList />
            </div>
        </main>
    );
}

export default Home;
