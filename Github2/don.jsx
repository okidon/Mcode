var swiper = new Swiper(".main", {
    speed:600,
    effect:'circle',
    autoplay:{
        delay:5000,
        disableOnInteraction:false
    }
});

let coach = document.querySelector('.media')
function slide(){
    coach.classList.toggle('slideout')
};

setInterval(() => {
    const date = new Date();
    const Hour = date.getHours();
    const Minutes = date.getMinutes();
    const Seconds = date.getSeconds();

    document.getElementById('Hour').textContent = Hour.toString().padStart(2,'1');
    document.getElementById('Minutes').textContent = Minutes.toString().padStart(2, '0');
    document.getElementById('Seconds').textContent = Seconds.toString().padStart(2, '0');

}, 1000);




const imageUpload = document.getElementById('imageUpload');
const uploadedImage = document.getElementById('uploadedImage');

imageUpload.addEventListener('change', (e) => {
  const file = imageUpload.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const imageData = reader.result;
    uploadedImage.src = imageData;
   
  };
});

function popout(){
  document.getElementById('overlay').style.display = 'block'

};

function popin(){
  document.getElementById('overlay').style.display = 'none'
}


// const fileupload = document.getElementById('fileUpload');
// const formData = new FormData();
// formData.append('files',fileupload.files[0])

// fetch('/upload',{
//     method:'post',
//     body: 'formData'
// });

// this is for image upload


// const profileImage = document.getElementById('profileImage');
// const imageUpload = document.getElementById('imageUpload');
// const uploadButton = document.getElementById('uploadButton');

// imageUpload.addEventListener('change', (e) => {
//   const file = imageUpload.files[0];
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => {
//     const imageData = reader.result;
//     profileImage.src = imageData;
//   };
// });

// uploadButton.addEventListener('click', () => {
//   imageUpload.click();
// });

