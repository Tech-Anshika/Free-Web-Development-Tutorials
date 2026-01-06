// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isActive = navMenu.classList.contains('active');
        mobileMenuToggle.setAttribute('aria-expanded', isActive);
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Code Runner Function
function runCode(exampleId, code, type) {
    const iframe = document.getElementById(`${exampleId}-output`) || 
                   document.querySelector(`iframe[data-example="${exampleId}"]`);
    
    if (!iframe) return;

    let htmlContent = '';
    
    if (type === 'html') {
        // For HTML examples, wrap in full HTML structure if needed
        if (!code.includes('<!DOCTYPE') && !code.includes('<html')) {
            htmlContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            padding: 20px;
            margin: 0;
        }
    </style>
</head>
<body>
${code}
</body>
</html>`;
        } else {
            htmlContent = code;
        }
    } else if (type === 'css') {
        // For CSS examples, create HTML structure with the CSS
        // Check which example to determine HTML structure
        let htmlBody = '';
        if (exampleId === 'css1') {
            htmlBody = '<div class="box">Styled Box</div>';
        } else {
            htmlBody = getCSSHTML(exampleId);
        }
        
        htmlContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            padding: 20px;
            margin: 0;
        }
        ${code}
    </style>
</head>
<body>
    ${htmlBody}
</body>
</html>`;
    } else if (type === 'javascript') {
        // For JavaScript examples, create HTML structure with the JS
        htmlContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            padding: 20px;
            margin: 0;
        }
        button {
            padding: 10px 20px;
            margin: 5px;
            background: #6366f1;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
        button:hover {
            background: #4f46e5;
        }
        input {
            padding: 8px;
            margin: 5px;
            border: 2px solid #e5e7eb;
            border-radius: 6px;
        }
        #colorBox {
            width: 200px;
            height: 200px;
            margin: 20px auto;
            border-radius: 10px;
            transition: background-color 0.3s;
        }
        #counter {
            font-size: 2em;
            font-weight: bold;
            text-align: center;
            margin: 20px;
        }
        #itemList {
            list-style: none;
            padding: 0;
        }
        #itemList li {
            padding: 10px;
            margin: 5px 0;
            background: #f3f4f6;
            border-radius: 6px;
        }
        #hoverBox {
            width: 150px;
            height: 150px;
            background: #6366f1;
            margin: 50px auto;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
    </style>
</head>
<body>
    ${getJavaScriptHTML(exampleId)}
    <script>
        ${code}
    </script>
</body>
</html>`;
    }

    // Write content to iframe
    iframe.srcdoc = htmlContent;
}

// Get appropriate HTML structure for JavaScript examples
function getJavaScriptHTML(exampleId) {
    const htmlTemplates = {
        'js1': '<div id="colorBox" style="background-color: #FF6B6B;"></div>',
        'js2': `
            <div style="text-align: center;">
                <div id="counter">0</div>
                <button onclick="increment()">Increment</button>
                <button onclick="decrement()">Decrement</button>
            </div>
        `,
        'js3': `
            <div style="max-width: 400px; margin: 0 auto;">
                <input type="text" id="itemInput" placeholder="Enter item">
                <button onclick="addItem()">Add Item</button>
                <ul id="itemList"></ul>
            </div>
        `,
        'js4': `
            <div style="text-align: center;">
                <div id="hoverBox">Hover Me!</div>
                <button id="clickBtn">Click Me</button>
            </div>
        `
    };
    return htmlTemplates[exampleId] || '';
}

// Get appropriate HTML structure for CSS examples
function getCSSHTML(exampleId) {
    const htmlTemplates = {
        'css1': '<div class="box">Styled Box</div>',
        'css2': '<h1>Colored Heading</h1><p>Colored Paragraph</p>',
        'css3': `
            <div class="container">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
            </div>
        `,
        'css4': '<div class="animated"></div>'
    };
    return htmlTemplates[exampleId] || '<div class="box">Styled Box</div>';
}

// Initialize all code editors
document.addEventListener('DOMContentLoaded', function() {
    // HTML Examples
    const htmlInputs = document.querySelectorAll('#html1-input, textarea[data-example^="html"]');
    htmlInputs.forEach(input => {
        const exampleId = input.id ? input.id.replace('-input', '') : input.getAttribute('data-example');
        const runBtn = input.closest('.code-editor')?.querySelector('.run-btn') || 
                      document.querySelector(`.run-btn[data-example="${exampleId}"]`);
        
        if (runBtn) {
            runBtn.addEventListener('click', () => {
                runCode(exampleId, input.value, 'html');
            });
        }
    });

    // CSS Examples
    const cssInputs = document.querySelectorAll('#css1-input, textarea[data-example^="css"]');
    cssInputs.forEach(input => {
        const exampleId = input.id ? input.id.replace('-input', '') : input.getAttribute('data-example');
        const runBtn = input.closest('.code-editor')?.querySelector('.run-btn') || 
                      document.querySelector(`.run-btn[data-example="${exampleId}"]`);
        
        if (runBtn) {
            runBtn.addEventListener('click', () => {
                let cssCode = input.value;
                // For CSS examples in grid, add HTML structure
                if (exampleId.startsWith('css') && exampleId !== 'css1') {
                    const htmlTemplate = getCSSHTML(exampleId);
                    cssCode = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            padding: 20px;
            margin: 0;
        }
        ${input.value}
    </style>
</head>
<body>
    ${htmlTemplate}
</body>
</html>`;
                    const iframe = document.querySelector(`iframe[data-example="${exampleId}"]`);
                    if (iframe) {
                        iframe.srcdoc = cssCode;
                    }
                } else {
                    runCode(exampleId, input.value, 'css');
                }
            });
        }
    });

    // JavaScript Examples
    const jsInputs = document.querySelectorAll('#js1-input, textarea[data-example^="js"]');
    jsInputs.forEach(input => {
        const exampleId = input.id ? input.id.replace('-input', '') : input.getAttribute('data-example');
        const runBtn = input.closest('.code-editor')?.querySelector('.run-btn') || 
                      document.querySelector(`.run-btn[data-example="${exampleId}"]`);
        
        if (runBtn) {
            runBtn.addEventListener('click', () => {
                runCode(exampleId, input.value, 'javascript');
            });
        }
    });

    // Run initial examples on page load
    setTimeout(() => {
        // Run HTML example 1
        const html1Input = document.getElementById('html1-input');
        if (html1Input) {
            runCode('html1', html1Input.value, 'html');
        }

        // Run CSS example 1
        const css1Input = document.getElementById('css1-input');
        if (css1Input) {
            runCode('css1', css1Input.value, 'css');
        }

        // Run JavaScript example 1
        const js1Input = document.getElementById('js1-input');
        if (js1Input) {
            runCode('js1', js1Input.value, 'javascript');
        }
    }, 100);
});

// Update CSS example runner to handle inline examples
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('run-btn')) {
        const exampleId = e.target.getAttribute('data-example');
        
        // Handle CSS examples in grid
        if (exampleId && exampleId.startsWith('css') && exampleId !== 'css1') {
            const textarea = document.querySelector(`textarea[data-example="${exampleId}"]`);
            if (textarea) {
                const htmlTemplate = getCSSHTML(exampleId);
                const cssCode = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            padding: 20px;
            margin: 0;
        }
        ${textarea.value}
    </style>
</head>
<body>
    ${htmlTemplate}
</body>
</html>`;
                const iframe = document.querySelector(`iframe[data-example="${exampleId}"]`);
                if (iframe) {
                    iframe.srcdoc = cssCode;
                }
            }
        }
        
        // Handle HTML examples in grid
        if (exampleId && exampleId.startsWith('html') && exampleId !== 'html1') {
            const textarea = document.querySelector(`textarea[data-example="${exampleId}"]`);
            if (textarea) {
                runCode(exampleId, textarea.value, 'html');
            }
        }
        
        // Handle JavaScript examples in grid
        if (exampleId && exampleId.startsWith('js') && exampleId !== 'js1') {
            const textarea = document.querySelector(`textarea[data-example="${exampleId}"]`);
            if (textarea) {
                runCode(exampleId, textarea.value, 'javascript');
            }
        }
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', function() {
    // Animate sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            section.classList.add('fade-in');
        } else {
            section.classList.add('fade-in');
        }
        observer.observe(section);
    });

    // Animate cards
    const cards = document.querySelectorAll('.theory-card, .example-card');
    cards.forEach((card, index) => {
        card.classList.add('scale-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate example items
    const exampleItems = document.querySelectorAll('.example-item');
    exampleItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });

    // Animate hero visual
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.classList.add('fade-in');
        observer.observe(heroVisual);
    }
});

// Reduced parallax effect to prevent text fading
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && currentScroll < window.innerHeight) {
        const scrolled = currentScroll * 0.2; // Reduced from 0.5 to 0.2
        hero.style.transform = `translateY(${scrolled}px)`;
    }
    lastScroll = currentScroll;
});

// Add typing animation to code preview
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Animate code lines in hero
document.addEventListener('DOMContentLoaded', function() {
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.transition = 'opacity 0.5s';
            line.style.opacity = '1';
        }, 1000 + (index * 200));
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn, .run-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add loading state to run buttons
document.querySelectorAll('.run-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.add('running');
        setTimeout(() => {
            this.classList.remove('running');
        }, 500);
    });
});

// Add mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-visual');
    if (hero) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        hero.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Add counter animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
    z-index: 9999;
    transition: width 0.1s;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

