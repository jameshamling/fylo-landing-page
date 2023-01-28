import quote from "../images/bg-quotes.png"
import person1 from "../images/profile-1.jpg"
import person2 from "../images/profile-2.jpg"
import person3 from "../images/profile-3.jpg"

export default function Testimonials() {
    return (
        <div className="testimonials">

            <div className="testimonials__item">
                {/* <img src={quote} alt="#" className="testimonials__quote-icon" /> */}
                <p className="testimonials__item__body">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                become a well-oiled collaboration machine.</p>

                <div className="testimonials__item__person">
                    <img src={person1} alt="#" className="person__img" />
                    <p className="person__name">Satish Patel</p>
                    <p className="person__role">Founder & CEO, Huddle</p>
                </div>
                
            </div>
            <div className="testimonials__item">
                <p className="testimonials__item__body">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                become a well-oiled collaboration machine.</p>

                <div className="testimonials__item__person">
                <img src={person2} alt="#" className="person__img" />
                <p className="person__name">Bruce McKenzie</p>
                <p className="person__role">Founder & CEO, Huddle</p>
                </div>
            </div>
            <div className="testimonials__item">
                <p className="testimonials__item__body">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                become a well-oiled collaboration machine.</p>

                <div className="testimonials__item__person">
                <img src={person3} alt="#" className="person__img" />
                <p className="person__name">Iva Boyd</p>
                <p className="person__role">Founder & CEO, Huddle</p>
                </div>
            </div>
        </div>
    )
}