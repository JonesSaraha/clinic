document.addEventListener('DOMContentLoaded', function() {
    
    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1500);
    });

    // --- Header Scroll Effect ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // --- Service Card Data & Population ---
    const servicesData = [
        { 
            title: 'ROOT CANAL TREATMENT', 
            desc: 'Painless treatment to save infected teeth while relieving pain and discomfort.', 
            img: 'photos/root canal treatmenr.jpg', 
            badge: 'Popular',
            src:'pages/root.html'
        },
        { 
            title: 'IMPLANTS', 
            desc: 'Permanent solution for missing teeth that look, feel, and function like natural teeth.', 
            img: 'photos/implant.jpg',
            pdf: 'pdfs/clinic_2.pdf'
        },
        { 
            title: 'ALIGNERS', 
            desc: 'Clear, removable aligners to straighten teeth discreetly without traditional braces.', 
            img:'photos/aligners.jpg',
            pdf: 'pdfs/clinic_3.pdf'
        },
        { 
            title: 'BRACES', 
            desc: 'Traditional braces and clear options to correct teeth alignment and bite issues.', 
            img:'photos/braces.jpg', 
            badge: 'Advanced',
            pdf: 'pdfs/clinic_4.pdf'
        },
        { 
            title: 'TOOTH WHITENING', 
            desc: 'Professional whitening treatments to brighten your smile by several shades.', 
            img: 'photos/tooth whitening.jpg',
            pdf: 'pdfs/clinic_6.pdf'
        },
        { 
            title: 'SCALING AND POLISHING', 
            desc: 'Professional cleaning to remove plaque and tartar, helping prevent cavities and gum disease.', 
            img: 'photos/scaling and polishing.png',
            pdf: 'pdfs/clinic_7.pdf'
        },
        { 
            title: 'CROWNS AND BRIDGES', 
            desc: 'Restore damaged teeth or replace missing ones with custom-made prosthetics.', 
            img: 'photos/crown and bridges.jpg',
            pdf: 'pdfs/clinic_8.pdf'
        },
        { 
            title: 'EXTRACTION AND IMPACTION REMOVAL', 
            desc: 'Safe and careful removal of damaged or problematic teeth with minimal discomfort.', 
            img: 'photos/impaction.jpg',
            pdf: 'pdfs/clinic_9.pdf'
        },
        { 
            title: 'ORAL CANCER SCREENING', 
            desc: 'Early detection and prevention of oral cancer through comprehensive examination.', 
            img: 'photos/oral cancer screening.jpg',
            pdf: 'pdfs/clinic_11.pdf'
        },
        { 
            title: 'TMJ DISORDERS TREATMENT', 
            desc: 'Management of chronic facial pain due to neuralgic, myofacial and temporomandibular joint disorders.', 
            img: 'photos/tmj disorders.jpg', 
            badge: 'Specialized',
            pdf: 'pdfs/CLINIC_12.pdf'
        },
    ];

   const servicesGrid = document.querySelector('.services-grid');
servicesData.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
        ${service.badge ? `<span class="service-badge">${service.badge}</span>` : ''}
        <div class="service-img" style="background-image: url('${service.img}');"></div>
        <div class="service-content">
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
            <a href="${service.src}" target="_blank" class="service-link">Learn more <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    servicesGrid.appendChild(card);
});

    // --- Mobile Menu ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = mobileMenuBtn.querySelector('i');
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-times');
            }
        });
    });

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section-hidden').forEach(section => {
        observer.observe(section);
    });
    
    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Animate Stats Counter ---
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.about');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const target = +stat.innerText.replace('+', '').replace('K', '000');
                    const count = 0;
                    const increment = target / 100;
                    
                    if (count < target) {
                        stat.innerText = Math.ceil(count + increment);
                        setTimeout(() => {
                            const updateCount = () => {
                                const currentCount = +stat.innerText;
                                if (currentCount < target) {
                                    stat.innerText = Math.ceil(currentCount + increment);
                                    setTimeout(updateCount, 20);
                                } else {
                                    // Format the final number
                                    if (target === 20000) {
                                        stat.innerText = '20K+';
                                    } else if (target === 20000) {
                                        stat.innerText = '20+';
                                    } else {
                                        stat.innerText = target + '+';
                                    }
                                }
                            };
                            updateCount();
                        }, 200);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
    
    // --- About Section Image Slider ---
    const sliderContainer = document.getElementById('about-slider-container');
    const sliderImages = [
        'photos/clinic-1.jpg',
        'photos/clinic-2.jpg',
        'photos/clinic-3.jpg',
        'photos/clinic-4.jpg',
        'photos/clinic-5.jpg',
        'photos/clinic-6.jpg',
        'photos/clinic-7.jpg'
    ];

    let currentSlideIndex = 0;

    // Create and add dot container to the slider
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots-container';

    // Create and add image and dot elements for each image URL
    sliderImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Modern dental clinic view ${index + 1}`;
        img.className = 'slider-image';
        if (index === 0) img.classList.add('active');
        sliderContainer.appendChild(img);

        const dot = document.createElement('span');
        dot.className = 'slider-dot';
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    sliderContainer.appendChild(dotsContainer);

    // Get all created slides and dots
    const slides = sliderContainer.querySelectorAll('.slider-image');
    const dots = dotsContainer.querySelectorAll('.slider-dot');

    // Function to display a specific slide
    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlideIndex = index;
    };

    // Add click functionality to dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.index)));
    });

    // Function to advance to the next slide
    const nextSlide = () => {
        const newIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(newIndex);
    };

    // Set the slider to automatically change images every 4 seconds
    setInterval(nextSlide, 4000);
    
    // --- NEW Specialist Section with Title Left & Slider Right ---
    const specialistsData = [
        { 
            title: 'Oral Surgeon', 
            img: 'photos/oral surgeon.jpg'
        },
        { 
            title: 'Orthodontist', 
            img: 'photos/orthodontist.jpg'
        },
        { 
            title: 'Pedodontist', 
            img: 'photos/pedodontist.jpg'
        },
        { 
            title: 'Periodontist', 
            img: 'photos/periodontist.jpg'
        },
        { 
            title: 'Prosthodontist & Implantologist', 
            img: 'photos/prosthodontistand implantologist.jpg'
        },
    ];

    let currentSpecialistIndex = 0;
    const specialistsSlider = document.getElementById('specialistsSlider');
    const specialistDotsContainer = document.getElementById('specialistDots');

    // Create specialist squares
    specialistsData.forEach((specialist, index) => {
        const square = document.createElement('div');
        square.className = 'specialist-square';
        square.innerHTML = `
            <div class="specialist-image-container">
                <img src="${specialist.img}" alt="${specialist.title}" class="specialist-img">
                <div class="specialist-overlay-square">
                    <div>
                        <h3>${specialist.title}</h3>
                        ${specialist.description ? `<p>${specialist.description}</p>` : ''}
                    </div>
                </div>
            </div>
            <div class="specialist-info">
                <h3>${specialist.title}</h3>
                ${specialist.description ? `<p>${specialist.description}</p>` : ''}
            </div>
        `;
        specialistsSlider.appendChild(square);

        // Create dot
        const dot = document.createElement('span');
        dot.className = 'specialist-dot-square';
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        specialistDotsContainer.appendChild(dot);
    });

    const specialistSquares = document.querySelectorAll('.specialist-square');
    const specialistDots = document.querySelectorAll('.specialist-dot-square');

    // Function to show specific specialist slide (single at a time)
    function showSpecialistSlide(index) {
        // Calculate transform value (each slide is 100% width)
        const transformValue = -(index * 100) + '%';
        specialistsSlider.style.transform = `translateX(${transformValue})`;

        // Update active dot
        specialistDots.forEach(dot => dot.classList.remove('active'));
        specialistDots[index].classList.add('active');
        
        currentSpecialistIndex = index;
    }

    // Next slide function
    function nextSpecialistSlide() {
        currentSpecialistIndex = (currentSpecialistIndex + 1) % specialistsData.length;
        showSpecialistSlide(currentSpecialistIndex);
    }

    // Add click events to dots
    specialistDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showSpecialistSlide(index);
        });
    });

    // Auto slide functionality - slides one at a time
    let specialistInterval = setInterval(nextSpecialistSlide, 3000);

    // Pause auto-slide on hover
    specialistsSlider.addEventListener('mouseenter', () => {
        clearInterval(specialistInterval);
    });

    specialistsSlider.addEventListener('mouseleave', () => {
        specialistInterval = setInterval(nextSpecialistSlide, 3000);
    });
    
    // --- Testimonials Slider ---
    let currentTestimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.dot');
    let testimonialInterval;

    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        // Remove active class from all dots
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current testimonial and activate dot
        testimonials[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentTestimonialIndex = index;
    }

    function nextTestimonial() {
        const nextIndex = (currentTestimonialIndex + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }

    function startTestimonialSlider() {
        // Clear existing interval
        if (testimonialInterval) {
            clearInterval(testimonialInterval);
        }
        
        // Start new interval (change every 4 seconds)
        testimonialInterval = setInterval(nextTestimonial, 4000);
    }

    // Initialize testimonials slider
    if (testimonials.length > 0) {
        // Show first testimonial
        showTestimonial(0);
        
        // Start automatic sliding
        startTestimonialSlider();
        
        // Add click event to dots
        testimonialDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                showTestimonial(index);
                // Restart the interval when user manually changes slide
                startTestimonialSlider();
            });
        });
        
        // Pause slider on hover (optional)
        const testimonialsContainer = document.querySelector('.testimonials-container');
        testimonialsContainer.addEventListener('mouseenter', () => {
            if (testimonialInterval) {
                clearInterval(testimonialInterval);
            }
        });
        
        testimonialsContainer.addEventListener('mouseleave', () => {
            startTestimonialSlider();
        });
    }
});