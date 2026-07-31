// photo.js
const myPhotos = [
  {
    id: 1,
    name: "Metropolitan Horizon",
    location: "South Jakarta, Jakarta",
    exif: "Wide Lens • f/1.8 • 1/25s • ISO 35",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175149/photo_01_ecjmog.jpg",
  },
  {
    id: 2,
    name: "Silent Reflection",
    location: "Tasikmalaya City Center",
    exif: "FXN Dazzcam • f/1.8 • 1/190s • ISO 20 • -2.6 EV",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175150/photo_02_jupwlj.jpg",
  },
  {
    id: 3,
    name: "Sailing in the Southern Ocean",
    location: "Gunungkidul, DIY",
    exif: "Telephoto Lens • f/2.4 • 1/60s • ISO 40 • -1.2 EV • 153mm",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175155/photo_03_i9f3ui.jpg",
  },
  {
    id: 4,
    name: "Portrait of F. N. A",
    location: "Tasikmalaya City Center",
    exif: "Wide Lens • f/1.8 • 1/6s • ISO 64",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175152/photo_04_aqizfv.jpg",
  },
  {
    id: 5,
    name: "Dreamy Atmosphere",
    location: "Mangkubumi, Tasikmalaya",
    exif: "FXN Dazzcam • f/1.8 • 1/276s • ISO 20 • -1.8 EV",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175152/photo_05_ixiwzs.jpg",
  },
  {
    id: 6,
    name: "Oranges",
    location: "Cibeureum, Tasikmalaya",
    exif: "Wide Lens • f/1.8 • 1/25s • ISO 32",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175151/photo_06_yqjfyb.jpg",
  },
  {
    id: 7,
    name: "Notre Miniature",
    location: "Tasikmalaya City Center",
    exif: "Telephoto Lens • f/2.4 • 1/60s • ISO 32 • +0.4 EV • 79mm",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175152/photo_07_igh298.jpg",
  },
  {
    id: 8,
    name: "Lover's Pace",
    location: "Sleman, DIY",
    exif: "Telephoto Lens • f/2.4 • 1/60s • ISO 80 • +0.2 EV • 119mm",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175153/photo_08_ikynlu.jpg",
  },
  {
    id: 9,
    name: "Prambanan Temple Entrance",
    location: "Sleman, DIY",
    exif: "Wide Lens • f/1.8 • 1/670s • ISO 20 • -0.9 EV",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175153/photo_09_h2lfoa.jpg",
  },
  {
    id: 10,
    name: "Man, am I the greatest?",
    location: "Bandung City Center",
    exif: "Wide Lens • f/1.8 • 1/25s • ISO 2631",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175153/photo_10_hbnwxe.jpg",
  },
  {
    id: 11,
    name: "The Rustic Vessel",
    location: "Cimerak, Pangandaran",
    exif: "Telephoto Lens • f/2.4 • 1/60s • ISO 32 • +1.0 EV • 132mm",
    src: "https://res.cloudinary.com/dyh1najmn/image/upload/v1783175153/photo_11_byr2py.jpg",
  },
];
async function renderGallery(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.className = "grid-layout";

  myPhotos.forEach(({ id, name, location, exif, src }) => {
    const item = document.createElement("div");
    item.className = "gallery-item cursor-scale small relative";

    item.innerHTML = `
      <div class="gallery-img relative">
        <div class="gallery-desc flex justify-between items-center w-full absolute -top-6 left-0 px-4 z-10 pointer-events-none">
          <p class="font-comfortaa text-[#c7c1b6] text-lg">[ ${id} ]</p>
          <p class="font-comfortaa text-[#c7c1b6] text-lg">${name}</p>
        </div>
        
        <div id="img">
          <img src="${src}" alt="Gallery image ${id}">
        </div>
        
        <div class="gallery-desc-bottom flex justify-between items-center w-full absolute -bottom-6 left-0 px-4 z-10 pointer-events-none text-[#c7c1b6]/80 font-comfortaa text-[10px] md:text-xs tracking-wider uppercase">
          <p>${location || ""}</p>
          <p>${exif || ""}</p>
        </div>
      </div>
    `;
    container.appendChild(item);
  });

  return Promise.resolve();
}