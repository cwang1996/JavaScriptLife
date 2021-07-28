const image1 = document.querySelector('.content1');
const image2 = document.querySelector('.content2');
const image3 = document.querySelector('.content3');
const image4 = document.querySelector('.content4');
const home = document.querySelector('.home');
const work = document.querySelector('.work');
const blog = document.querySelector('.blog');
const about = document.querySelector('.about');
const active = document.querySelector('.active');

home.addEventListener('click', () => {
    image1.classList.add('show');
    image1.classList.remove('hide');
    image2.classList.add('hide');
    image2.classList.remove('show');
    image3.classList.add('hide');
    image3.classList.remove('show');
    image4.classList.add('hide');
    image4.classList.remove('show');
    work.classList.remove('active2');
    home.classList.add('active1');
    blog.classList.remove('active3');
    about.classList.remove('active4');
})

work.addEventListener('click', () => {
    image2.classList.add('show');
    image2.classList.remove('hide');
    image1.classList.add('hide');
    image1.classList.remove('show');
    image3.classList.add('hide');
    image3.classList.remove('show');
    image4.classList.add('hide');
    image4.classList.remove('show');
    work.classList.add('active2');
    home.classList.remove('active1');
    blog.classList.remove('active3');
    about.classList.remove('active4');
})

blog.addEventListener('click', () => {
    image3.classList.add('show');
    image3.classList.remove('hide');
    image1.classList.add('hide');
    image1.classList.remove('show');
    image2.classList.add('hide');
    image2.classList.remove('show');
    image4.classList.add('hide');
    image4.classList.remove('show');
    work.classList.remove('active2');
    home.classList.remove('active1');
    blog.classList.add('active3');
    about.classList.remove('active4');
})

about.addEventListener('click', () => {
    image4.classList.add('show');
    image4.classList.remove('hide');
    image3.classList.add('hide');
    image3.classList.remove('show');
    image1.classList.add('hide');
    image1.classList.remove('show');
    image2.classList.add('hide');
    image2.classList.remove('show');
    work.classList.remove('active2');
    home.classList.remove('active1');
    blog.classList.remove('active3');
    about.classList.add('active4');
})


