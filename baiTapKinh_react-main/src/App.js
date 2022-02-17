import logo from "./logo.svg";
import "./App.css";
import BTHeader from "./Components/BaiTapThucHanhLayOut/BTHeader";
import Btcontent from "./Components/BaiTapThucHanhLayOut/Btcontent";
import BTProductList from "./Components/BaiTapThucHanhLayOut/BTProductList";
import BTFooter from "./Components/BaiTapThucHanhLayOut/BTFooter";
import Product from "./Components/Props/BaiTapProp/Product";
import BaiTapKinh from "./Components/BaiTapKinh/BaiTapKinh";
import Demo from "./Components/demo/demo";

function App() {
  return (
    <div className="App">
      {/* <BaiTapKinh/> */}
      <Demo/>
    </div>
  );
}

export default App;
