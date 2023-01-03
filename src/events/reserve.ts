import { sendEmail } from '@lib/mail';
import {
  reservationModal,
  reservationModalForm,
  reservationModalBackdrop,
  reservationModalOpenButton,
  reservationModalCloseButton,
  reservationModalSubmitButton
} from '@lib/elements';
import { isInDialog } from '@lib/utils';
import { toastFire } from '@lib/toast';
import { Loading } from '@components/ui/loading';
import type { Reservation } from '@lib/types/reservation';

reservationModalOpenButton.addEventListener(
  'click',
  handleReservationModalOpen
);

reservationModalCloseButton.addEventListener(
  'click',
  handleReservationModalClose
);

reservationModal.addEventListener('click', handleReservationModalClose);
reservationModal.addEventListener('cancel', handleReservationModalClose);

reservationModalForm.addEventListener('submit', handleReservationSubmit);

async function handleReservationSubmit(e: SubmitEvent): Promise<void> {
  e.preventDefault();

  reservationModalSubmitButton.disabled = true;
  reservationModalSubmitButton.innerHTML = Loading();

  const formData = new FormData(reservationModalForm);
  const reservation = Object.fromEntries(formData) as Reservation;

  await sendEmail(reservation);

  handleReservationModalClose();

  reservationModalForm.reset();

  reservationModalSubmitButton.disabled = false;
  reservationModalSubmitButton.innerHTML = 'Reserver';

  await toastFire({
    title: 'Votre reservation a bien été envoyé !',
    delay: 300,
    description: 'Nous reviendront vers vous sous peu'
  });
}

function handleReservationModalOpen(): void {
  document.body.style.overflow = 'hidden';

  reservationModalBackdrop.classList.add('active');
  reservationModal.showModal();
}

function handleReservationModalClose(e?: MouseEvent | Event): void {
  const isNotACloseButton =
    e &&
    e.target !== reservationModalCloseButton &&
    (e.target as HTMLElement)?.id !== 'x-mark-icon';

  if (isNotACloseButton && isInDialog(e, reservationModal)) return;

  document.body.style.overflow = '';

  reservationModalBackdrop.classList.remove('active');
  reservationModal.close();
}
