import { html } from '@lib/utils';
import type { InputFieldProps } from './input-field';

export type InputReserveProps = InputFieldProps & {
  useSelect?: boolean;
  useSelectSpot ?: boolean;
};

export function InputReserve({
  id,
  type,
  style,
  label,
  customId,
  useSelect,
  useSelectSpot
}: InputReserveProps): string {
  return html`
    <div class="${style ?? ''} grid gap-1">
      <label class="self-start" for="${customId ?? id}">${label}</label>
      ${useSelect
      ? html`
            <select
              class="smooth-tab rounded-md bg-white p-2 ring-2 ring-slate-200 focus-visible:ring-blue-400"
              name="${customId ?? id}"
              id="${id}"
              required
            >
              <option value="" selected disabled hidden>
               Selectionnez le nombre de personne
              </option>
              <option value="1">1 Personne</option>
              <option value="2">2 Personnes</option>
              <option value="3">3 Personnes</option>
              <option value="4">4+ Personnes</option>
            </select>
          `
      : useSelectSpot
        ? html`
            <select
              class="smooth-tab rounded-md bg-white p-2 ring-2 ring-slate-200 focus-visible:ring-blue-400"
              name="spots"
              id="spots${id}"
              required

              style="
              margin-top:20px;
              margin-bottom:50px;
              "
            >
              <option value="" selected disabled hidden>
               Selectionnez votre spot
              </option>
              <optgroup label="Industriel">
              <option value="Zone_Tremen">Zone Tremen</option>
              <option value="Zone_keride">Zone keride</option>
              </optgroup>
              <optgroup label="Abondonne">
              <option value="ROC">ROC</option>
              <option value="Avity">Avity</option>
              <option value="Sinner">Sinner</option>
              <option value="Error">Error</option>
              </optgroup>
              <optgroup label="Cyberpunk Club">
              <option value="Ether">Ether</option>
              <option value="Keepvon">Keepvon</option>
              <option value="Sitrate">Sitrate</option>
              <option value="11">11</option>
              </optgroup>
            </select>
          `
        : html`
            <input
              id="${customId ?? id}"
              type="${type ?? 'text'}"
              name="${id}"
              class="smooth-tab rounded-md p-2 ring-2 ring-slate-200 focus-visible:ring-blue-400"
              required
            />
          `}
    </div>
  `;
}
