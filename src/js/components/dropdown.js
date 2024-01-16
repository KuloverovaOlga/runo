window.$ = window.jQuery = require('jquery');
import { _slideDown, _slideUp } from '../utils/constants';

const dropdown = () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach((dropdown) => {
        const dropdownContent = dropdown.querySelector('.header__dropdown');
        const dropdownLink = dropdown.querySelector('.header__nav-item-link-wrapper');
        const dropdownInner = dropdown.querySelector('.header__dropdown-inner');
        const dropdownCatalogContent = dropdown.querySelector('.header__dropdown-catalog-content');
        const dropdownServisesContent = dropdown.querySelector('.header__dropdown-services');
        const listTitle = dropdown.querySelectorAll('.list-title');

        function mouseenter() {
            dropdownContent.classList.add('active');
            dropdownInner.addEventListener('mouseleave', () => {
                dropdownContent.classList.remove('active');
            });
        }
        function mouseleave() {
            dropdownContent.classList.remove('active');
        }

        function dropdownClick() {
            dropdown.classList.toggle('active');
            $(dropdownCatalogContent).slideToggle();
            $(dropdownServisesContent).slideToggle();
        }

        listTitle.forEach((list) => {
            function listTitleClick() {
                list.parentElement.classList.toggle('active');
                $(this).parent().find('.list').slideToggle();
            }
            function listTitleResize () {
                if (window.innerWidth > 768) {
                    $(list).parent().find('.list').show();
                    list.removeEventListener('click', listTitleClick);
                } else {
                    $(list).parent().find('.list').hide();
                    list.addEventListener('click', listTitleClick);
                    list.parentElement.classList.remove('active');
                }
            }
            listTitleResize ()
            window.addEventListener('resize', listTitleResize)
        });

        function showContent() {
            if (window.innerWidth < 768) {
                $(dropdownCatalogContent).hide();
                $(dropdownServisesContent).hide();
                dropdown.removeEventListener('mouseenter', mouseenter);
                dropdown.removeEventListener('mouseleave', mouseleave);
                dropdownLink.addEventListener('click', dropdownClick);
                dropdown.classList.remove('active');
            } else {
                $(dropdownCatalogContent).show();
                $(dropdownServisesContent).show();
                dropdown.addEventListener('mouseenter', mouseenter);
                dropdown.addEventListener('mouseleave', mouseleave);
                dropdownLink.removeEventListener('click', dropdownClick);
                
            }
        }

        showContent();
        window.addEventListener('resize', showContent);

    });

    const dropdownCatalogItem = document.querySelectorAll('.header__dropdown-catalog-item');
    const dropdownCatalogContent = document.querySelectorAll('.header__dropdown-catalog-content');

    dropdownCatalogItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            dropdownCatalogItem.forEach((item) => {
                item.classList.remove('active');
            });
            dropdownCatalogContent.forEach((item) => {
                item.classList.remove('active');
            });

            item.classList.add('active');
            dropdownCatalogContent[i].classList.add('active');
        });
    });

    const burger = document.querySelector('.header__mob-burger');
    const headerInner = document.querySelector('.header__inner');
    const call = document.querySelector('.header__mob-call');

    burger.addEventListener('click', () => {
        if (!burger.classList.contains('active')) {
            burger.classList.add('active');
            headerInner.classList.add('active');
            call.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            headerInner.classList.remove('active');
            burger.classList.remove('active');
            call.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            headerInner.classList.remove('active');
            burger.classList.remove('active');
            document.body.style.overflow = '';
        }
    }) 
};

export default dropdown;
