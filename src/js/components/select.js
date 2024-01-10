const select = () => {

    if(document.querySelector('.select')) {
        const select = new Choices('.select', {
          searchEnabled: false,
          position: 'bottom',
          itemSelectText: '',
          classNames: {
            containerOuter: 'choices select-choices',
          },
        });
      }
      
      if(document.querySelector('.select-modal')) {
        const select = new Choices('.select-modal', {
          searchEnabled: false,
          position: 'bottom',
          itemSelectText: '',
          classNames: {
            containerOuter: 'choices select-choices',
          },
        });
      }
      
      if(document.querySelector('#select-filter')) {
        const filter = new Choices('#select-filter', {
          searchEnabled: false,
          position: 'bottom',
          itemSelectText: '',
          shouldSort: false,
          classNames: {
            containerOuter: 'swiper-slide choices select-choices',
          },
        });
      }
}

export default select