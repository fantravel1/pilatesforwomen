/* ============================================
   PilatesForWomen.com - Main JavaScript
   Interactive Elements, Animations & Database
   ============================================ */

(function() {
  'use strict';

  // Detect current language from HTML lang attribute or path
  function detectLanguage() {
    const htmlLang = document.documentElement.lang;
    if (htmlLang === 'es') return 'es';
    if (htmlLang === 'fr') return 'fr';
    return 'en';
  }

  const LANG = detectLanguage();

  // ============================================
  // NAVIGATION
  // ============================================
  function initNavigation() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.nav__toggle');
    const mobileNav = document.querySelector('.nav__mobile');
    const mobileLinks = document.querySelectorAll('.nav__mobile-link');

    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });

    // Mobile toggle
    if (toggle) {
      toggle.addEventListener('click', function() {
        toggle.classList.toggle('nav__toggle--open');
        mobileNav.classList.toggle('nav__mobile--open');
        document.body.style.overflow = mobileNav.classList.contains('nav__mobile--open') ? 'hidden' : '';
      });
    }

    // Close mobile nav on link click
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (toggle) toggle.classList.remove('nav__toggle--open');
        if (mobileNav) mobileNav.classList.remove('nav__mobile--open');
        document.body.style.overflow = '';
      });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // ============================================
  // BACK TO TOP BUTTON
  // ============================================
  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 600) {
        btn.classList.add('back-to-top--visible');
      } else {
        btn.classList.remove('back-to-top--visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // SCROLL ANIMATIONS (Intersection Observer)
  // ============================================
  function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach(function(el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show all
      animatedElements.forEach(function(el) {
        el.classList.add('visible');
      });
    }
  }

  // ============================================
  // ANIMATED COUNTERS
  // ============================================
  function initCounters() {
    var counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    function animateCounter(el) {
      var target = parseInt(el.getAttribute('data-counter'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      var duration = 2000;
      var start = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(eased * target);
        el.textContent = prefix + current.toLocaleString() + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = prefix + target.toLocaleString() + suffix;
        }
      }

      requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      counters.forEach(function(el) {
        observer.observe(el);
      });
    } else {
      counters.forEach(animateCounter);
    }
  }

  // ============================================
  // HERO PARTICLES
  // ============================================
  function initHeroParticles() {
    var container = document.querySelector('.hero__particles');
    if (!container) return;

    for (var i = 0; i < 20; i++) {
      var particle = document.createElement('div');
      particle.className = 'hero__particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (8 + Math.random() * 12) + 's';
      particle.style.animationDelay = (Math.random() * 10) + 's';
      particle.style.width = (2 + Math.random() * 4) + 'px';
      particle.style.height = particle.style.width;
      container.appendChild(particle);
    }
  }

  // ============================================
  // EXERCISE DATABASE - SEARCH & FILTER
  // ============================================
  function initExerciseDatabase() {
    var dbSection = document.querySelector('.database');
    if (!dbSection) return;
    if (typeof EXERCISE_DATABASE === 'undefined') return;

    var searchInput = dbSection.querySelector('.database__search input');
    var filterBtns = dbSection.querySelectorAll('.database__filter');
    var grid = dbSection.querySelector('.database__grid');
    var countEl = dbSection.querySelector('.database__count strong');
    var loadMoreBtn = dbSection.querySelector('.database__load-more .btn');

    var currentFilter = 'all';
    var currentSearch = '';
    var displayCount = 12;

    function getFilteredExercises() {
      return EXERCISE_DATABASE.filter(function(ex) {
        var matchesFilter = currentFilter === 'all' || ex.category === currentFilter;
        var matchesSearch = true;
        if (currentSearch) {
          var searchLower = currentSearch.toLowerCase();
          var name = (ex.name[LANG] || ex.name.en).toLowerCase();
          var desc = (ex.description[LANG] || ex.description.en).toLowerCase();
          var muscles = (ex.muscles[LANG] || ex.muscles.en).toLowerCase();
          matchesSearch = name.indexOf(searchLower) !== -1 ||
                         desc.indexOf(searchLower) !== -1 ||
                         muscles.indexOf(searchLower) !== -1;
        }
        return matchesFilter && matchesSearch;
      });
    }

    function renderExercises() {
      var filtered = getFilteredExercises();
      var toShow = filtered.slice(0, displayCount);

      if (countEl) {
        countEl.textContent = filtered.length;
      }

      grid.innerHTML = toShow.map(function(ex) {
        var diffClass = 'exercise-card__difficulty--' + ex.difficulty;
        var diffLabel = DIFFICULTY_LABELS[LANG] ? DIFFICULTY_LABELS[LANG][ex.difficulty] : ex.difficulty;
        var targets = (ex.targets[LANG] || ex.targets.en);

        var detailUrl = '/exercises/detail/?id=' + ex.id;
        return '<a href="' + detailUrl + '" class="exercise-card fade-in visible" data-id="' + ex.id + '" style="text-decoration:none;color:inherit;display:block;">' +
          '<div class="exercise-card__header">' +
            '<img src="' + ex.image + '" alt="' + (ex.name[LANG] || ex.name.en) + '" loading="lazy" width="600" height="400">' +
            '<span class="exercise-card__difficulty ' + diffClass + '">' + diffLabel + '</span>' +
          '</div>' +
          '<div class="exercise-card__body">' +
            '<div class="exercise-card__muscle">' + (ex.muscles[LANG] || ex.muscles.en) + '</div>' +
            '<h3 class="exercise-card__name">' + (ex.name[LANG] || ex.name.en) + '</h3>' +
            '<div class="exercise-card__targets">' +
              targets.map(function(t) { return '<span class="exercise-card__target">' + t + '</span>'; }).join('') +
            '</div>' +
          '</div>' +
        '</a>';
      }).join('');

      // Show/hide load more
      if (loadMoreBtn) {
        loadMoreBtn.style.display = filtered.length > displayCount ? '' : 'none';
      }
    }

    // Search
    if (searchInput) {
      var searchTimer;
      searchInput.addEventListener('input', function() {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(function() {
          currentSearch = searchInput.value.trim();
          displayCount = 12;
          renderExercises();
        }, 300);
      });
    }

    // Filter buttons
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        filterBtns.forEach(function(b) { b.classList.remove('database__filter--active'); });
        btn.classList.add('database__filter--active');
        currentFilter = btn.getAttribute('data-filter');
        displayCount = 12;
        renderExercises();
      });
    });

    // Load more
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', function() {
        displayCount += 12;
        renderExercises();
      });
    }

    // Initial render
    renderExercises();
  }

  // ============================================
  // MOVEMENT SEASON QUIZ
  // ============================================
  function initQuiz() {
    var quizBtn = document.querySelector('[data-quiz-start]');
    if (!quizBtn) return;

    var quizData = {
      en: {
        title: "Find Your Movement Season",
        questions: [
          {
            q: "How is your energy level today?",
            options: ["High & ready to go", "Moderate & steady", "Low & need rest", "Variable & unpredictable"]
          },
          {
            q: "What does your body need most right now?",
            options: ["Power & strength", "Calm & restoration", "Mobility & release", "Focus & precision"]
          },
          {
            q: "What life stage resonates with you?",
            options: ["Active & athletic", "Managing stress & workload", "Postpartum recovery", "Perimenopause or hormonal shifts"]
          }
        ],
        results: {
          "high-power-active": { season: "High Energy Week", rec: "Power Path" },
          "high-power-stress": { season: "Athletic Mode", rec: "Athlete Path" },
          "moderate-calm-stress": { season: "Stress Recovery Mode", rec: "Calm Strength Path" },
          "low-calm-postpartum": { season: "Postpartum Return", rec: "Core & Pelvic Path" },
          "low-mobility-peri": { season: "Perimenopause Strength", rec: "Longevity Path" },
          "default": { season: "Calm Strength", rec: "Calm Strength Path" }
        }
      },
      es: {
        title: "Encuentra Tu Temporada de Movimiento",
        questions: [
          {
            q: "¿Como esta tu nivel de energia hoy?",
            options: ["Alto y lista para ir", "Moderado y estable", "Bajo y necesito descanso", "Variable e impredecible"]
          },
          {
            q: "¿Que necesita mas tu cuerpo ahora?",
            options: ["Potencia y fuerza", "Calma y restauracion", "Movilidad y liberacion", "Enfoque y precision"]
          },
          {
            q: "¿Con que etapa de vida te identificas?",
            options: ["Activa y atletica", "Manejando estres y carga", "Recuperacion postparto", "Perimenopausia o cambios hormonales"]
          }
        ],
        results: {
          "default": { season: "Fuerza Calmada", rec: "Camino de Fuerza Calmada" }
        }
      },
      fr: {
        title: "Trouvez Votre Saison de Mouvement",
        questions: [
          {
            q: "Comment est votre niveau d'energie aujourd'hui?",
            options: ["Eleve et prete a partir", "Modere et stable", "Bas et besoin de repos", "Variable et imprevisible"]
          },
          {
            q: "De quoi votre corps a-t-il le plus besoin maintenant?",
            options: ["Puissance et force", "Calme et restauration", "Mobilite et liberation", "Concentration et precision"]
          },
          {
            q: "A quelle etape de vie vous identifiez-vous?",
            options: ["Active et athletique", "Gestion du stress et charge", "Recuperation post-partum", "Perimenopause ou changements hormonaux"]
          }
        ],
        results: {
          "default": { season: "Force Calme", rec: "Parcours Force Calme" }
        }
      }
    };

    quizBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openQuizModal(quizData[LANG] || quizData.en);
    });
  }

  function openQuizModal(data) {
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px);opacity:0;transition:opacity 0.3s ease;';

    var modal = document.createElement('div');
    modal.style.cssText = 'background:#faf6f0;border-radius:20px;max-width:560px;width:100%;max-height:90vh;overflow-y:auto;padding:40px;position:relative;transform:scale(0.9);transition:transform 0.3s ease;';

    var currentQ = 0;
    var answers = [];

    function renderQuestion() {
      var q = data.questions[currentQ];
      var progress = ((currentQ + 1) / data.questions.length * 100);

      modal.innerHTML =
        '<button onclick="this.closest(\'div[style]\').previousSibling||this.parentElement.parentElement.remove()" style="position:absolute;top:16px;right:16px;background:none;border:none;font-size:1.5rem;cursor:pointer;color:#888;line-height:1;" aria-label="Close">&times;</button>' +
        '<div style="margin-bottom:24px;">' +
          '<div style="font-family:\'Playfair Display\',serif;font-size:1.5rem;font-weight:700;color:#1a1a2e;margin-bottom:8px;">' + data.title + '</div>' +
          '<div style="height:4px;background:#e8e4dc;border-radius:4px;overflow:hidden;">' +
            '<div style="height:100%;width:' + progress + '%;background:linear-gradient(90deg,#c9a96e,#a68542);border-radius:4px;transition:width 0.4s ease;"></div>' +
          '</div>' +
          '<div style="font-size:0.8rem;color:#888;margin-top:6px;">' + (currentQ + 1) + ' / ' + data.questions.length + '</div>' +
        '</div>' +
        '<h3 style="font-family:\'Inter\',sans-serif;font-size:1.15rem;font-weight:600;color:#1a1a2e;margin-bottom:20px;">' + q.q + '</h3>' +
        '<div style="display:flex;flex-direction:column;gap:10px;">' +
          q.options.map(function(opt, i) {
            return '<button class="quiz-option" data-index="' + i + '" style="text-align:left;padding:16px 20px;border:2px solid #e8e4dc;border-radius:12px;background:white;font-family:\'Inter\',sans-serif;font-size:0.95rem;color:#1a1a2e;cursor:pointer;transition:all 0.2s ease;">' + opt + '</button>';
          }).join('') +
        '</div>';

      // Add hover and click events
      modal.querySelectorAll('.quiz-option').forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
          this.style.borderColor = '#c9a96e';
          this.style.background = 'rgba(201,169,110,0.05)';
        });
        btn.addEventListener('mouseleave', function() {
          this.style.borderColor = '#e8e4dc';
          this.style.background = 'white';
        });
        btn.addEventListener('click', function() {
          answers.push(parseInt(this.getAttribute('data-index')));
          currentQ++;
          if (currentQ < data.questions.length) {
            renderQuestion();
          } else {
            renderResult();
          }
        });
      });
    }

    function renderResult() {
      var seasons = [
        { en: "High Energy Week", es: "Semana de Alta Energia", fr: "Semaine Haute Energie", color: "#f59e0b", icon: "⚡" },
        { en: "Low Energy Week", es: "Semana de Baja Energia", fr: "Semaine Basse Energie", color: "#8b5cf6", icon: "🌙" },
        { en: "Stress Recovery Mode", es: "Modo Recuperacion de Estres", fr: "Mode Recuperation du Stress", color: "#6366f1", icon: "🧘" },
        { en: "Postpartum Return", es: "Retorno Postparto", fr: "Retour Post-Partum", color: "#7c9082", icon: "🌿" },
        { en: "Perimenopause Strength", es: "Fuerza en Perimenopausia", fr: "Force Perimenopause", color: "#8b5e3c", icon: "💎" },
        { en: "Calm Strength", es: "Fuerza Calmada", fr: "Force Calme", color: "#b76e79", icon: "🌊" }
      ];

      // Simple mapping based on first answer energy level
      var idx;
      if (answers[0] === 0) idx = 0;      // High energy
      else if (answers[0] === 2) idx = 1;  // Low energy
      else if (answers[1] === 1) idx = 5;  // Calm
      else if (answers[2] === 2) idx = 3;  // Postpartum
      else if (answers[2] === 3) idx = 4;  // Peri
      else idx = 2;                        // Stress

      var result = seasons[idx];

      modal.innerHTML =
        '<button onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:16px;right:16px;background:none;border:none;font-size:1.5rem;cursor:pointer;color:#888;line-height:1;" aria-label="Close">&times;</button>' +
        '<div style="text-align:center;">' +
          '<div style="font-size:3rem;margin-bottom:16px;">' + result.icon + '</div>' +
          '<div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;color:#a68542;margin-bottom:8px;font-weight:600;">Your Movement Season</div>' +
          '<h3 style="font-family:\'Playfair Display\',serif;font-size:1.75rem;font-weight:700;color:#1a1a2e;margin-bottom:16px;">' + result[LANG] + '</h3>' +
          '<div style="width:60px;height:4px;background:' + result.color + ';border-radius:2px;margin:0 auto 20px;"></div>' +
          '<p style="font-size:0.95rem;color:#555;line-height:1.7;margin-bottom:24px;max-width:400px;margin-left:auto;margin-right:auto;">' +
            getSeasonDescription(idx) +
          '</p>' +
          '<button onclick="this.closest(\'div[style]\').parentElement.parentElement.remove()" style="display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:linear-gradient(135deg,#1a1a2e,#16213e);color:white;border:none;border-radius:9999px;font-family:\'Inter\',sans-serif;font-size:0.9rem;font-weight:600;cursor:pointer;">' +
            (LANG === 'es' ? 'Explorar Mi Camino' : LANG === 'fr' ? 'Explorer Mon Parcours' : 'Explore My Path') +
            ' <span style="transition:transform 0.2s;">→</span>' +
          '</button>' +
        '</div>';
    }

    function getSeasonDescription(idx) {
      var descs = {
        en: [
          "You're in a high-energy phase. This is the time to push intensity, build power, and challenge yourself with athletic Pilates flows.",
          "Honor your low-energy phase. Focus on gentle movement, breath work, and restorative positions that support recovery.",
          "Your nervous system needs support. Slow, intentional movement with extended holds and deep breathing will serve you best.",
          "Welcome back to movement. Gentle core reconnection and pelvic floor work will rebuild your foundation safely.",
          "Strength is your superpower right now. Strategic loading supports bone density, hormone balance, and energy regulation.",
          "Find your calm power. Breath-led movement with moderate challenge builds strength without overwhelming your system."
        ],
        es: [
          "Estas en una fase de alta energia. Este es el momento de impulsar la intensidad y desafiarte con flujos atleticos de Pilates.",
          "Honra tu fase de baja energia. Enfocate en movimiento suave, trabajo de respiracion y posiciones restaurativas.",
          "Tu sistema nervioso necesita apoyo. Movimiento lento e intencional con respiracion profunda te servira mejor.",
          "Bienvenida de nuevo al movimiento. Reconexion suave del core y trabajo de suelo pelvico reconstruiran tu base.",
          "La fuerza es tu superpoder ahora. Carga estrategica apoya la densidad osea y el equilibrio hormonal.",
          "Encuentra tu poder calmado. Movimiento guiado por la respiracion construye fuerza sin abrumar tu sistema."
        ],
        fr: [
          "Vous etes dans une phase haute energie. C'est le moment de pousser l'intensite avec des flux Pilates athletiques.",
          "Honorez votre phase basse energie. Concentrez-vous sur le mouvement doux et les positions restauratrices.",
          "Votre systeme nerveux a besoin de soutien. Mouvement lent et intentionnel avec respiration profonde.",
          "Bienvenue au mouvement. Reconnexion douce du core et travail du plancher pelvien reconstruiront votre base.",
          "La force est votre superpouvoir. La charge strategique soutient la densite osseuse et l'equilibre hormonal.",
          "Trouvez votre pouvoir calme. Le mouvement guide par la respiration construit la force sans submerger votre systeme."
        ]
      };
      return (descs[LANG] || descs.en)[idx];
    }

    // Close on overlay click
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.remove();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        overlay.remove();
        document.removeEventListener('keydown', escHandler);
      }
    });

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Animate in
    requestAnimationFrame(function() {
      overlay.style.opacity = '1';
      modal.style.transform = 'scale(1)';
    });

    renderQuestion();
  }

  // ============================================
  // MARQUEE ANIMATION DUPLICATION
  // ============================================
  function initMarquee() {
    var track = document.querySelector('.marquee__track');
    if (!track) return;
    var content = track.querySelector('.marquee__content');
    if (!content) return;
    // Clone content for seamless loop
    var clone = content.cloneNode(true);
    track.appendChild(clone);
  }

  // ============================================
  // TODAY'S DROP - RANDOM SELECTION
  // ============================================
  function initTodaysDrop() {
    var dropCards = document.querySelectorAll('.drop-card');
    dropCards.forEach(function(card) {
      card.addEventListener('click', function() {
        var title = card.querySelector('.drop-card__title');
        if (title) {
          // Simple interaction feedback
          card.style.transform = 'scale(0.98)';
          setTimeout(function() {
            card.style.transform = '';
          }, 150);
        }
      });
    });
  }

  // ============================================
  // SEASON CARD INTERACTIONS
  // ============================================
  function initSeasonCards() {
    var cards = document.querySelectorAll('.season-card');
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        // Toggle active state
        cards.forEach(function(c) { c.style.borderColor = 'transparent'; });
        card.style.borderColor = 'var(--color-accent)';
      });
    });
  }

  // ============================================
  // SPORT CARD TILT EFFECT
  // ============================================
  function initSportCards() {
    var cards = document.querySelectorAll('.sport-card');

    cards.forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var y = (e.clientY - rect.top) / rect.height;
        var rotateX = (y - 0.5) * -8;
        var rotateY = (x - 0.5) * 8;
        card.style.transform = 'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-6px)';
      });

      card.addEventListener('mouseleave', function() {
        card.style.transform = '';
      });
    });
  }

  // ============================================
  // NEWSLETTER FORM
  // ============================================
  function initNewsletter() {
    var form = document.querySelector('.newsletter__form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = form.querySelector('.newsletter__input');
      var btn = form.querySelector('.btn');
      var email = input.value.trim();

      if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        input.style.borderColor = '#e74c3c';
        setTimeout(function() { input.style.borderColor = ''; }, 2000);
        return;
      }

      // Success feedback
      var originalText = btn.textContent;
      btn.textContent = LANG === 'es' ? '¡Enviado!' : LANG === 'fr' ? 'Envoye!' : 'Sent!';
      btn.style.background = 'linear-gradient(135deg, #7c9082, #a8bfae)';
      input.value = '';

      setTimeout(function() {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
    });
  }

  // ============================================
  // PRICING TOGGLE (if monthly/annual exists)
  // ============================================
  function initPricing() {
    var cards = document.querySelectorAll('.pricing-card');
    cards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        cards.forEach(function(c) {
          if (c !== card && !c.classList.contains('pricing-card--featured')) {
            c.style.opacity = '0.7';
          }
        });
      });
      card.addEventListener('mouseleave', function() {
        cards.forEach(function(c) { c.style.opacity = ''; });
      });
    });
  }

  // ============================================
  // LAZY LOADING IMAGES
  // ============================================
  function initLazyImages() {
    if ('loading' in HTMLImageElement.prototype) return; // Native support

    var images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
      var imgObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            imgObserver.unobserve(img);
          }
        });
      });
      images.forEach(function(img) { imgObserver.observe(img); });
    }
  }

  // ============================================
  // ACCESSIBILITY ENHANCEMENTS
  // ============================================
  function initA11y() {
    // Skip to content
    var skipLink = document.querySelector('.skip-to-content');
    if (skipLink) {
      skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    }

    // Focus visible management
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });

    document.addEventListener('mousedown', function() {
      document.body.classList.remove('keyboard-nav');
    });
  }

  // ============================================
  // PERFORMANCE: DEFER NON-CRITICAL
  // ============================================
  function onDOMReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  // ============================================
  // INITIALIZE EVERYTHING
  // ============================================
  onDOMReady(function() {
    initNavigation();
    initBackToTop();
    initHeroParticles();
    initMarquee();
    initTodaysDrop();
    initScrollAnimations();
    initCounters();
    initSeasonCards();
    initSportCards();
    initExerciseDatabase();
    initQuiz();
    initNewsletter();
    initPricing();
    initLazyImages();
    initA11y();
  });

})();
