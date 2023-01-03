import { html } from '@lib/utils';

import { Navbar } from './navbar';
import { Home } from './home';
import { Spots } from './spots';
import { About } from './about';
import { Contact } from './contact';
import { Footer } from './footer';
import { Modal } from './modal';

function Index(): string {
  // prettier-ignore
  return html`
    ${Navbar()}
    <main class="[&>*:not(:first-child):nth-child(odd)]:bg-main-background">
      ${Home()}
      ${Spots()}
      ${About()}
      ${Contact()}
    </main>
    ${Footer()}
    ${Modal()}
  `;
}

document.body.innerHTML = Index();
