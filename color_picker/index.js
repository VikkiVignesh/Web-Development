const imageInput=document.querySelector("#image-select");
const imagePreview=document.querySelector(".preview");


if(!window.EyeDropper)
{
  alert("Your browser does not support this feature");
}

const eyeDropper=new  EyeDropper();

const pickerBtn=document.querySelector(".open-picker");
const res=document.querySelector(".res");
const resdiv=document.querySelector("#res-div");

imageInput.addEventListener("change",()=>
{
  let imglink=URL.createObjectURL(imageInput.files[0]);
  imagePreview.style.display="block";
  imagePreview.src=imglink;
  // imagePreview.classList.add("active");
  //  const file= this.files[0];
  //  if(!file) return;

  //  const reader=new FileReader();
  //  reader.addEventListener("load",()=>
  //  {
  //   imagePreview.src=`./pics/${this.result}.jpeg`;
  //  });
  //  reader.readAsDataURL(file);
});


pickerBtn.addEventListener("click",()=>
{ const divres=document.querySelector("#res-div");
  eyeDropper.open()
   .then(res=>
    {
      divres.style.visibility="visible";
      divres.style.background=res.sRGBHex;
      divres.innerHTML="<p> <b>Picked Color: </b>"+res.sRGBHex+"</p>";
    })
    .catch(err=>
      {
        console.log("User canceled the selection");
      });
});

