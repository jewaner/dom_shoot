import { html } from '@lib/utils';
import { CustomIcon } from '@components/ui/custom-icon';
import { InputReserve } from '@components/common/input-reserve';
import type { InputReserveProps } from '@components/common/input-reserve';

const reservationInputFields: Readonly<InputReserveProps[]> = [
  {
    id: 'firstName',
    label: 'Prénom'
  },
  {
    id: 'lastName',
    label: 'Nom'
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    style: 'sm:col-span-2'
  },
  {
    id: 'people',
    label: 'Combien serez-vous ?',
    useSelect: true
  },
  {
    id: 'phone',
    type: 'tel',
    label: 'Téléphone'
  },
  {
    id: 'date',
    type: 'date',
    label: 'Date',
    style: '[&>input]:w-full'
  },
  {
    id: 'time',
    type: 'time',
    label: 'Heures',
    style: '[&>input]:w-full'
  },
  {
    id: 'spot',
    label: 'Spot',
    style: 'sm:col-span-2',
    useSelectSpot: true
  }
];

export function ReservationModal(): string {
  return html`
    <div>
      <div id="reservation-modal-backdrop" class="modal-backdrop"></div>
      <dialog id="reservation-modal" class="pb-8 sm:pb-0">
        <div class="w-[90vw] max-w-3xl flex-col gap-4 rounded-md bg-white p-4">
          <button
            id="reservation-modal-close-button"
            class="smooth-tab ml-auto flex gap-1 rounded-md text-black/50 
                   transition-colors duration-200 hover:text-black focus-visible:text-black"
          >
            Fermer ${CustomIcon({ iconName: 'XMarkIcon' })}
          </button>
          <form
            id="reservation-modal-form"
            class="grid gap-4 font-poppins sm:grid-cols-2"
          >
            ${reservationInputFields.reduce(
    (acc, inputData) => acc + InputReserve(inputData),
    ''
  )}
            <button
              id="reservation-modal-submit-button"
              class="smooth-tab rounded-md bg-[#39e199] p-2 text-white transition duration-200 hover:brightness-90 
                     disabled:cursor-wait disabled:brightness-90 sm:col-span-2 " style="height:60px;"
            >
              Reserver
            </button>
          </form>
        </div>
      </dialog>
    </div>
  `;
}
