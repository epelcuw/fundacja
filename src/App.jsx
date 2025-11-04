import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ScrollContainer from './components/ScrollContainer';
import CustomCursor from './components/CustomCursor';
import imageOne from './assets/image1.jpg';
import imageTwo from './assets/image2.jpg';
import imageThree from './assets/image3.jpg';
import imageFour from './assets/image4.jpg';

const sectionScenes = [
  {
    id: 'home',
    image: imageOne,
    position: 'center center',
  },
  {
    id: 'about',
    image: imageTwo,
    position: 'center top',
  },
  {
    id: 'videos',
    image: imageThree,
    position: 'center 30%',
  },
  {
    id: 'podcasts',
    image: imageFour,
    position: 'center',
  },
  {
    id: 'debates',
    image: imageOne,
    position: 'center 80%',
  },
  {
    id: 'campaigns',
    image: imageTwo,
    position: 'center bottom',
  },
  {
    id: 'support',
    image: imageFour,
    position: 'center 60%',
  },
  {
    id: 'contact',
    image: imageFour,
    position: 'center 20%',
  },
];

const sectionVisuals = sectionScenes.reduce((acc, scene) => {
  acc[scene.id] = scene;
  return acc;
}, {});

const pillars = [
  {
    title: 'Badania i diagnoza',
    description: 'Zbieramy historie pacjentów i analizujemy dane, aby precyzyjnie określić wyzwania systemowe.',
  },
  {
    title: 'Projektowanie usług',
    description: 'Tworzymy narzędzia i procesy, które upraszczają drogę pacjenta od diagnozy po rehabilitację.',
  },
  {
    title: 'Rzecznictwo',
    description: 'Współpracujemy z instytucjami publicznymi, zapewniając obecność głosu pacjentów w dialogu.',
  },
];

const videoCategories = [
  {
    label: 'Profilaktyka',
    summary: 'Seria krótkich materiałów edukacyjnych o badaniach przesiewowych i zdrowym stylu życia.',
  },
  {
    label: 'Choroby przewlekłe',
    summary: 'Wiedza praktyczna dla pacjentów i rodzin na temat radzenia sobie z leczeniem długoterminowym.',
  },
  {
    label: 'Eksperci',
    summary: 'Wywiady z lekarzami, psychologami i koordynatorami opieki o najnowszych rozwiązaniach.',
  },
];

const filters = ['Temat', 'Długość', 'Data publikacji'];

const podcastEpisodes = [
  {
    title: 'Ścieżka Pacjenta: od diagnozy do terapii',
    duration: '28:15',
    description: 'Rozmawiamy o tym, jak skrócić czas od pierwszych objawów do specjalistycznej opieki.',
  },
  {
    title: 'Jak rozmawiać z lekarzem o planie leczenia',
    duration: '24:02',
    description: 'Praktyczne wskazówki dla pacjentów i rodzin dotyczące wspólnego podejmowania decyzji.',
  },
];

const webinarRecords = [
  {
    title: 'Koordynacja opieki w praktyce',
    resources: 'Materiały: notatki + prezentacja (PDF)',
  },
  {
    title: 'Współpraca organizacji pacjenckich z samorządami',
    resources: 'Materiały: schemat procesu + checklista (PDF)',
  },
];

const projects = [
  {
    title: 'Kampania „Zauważ objawy”',
    summary: 'Ogólnopolska kampania o wczesnej diagnostyce chorób neurologicznych.',
  },
  {
    title: 'Projekt „Szpital Przyjazny Pacjentom”',
    summary: 'Audyt i wdrażanie standardów komunikacji w pięciu placówkach publicznych.',
  },
];

const supportOptions = [
  { label: 'Darowizna jednorazowa', description: 'Wesprzyj nas przelewem lub BLIK, aby rozwijać bibliotekę materiałów.' },
  { label: 'Darowizna stała', description: 'Ustaw comiesięczne wsparcie i pomóż nam planować działania długofalowo.' },
  { label: 'Wolontariat', description: 'Dołącz do zespołu ds. kontaktu z pacjentami lub wsparcia komunikacji.' },
  { label: 'Sponsoring', description: 'Porozmawiajmy o partnerstwie przy projekcie edukacyjnym lub kampanii.' },
];

const App = () => {
  const [activeScene, setActiveScene] = useState(sectionScenes[0].id);

  const getSectionStyle = (id) => {
    const visual = sectionVisuals[id];
    if (!visual) {
      return undefined;
    }

    return {
      '--section-image': `url(${visual.image})`,
      '--section-overlay': visual.overlay,
      '--section-position': visual.position || 'center center',
      '--section-opacity': String(visual.opacity ?? 0.35),
    };
  };

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-scene]'));
    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const sceneId = visible[0].target.getAttribute('data-scene');
          if (sceneId) {
            setActiveScene(sceneId);
          }
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app" data-cursor="#50d9d5">
      <CustomCursor />
      <div className="stage stage--global" aria-hidden="true">
        {sectionScenes.map(({ id, image, overlay, position }) => (
          <div
            key={id}
            className={`stage__frame ${activeScene === id ? 'is-active' : ''}`}
            style={{
              backgroundImage: `${overlay}, url(${image})`,
              backgroundPosition: position || 'center center',
            }}
          />
        ))}
        <div className="stage__scrim" />
      </div>
      <Header />
      <ScrollContainer>
        <main className="content">
          <section
            id="home"
            className="block block--hero"
            data-cursor="#50d9d5"
            data-scene="home"
            style={getSectionStyle('home')}
          >
            <div className="hero__overlay">
              <div className="block__lead">
                <span className="block__eyebrow" data-cursor="#8f3608">Fundacja Pacjencka</span>
                <h1>Art direction dla zmiany w ochronie zdrowia.</h1>
                <p>
                  Tworzymy doświadczenia edukacyjne, które pomagają pacjentom odnaleźć się w systemie. Projektujemy wspólnie
                  z tymi, których głosu dotąd nie słyszano.
                </p>
              </div>
              <div className="hero__cta-stack">
                <a href="#support" className="btn hero__cta" data-cursor="#1b2f54">
                  Wesprzyj działania
                </a>
                <a href="#videos" className="btn hero__cta" data-cursor="#1b2f54">
                  Odkryj materiały
                </a>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="block block--mission"
            data-cursor="#1b2f54"
            data-scene="about"
            style={getSectionStyle('about')}
          >
            <div className="block__lead">
              <span className="block__eyebrow" data-cursor="#8f3608">O nas</span>
              <h2>Projektujemy rozwiązania zdrowotne wspólnie z pacjentami.</h2>
              <p>
                Każdy program rozpoczynamy od warsztatów współtworzenia. Tworzymy mapy usług, które jasno wskazują odpowiedzialność
                instytucji i mierzą dobrostan pacjentów. Wyniki przekładamy na konkretne rekomendacje dla decydentów.
              </p>
            </div>
            <ul className="about__list">
              <li data-cursor="#2596be">Jesteśmy interdyscyplinarnym zespołem badaczy, projektantów i rzeczniczek zdrowia.</li>
              <li data-cursor="#2596be">Działamy w partnerstwie z organizacjami pacjenckimi oraz jednostkami publicznymi.</li>
              <li data-cursor="#2596be">Stawiamy na transparentność danych i współpracę międzysektorową.</li>
            </ul>
          </section>

          <section
            id="videos"
            className="block block--programs"
            data-cursor="#1b2f54"
            data-scene="videos"
            style={getSectionStyle('videos')}
          >
            <div className="block__lead">
              <span className="block__eyebrow" data-cursor="#8f3608">Biblioteka Wideo</span>
              <h2>Edukacja wideo, która odpowiada na realne pytania pacjentów.</h2>
              <p>Przeglądaj według kategorii lub skorzystaj z filtrów, aby szybko znaleźć nagranie, którego potrzebujesz.</p>
            </div>
            <div className="filters">
              {filters.map((filter) => (
                <button key={filter} type="button" className="filter" data-cursor="#2596be">
                  {filter}
                </button>
              ))}
            </div>
            <div className="block__grid block__grid--three">
              {videoCategories.map((item) => (
                <article key={item.label} className="tile tile--dense" data-cursor="#50d9d5">
                  <h3>{item.label}</h3>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="podcasts"
            className="block block--podcasts"
            data-cursor="#1b2f54"
            data-scene="podcasts"
            style={getSectionStyle('podcasts')}
          >
            <div className="block__lead">
              <span className="block__eyebrow" data-cursor="#8f3608">Podcasty</span>
              <h2>Rozmowy z pacjentami, ekspertami i decydentami.</h2>
              <p>Posłuchaj na ulubionej platformie lub bezpośrednio na stronie.</p>
              <div className="podcast__platforms">
                <a href="#spotify" data-cursor="#8f3608">Spotify</a>
                <a href="#apple" data-cursor="#8f3608">Apple Podcasts</a>
                <a href="#rss" data-cursor="#8f3608">RSS</a>
              </div>
            </div>
            <div className="podcast__list">
              {podcastEpisodes.map((episode) => (
                <article key={episode.title} className="podcast__item" data-cursor="#29212e">
                  <div>
                    <h3>{episode.title}</h3>
                    <p>{episode.description}</p>
                  </div>
                  <span className="podcast__duration">{episode.duration}</span>
                  <button type="button" className="btn btn--outline" data-cursor="#8f3608">
                    Odtwórz
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section
            id="debates"
            className="block block--debates"
            data-cursor="#1b2f54"
            data-scene="debates"
            style={getSectionStyle('debates')}
          >
            <div className="block__lead">
              <span className="block__eyebrow" data-cursor="#8f3608">Debaty i webinary</span>
              <h2>Eksperckie spotkania z możliwością pobrania materiałów.</h2>
              <p>
                Zobacz archiwum debat i webinarów, a także materiały uzupełniające do pobrania.
              </p>
            </div>
            <div className="debate__list">
              {webinarRecords.map((item) => (
                <article key={item.title} className="debate__item" data-cursor="#29212e">
                  <h3>{item.title}</h3>
                  <p>{item.resources}</p>
                  <div className="debate__actions">
                    <a href="#watch" className="btn btn--outline" data-cursor="#2596be">
                      Oglądaj nagranie
                    </a>
                    <a href="#download" className="btn btn--solid" data-cursor="#2596be">
                      Pobierz materiały
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="campaigns"
            className="block block--campaigns"
            data-cursor="#1b2f54"
            data-scene="campaigns"
            style={getSectionStyle('campaigns')}
          >
            <div className="block__lead">
              <span className="block__eyebrow" data-cursor="#8f3608">Kampanie i projekty</span>
              <h2>Wspólnie z partnerami tworzymy rozwiązania systemowe.</h2>
            </div>
            <div className="block__grid block__grid--two">
              {projects.map((project) => (
                <article key={project.title} className="tile" data-cursor="#2596be">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <a href="#video" className="tile__link" data-cursor="#8f3608">
                    Zobacz nagranie
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section
            id="support"
            className="block block--support"
            data-cursor="#1b2f54"
            data-scene="support"
            style={getSectionStyle('support')}
          >
            <div className="block__lead">
              <span className="block__eyebrow" data-cursor="#8f3608">Wesprzyj nas</span>
              <h2>Twoja pomoc pozwala nam udostępniać darmową wiedzę każdemu pacjentowi.</h2>
              <p>Wybierz formę wsparcia dopasowaną do Ciebie i zobacz, jak wykorzystamy Twoją darowiznę.</p>
            </div>
            <div className="block__grid block__grid--two">
              {supportOptions.map((option) => (
                <article key={option.label} className="tile tile--dense" data-cursor="#2596be">
                  <h3>{option.label}</h3>
                  <p>{option.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="block block--contact"
            data-cursor="#1b2f54"
            data-scene="contact"
            style={getSectionStyle('contact')}
          >
            <div className="block__lead">
              <span className="block__eyebrow" data-cursor="#8f3608">Kontakt</span>
              <h2>Porozmawiajmy o współpracy lub wsparciu konkretnych grup pacjentów.</h2>
              <p>Wypełnij formularz, a nasz zespół odpowie w ciągu dwóch dni roboczych.</p>
            </div>
            <form className="contact__form" data-cursor="#2596be">
              <label>
                Imię i nazwisko
                <input type="text" name="name" placeholder="Twoje imię i nazwisko" required data-cursor="#2596be" />
              </label>
              <label>
                E-mail
                <input type="email" name="email" placeholder="nazwa@fundacja.org" required data-cursor="#2596be" />
              </label>
              <label>
                Temat
                <input type="text" name="subject" placeholder="Temat wiadomości" data-cursor="#2596be" />
              </label>
              <label>
                Wiadomość
                <textarea name="message" rows="4" placeholder="Napisz, w czym możemy pomóc" required data-cursor="#2596be" />
              </label>
              <button type="submit" className="btn btn--solid" data-cursor="#2596be">
                Wyślij
              </button>
            </form>
            <div className="contact__meta">
              <p data-cursor="#8f3608">Obserwuj nas:</p>
              <div className="contact__socials">
                <a href="#instagram" data-cursor="#2596be">Instagram</a>
                <a href="#facebook" data-cursor="#2596be">Facebook</a>
                <a href="#linkedin" data-cursor="#2596be">LinkedIn</a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer" data-cursor="#29212e">
          <div>
            <h4>Fundacja Pacjencka</h4>
            <p>ul. Zdrowa 12, 00-100 Warszawa</p>
          </div>
          <div className="footer__links">
            <a href="mailto:kontakt@fundacjapacjencka.org" data-cursor="#50d9d5">
              kontakt@fundacjapacjencka.org
            </a>
            <a href="tel:+48123456789" data-cursor="#50d9d5">
              +48 123 456 789
            </a>
          </div>
        </footer>
      </ScrollContainer>
    </div>
  );
};

export default App;
