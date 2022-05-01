import NavigateHome from 'components/NavigateHome';

function Header() {
    return (
        <div className="bg-slate-900 w-full h-32">
            <div className="max-w-screen-xl mx-auto px-4 py-6">
                <NavigateHome />
            </div>
        </div>
    );
}

export default Header;
