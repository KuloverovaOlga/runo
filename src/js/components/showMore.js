
const showMore = () => {

    const infoWrapper = document.querySelectorAll('.info__article-wrapper');

    infoWrapper.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            let target = e.target;
            if (target.classList.contains('info__link')) {
               
                //   let parent = target.parentElement.parentElement;
                let content = target.parentElement.parentElement.querySelector('.info__article-text');
                //   parent.classList.toggle("isActive");

                if (item.classList.contains('isActive')) {
                    content.style.maxHeight = window.innerWidth > 768 ? '26.2rem' : '20.2rem';
                 setTimeout(() => {
                  item.classList.remove('isActive');
                 },500)
                      
                 
                } else {
                    item.classList.add('isActive');
                    content.style.maxHeight = `${content.scrollHeight}px`;
                }
            }
        });
    });



    window.addEventListener('resize', () => {
        infoWrapper.forEach(item => {

                if (item.classList.contains('isActive')) {
                    item.querySelector('.info__article-text').style.maxHeight = `${item.querySelector('.info__article-text').scrollHeight}px`;
                } else {
                    item.querySelector('.info__article-text').style.maxHeight = window.innerWidth > 768 ? '26.2rem' : '20.2rem'; 
                }
            })
    })
}

    export default showMore