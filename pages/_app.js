import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/prism.css";
import styles from "../styles/Home.module.css";

import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   let jsQuestionSt = localStorage.getItem('jsQuestions');
  //   if (!jsQuestionSt){

  //   }
  //     return () => {
  //       second;
  //     };
  // }, [third])

  return (
    <Provider store={store}>
      <div className={`${styles.main} relative`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
