import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/prism.css";
import styles from "../styles/Home.module.css";

import { Provider } from "react-redux";
import { store } from "../store/store";
import Inspiration from "../components/inspiration/Inspiration";
let initialRun = true;
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={`${styles.main} relative h-screen`}>
        <Header />
        <Component {...pageProps} />
        <Inspiration />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
