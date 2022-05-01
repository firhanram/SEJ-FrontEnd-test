import CategoryList from 'components/CategoryList';
import MyBookmarks from 'components/MyBookmarks';

function Home() {
    return (
        <main className="w-full h-screen">
            <section className="max-w-screen-xl mx-auto py-20">
                <CategoryList />
            </section>
            <MyBookmarks />
        </main>
    );
}

export default Home;
