import { html } from '@lib/utils';

export function Home(): string {
  return html`
    <section
      id="home"
      class="hidden-section grid h-screen content-center gap-8 bg-main-background bg-[url(/assets/home-background.webp)] 
             bg-cover bg-fixed bg-center py-0 pt-10 text-center before:pointer-events-none before:absolute before:inset-0 
             before:h-screen before:bg-black/20 sm:gap-12"
      data-index="0"
    >
      <div id="home-intersect-point" class="top-24 w-100 text-center">
      <h1
        class="animated-element fade-bottom font-poppins font-bold text-white sm:text-4xl md:text-4xl lg:text-4xl"
      >
        Bienvenue au Dom-shoot
      </h1>
      <p
        class="animated-element fade-bottom fade-delay-100 text-xl font-bold text-white sm:text-xl"
      >
        Venez vivre de nouvelles expériences airsoft . . .
      </p>
        <p class="animated-element fade-bottom fade-delay-100 text-xl font-light text-white/90"> <br>
         À seulement 30 minutes de Nantes et de Saint Nazaire, affrontez-vous ! <br>
        3 categories et 10 terrains parsemés d’obstacles ! Nous vous accueillons toute l’année sur réservation.
      </p>
      </div>
      <div class="animated-element fade-bottom fade-delay-200">
        <button
          id="reservation-modal-open-button"
          class="smooth-tab w-full rounded border-2 border-white/80 px-8 py-4 font-poppins font-bold uppercase text-white
                 transition-colors duration-200 hover:border-white hover:bg-white hover:text-black 
                 focus-visible:border-white focus-visible:bg-white focus-visible:text-black sm:w-auto"
        >
          Reserver
        </button>
      </div>
    </section>
  `;
}
