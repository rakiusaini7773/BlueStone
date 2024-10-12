import Banner from "./component/core/BannerRavindra";
import CardsComponent from "./component/core/CardsComponentsRavindra";
import GiftSection from "./component/core/GiftSectionRavindra";
import DesignLedJewellery from "./component/core/JewelleryRavindra";
import JewelryGrid from "./component/core/JewelryGridRavindra";
import SliderComponent from "./component/core/SliderComponentRavindra";
import VideoSection from "./component/core/VideoSectionRavindra";
import EditorialGrid from "./component/core/EditorialGrid"
import BlueStonePromise from "./component/core/BlueStonePromiseRavindra";
import NewsCardsComponent from "./component/core/NewsCardsComponentRavindra";
import Footer from "./component/common/footerRavindra";
import JewelrySearches from "./component/common/JewelrySearchesRavindra";

export default function App() {
  return (
  <>
<JewelryGrid/>
<Banner/>
<SliderComponent/>
<CardsComponent/>
<GiftSection/>
<DesignLedJewellery/>
<VideoSection/>
<EditorialGrid/>
<BlueStonePromise/>
<NewsCardsComponent/>
<Footer/>
<JewelrySearches/>
  </>
  )
}