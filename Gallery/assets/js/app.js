const slider = document.querySelector('.carousel-inner');
const spinner = document.querySelector('#spiner');

document.addEventListener('DOMContentLoaded', () => {
    load_fromPicsum();
})


function load_fromPicsum() {
    setTimeout(() => {
    fetch('https://picsum.photos/v2/list')
    .then((res) => { return res.json(); })
    .then((images) => {
        if (images) {
            spiner.style.display = 'none';
        }
        let output = '';
        images.forEach((image, index) => {
            if (index == 0) {
                output += `<div class="carousel-item active">
                <img src="${image.download_url}" class="d-block w-100" alt=""> 
              </div>`;
            } else {
                output += `<div class="carousel-item">
                <img src="${image.download_url}" class="d-block w-100" alt="">
              </div>`;
            }      
        });

        slider.innerHTML = output;
    })
    .catch((err) => { console.log(err); })
});

}
