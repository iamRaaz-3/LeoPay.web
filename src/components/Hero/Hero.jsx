import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero__rays">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="hero__ray" />
        ))}
      </div>

      <div className="hero__globe" />

    </section>
  );
}
