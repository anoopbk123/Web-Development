const root = ReactDOM.createRoot(document.getElementById("root"))
const App = () => {
    const greeting = 'Hello world'
    return (
        <h1>
            {greeting}
        </h1>
    )
}
root.render(
    <App/>
)