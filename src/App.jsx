import { SCENES } from './data/scenes';
import { useCarouselEffects } from './hooks/useCarouselEffects';

const links = [
  { label: 'Article', href: 'https://tympanus.net/codrops/?p=93330' },
  { label: 'Code', href: 'https://github.com/SAHIBAKHATOON/framer_motion' },
  { label: 'All demos', href: 'https://tympanus.net/codrops/demos/' },
];

const tags = [
  { label: '#3d', href: 'https://tympanus.net/codrops/demos/?tag=3d' },
  { label: '#carousel', href: 'https://tympanus.net/codrops/demos/?tag=carousel' },
  { label: '#page-transition', href: 'https://tympanus.net/codrops/demos/?tag=page-transition' },
];

const getImageUrl = (fileName) => `/assets/${fileName}`;

function App() {
  useCarouselEffects();

  return (
    <div className="bg-carousel-bg text-white min-h-screen">
      <header className="frame">
        <h1 className="frame__title">On-Scroll 3D Carousel</h1>
        <nav className="frame__links">
          {links.map((link) => (
            <a key={link.label} className="line" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="frame__tags">
          {tags.map((tag) => (
            <a key={tag.label} className="line" href={tag.href} target="_blank" rel="noreferrer">
              {tag.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="smooth-content">
        <div className="scene-wrapper">
          {SCENES.map((scene) => (
            <section key={scene.id} className="scene" data-radius={scene.radius}>
              <h2 className="scene__title" data-speed="0.7">
                <a className="line" href={`#${scene.id}`}>
                  <span>{scene.title}</span>
                </a>
              </h2>
              <div className="carousel">
                {scene.carouselImages.map((image) => (
                  <div key={image} className="carousel__cell">
                    <div className="card" style={{ '--img': `url(${getImageUrl(image)})` }}>
                      <div className="card__face card__face--front" />
                      <div className="card__face card__face--back" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <div className="preview-wrapper">
        {SCENES.map((scene) => (
          <section key={scene.id} className="preview" id={scene.id}>
            <header className="preview__header">
              <h2 className="preview__title">
                <span>{scene.title}</span>
              </h2>
              <button className="preview__close" type="button">
                Close ×
              </button>
            </header>
            <div className="grid">
              {scene.previewItems.map((item, index) => {
                const captionId = `${scene.id}-caption-${index}`;
                return (
                  <figure key={captionId} className="grid__item" role="img" aria-labelledby={captionId}>
                    <div className="grid__item-image" style={{ backgroundImage: `url(${getImageUrl(item.image)})` }} />
                    <figcaption className="grid__item-caption" id={captionId}>
                      <h3>{item.name}</h3>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      {/* Fixed Right-Side Promo Text */}
<div className="fixed right-4 bottom-6 w-64 text-right text-white text-sm leading-tight font-mono tracking-wide">
  <p>
    FOCUS ON YOUR CLIENTS,<br />
    LEAVE HOSTING CONFIG TO<br />
    CLOUDWAYS. GET <span className="font-bold">50% OFF</span> FOR<br />
    3 MONTHS + 50 FREE<br />
    MIGRATIONS.
  </p>
</div>

    </div>
    
  );
}

export default App;
