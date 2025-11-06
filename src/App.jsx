import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ScrollContainer from './components/ScrollContainer';
import CustomCursor from './components/CustomCursor';

const commitments = [
  'Wspieramy pacjentów w zrozumieniu diagnozy, planu leczenia i profilaktyki.',
  'Organizujemy szkolenia dla personelu medycznego, by komunikacja była bardziej empatyczna.',
  'Promujemy telemedycynę i bezpieczną wymianę informacji, by ułatwić kontakt ze specjalistą.',
  'Budujemy mosty między pacjentami, lekarzami i placówkami – w całym kraju.',
  'Działamy na rzecz równego dostępu do wiedzy, opieki i innowacyjnych technologii medycznych.',
  'Koncentrujemy się na bezpieczeństwie, jakości i partnerskim podejściu w ochronie zdrowia.',
];

const focusAreas = [
  {
    title: 'Edukacja pacjentów',
    description: 'Tworzymy materiały i warsztaty, które tłumaczą zawiłe procesy leczenia w prosty sposób.',
  },
  {
    title: 'Komunikacja medyczna',
    description: 'Wspieramy placówki w projektowaniu ścieżek informacyjnych i narzędzi kontaktu z pacjentem.',
  },
  {
    title: 'Technologie zdrowotne',
    description: 'Testujemy rozwiązania telemedyczne i promujemy bezpieczną wymianę danych medycznych.',
  },
];

const podcastEpisodes = [
  {
    title: 'Ścieżka pacjenta: od diagnozy do terapii',
    duration: '28:15',
    description: 'Jak skrócić czas od pierwszych objawów do specjalistycznej opieki — rozmowa z pacjentką onkologiczną i lekarzem.',
    url: 'https://example.com/podcast/sciezka-pacjenta',
  },
  {
    title: 'Jak rozmawiać o planie leczenia',
    duration: '24:02',
    description: 'Praktyczne wskazówki dla pacjentów i rodzin dotyczące wspólnego podejmowania decyzji terapeutycznych.',
    url: 'https://example.com/podcast/plan-leczenia',
  },
  {
    title: 'Technologie w służbie pacjenta',
    duration: '26:48',
    description: 'Co zmienia telemedycyna i jak przygotować się do zdalnej konsultacji – doświadczenia pacjentów i ekspertów IT.',
    url: 'https://example.com/podcast/telemedycyna',
  },
];

const webinarRecords = [
  {
    title: 'Koordynacja opieki w praktyce',
    resources: 'Materiały do pobrania: notatki + prezentacja (PDF).',
  },
  {
    title: 'Współpraca organizacji pacjenckich z samorządami',
    resources: 'Materiały do pobrania: schemat procesu + checklista (PDF).',
  },
];

const projects = [
  {
    title: 'Zdrowie psychiczne zaczyna się w jelitach! Kampania informacyjna',
    summary:
      'Kurs Mikrobioty nie tylko dla psychoterapeutów to projekt, którego celem jest dostarczenie uczestnikom wiedzy i praktycznych narzędzi, które mogą być wykorzystane w codziennej pracy z pacjentami, a także promowanie zdrowego stylu życia jako kluczowego elementu profilaktyki i leczenia zaburzeń psychicznych.',
  },
  {
    title: 'Pediatria – najnowsze rekomendacje i wytyczne.',
    summary: 'Audyt i wdrażanie standardów komunikacji w pięciu placówkach publicznych.',
  },
];

const supportOptions = [
  {
    label: 'Darowizna jednorazowa',
    description: 'Wesprzyj nas przelewem lub BLIK, aby rozwijać bibliotekę materiałów edukacyjnych.',
  },
  {
    label: 'Darowizna stała',
    description: 'Ustaw comiesięczne wsparcie i pomóż nam planować działania długofalowo.',
  },
  {
    label: 'Wolontariat',
    description: 'Dołącz do zespołu ds. kontaktu z pacjentami lub wsparcia komunikacji.',
  },
  {
    label: 'Sponsoring',
    description: 'Porozmawiajmy o partnerstwie przy projekcie edukacyjnym lub kampanii społecznej.',
  },
];

const App = () => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-scene]'));
    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
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
      <Header />
      <ScrollContainer>
        <main className="content">
          <section id="home" className="section section--hero" data-scene="home">
            <div className="section__inner hero__inner">
              <div className="hero__copy">
                <h1 className="hero__title">Wyrównujemy szanse pacjentów w drodze do zdrowia.</h1>
                <p className="section__description">
                  Działamy, by komunikacja w ochronie zdrowia była jasna i partnerska, a każdy pacjent miał dostęp do rzetelnych
                  informacji oraz nowoczesnych narzędzi — niezależnie od wieku, miejsca zamieszkania czy statusu społecznego.
                </p>
              </div>
              <div className="hero__aside">
                <div className="hero__visual">
                  <span className="section__label">Edukacja</span>
                </div>
                <div className="hero__cta-stack">
                  <a href="#support" className="btn btn--primary hero__cta" data-cursor="#572cf2">
                    Wesprzyj działania
                  </a>
                  <a href="#podcasts" className="btn btn--ghost hero__cta" data-cursor="#572cf2">
                    Odkryj materiały
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="section section--tone-dark" data-scene="about">
            <div className="section__inner section__split">
              <header className="section__header">
                <span className="section__eyebrow" data-cursor="#572cf2">Dlaczego działamy</span>
                <h2 className="section__title">Konsekwentnie podnosimy jakość komunikacji i edukacji zdrowotnej.</h2>
                <p className="section__description">
                  Łączymy pacjentów, lekarzy oraz instytucje, promując dialog, edukację i rozwiązania telemedyczne. Nasze działania
                  wyrównują szanse w dostępie do wiedzy medycznej i nowoczesnych narzędzi zdrowotnych.
                </p>
              </header>
              <div className="section__content">
                <ul className="list list--bulleted">
                  {commitments.map((item) => (
                    <li key={item} data-cursor="#572cf2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="section section--tone-canary" data-scene="focus">
            <div className="section__inner">
              <header className="section__header">
                <span className="section__eyebrow" data-cursor="#572cf2">Nasze kierunki</span>
                <h2 className="section__title">Łączymy edukację, technologię i rzecznictwo.</h2>
                <p className="section__description">
                  Projektujemy działania w sposób modułowy, aby pacjenci i zespoły medyczne mogli korzystać z nich natychmiast.
                </p>
              </header>
              <div className="cards cards--grid">
                {focusAreas.map((item, index) => (
                  <article key={item.title} className="card" data-cursor="#572cf2">
                    <span className="card__index">0{index + 1}</span>
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__description">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="podcasts" className="section section--podcasts" data-scene="podcasts">
            <div className="section__inner">
              <header className="section__header">
                <span className="section__eyebrow" data-cursor="#572cf2">Podcasty</span>
                <h2 className="section__title">Rozmowy z pacjentami, ekspertami i decydentami.</h2>
                <p className="section__description">
                  Posłuchaj inspirujących historii bezpośrednio na naszej stronie.
                </p>
               
              </header>
              <div className="cards cards--podcasts">
                {podcastEpisodes.map((episode, index) => (
                  <article key={episode.title} className="podcast-card" data-cursor="#572cf2">
                    <span className="podcast-card__number">0{index + 1}</span>
                    <div className="podcast-card__body">
                      <h3 className="podcast-card__title">{episode.title}</h3>
                      <p className="podcast-card__description">{episode.description}</p>
                    </div>
                    <div className="podcast-card__footer">
                      <span className="podcast-card__duration">{episode.duration}</span>
                      <a
                        href={episode.url}
                        className="podcast-card__cta"
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="#572cf2"
                      >
                        Posłuchaj
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="debates" className="section section--tone-dark" data-scene="debates">
            <div className="section__inner">
              <header className="section__header">
                <span className="section__eyebrow" data-cursor="#572cf2">Debaty i webinary</span>
                <h2 className="section__title">Eksperckie spotkania z możliwością pobrania materiałów.</h2>
                <p className="section__description">
                  Analizujemy aktualne wyzwania systemowe i udostępniamy konkretne rekomendacje dla partnerów.
                </p>
              </header>
              <div className="cards cards--grid">
                {webinarRecords.map((item) => (
                  <article key={item.title} className="card card--program" data-cursor="#572cf2">
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__description">{item.resources}</p>
                    <div className="card__actions">
                      <a href="#watch" className="btn btn--ghost" data-cursor="#572cf2">Oglądaj nagranie</a>
                      <a href="#download" className="btn btn--primary" data-cursor="#572cf2">Pobierz materiały</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="campaigns" className="section section--tone-gray" data-scene="campaigns">
            <div className="section__inner">
              <header className="section__header">
                <span className="section__eyebrow" data-cursor="#572cf2">Kampanie i projekty</span>
                <h2 className="section__title">Współtworzymy inicjatywy z partnerami publicznymi i społecznymi.</h2>
              </header>
              <div className="cards cards--grid">
                {projects.map((project) => (
                  <article key={project.title} className="card card--light" data-cursor="#572cf2">
                    <h3 className="card__title">{project.title}</h3>
                    <p className="card__description">{project.summary}</p>
                    <a href="#video" className="tag tag--link" data-cursor="#572cf2">Zobacz nagranie</a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="support" className="section section--tone-aqua" data-scene="support">
            <div className="section__inner">
              <header className="section__header">
                <span className="section__eyebrow" data-cursor="#572cf2">Wesprzyj nas</span>
                <h2 className="section__title">Twoja pomoc pozwala nam udostępniać darmową wiedzę każdemu pacjentowi.</h2>
              </header>
              <div className="cards cards--grid">
                {supportOptions.map((option) => (
                  <article key={option.label} className="card card--warm" data-cursor="#572cf2">
                    <h3 className="card__title">{option.label}</h3>
                    <p className="card__description">{option.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="section section--tone-light" data-scene="contact">
            <div className="section__inner section__split">
              <div className="section__header">
                <span className="section__eyebrow" data-cursor="#572cf2">Kontakt</span>
                <h2 className="section__title">Porozmawiajmy o współpracy lub wsparciu konkretnych grup pacjentów.</h2>
                <p className="section__description">Wypełnij formularz, a nasz zespół odpowie w ciągu dwóch dni roboczych.</p>
              </div>
              <form className="contact__form" data-cursor="#572cf2">
                <label>
                  Imię i nazwisko
                  <input type="text" name="name" placeholder="Twoje imię i nazwisko" required data-cursor="#572cf2" />
                </label>
                <label>
                  E-mail
                  <input type="email" name="email" placeholder="nazwa@fundacja.org" required data-cursor="#572cf2" />
                </label>
                <label>
                  Temat
                  <input type="text" name="subject" placeholder="Temat wiadomości" data-cursor="#572cf2" />
                </label>
                <label>
                  Wiadomość
                  <textarea name="message" rows="4" placeholder="Napisz, w czym możemy pomóc" required data-cursor="#572cf2" />
                </label>
                <button type="submit" className="btn btn--primary" data-cursor="#572cf2">
                  Wyślij
                </button>
              </form>
            </div>
          </section>

          <footer className="footer" data-cursor="#572cf2">
            <div>
              <h4>Instytut Wspierania i Edukacji Pacjentów</h4>
              <p>ul. Kasprzaka 6 , 00-100 Warszawa</p>
            </div>
            <div className="footer__links">
              <a href="mailto:kontakt@fundacjapacjencka.org" data-cursor="#572cf2">
                kontakt@fundacjapacjencka.org
              </a>
              <a href="tel:+48123456789" data-cursor="#572cf2">
                +48 123 456 789
              </a>
            </div>
          </footer>
        </main>
      </ScrollContainer>
    </div>
  );
};

export default App;
