// Project data
const projects = {
    1: {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with AI recommendations, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
        tech: ["React", "Node.js", "MongoDB", "Stripe", "AI/ML"],
        github: "https://github.com",
        live: "https://demo.com",
        emoji: "🛒"
    },
    2: {
        title: "Real-Time Chat App",
        description: "Scalable chat application with end-to-end encryption, file sharing, and group management features. Built for high performance and security.",
        tech: ["React", "Socket.io", "Express", "Redis", "JWT"],
        github: "https://github.com",
        live: "https://demo.com",
        emoji: "💬"
    },
    3: {
        title: "AI Content Generator",
        description: "Intelligent content creation tool powered by GPT models with custom fine-tuning and optimization. Features include text generation and summarization.",
        tech: ["Python", "OpenAI API", "FastAPI", "React", "Docker"],
        github: "https://github.com",
        live: "https://demo.com",
        emoji: "🤖"
    },
    4: {
        title: "Analytics Dashboard",
        description: "Interactive business intelligence platform with real-time data visualization and predictive analytics. Built for enterprise-level data processing.",
        tech: ["React", "D3.js", "Python", "PostgreSQL", "Chart.js"],
        github: "https://github.com",
        live: "https://demo.com",
        emoji: "📊"
    }
};

// Orbital system variables
let mouseX = 0;
let mouseY = 0;
let solarSystemCenter = { x: 0, y: 0 };
let animationId;

// Planet orbital parameters
const planetOrbits = [
    { radiusX: window.innerWidth * 0.1, radiusY: window.innerHeight * 0.06, speed: 0.025, offset: 0 },
    { radiusX: window.innerWidth * 0.15, radiusY: window.innerHeight * 0.09, speed: 0.022, offset: Math.PI * 0.7 },
    { radiusX: window.innerWidth * 0.2, radiusY: window.innerHeight * 0.12, speed: 0.019, offset: Math.PI * 1.3 },
    { radiusX: window.innerWidth * 0.25, radiusY: window.innerHeight * 0.15, speed: 0.016, offset: Math.PI * 0.2 },
    { radiusX: window.innerWidth * 0.3, radiusY: window.innerHeight * 0.18, speed: 0.013, offset: Math.PI * 1.8 },
    { radiusX: window.innerWidth * 0.35, radiusY: window.innerHeight * 0.21, speed: 0.011, offset: Math.PI * 0.9 },
    { radiusX: window.innerWidth * 0.4, radiusY: window.innerHeight * 0.24, speed: 0.009, offset: Math.PI * 1.5 },
    { radiusX: window.innerWidth * 0.45, radiusY: window.innerHeight * 0.27, speed: 0.007, offset: Math.PI * 0.4 }
];

// Initialize orbital system
function initOrbitalSystem() {
    const solarSystem = document.querySelector('.solar-system');
    if (!solarSystem) return;
    
    // Use container center instead of viewport coordinates
    solarSystemCenter.x = solarSystem.offsetWidth / 2;
    solarSystemCenter.y = solarSystem.offsetHeight / 2;
    
    // Start orbital animation
    animateOrbits();
}

// Mouse movement tracking
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Orbital animation function
function animateOrbits() {
    const planets = document.querySelectorAll('.planet');
    const solarSystem = document.querySelector('.solar-system');
    if (!solarSystem) return;
    
    const time = Date.now() * 0.001;
    
    planets.forEach((planet, index) => {
        const orbit = planetOrbits[index];
        
        // Base orbital position (right to left)
        let angle = -time * orbit.speed + orbit.offset;
        
        // Calculate oval orbit position relative to container center
        const x = solarSystemCenter.x + Math.cos(angle) * orbit.radiusX;
        const y = solarSystemCenter.y + Math.sin(angle) * orbit.radiusY;
        
        // Apply position relative to container
        planet.style.left = (x - 45) + 'px';
        planet.style.top = (y - 45) + 'px';
    });
    
    animationId = requestAnimationFrame(animateOrbits);
}

// Planet hover effects
function setupPlanetInteractions() {
    const planets = document.querySelectorAll('.planet');
    
    planets.forEach((planet, index) => {
        planet.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
            
            // Add glow effect to orbit path
            const orbitPath = document.querySelector(`.orbit-${index + 1}`);
            if (orbitPath) {
                orbitPath.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                orbitPath.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
            }
        });
        
        planet.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
            
            // Remove glow effect from orbit path
            const orbitPath = document.querySelector(`.orbit-${index + 1}`);
            if (orbitPath) {
                orbitPath.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                orbitPath.style.boxShadow = 'none';
            }
        });
        
        planet.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 600);
            
            openProject(index + 1);
        });
    });
}

// Smooth scrolling
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Navigation smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Open project cards with fireball animation
function openProject(projectId) {
    const fireball = document.getElementById('fireball');
    const projectCards = document.getElementById('project-cards');
    
    // Position fireball at top-right corner
    fireball.style.display = 'block';
    fireball.style.right = '20px';
    fireball.style.top = '30vh';
    fireball.style.transform = 'translate(0, 0)';
    
    // Animate fireball across screen
    setTimeout(() => {
        fireball.style.animation = 'flicker 1.5s infinite alternate, moveFireball 2s linear';
    }, 100);
    
    // Show project cards after fireball animation
    setTimeout(() => {
        fireball.style.display = 'none';
        fireball.style.animation = 'flicker 1.5s infinite alternate';
        projectCards.classList.remove('hidden');
        projectCards.classList.add('visible');
    }, 2100);
}

function openProjectDetail(projectId) {
    const project = projects[projectId];
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
            <div style="font-size: 3rem; margin-right: 1rem;">${project.emoji}</div>
            <h2 style="font-size: 2rem; font-weight: bold; color: white;">${project.title}</h2>
        </div>
        
        <p style="color: #e2e8f0; line-height: 1.6; margin-bottom: 1.5rem; font-size: 1.1rem;">
            ${project.description}
        </p>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: white; margin-bottom: 1rem;">Technologies Used:</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${project.tech.map(tech => 
                    `<span style="background: rgba(139, 92, 246, 0.2); color: #b49bff; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">${tech}</span>`
                ).join('')}
            </div>
        </div>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
               style="background: #374151; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; transition: background 0.3s;"
               onmouseover="this.style.background='#4b5563'" 
               onmouseout="this.style.background='#374151'">
                🔗 GitHub
            </a>
            <a href="${project.live}" target="_blank" rel="noopener noreferrer"
               style="background: linear-gradient(to right, #3b82f6, #1d4ed8); color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; transition: transform 0.3s;"
               onmouseover="this.style.transform='scale(1.05)'" 
               onmouseout="this.style.transform='scale(1)'">
                🚀 Live Demo
            </a>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close project cards
function closeProjectCards() {
    const projectCards = document.getElementById('project-cards');
    projectCards.classList.add('hidden');
    projectCards.classList.remove('visible');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Add scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-title, .about-text, .contact-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Project card interactions
function setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProject(parseInt(projectId));
        });
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup scroll animations
    const elements = document.querySelectorAll('.section-title, .about-text, .contact-content');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Setup project card clicks for detailed view
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectDetail(parseInt(projectId));
        });
    });
    
    // Initialize orbital system
    setTimeout(() => {
        initOrbitalSystem();
        setupPlanetInteractions();
        setupProjectCards();
    }, 100);
});

// Handle window resize
window.addEventListener('resize', function() {
    const solarSystem = document.querySelector('.solar-system');
    if (solarSystem) {
        solarSystemCenter.x = solarSystem.offsetWidth / 2;
        solarSystemCenter.y = solarSystem.offsetHeight / 2;
    }
});

window.addEventListener('scroll', animateOnScroll);

// Parallax effect for hero video
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const video = document.querySelector('.hero-video');
    if (video) {
        video.style.transform = `rotate(180deg) translateY(${scrolled * 0.5}px)`;
    }
});