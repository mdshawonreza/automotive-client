

const Header = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/CJkkLtB/banner1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-slate-50">Get quality leads you can trust</h1>
                    <p className="mb-5">Your premier source for automotive enthusiasts, offering the latest news, reviews, and tips to fuel your passion for everything on wheels.</p>
                    <button className="btn btn-outline btn-success">See your hopeful dreams</button>
                </div>
            </div>
        </div>
    );
};

export default Header;