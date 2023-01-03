import { html } from '@lib/utils';
import { allSpots } from '@constants/spots';
import { SallesCategory } from './common/salles-category';
import type { Spots } from '@lib/types/spots';

const spots: Readonly<Spots[]> = ['Industriel', 'Abondonne', 'Cyberpunk Club'];

export function Spots(): string {
  return html`
    <section
      id="spots"
      class="hidden-section grid min-h-screen content-center justify-items-center gap-12"
      data-index="1"
    >
      <div
        class="fade-bottom grid content-center gap-4 text-center"
      >
        <h3 class="section-title">SPOTS</h3>
       
      </div>
      <div style="margin-top:50px;">
        ${spots.reduce((acc, spots, index) => {
    const indexOfFour = 1 + (index % 4);
    const fadeDelayClass = `fade-dlay-${indexOfFour * 100}`;

    return (
      acc +
      html`
                <button class="menu-button smooth-tab ${fadeDelayClass}" id="${spots}" style="border:none;">
                  ${spots}
                </button
              </div>
            `
    );
  }, '')}
      </div>
      <div class="main-container" >
        ${allSpots.reduce(
    (acc, { category, salles }) =>
      acc + SallesCategory({ category, salles }),
    ''
  )}
      </div>
    </section>
  `;
}
