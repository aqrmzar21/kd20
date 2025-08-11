document.addEventListener("click", function (e) {
  if (e.target.classList.contains("badge-avatar")) {
    const imgAlt = document.querySelector(".alt-img");
    const imgBack = document.querySelector(".gambar-back");

    const namaBaru = e.target.getAttribute("name");
    const altBaru = e.target.getAttribute("alt");

    const srcLama = imgBack.getAttribute("src");
    const ekstensi = srcLama.substring(srcLama.lastIndexOf("."));
    const namaTanpaExt = srcLama.replace(ekstensi, "");
    const bagianNama = namaTanpaExt.split(" ");
    const namaDepan = bagianNama.slice(0, -1).join(" ");
    const namaFileBaru = `${namaDepan} ${namaBaru}${ekstensi}`;

    // Animasi keluar untuk gambar dan teks
    imgBack.classList.add("anim-out");
    imgAlt.classList.add("anim-out");

    setTimeout(() => {
      // Ganti gambar dan teks
      imgBack.setAttribute("src", namaFileBaru);
      imgAlt.innerHTML = altBaru;

      // Animasi masuk
      imgBack.classList.remove("anim-out");
      imgBack.classList.add("anim-in");

      imgAlt.classList.remove("anim-out");
      imgAlt.classList.add("anim-in");

      // Bersihkan class animasi setelah selesai
      setTimeout(() => {
        imgBack.classList.remove("anim-in");
        imgAlt.classList.remove("anim-in");
      }, 500);
    }, 500);
  }
  if (e.target.classList.contains("badge-close")) {
    e.preventDefault(); // Mencegah perilaku default tombol
    e.target.parentElement.remove();
    // let x = e.target.previousElementSibling.previousElementSibling;
    // let y = x.getAttribute("src");
    // imgBack.setAttribute('src', 'y');
    // console.log(y);
  }
  if (e.target.classList.contains("box-back")) {
    // e.preventDefault();
    e.target.style.zIndex = "-100";
  }
});

function flipCard(button) {
  const flashcard = button.closest(".flashcard");
  flashcard.classList.toggle("flipped");
}
