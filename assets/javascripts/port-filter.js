import Shuffle from "shufflejs";

class PortfolioFilter {
  constructor(element) {
    this.element = element;

    this.shuffle = new Shuffle(element, {
      itemSelector: '.port-row',
      gutterWidth: 50,
    });

    this.addFilterButtons();
  }

  addFilterButtons() {
    const options = document.querySelector('.filter-options');

    if (!options) {
      return;
    }

    const filterButtons = Array.from(options.children);

    filterButtons.forEach((button) => {
      button.addEventListener(
        'click',
        this._handleFilterClick.bind(this),
        false
      );
    }, this);
  }

  _removeActiveClassFromChildren(parent) {
    const children = parent.children;
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].classList.remove('active');
    }
  }

  _handleFilterClick(evt) {
    const btn = evt.currentTarget;
    const isActive = btn.classList.contains('active');
    const btnGroup = btn.dataset.group;
    this._removeActiveClassFromChildren(btn.parentNode);

    let filterGroup;
    if (isActive) {
      btn.classList.remove('active');
      filterGroup = Shuffle.ALL_ITEMS;
    } else {
      btn.classList.add('active');
      filterGroup = btnGroup;
    }

    this.shuffle.filter(filterGroup);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const isPortfolioPage = $('body').hasClass('portfolio');
  if (!isPortfolioPage) {
    return;
  }

  window.portfolioFilter = new PortfolioFilter(document.getElementById('portfolio-shuffle-container'));
});
