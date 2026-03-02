import Section from "@/components/Section";
import ShimmerButton from "@/components/ShimmerButton";
import Logo from "@/public/logo.png.svg"; 

<img
  src="/logo.svg"
  alt="Logo"
  style={{ filter: "brightness(0) invert(1)" }}
  className="h-12 w-auto"
/>

const siteConfig = {
  name: "Devin Stoll",
  location: "Amberg & Umgebung",
  phoneDisplay: "+4915117571915",
  phoneHref: "tel:+4915117571915",
  email: "devinstoll.10@gmail.com",
  address: "Am Wäldchen 1, 92245 Kümmersbruck",
  whatsappNumber: "+4915117571915",
  whatsappHref:
    "whatsappHref:https://wa.me/+4915117571915?text=Hey%20Devin!",

  hero: {
    headline: "Fahrzeugaufbereitung in Amberg",
    subline: "",
  },
  trustPoints: [
    "Termine nach Absprache",
    "Sauber, fair & transparent",
    "Amberg & Umgebung",
  ],
  services: [
    {
      title: "Innenaufbereitung",
      price: "ab 89 €",
      description: "Innenraumreinigung.",
    },
    {
      title: "Lackaufbereitung & Politur",
      price: "ab 149 €",
      description: "Glanzauffrischung nach Zustand.",
    },
    {
      title: "Rost-/Kratzer-Aufbereitung",
      price: "ab 59 €",
      description: "Nach Zustand & Absprache.",
    },
    {
      title: "Scheibenversiegelung",
      price: "ab 39 €",
      description: "Abperleffekt für klare Sicht.",
    },
    {
      title: "Lack-/Verdeckversiegelung",
      price: "ab 79 €",
      description: "Schutzschicht mit Abperleffekt.",
    },
    {
      title: "Komplettpaket Innen + Außen",
      price: "ab 219 €",
      description: "Rundum innen & außen.",
    },
  ],
  pricingNote:
    "Richtwerte ab-Preise. Größe & Zustand entscheiden. Finale Einschätzung gern per Foto.",
  process: [
    {
      title: "Kontakt",
      description: "Anruf oder WhatsApp.",
    },
    {
      title: "Kurze Einschätzung",
      description: "Fotos möglich, kurze Rückmeldung.",
    },
    {
      title: "Termin & Aufbereitung",
      description: "Termin nach Absprache.",
    },
  ],
  faqs: [
    {
      question: "Wie lange dauert eine Aufbereitung?",
      answer:
        "Meist 2 bis 6 Stunden, je nach Paket und Zustand.",
    },
    {
      question: "Wovon hängt der Preis ab?",
      answer:
        "Größe, Zustand und gewünschte Leistungen.",
    },
    {
      question: "Wie bekomme ich einen Termin?",
      answer:
        "Anrufen oder WhatsApp. Termine nach Absprache, meist abends/ wochenends.",
    },
    {
      question: "Was sollte ich vorher wissen/vorbereiten?",
      answer:
        "Persönliche Gegenstände entfernen, Hinweise auf empfindliche Stellen reichen.",
    },
  ],
  legal: {
    legalForm: "Einzelunternehmen (Kleingewerbe)",
    vatId: "Keine USt-IdNr. vorhanden.",
    hosting: "Netlify, Inc. (USA)",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0d10] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(58,198,205,0.28),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-5%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,18,23,0.9),rgba(11,13,16,0.95))]" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-6 text-center">
          <div>
            // NACHHER:
<div className="mt-2 flex flex-col items-center justify-center gap-3">
  <img
    src="/logo.png.svg"
    alt="Devin Stoll Logo"
    className="h-16 w-auto"
  />
  <p className="text-lg font-semibold">{siteConfig.name}</p>

            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 pb-28 md:pb-0">
        <Section id="hero" className="pt-6 pb-10 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {siteConfig.hero.headline}
            </h1>
            {siteConfig.hero.subline ? (
              <p className="mt-4 text-lg text-white/70 md:text-xl">
                {siteConfig.hero.subline}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <ShimmerButton href={siteConfig.phoneHref}>
                Jetzt anrufen
              </ShimmerButton>
              <ShimmerButton
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="border-[#3ac6cd]/35 bg-[#0c1419] text-white shadow-[0_12px_30px_-20px_rgba(58,198,205,0.55)] hover:shadow-[0_16px_36px_-20px_rgba(58,198,205,0.7)]"
              >
                WhatsApp schreiben
              </ShimmerButton>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/60">
              {siteConfig.trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3ac6cd]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="leistungen"
          title="Leistungen im Überblick."
          className="pt-8 md:pt-16"
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {siteConfig.services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <span className="text-sm font-semibold text-[#3ac6cd]">
                    {service.price}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-white/60">
            {siteConfig.pricingNote}
          </p>
        </Section>

        <Section
          id="ablauf"
          title="Drei einfache Schritte."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-3xl font-semibold text-[#3ac6cd]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="faq"
          title="Antworten auf Alles."
        >
          <div className="space-y-4">
            {siteConfig.faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-white/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </Section>

      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto grid max-w-6xl items-start gap-6 px-6 py-10 text-xs text-white/60 md:grid-cols-2">
          <details
            id="impressum"
            className="self-start rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <summary className="cursor-pointer text-sm font-semibold text-white">
              Impressum
            </summary>
            <div className="mt-4 space-y-2">
              <p>{siteConfig.name}</p>
              <p>{siteConfig.address}</p>
              <p className="mt-3">
                Kontakt: {siteConfig.email}, {siteConfig.phoneDisplay}
              </p>
              <p className="mt-3">Rechtsform: {siteConfig.legal.legalForm}</p>
              <p>USt-IdNr.: {siteConfig.legal.vatId}</p>
            </div>
          </details>
          <details
            id="datenschutz"
            className="self-start rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <summary className="cursor-pointer text-sm font-semibold text-white">
              Datenschutz
            </summary>
            <div className="mt-4 space-y-3">
              <p>
                Verantwortlich: {siteConfig.name}, {siteConfig.address},{" "}
                {siteConfig.email}
              </p>
              <p>
                Hosting: {siteConfig.legal.hosting}. Beim Aufruf werden
                Server-Logs (IP-Adresse, Datum/Uhrzeit, URL, User-Agent)
                verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Kontaktaufnahme per E-Mail/Telefon/WhatsApp: Angaben werden zur
                Bearbeitung der Anfrage genutzt (Art. 6 Abs. 1 lit. b DSGVO).
              </p>
              <p>
                WhatsApp kann Daten in Drittländer übermitteln. Weitere Infos
                beim Anbieter.
              </p>
              <p>
                Rechte: Auskunft, Berichtigung, Löschung, Einschränkung,
                Widerspruch, Datenübertragbarkeit sowie Beschwerde bei der
                zuständigen Aufsichtsbehörde.
              </p>
            </div>
          </details>
        </div>
      </footer>

    </div>
  );
}
