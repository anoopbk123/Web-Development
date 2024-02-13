// ReactDOM.render(<h1 style={{backgroundColor:'red'}}>hello</h1>, document.getElementById("root"))
const Header = () =>{
    const headText = 'Hello this is header'
    return (
        <header>
            <h1>{headText}</h1>
        </header>
    )
}

const Main = () =>{
    const mainText = 'this main'
    return (
        <main>{mainText}</main>
    )
}

const Footer = () =>{
    const footerText = 'this footer'
    return (
        <footer>{footerText}</footer>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
    <Header/>
    <Main/>
    <Footer/>
    </div>
)
