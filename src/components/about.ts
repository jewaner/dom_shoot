import { html } from '@lib/utils';

export function About(): string {
  return html`
    <section
      id="about"
      class="hidden-section grid place-items-center"
      data-index="2"
    >
      <div
        class="main-container flex flex-col items-center justify-between 
               gap-8 lg:flex-row lg:gap-4"
      >
        <div
          class="fade-left grid max-w-2xl gap-4 lg:max-w-md [&>p]:text-lg"
        >
          <h2 class="section-title mb-4 text-center lg:text-left">
          About 
          </h2>
          
          <p>
           Tempus urna et pharetra pharetra massa massa. 
           Eu volutpat odio facilisis mauris sit amet massa vitae. 
           Senectus et netus et malesuada fames ac turpis egestas. 
          
          </p>
          <p>
           itae congue eu consequat ac felis. Amet facilisis magna etiam tempor orci eu lobortis. 
            Ultricies lacus sed turpis tincidunt. 
           Volutpat sed cras ornare arcu dui vivamus.
           Convallis tellus id interdum velit laoreet.
          </p>
        </div>
        <img
          class="fade-right viewable-image h-72 w-[448px]
                 rounded-md object-cover duration-500 xl:h-96 xl:w-[576px]"
          src="/assets/perso_1.jpg"
          alt="Tools"
        />
      </div>
      <div
        class="main-container flex flex-col items-center justify-between 
               gap-8 lg:flex-row lg:gap-4" style="margin-top:150px;"
      >
       <img
          class="fade-right viewable-image h-72 w-[448px]
                 rounded-md object-cover duration-500 xl:h-96 xl:w-[576px]"
          src="/assets/hero_1.jpg"
          alt="Tools"
        />
        <div
          class="fade-left grid max-w-2xl gap-4 lg:max-w-md [&>p]:text-lg"
        >
          <p>
           Sem nulla pharetra diam sit. 
            Diam in arcu cursus euismod quis viverra nibh cras pulvinar. 
            Imperdiet nulla malesuada pellentesque elit. 
          </p>
          <p>
            Odio aenean sed adipiscing diam donec. 
            Rhoncus urna neque viverra justo nec ultrices dui sapien. 
            Amet luctus venenatis lectus magna. Ultricies lacus sed turpis tincidunt. 
          </p>

                 <button class="bg-[#39e199] w-100 text-white rounded" 
                 style="margin-top:50px; height:50px; ">
                 en savoir plus </button>

        </div>
      </div>
    </section>
  `;
}
