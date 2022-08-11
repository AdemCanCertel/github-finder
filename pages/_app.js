import '../styles/global.css'

function MyApp({ Component, pageProps }) {
    return (
        <main>
            <Component {...pageProps} />
        </main>
    )
}
export default MyApp