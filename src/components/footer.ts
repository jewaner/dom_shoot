import { html } from '@lib/utils';
export function Footer(): string {
  return html`
    <footer class="hidden-section grid justify-items-center gap-4 bg-[#000]">
      <div
        class="main-container grid grid-cols-2 flex-wrap items-start justify-center gap-12 sm:flex sm:gap-24"
      >
        <section
          class=" fade-bottom col-span-2 grid gap-3 sm:max-w-xs"
        >
          <h2 class="font-poppins font-medium text-white/60">Nous contacter</h2>
          <p class="leading-normal text-white/30">
          Jennifer.wanys@yahoo.fr
          </p>
          <div>
            <a class="leading-normal text-white/30" href="https://www.linkedin.com/in/jennifer-wany-s-27476525b/">Linkedin Account-Jennifer Wany's</a><br>
            <a class="leading-normal text-white/30" href=" https://github.com/jewaner">Github Account-Jennifer Wany's</a>
          </div>
        </section>
  
      </div>
      <p
        class="fade-bottom fade-delay-400 text-center font-poppins" style="margin-top:100px;"
      >
        Copyright &copy; 2022 Dom-shoot. All rights reserved.
      </p>
    </footer>
  `;
}
