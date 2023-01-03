import { html } from '@lib/utils';
import { InputField } from './common/input-field';
import type { InputFieldProps } from './common/input-field';

const contactInputFields: Readonly<InputFieldProps[]> = [
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    customId: 'contact-email'
  },
  {
    id: 'message',
    label: 'Message',
    customId: 'contact-message',
    useTextArea: true
  }
];

export function Contact(): string {
  return html`
    <section
      id="contact"
      class="hidden-section grid justify-items-center gap-12"
      data-index="3"
    >
      <div class="animated-element fade-bottom grid gap-4 text-center">
        <h2 class="section-title">NOUS CONTACTER</h2>
      </div>
      <div
        class="main-container flex flex-col items-center justify-center gap-8 md:flex-row md:items-stretch"
      >
        <form
          id="contact-form"
          class="fade-delay-100 grid w-full max-w-2xl gap-4"
        >
          ${contactInputFields.reduce(
    (acc, contactInputField) => acc + InputField(contactInputField),
    ''
  )}
          <button
            id="contact-submit-button"
            class="smooth-tab group ml-auto flex w-full w-100 items-center gap-2 rounded-md bg-[#39e199] px-4 py-3
                   text-white shadow transition duration-200 enabled:hover:-translate-y-1 enabled:hover:shadow-xl 
                   enabled:hover:brightness-110 enabled:focus-visible:-translate-y-1 enabled:focus-visible:shadow-xl 
                   enabled:focus-visible:brightness-110 disabled:cursor-wait disabled:brightness-90 text-center justify-center"
          >
            ENVOYER
           </button>
        </form>
      </div>
    </section>
  `;
}
