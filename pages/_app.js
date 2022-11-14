import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/prism.css";
import styles from "../styles/Home.module.css";

import { Provider } from "react-redux";
import { store } from "../store/store";
let initialRun = true;
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={`${styles.main} relative h-screen`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
