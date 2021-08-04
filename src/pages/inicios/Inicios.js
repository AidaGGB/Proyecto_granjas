import Header from '../../components/header/Header';
import Login from '../../components/login/Login';
import Footer from '../../components/footer/Footer';
import {db} from '../../firebase';

function Inicios () {
 
    return (
      <div>
        <Header/>
        <Login />
        <Footer />
      </div>
    );
  }
  
  export default Inicios;
  