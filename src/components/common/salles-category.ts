import { html } from '@lib/utils';
import type { Spots } from '@lib/types/spots';
import type { Salle } from '@lib/types/salle';

type SalleCategoryProps = {
  category: Spots;
  salles: Salle[];
};

export function SallesCategory({
  category,
  salles
}: SalleCategoryProps): string {
  return html`
    <div
      style="display:flex;"
      class="menu-category animated-element  fade-delay-400"
      data-category="${category}"
    >
      ${salles.reduce(
    (acc, { name, price, image, description }) =>
      acc +
      html`
            <div class="grid grid-cols-[auto,1fr] gap-4">
              <img
                class="viewable-image h-40 w-40 rounded object-cover sm:h-45 sm:w-45"
                src="${image}"
                alt="${name}"
              />
              <div class="grid gap-2">
                <h3
                  class="font-poppins text-lg font-bold text-black sm:text-xl"
                >
                  ${name}
                </h3>
                 <small class="font-poppins " style="font-size:14px; color:#39e199;">
                  ${price} € / Joueur
                </small>
                <p>${description}</p>
              </div>
            </div>
          `,
    ''
  )}
    </div>
  `;
}
