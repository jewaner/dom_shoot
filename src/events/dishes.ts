import { spotsButtons, spotsCategories } from '@lib/elements';
import type { Spots } from '@lib/types/spots';

const cachedCurrentMenu = localStorage.getItem('currentSpots') as Spots;

let currentSpots: Spots = cachedCurrentMenu ?? 'Industriel';
let prevSpots: Spots;

let isFirstRender = true;

highlightMenuButton(currentSpots);
toggleMenuCategory(currentSpots);

setTimeout(() => (isFirstRender = false), 500);

spotsButtons.forEach((spotsButton) => {
  const spotsId = spotsButton.id as Spots;
  spotsButton.addEventListener('click', handleChangeMenu(spotsId));
});

function handleChangeMenu(spotsId: Spots) {
  return (): void => {
    if (currentSpots === spotsId) return;

    prevSpots = currentSpots;
    currentSpots = spotsId;

    localStorage.setItem('currentMenu', currentSpots);

    highlightMenuButton(spotsId);
    toggleMenuCategory(spotsId);
  };
}

function highlightMenuButton(spotsId: Spots): void {
  spotsButtons.forEach((spotsButton) => {
    const spotsButtonId = spotsButton.id as Spots;
    if (spotsButtonId === spotsId) {
      spotsButton.classList.add('active');
      spotsButton.tabIndex = -1;
    } else {
      spotsButton.classList.remove('active');
      spotsButton.tabIndex = 0;
    }
  });
}

function toggleMenuCategory(spotsId: Spots): void {
  spotsCategories.forEach((spotsCategory) => {
    const spotsCategoryId = spotsCategory.dataset.category as Spots;

    if (spotsCategoryId === spotsId) {
      if (!prevSpots) spotsCategory.style.display = '';
      setTimeout(() => {
        spotsCategory.style.display = '';
        if (!isFirstRender)
          setTimeout(() => spotsCategory.classList.add('show'), 100);
      }, 500);
    } else if (prevSpots === spotsCategoryId) {
      spotsCategory.classList.remove('show');
      setTimeout(() => (spotsCategory.style.display = 'none'), 500);
    } else {
      spotsCategory.classList.remove('show');
      spotsCategory.style.display = 'none';
    }
  });
}
