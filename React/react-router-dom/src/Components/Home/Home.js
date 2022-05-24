function Home() {
    let content = 'Home';
    return (
        <div className='home'>
            <h1>Welcome to my {content} page...</h1>
            <p>This paragraph is from {content} Component</p>
        </div>
    )
}

export default Home;