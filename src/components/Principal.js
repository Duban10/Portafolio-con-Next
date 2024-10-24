"use client"

import React, { useState, useEffect } from 'react'
import '../app/globals.css'
import Formulario from '../app/actions/product-actions'

const testimonials = [
    { 
        id: 1, 
        imagen: '/assets/images/perfil-lina2.jpg', 
        nombre: 'Lina Fernanda', 
        fecha: '14 Junio, 2021', 
        testimonio: 'Estoy encantada con el sitio web de mi restaurante. La experiencia ha sido fantástica desde el principio hasta el final. Logró entender perfectamente nuestra visión y estilo, logrando mejorar significativamente nuestra presencia en línea. Gracias a su trabajo, nuestros clientes pueden explorar nuestro menú y conocernos mucho mejor.' 
    }
  ];

const Principal = () => {    

    useEffect(() => {
      
                
            // element toggle function
            // const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

            



            // testimonials variables
            // const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
            // const modalContainer = document.querySelector("[data-modal-container]");
            // const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
            // const overlay = document.querySelector("[data-overlay]");

            // // modal variable
            // const modalImg = document.querySelector("[data-modal-img]");
            // const modalTitle = document.querySelector("[data-modal-title]");
            // const modalText = document.querySelector("[data-modal-text]");

            // // modal toggle function
            // const testimonialsModalFunc = function () {
            //     // console.log("volvioa  entrar");
            // modalContainer.classList.toggle("active");
            // overlay.classList.toggle("active");
            // }

            // // add click event to all modal items
            // for (let i = 0; i < testimonialsItem.length; i++) {

            //     testimonialsItem[i].addEventListener("click", function () {

            //         modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
            //         modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
            //         modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
            //         modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

            //         testimonialsModalFunc();

            //     });

            // }

            // // add click event to modal close button
            // modalCloseBtn.addEventListener("click", testimonialsModalFunc);
            // overlay.addEventListener("click", testimonialsModalFunc);



            // custom select variables
            const select = document.querySelector("[data-select]");
            const selectItems = document.querySelectorAll("[data-select-item]");
            const selectValue = document.querySelector("[data-selecct-value]");
            const filterBtn = document.querySelectorAll("[data-filter-btn]");

            select.addEventListener("click", function () { elementToggleFunc(this); });

            // add event in all select items
            for (let i = 0; i < selectItems.length; i++) {
            selectItems[i].addEventListener("click", function () {

                let selectedValue = this.innerText.toLowerCase();
                selectValue.innerText = this.innerText;
                elementToggleFunc(select);
                filterFunc(selectedValue);

            });
            }

            // filter variables
            const filterItems = document.querySelectorAll("[data-filter-item]");

            const filterFunc = function (selectedValue) {

            for (let i = 0; i < filterItems.length; i++) {

                if (selectedValue === "todo") {
                filterItems[i].classList.add("active");
                } else if (selectedValue === filterItems[i].dataset.category) {
                filterItems[i].classList.add("active");
                } else {
                filterItems[i].classList.remove("active");
                }

            }

            }

            // add event in all filter button items for large screen
            let lastClickedBtn = filterBtn[0];

            for (let i = 0; i < filterBtn.length; i++) {

            filterBtn[i].addEventListener("click", function () {

                let selectedValue = this.innerText.toLowerCase();
                selectValue.innerText = this.innerText;
                filterFunc(selectedValue);

                lastClickedBtn.classList.remove("active");
                this.classList.add("active");
                lastClickedBtn = this;

            });

            }



            // contact form variables
            // const form = document.querySelector("[data-form]");
            // const formInputs = document.querySelectorAll("[data-form-input]");
            // const formBtn = document.querySelector("[data-form-btn]");

            // // add event to all form input field
            // for (let i = 0; i < formInputs.length; i++) {
            //     formInputs[i].addEventListener("input", function () {

            //         // check form validation
            //         if (form.checkValidity()) {
            //         formBtn.removeAttribute("disabled");
            //         } else {
            //         formBtn.setAttribute("disabled", "");
            //         }

            //     });
            // }



            // page navigation variables
            const navigationLinks = document.querySelectorAll("[data-nav-link]");
            const pages = document.querySelectorAll("[data-page]");

            // add event to all nav link
            for (let i = 0; i < navigationLinks.length; i++) {
            navigationLinks[i].addEventListener("click", function () {

                for (let i = 0; i < pages.length; i++) {
                if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                    pages[i].classList.add("active");
                    navigationLinks[i].classList.add("active");
                    window.scrollTo(0, 0);
                } else {
                    pages[i].classList.remove("active");
                    navigationLinks[i].classList.remove("active");
                }
                }

            });
            }
    }, [])

    const mostrarInfo = () => {
        // console.log("aqui entro");
        const elementToggleFunc = (elem) => {
            elem.classList.toggle("active")
        }
        // // sidebar variables
        const sidebar = document.querySelector("[data-sidebar-top]");
        const sidebarBtn = document.querySelector("[data-sidebar-btn]");
        // // sidebar toggle functionality for mobile
        sidebarBtn.addEventListener("click", elementToggleFunc(sidebar) );
    }



    const [selectedCard, setSelectedCard] = useState(null);
    const [showModal, setShowModal] = useState(false)
    

    const mostrarModal = (testimonio) => {
        setShowModal(true)
        setSelectedCard(testimonio)
    }
    const cerrarModal = () => {
        setShowModal(false)
    }

  return (
    <>
        
        <div>
            {
                showModal &&
                <div className="modal-container active" data-modal-container>

                    <div className="overlay active" data-overlay></div>

                    <section className="testimonials-modal">

                    <button className="modal-close-btn" 
                    data-modal-close-btn 
                    onClick={() => cerrarModal()}
                    >
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                        <img src={selectedCard.imagen} alt={selectedCard.nombre} width="80" data-modal-img />
                        </figure>

                        <img src='/assets/images/icon-quote.svg' alt="quote icon" />
                    </div>

                    <div className="modal-content">

                        <h4 className="h3 modal-title" data-modal-title>{selectedCard.nombre}</h4>

                        <time datetime="2021-06-14">{selectedCard.fecha}</time>

                        <div data-modal-text>
                        <p>
                            {selectedCard.testimonio}
                        </p>
                        </div>

                    </div>

                    </section>

                </div>      

            }

            <div className="area" >
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div >
            
            <div className="cont">   
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
                </svg>    
                <div className="context">      
                    <main>
                        <aside className="sidebar" data-sidebar-top>

                            <div className="sidebar-info">

                                <figure className="avatar-box">
                                <img src='/assets/images/perfil-redondeado.png' alt="Duban Verjel" width="80" />
                                </figure>

                                <div className="info-content">
                                <h1 className="name" title="Duban Verjel"> Duban Verjel</h1>

                                <p className="title">Desarrollador Web</p>
                                </div>

                                <button className="info_more-btn" data-sidebar-btn onClick={mostrarInfo} >
                                    <span>Mostrar Contacto</span>

                                    <ion-icon name="chevron-down"></ion-icon>
                                </button>

                            </div>

                            <div className="sidebar-info_more">

                                <div className="separator"></div>

                                <ul className="contacts-list">

                                <li className="contact-item">

                                    <div className="icon-box">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    {/* <i className="icon ion-md-send"></i> */}
                                    </div>

                                    <div className="contact-info">
                                    <p className="contact-title">Email</p>

                                    <a href="mailto:luduchar@gmail.com" className="contact-link">luduchar@gmail.com</a>
                                    </div>

                                </li>

                                <li className="contact-item">

                                    <div className="icon-box">
                                    <ion-icon name="phone-portrait-outline"></ion-icon>
                                    </div>

                                    <div className="contact-info">
                                    <p className="contact-title">Celular</p>

                                    <a href="tel:3209034013" className="contact-link">+57 3209034013</a>
                                    </div>

                                </li>

                                <li className="contact-item">

                                    <div className="icon-box">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    </div>

                                    <div className="contact-info">
                                    <p className="contact-title">Fecha de Nacimiento</p>

                                    <time datetime="1982-06-23">Junio 29, 1996</time>
                                    </div>

                                </li>

                                <li className="contact-item">

                                    <div className="icon-box">
                                    <ion-icon name="location-outline"></ion-icon>
                                    </div>

                                    <div className="contact-info">
                                    <p className="contact-title">Ubicación</p>

                                    <address>Ocaña, Norte de Santander, Colombia</address>
                                    </div>

                                </li>

                                </ul>

                                <div className="separator"></div>

                                <ul className="social-list">

                                <li className="social-item">
                                    <a target="_blank" href="https://www.facebook.com/LuisDubanVerjelArmesto/" className="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li className="social-item">
                                    <a target="_blank" href="https://www.linkedin.com/in/luis-duban-verjel-armesto/" className="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>

                                <li className="social-item">
                                    <a target="_blank" href="https://www.instagram.com/dubanarmesto/" className="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>

                                </ul>

                            </div>

                        </aside>

                        <div className="main-content">

                            <nav className="navbar">

                                <ul className="navbar-list">

                                <li className="navbar-item">
                                    <button className="navbar-link  " data-nav-link>Sobre mí</button>
                                </li>

                                <li className="navbar-item">
                                    <button className="navbar-link " data-nav-link>Resumen</button>
                                </li>

                                <li className="navbar-item">
                                    <button className="navbar-link active" data-nav-link>Proyectos</button>
                                </li>

                                <li className="navbar-item">
                                    <button className="navbar-link" data-nav-link>Contacto</button>
                                </li>

                                </ul>

                            </nav>
                            
                            <article className="sobre-mi  " data-page="sobre mí">

                                <header>
                                <h2 className="h2 article-title">Sobre mí</h2>
                                </header>

                                <section className="about-text">
                                <p>            
                                    Soy Ingeniero de Sistemas y desarrollador web de Ocaña, Colombia; trabajo desarrollando software convirtiendo problemas complejos 
                                    en sitios simples, hermosos e intuitivos.           
                                </p>
                                <p>
                                    Mi trabajo es construir sitios web funcionales y fácil de usar pero al mismo tiempo atractivos, asegurandome que sea llamativo y 
                                    al mismo tiempo que pueda transmitir la identidad del proyecto o sitio de la manera más creativa.
                                </p>
                                </section>

                                <section className="service">

                                <h3 className="h3 service-title">Que Estoy Haciendo</h3>

                                <ul className="service-list">

                                    <li className="service-item">

                                    <div className="service-icon-box">
                                        <img src='/assets/images/icon-dev.svg'  alt="Web development icon" width="40" />
                                    </div>

                                    <div className="service-content-box">
                                        <h4 className="h4 service-item-title">Desarrollo Web</h4>

                                        <p className="service-item-text">
                                        Desarrollo de sitios de alta calidad a nivel profesional.
                                        </p>
                                    </div>

                                    </li>   
                                </ul>  
                                </section>
                                <section className="testimonials">

                                <h3 className="h3 testimonials-title">Testimonios</h3>
                                <ul className="testimonials-list has-scrollbar">
                                {
                                    testimonials.map(testimonial => (
                                    <li className="testimonials-item">
                                    <div className="content-card" 
                                        data-testimonials-item 
                                        onClick={ () => mostrarModal(testimonial)}
                                    >

                                        <figure className="testimonials-avatar-box">
                                        <img src={testimonial.imagen}  alt={testimonial.nombre} width="60" data-testimonials-avatar />
                                        </figure>

                                        <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.nombre}</h4>

                                        <div className="testimonials-text" data-testimonials-text>
                                        <p>
                                            {testimonial.testimonio}
                                        </p>
                                        </div>

                                    </div>
                                    </li>  

                                    ))
                                }
                                </ul>

                                </section>

                                <section className="clients">

                                <h3 className="h3 clients-title">Clientes y Empresas</h3>

                                <ul className="clients-list has-scrollbar">

                                    <li className="clients-item">
                                    <a href="https://www.wposs.com/" target="_blank">
                                        <img src='/assets/images/wposs-logo1.png'  alt="client logo" />
                                    </a>
                                    </li>

                                    <li className="clients-item">
                                    <a href="https://titamedia.com/" target="_blank">
                                        <img src='/assets/images/Logo_TitaMediaNublack.png' alt="client logo" className="logo-tita" />
                                    </a>
                                    </li>

                                    <li className="clients-item">
                                    <a href="https://eclectic-treacle-02862a.netlify.app/" target="_blank">
                                        <img src='/assets/images/icon-mangata.png' alt="client logo" />
                                    </a>
                                    </li>
                                                    

                                </ul>

                                </section>

                            </article>

                            <article className="resumen " data-page="resumen">

                                <header>
                                <h2 className="h2 article-title">Resumen</h2>
                                </header>

                                <section className="timeline">

                                <div className="title-wrapper">
                                    <div className="icon-box">
                                    <ion-icon name="book-outline"></ion-icon>
                                    </div>

                                    <h3 className="h3">Educación</h3>
                                </div>

                                <ol className="timeline-list">
                                    

                                    <li className="timeline-item">

                                    <h4 className="h4 timeline-item-title">Diplomado en Desarrollo de Aplicaciones Web</h4>

                                    <span>2021</span>

                                    <p className="timeline-text">
                                        Universidad del Norte - MinTic
                                    </p>

                                    </li>

                                    <li className="timeline-item">

                                    <h4 className="h4 timeline-item-title">Diplomado en Desarrollo de Software</h4>

                                    <span>2021</span>

                                    <p className="timeline-text">
                                        Universidad del Norte - MinTic
                                    </p>

                                    </li>

                                    <li className="timeline-item">

                                    <h4 className="h4 timeline-item-title">Pregrado en Ingeniería de Sistemas</h4>

                                    <span>2014 — 2019</span>

                                    <p className="timeline-text">
                                        Universidad Francisco de Paula Santander
                                    </p>

                                    </li>

                                </ol>

                                </section>

                                <section className="timeline">

                                <div className="title-wrapper">
                                    <div className="icon-box">
                                    <ion-icon name="book-outline"></ion-icon>
                                    </div>

                                    <h3 className="h3">Experiencia</h3>
                                </div>

                                <ol className="timeline-list">

                                    <li className="timeline-item">

                                    <h4 className="h4 timeline-item-title">Desarrollador Frontend</h4>                

                                    <span>2023 — Actualidad</span>

                                    <p className="timeline-text">
                                        Desarrollor de sitios ecommerce.
                                    </p>

                                    </li>

                                    <li className="timeline-item">

                                    <h4 className="h4 timeline-item-title">Desarrollador Web</h4>

                                    <span>2022 — 2023</span>

                                    <p className="timeline-text">
                                        Desarrollador en empresa de soluciones transaccionales con presencia en
                                        el sector bancario, ecommerce, medios de pago y redes transaccionales. 
                                    </p>

                                    </li>

                                    <li className="timeline-item">

                                    <h4 className="h4 timeline-item-title">Freelancer</h4>

                                    <span>2021 - 2022</span>

                                    <p className="timeline-text">
                                        Desarrollador independiente.
                                    </p>

                                    </li>

                                </ol>

                                </section>

                                <section className="skill">

                                <h3 className="h3 skills-title">Habilidades</h3>

                                <section className="clients">
                        
                                    <ul className="clients-list has-scrollbar">
                        
                                    <li className="clients-item">
                                        <a href="https://eclectic-treacle-02862a.netlify.app/" target="_blank">
                                        <img src='/assets/icons/icon-javascript.svg' alt="client logo" />
                                        </a>
                                    </li>
                        
                                    <li className="clients-item">
                                        <a href="https://www.wposs.com/" target="_blank">
                                        <img src='/assets/icons/icon-react.svg' alt="client logo" />
                                        </a>
                                    </li>

                                    <li className="clients-item">
                                        <a href="https://www.wposs.com/" target="_blank">
                                        <img src='/assets/icons/VTEX_Logo.svg.png'  alt="client logo" />
                                        </a>
                                    </li>

                                    <li className="clients-item">
                                        <a href="https://www.wposs.com/" target="_blank">
                                        <img src='/assets/icons/icon-html5.svg'  alt="client logo"/>
                                        </a>
                                    </li>

                                    <li className="clients-item">
                                        <a href="https://www.wposs.com/" target="_blank">
                                        <img src='/assets/icons/icon-css.svg'  alt="client logo"/>
                                        </a>
                                    </li>

                                    <li className="clients-item">
                                        <a href="https://www.wposs.com/" target="_blank">
                                        <img src='/assets/icons/icon-mongodb-wordmark.svg'  alt="client logo"/>
                                        </a>
                                    </li>

                                    <li className="clients-item">
                                        <a href="https://www.wposs.com/" target="_blank">
                                        <img src='/assets/icons/icon-sql-server.svg'  alt="client logo"/>
                                        </a>
                                    </li>
                                    <li className="clients-item">
                                        <a href="https://www.wposs.com/" target="_blank">
                                        <img src='/assets/icons/icon-bootstrap.svg'  alt="client logo"/>
                                        </a>
                                    </li>
                        
                                    </ul>
                        
                                </section>

                                </section>

                            </article>

                            <article className="portfolio active" data-page="proyectos">

                                <header>
                                <h2 className="h2 article-title">Proyectos</h2>
                                </header>

                                <section className="projects">

                                <ul className="filter-list">

                                    <li className="filter-item">
                                    <button className="active" data-filter-btn>Todo</button>
                                    </li>

                                    <li className="filter-item">
                                    <button data-filter-btn>Desarrollo Web</button>
                                    </li>

                                </ul>

                                <div className="filter-select-box">

                                    <button className="filter-select" data-select>

                                    <div className="select-value" data-selecct-value>Seleccionar categoria</div>

                                    <div className="select-icon">
                                        <ion-icon name="chevron-down"></ion-icon>
                                    </div>

                                    </button>

                                    <ul className="select-list">

                                    <li className="select-item">
                                        <button data-select-item>Todo</button>
                                    </li>

                                    <li className="select-item">
                                        <button data-select-item>Desarrollo Web</button>
                                    </li>

                                    </ul>

                                </div>

                                <ul className="project-list">
                                    <li className="project-item  active" data-filter-item data-category="desarrollo web">
                                        <a href="https://eclectic-treacle-02862a.netlify.app/" target="_blank">

                                            <figure className="project-img">
                                            <div className="project-item-icon-box">
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </div>

                                            <img src='/assets/images/mangata-cafe.png' alt="Restaurante" loading="lazy" />
                                            </figure>

                                            <h3 className="project-title">Restaurante</h3>

                                            <p className="project-category">Desarrollo Web</p>

                                        </a>
                                    </li>

                                    <li className="project-item active" data-filter-item data-category="desarrollo web">
                                        <a href="https://calculadora-propinas1.netlify.app/" target="_blank">

                                            <figure className="project-img">
                                            <div className="project-item-icon-box">
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </div>

                                            <img src='/assets/images/propinas.png' alt="Image" loading="lazy" />
                                            </figure>

                                            <h3 className="project-title">Calculadora de propinas</h3>

                                            <p className="project-category">Desarrollo Web</p>

                                        </a>
                                    </li>

                                    <li className="project-item  active" data-filter-item data-category="desarrollo web" >
                                        <a href="https://appbancaria.netlify.app/" target="_blank">

                                            <figure className="project-img">
                                            <div className="project-item-icon-box">
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </div>

                                            <img src='/assets/images/bancaria.png' alt="image" loading="lazy" />
                                            </figure>

                                            <h3 className="project-title">Movimientos Bancarios</h3>

                                            <p className="project-category">Desarrollo Web</p>

                                        </a>
                                    </li>

                                    <li className="project-item  active" data-filter-item data-category="desarrollo web">
                                    <a href="https://app-clima-five-phi.vercel.app/" target="_blank">

                                        <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </div>

                                        <img src='/assets/images/Buscador-clima.png' alt="orizon" loading="lazy" />
                                        </figure>

                                        <h3 className="project-title">Buscador de clima</h3>

                                        <p className="project-category">Desarrollo Web</p>

                                    </a>
                                    </li>

                                    

                                    <li className="project-item  active" data-filter-item data-category="desarrollo web">
                                    <a href="#">

                                        <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </div>

                                        <img src='/assets/images/gestor-clientes-1.png' alt="summary" loading="lazy" />
                                        </figure>

                                        <h3 className="project-title">Gestor de clientes</h3>

                                        <p className="project-category">Desarrollo Web</p>

                                    </a>
                                    </li>

                                    <li className="project-item  active" data-filter-item data-category="desarrollo web">
                                    <a href="https://cotizador-seguros-psi.vercel.app/" target="_blank">

                                        <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </div>

                                        <img src='/assets/images/cotizador-seguros.png' alt="arrival" loading="lazy" />
                                        </figure>

                                        <h3 className="project-title">Cotizador de seguros</h3>

                                        <p className="project-category">Desarrollo Web</p>

                                    </a>
                                    </li>

                                </ul>

                                </section>

                            </article>


                            <article className="contact" data-page="contacto">

                                <header>
                                <h2 className="h2 article-title">Contacto</h2>
                                </header>

                                <section className="mapbox" data-mapbox>
                                <figure>            
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63176.14030283835!2d-73.3944201196831!3d8.252047845977037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e677beeab6ce443%3A0x24747bfaf0798150!2sOca%C3%B1a%2C%20Norte%20de%20Santander!5e0!3m2!1ses!2sco!4v1717626067609!5m2!1ses!2sco" 
                                    width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </figure>
                                </section>

                                <section className="contact-form">

                                <h3 className="h3 form-title">Contáctame</h3>

                                <Formulario />

                                </section>

                            </article>

                        </div>

                    </main>
                </div>
            

            </div>
        </div>
    </>
  )
}

export default Principal
