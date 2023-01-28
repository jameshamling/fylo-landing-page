import Header from "./components/Header"
import GetStarted from "./components/GetStarted"
import SellingPoints from "./components/SellingPoints"
import StayProductive from "./components/StayProductive"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="app">
            <Header />
            <GetStarted />
            <SellingPoints />
            <StayProductive />
            <Testimonials />
            <Footer />
        </div>
    )
}