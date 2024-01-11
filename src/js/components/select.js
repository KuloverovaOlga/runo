import Choices from 'choices.js';


const select = () => {

const selects = document.querySelectorAll('.select')

selects.forEach(item => {
  const select = new Choices(item, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices select-choices',
    },
  });
})

    // if(document.querySelector('.select')) {
    //     const select = new Choices('.select', {
    //       searchEnabled: false,
    //       position: 'bottom',
    //       itemSelectText: '',
    //       classNames: {
    //         containerOuter: 'choices select-choices',
    //       },
    //     });
    //   }
}

export default select