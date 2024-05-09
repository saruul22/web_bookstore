class FooterComponent extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        //implementation
        this.innerHTML=`
        <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>Quick links</h3>
                <a href="#"> <i class="fas fa-arrow-right"></i> Бидний тухай </a>
                <a href="#"> <i class="fas fa-arrow-right"></i> Салбаруудын мэдээлэл </a>
            </div>

            <div class="box">
                <h3>Extra links</h3>
                <a href="#"> <i class="fas fa-arrow-right"></i> Үйлчилгээний нөхцөл </a>
                <a href="#"> <i class="fas fa-arrow-right"></i> Түгээмэл асуултууд </a>
                <a href="#"> <i class="fas fa-arrow-right"></i> Төлбөр төлөлт </a>
                <a href="#"> <i class="fas fa-arrow-right"></i> Буцаалт </a>
                <a href="#"> <i class="fas fa-arrow-right"></i> Хүргэлт </a>
            </div>

            <div class="box">
                <h3>Contact info</h3>
                <a href="#"> <i class="fas fa-phone"></i> 80465520 </a>
                <a href="#"><i class="fas fa-envelope"></i> bookee@gmail.com </a>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-twitter"></a>
                </div>
            </div>

            <div class="box">
                <h3>Address</h3>
                <a href="#"> <i class="fas fa-map-pin"></i> Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот, Монгол улс NewHorizon center - 401 тоот </a>
            </div>        
        </div>

        <div class="credit"> <span>bookee.mn</span> @2024 бүх эрх хуулиар хамагаалагдсан болно </div>
    </section>
        `
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('footer-component', FooterComponent);