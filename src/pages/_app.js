import "../styles/globals.css";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import Header from "@components/Header";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-241559907-1" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date()); 
                gtag('config', 'UA-241559907-1');
                `}
            </Script>
            <Header />

            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default MyApp;
