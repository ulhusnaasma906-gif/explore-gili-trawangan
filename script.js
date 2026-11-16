
/* =========================================================
   EXPLORE GILI TRAWANGAN
   SCRIPT.JS - INDONESIAN & ENGLISH
========================================================= */

let currentLanguage = "id";
let previousPage = "activitiesPage";
let pageHistory = [];

const BOOKING_STORAGE_KEY = "giliBookings";

/* =========================================================
   1. TERJEMAHAN WEBSITE
========================================================= */

const translations = {
  "Beranda": "Home",
  "Tentang Pulau": "About the Island",
  "Aktivitas": "Activities",
  "Galeri": "Gallery",
  "Lokasi": "Location",
  "Pemesanan": "Booking",
  "Pilih bahasa": "Choose language",
  "Jelajahi Wisata": "Explore Activities",
  "Jelajahi pesona pulau tropis dengan laut biru jernih, pantai berpasir putih, kehidupan bawah laut, dan pemandangan matahari terbenam yang memukau.": "Explore the charm of a tropical island with clear blue waters, white sandy beaches, underwater life, and stunning sunset views.",
  "Temukan Pesona Gili Trawangan": "Discover the Beauty of Gili Trawangan",
  "Sebuah perjalanan untuk menikmati keindahan alam, suasana pulau, dan pengalaman wisata yang berkesan.": "A journey to enjoy natural beauty, island atmosphere, and unforgettable travel experiences.",
  "Keindahan yang Menunggu untuk Dijelajahi": "Beauty Waiting to Be Explored",
  "Gili Trawangan merupakan salah satu destinasi wisata bahari di Kabupaten Lombok Utara, Nusa Tenggara Barat. Pulau ini dikenal dengan pantai yang indah, air laut yang jernih, dan beragam kegiatan wisata.": "Gili Trawangan is a marine tourism destination in North Lombok Regency, West Nusa Tenggara. The island is known for its beautiful beaches, clear seawater, and various tourist activities.",
  "Mulai dari snorkeling, bersepeda mengelilingi pulau, menikmati suasana penginapan, hingga menyaksikan matahari terbenam. Setiap sudutnya menawarkan pengalaman yang berbeda.": "From snorkeling and cycling around the island to relaxing at accommodations and watching the sunset, every corner offers a different experience.",
  "Kenali pulau ini": "Discover the Island",
  "Pengalaman di Gili": "Experiences in Gili",
  "Pilih aktivitas yang ingin kamu jelajahi lebih jauh.": "Choose an activity you would like to explore further.",
  "Bersepeda": "Cycling",
  "Penginapan": "Accommodation",
  "Menikmati Sunset": "Enjoying the Sunset",
  "Berkuda": "Horse Riding",
  "Lihat detail": "View Details",
  "Sepotong Keindahan Pulau": "A Glimpse of Island Beauty",
  "Beberapa gambaran suasana Gili Trawangan.": "A glimpse of the atmosphere of Gili Trawangan.",
  "Keindahan pantai dan laut": "The beauty of the beach and sea",
  "Suasana matahari terbenam": "Sunset atmosphere",
  "Video suasana Gili Trawangan": "Gili Trawangan scenery video",
  "Lihat Selengkapnya": "View More",
  "LOKASI WISATA": "TOURIST LOCATION",
  "Temukan Gili Trawangan": "Find Gili Trawangan",
  "Lihat lokasi Gili Trawangan dan temukan informasi mengenai letak pulau serta akses menuju kawasan wisata.": "Find the location of Gili Trawangan and learn about the island's position and access to the tourist area.",
  "Lihat Lokasi": "View Location",
  "Biarkan Laut": "Let the Sea",
  "Menceritakan Kisahnya.": "Tell Its Story.",
  "Rencanakan Perjalanan": "Plan Your Trip",

  "Tentang Gili Trawangan": "About Gili Trawangan",
  "Surga Tropis di Utara Lombok": "A Tropical Paradise in North Lombok",
  "Gili Trawangan adalah pulau terbesar dari tiga Gili yang terkenal di lepas pantai barat laut Lombok. Pulau ini menjadi tujuan wisata bagi pengunjung yang ingin menikmati pantai, laut, dan suasana pulau.": "Gili Trawangan is the largest of the three famous Gili Islands off the northwest coast of Lombok. It is a popular destination for visitors who want to enjoy beaches, the sea, and island life.",
  "Keindahan alamnya dapat dinikmati melalui berbagai aktivitas, baik di darat maupun di laut. Pengunjung juga dapat menemukan beragam pilihan tempat makan dan penginapan.": "Its natural beauty can be enjoyed through various land and sea activities. Visitors can also find a variety of dining options and accommodations.",
  "Lokasi": "Location",
  "Kecamatan Pemenang, Kabupaten Lombok Utara, NTB.": "Pemenang District, North Lombok Regency, West Nusa Tenggara.",
  "Wisata Bahari": "Marine Tourism",
  "Pantai, snorkeling, dan pengalaman menikmati laut.": "Beaches, snorkeling, and ocean experiences.",
  "Jelajah Pulau": "Explore the Island",
  "Menikmati suasana pulau dengan berjalan kaki atau bersepeda.": "Enjoy the island atmosphere on foot or by bicycle.",

  "Aktivitas Wisata": "Tourist Activities",
  "Jelajahi Setiap Pengalaman": "Explore Every Experience",
  "Tekan kartu untuk membaca informasi lebih lengkap.": "Select a card to read more information.",

  "Galeri Foto dan Video": "Photo and Video Gallery",
  "Galeri Gili Trawangan": "Gili Trawangan Gallery",
  "Tekan foto untuk memperbesar dan putar video untuk melihat dokumentasi.": "Select a photo to enlarge it or play a video to view the footage.",
  "Tambahkan foto dengan nama foto-01.jpg sampai foto-20.jpg ke folder assets/Foto.": "Add photos named foto-01.jpg through foto-20.jpg to the assets/Foto folder.",

  "Lokasi Gili Trawangan": "Gili Trawangan Location",
  "Temukan Lokasi Pulau": "Find the Island Location",
  "Gili Trawangan berada di Kecamatan Pemenang, Kabupaten Lombok Utara, Nusa Tenggara Barat. Peta berikut menggunakan tampilan satelit agar area pulau dan garis pantainya terlihat lebih jelas.": "Gili Trawangan is located in Pemenang District, North Lombok Regency, West Nusa Tenggara. The following map uses satellite view to show the island and its coastline more clearly.",
  "Buka di Google Maps": "Open in Google Maps",

  "Pemesanan Wisata": "Tour Booking",
  "Mulai Rencanakan Perjalananmu": "Start Planning Your Trip",
  "Lengkapi informasi pemesanan di bawah ini. Setelah formulir dikirim, kamu dapat menyimpan bukti pemesanan.": "Complete the booking information below. After submitting the form, you can save your booking confirmation.",
  "Website ini merupakan prototipe pemesanan untuk keperluan proyek multimedia. Pemesanan belum terhubung dengan penyedia layanan wisata.": "This website is a booking prototype for a multimedia project. Bookings are not connected to actual tourism service providers.",
  "Informasi Pemesan": "Customer Information",
  "Nama lengkap": "Full Name",
  "Nama sesuai identitas": "Name as shown on your ID",
  "Email": "Email",
  "Nomor WhatsApp": "WhatsApp Number",
  "Jenis identitas": "Identity Type",
  "Nomor identitas": "Identity Number",
  "Asal kota / negara": "City / Country of Origin",
  "Contoh: Mataram": "Example: Mataram",
  "Detail Perjalanan": "Trip Details",
  "Tanggal kunjungan": "Visit Date",
  "Jumlah peserta": "Number of Guests",
  "Aktivitas": "Activity",
  "Durasi": "Duration",
  "Titik keberangkatan": "Departure Point",
  "Contoh: Pelabuhan Bangsal": "Example: Bangsal Harbor",
  "Perkiraan waktu tiba": "Estimated Arrival Time",
  "Catatan tambahan": "Additional Notes",
  "Permintaan khusus atau informasi tambahan": "Special requests or additional information",
  "Simpan Pemesanan": "Save Booking",
  "Batal Edit": "Cancel Editing",
  "Perbarui Pemesanan": "Update Booking",
  "Data Pemesanan": "Booking Data",
  "Kelola data pemesan yang tersimpan pada browser ini.": "Manage customer data saved in this browser.",
  "Kode": "Code",
  "Nama Pemesan": "Customer Name",
  "Tanggal": "Date",
  "Peserta": "Guests",
  "Aksi": "Actions",
  "Belum ada data pemesanan.": "There are no bookings yet.",
  "Bukti Pemesanan": "Booking Confirmation",
  "Data pemesanan dapat diunduh sebagai dokumen PDF atau Word.": "Booking details can be downloaded as a PDF or Word document.",
  "Unduh PDF": "Download PDF",
  "Unduh Word": "Download Word",

  "Detail Wisata": "Activity Details",
  "Kembali": "Back",
  "Tutup": "Close",

  "Jelajahi": "Explore",
  "Informasi": "Information",
  "Media Sosial": "Social Media",
  "Tentang Pulau": "About the Island",
  "Aktivitas Wisata": "Tourist Activities",
  "Discover the Beauty of Gili Islands": "Discover the Beauty of the Gili Islands",

  "Wisata umum": "General Tour",
  "1 hari": "1 day",
  "2 hari 1 malam": "2 days 1 night",
  "3 hari 2 malam": "3 days 2 nights",
  "4 hari atau lebih": "4 days or more",
  "orang": "guests",
  "Edit": "Edit",
  "Hapus": "Delete",
  "Matikan musik": "Turn Music Off",
  "Putar musik": "Play Music",
  "Nyalakan musik": "Turn Music On",
  "Buka menu": "Open Menu"
};

/* Simpan teks asli supaya pergantian bahasa selalu kembali benar */
const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();

function translateText(text) {
  const trimmed = text.trim();
  if (!trimmed) return text;

  const translated = translations[trimmed];
  if (!translated) return text;

  const start = text.match(/^\s*/)?.[0] || "";
  const end = text.match(/\s*$/)?.[0] || "";

  return start + (currentLanguage === "en" ? translated : trimmed) + end;
}

function translatePageText() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  let node;

  while ((node = walker.nextNode())) {
    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue);
    }

    const original = originalTextNodes.get(node);

    if (currentLanguage === "id") {
      node.nodeValue = original;
    } else {
      node.nodeValue = translateText(original);
    }
  }

  const attributes = ["placeholder", "title", "aria-label", "alt"];

  document.querySelectorAll("*").forEach(element => {
    attributes.forEach(attribute => {
      if (!element.hasAttribute(attribute)) return;

      if (!originalAttributes.has(element)) {
        originalAttributes.set(element, {});
      }

      const saved = originalAttributes.get(element);

      if (!(attribute in saved)) {
        saved[attribute] = element.getAttribute(attribute);
      }

      const original = saved[attribute];

      if (currentLanguage === "id") {
        element.setAttribute(attribute, original);
      } else {
        element.setAttribute(attribute, translations[original] || original);
      }
    });
  });

  document.documentElement.lang = currentLanguage;
  // Terjemahan khusus judul utama beranda
const heroTitle = document.querySelector("#homePage .hero-content h1");

if (heroTitle) {
  heroTitle.innerHTML = currentLanguage === "id"
    ? 'Jelajahi Keindahan<br> <span>Gili Trawangan</span>'
    : 'Discover the Beauty<br>of <span>Gili Trawangan</span>';
}
}

function initLanguage() {
  const selector = document.getElementById("languageSelect");
  if (!selector) return;

  selector.value = currentLanguage;

  selector.addEventListener("change", function () {
    currentLanguage = this.value;

    translatePageText();
    renderBookingTable();

    const music = document.getElementById("backgroundMusic");
    if (music) updateMusicLabel(!music.paused);

    if (document.getElementById("receiptPreview")?.innerHTML.trim()) {
      const latest = getBookings().slice(-1)[0];
      if (latest) showReceipt(latest);
    }
  });

  translatePageText();
}

/* =========================================================
   2. DATA AKTIVITAS
========================================================= */

const activities = {
  snorkeling: {
    title: "Snorkeling",
    titleEn: "Snorkeling",
    image: "assets/Foto/foto13.jpg",
    description: "Nikmati keindahan bawah laut Gili Trawangan dengan air yang jernih dan beragam kehidupan laut. Aktivitas snorkeling menjadi salah satu cara untuk melihat keindahan terumbu karang dan ikan tropis.",
    descriptionEn: "Enjoy the underwater beauty of Gili Trawangan with clear water and diverse marine life. Snorkeling is a great way to see coral reefs and tropical fish.",
    tips: ["Gunakan perlengkapan snorkeling yang sesuai.", "Ikuti arahan pemandu wisata.", "Jangan menyentuh atau merusak terumbu karang."],
    tipsEn: ["Use suitable snorkeling equipment.", "Follow the tour guide's instructions.", "Do not touch or damage coral reefs."]
  },
  cycling: {
    title: "Bersepeda",
    titleEn: "Cycling",
    image: "assets/Foto/foto6.jpg",
    description: "Jelajahi suasana Gili Trawangan dengan bersepeda. Kamu dapat menikmati pemandangan pantai, suasana pulau, dan berbagai sudut menarik selama perjalanan.",
    descriptionEn: "Explore Gili Trawangan by bicycle. Enjoy beach views, the island atmosphere, and interesting spots along the way.",
    tips: ["Periksa kondisi sepeda sebelum digunakan.", "Gunakan jalur yang aman.", "Bawa air minum selama perjalanan."],
    tipsEn: ["Check the bicycle before use.", "Use safe routes.", "Bring drinking water during your trip."]
  },
  stay: {
    title: "Penginapan",
    titleEn: "Accommodation",
    image: "assets/Foto/foto16.jpg",
    description: "Temukan pengalaman menginap yang nyaman di Gili Trawangan. Tersedia beragam pilihan penginapan dengan suasana tropis untuk melengkapi perjalanan.",
    descriptionEn: "Discover a comfortable stay in Gili Trawangan. Various accommodation options with a tropical atmosphere are available for your trip.",
    tips: ["Periksa fasilitas sebelum memesan.", "Sesuaikan penginapan dengan kebutuhan.", "Pastikan jadwal check-in dan check-out."],
    tipsEn: ["Check the facilities before booking.", "Choose accommodation that suits your needs.", "Confirm check-in and check-out times."]
  },
  sunset: {
    title: "Menikmati Sunset",
    titleEn: "Enjoying the Sunset",
    image: "assets/Foto/foto8.jpg",
    description: "Nikmati suasana sore dengan pemandangan matahari terbenam yang indah. Momen ini menjadi salah satu pengalaman yang menarik saat berada di Gili Trawangan.",
    descriptionEn: "Enjoy the afternoon atmosphere and beautiful sunset views. This is one of the memorable experiences in Gili Trawangan.",
    tips: ["Datang sebelum matahari terbenam.", "Pilih tempat yang nyaman.", "Jaga kebersihan area pantai."],
    tipsEn: ["Arrive before sunset.", "Choose a comfortable spot.", "Keep the beach clean."]
  },
  horse: {
    title: "Berkuda",
    titleEn: "Horse Riding",
    image: "assets/Foto/foto17.jpg",
    description: "Rasakan pengalaman berbeda dengan menikmati suasana pantai sambil berkuda. Ikuti petunjuk pemandu dan utamakan keselamatan selama aktivitas.",
    descriptionEn: "Experience something different by enjoying the beach atmosphere on horseback. Follow the guide's instructions and prioritize safety.",
    tips: ["Ikuti arahan pemandu.", "Gunakan perlengkapan keselamatan.", "Pastikan kondisi kuda dan perlengkapan aman."],
    tipsEn: ["Follow the guide's instructions.", "Use safety equipment.", "Make sure the horse and equipment are safe."]
  },
  paddle: {
    title: "Paddleboarding",
    titleEn: "Paddleboarding",
    image: "assets/Foto/foto11.jpeg",
    description: "Coba aktivitas berdiri di atas papan dan mendayung di permukaan laut. Nikmati pemandangan laut dengan tetap memperhatikan kondisi ombak.",
    descriptionEn: "Try standing on a board and paddling across the sea. Enjoy the ocean views while paying attention to wave conditions.",
    tips: ["Gunakan pelampung.", "Perhatikan kondisi ombak.", "Ikuti arahan instruktur."],
    tipsEn: ["Wear a life jacket.", "Pay attention to wave conditions.", "Follow the instructor's guidance."]
  },
  
  }


function getActivityName(key) {
  const activity = activities[key];
  if (!activity) return key;
  return currentLanguage === "en" ? activity.titleEn : activity.title;
}

/* =========================================================
   3. NAVIGASI HALAMAN
========================================================= */

function showPage(pageId, addHistory = true) {
  const target = document.getElementById(pageId);
  if (!target) return;

  const active = document.querySelector(".page.active");

  if (active && active.id !== pageId && addHistory) {
    pageHistory.push(active.id);
    previousPage = active.id;
  }

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
    page.hidden = true;
  });

  target.hidden = false;
  target.classList.add("active");

  document.querySelectorAll(".nav-link").forEach(button => {
    button.classList.toggle("active", button.dataset.page === pageId);
  });

  document.querySelector(".main-nav")?.classList.remove("show");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initNavigation() {
  document.querySelectorAll("[data-page]").forEach(button => {
    button.addEventListener("click", () => showPage(button.dataset.page));
  });

  document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => showPage(button.dataset.go));
  });

  document.querySelectorAll("[data-back]").forEach(button => {
    button.addEventListener("click", goBack);
  });

  document.getElementById("detailBack")?.addEventListener("click", goBack);

  document.getElementById("logoHome")?.addEventListener("click", event => {
    event.preventDefault();
    showPage("homePage");
  });

  document.getElementById("footerLogo")?.addEventListener("click", event => {
    event.preventDefault();
    showPage("homePage");
  });

  document.getElementById("mobileMenu")?.addEventListener("click", () => {
    document.querySelector(".main-nav")?.classList.toggle("show");
  });
}

function goBack() {
  const previous = pageHistory.pop() || "homePage";
  showPage(previous, false);
}

/* =========================================================
   4. DETAIL AKTIVITAS
========================================================= */

function initActivities() {
  document.addEventListener("click", event => {
    const card = event.target.closest("[data-activity]");
    if (!card) return;

    openActivity(card.dataset.activity);
  });
}

function openActivity(key) {
  const activity = activities[key];
  if (!activity) return;

  const title = currentLanguage === "en" ? activity.titleEn : activity.title;
  const description = currentLanguage === "en" ? activity.descriptionEn : activity.description;
  const tips = currentLanguage === "en" ? activity.tipsEn : activity.tips;

  const tipsTitle = currentLanguage === "en" ? "Helpful Tips" : "Tips Sebelum Beraktivitas";
  const bookingText = currentLanguage === "en" ? "Book This Activity" : "Pesan Aktivitas Ini";
  const descriptionTitle = currentLanguage === "en" ? "About This Activity" : "Tentang Aktivitas Ini";

  previousPage = document.querySelector(".page.active")?.id || "activitiesPage";

  document.getElementById("detailHeading").textContent = title;

  document.getElementById("detailContent").innerHTML = `
    <section class="section activity-detail">
      <div class="about-feature">
        <img src="${activity.image}" alt="${title}">
        <div class="about-feature-text">
          <p class="eyebrow">EXPLORE GILI TRAWANGAN</p>
          <h2>${title}</h2>
          <h3>${descriptionTitle}</h3>
          <p>${description}</p>
          <h3>${tipsTitle}</h3>
          <ul>${tips.map(tip => `<li>${tip}</li>`).join("")}</ul>
          <button class="gold-button" onclick="selectBookingActivity('${key}')">
            ${bookingText} <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  `;

  showPage("detailPage", false);
}

function selectBookingActivity(key) {
  const select = document.getElementById("bookingActivity");
  const names = {
    snorkeling: "Snorkeling",
    cycling: "Bersepeda",
    stay: "Penginapan",
    sunset: "Menikmati Sunset",
    horse: "Berkuda",
    paddle: "Paddleboarding",
    kayak: "Kayak"
  };

  const englishNames = {
    snorkeling: "Snorkeling",
    cycling: "Cycling",
    stay: "Accommodation",
    sunset: "Enjoying the Sunset",
    horse: "Horse Riding",
    paddle: "Paddleboarding",
    kayak: "Kayaking"
  };

  if (select) {
    select.value = currentLanguage === "en" ? englishNames[key] : names[key];
  }

  showPage("bookingPage");
}

/* =========================================================
   5. GALERI FOTO DAN VIDEO
========================================================= */

function initGallery() {
  const gallery = document.getElementById("galleryFullGrid");
  if (!gallery) return;

  let html = "";

  // TAMPILKAN FOTO
  for (let i = 1; i <= 20; i++) {
    const imagePath = `assets/foto/foto${i}.jpg`;

    html += `
      <button class="gallery-item gallery-photo"
        type="button"
        data-lightbox="${imagePath}"
        data-caption="Foto Gili Trawangan ${i}">
        <img src="${imagePath}"
          alt="Foto Gili Trawangan ${i}"
          onerror="this.parentElement.remove()">
        <span class="gallery-overlay">
          <i class="fa-solid fa-expand"></i>
        </span>
      </button>`;
  }

  // TAMPILKAN VIDEO
  for (let i = 1; i <= 12; i++) {
    html += `
      <div class="gallery-item gallery-video">
        <video controls playsinline>
          <source src="assets/Video/video${i}.mp4" type="video/mp4">
        </video>
      </div>`;
  }

  gallery.innerHTML = html;
}

/* =========================================================
   6. LIGHTBOX
========================================================= */

function initLightbox() {
  document.addEventListener("click", event => {
    const imageButton = event.target.closest("[data-lightbox]");
    if (!imageButton) return;

    openLightbox(
      imageButton.dataset.lightbox,
      imageButton.dataset.caption || ""
    );
  });

  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);

  document.getElementById("lightbox")?.addEventListener("click", event => {
    if (event.target.id === "lightbox") closeLightbox();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeLightbox();
  });
}

function openLightbox(image, caption) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");

  if (!lightbox || !lightboxImage) return;

  lightboxImage.src = image;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox")?.classList.remove("active");
}

/* =========================================================
   7. BACKGROUND MUSIC
========================================================= */

/* =========================================================
   7. BACKGROUND MUSIC
========================================================= */

function initMusic() {
  const music = document.getElementById("backgroundMusic");
  const button = document.getElementById("soundButton");
  const icon = document.getElementById("soundIcon");

  if (!music || !button) return;

  music.volume = 0.5;
  music.loop = true;

  button.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();

        if (icon) {
          icon.className = "fa-solid fa-volume-high";
        }

        updateMusicLabel(true);

      } catch (error) {
        console.error("Musik gagal diputar:", error);
        alert("Musik tidak dapat diputar. Periksa file audio1.mp3 di folder assets/Audio.");
      }

    } else {
      music.pause();

      if (icon) {
        icon.className = "fa-solid fa-volume-xmark";
      }

      updateMusicLabel(false);
    }
  });

  document.querySelectorAll("video").forEach(video => {
    video.addEventListener("play", () => {
      if (!music.paused) {
        music.pause();

        if (icon) {
          icon.className = "fa-solid fa-volume-xmark";
        }

        updateMusicLabel(false);
      }
    });
  });
}

function updateMusicLabel(isPlaying) {
  const button = document.getElementById("soundButton");
  if (!button) return;

  const label = isPlaying
    ? (currentLanguage === "en" ? "Turn Music Off" : "Matikan musik")
    : (currentLanguage === "en" ? "Play Music" : "Putar musik");

  button.title = label;
  button.setAttribute("aria-label", label);
}

function updateMusicLabel(isPlaying) {
  const button = document.getElementById("soundButton");
  if (!button) return;

  const label = isPlaying
    ? (currentLanguage === "en" ? "Turn Music Off" : "Matikan musik")
    : (currentLanguage === "en" ? "Play Music" : "Putar musik");

  button.title = label;
  button.setAttribute("aria-label", label);
}

/* =========================================================
   8. SISTEM PEMESANAN - LOCAL STORAGE
========================================================= */

function initBooking() {
  const form = document.getElementById("bookingForm");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      saveBooking();
    });
  }

  document.getElementById("cancelEditButton")?.addEventListener("click", resetBookingForm);
  document.getElementById("downloadPDF")?.addEventListener("click", downloadReceiptPDF);
  document.getElementById("downloadWord")?.addEventListener("click", downloadReceiptWord);

  renderBookingTable();
}

function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(BOOKING_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveBookings(bookings) {
  try {
    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(bookings));
    return true;
  } catch {
    alert(currentLanguage === "en"
      ? "Saving failed. Please check your browser storage."
      : "Penyimpanan gagal. Periksa ruang penyimpanan browser.");
    return false;
  }
}

function getBookingFormData() {
  return {
    id: document.getElementById("editingBookingId").value || "",
    code: "",
    customerName: document.getElementById("customerName").value.trim(),
    customerEmail: document.getElementById("customerEmail").value.trim(),
    customerPhone: document.getElementById("customerPhone").value.trim(),
    identityType: document.getElementById("identityType").value,
    identityNumber: document.getElementById("identityNumber").value.trim(),
    customerCity: document.getElementById("customerCity").value.trim(),
    visitDate: document.getElementById("visitDate").value,
    guestCount: document.getElementById("guestCount").value,
    bookingActivity: document.getElementById("bookingActivity").value,
    duration: document.getElementById("duration").value,
    departure: document.getElementById("departure").value.trim(),
    arrivalTime: document.getElementById("arrivalTime").value,
    bookingNote: document.getElementById("bookingNote").value.trim(),
    createdAt: new Date().toISOString()
  };
}

function validateBooking(data) {
  const message = (id, en) => alert(currentLanguage === "en" ? en : id);

  if (
    !data.customerName ||
    !data.customerEmail ||
    !data.customerPhone ||
    !data.identityNumber ||
    !data.customerCity ||
    !data.visitDate
  ) {
    message("Mohon lengkapi seluruh data yang wajib diisi.", "Please complete all required fields.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.customerEmail)) {
    message("Format alamat email tidak valid.", "The email address format is invalid.");
    return false;
  }

  const phonePattern = /^[0-9+\-\s]{8,20}$/;
  if (!phonePattern.test(data.customerPhone)) {
    message("Nomor telepon harus berisi 8 sampai 20 angka.", "The phone number must contain 8 to 20 digits.");
    return false;
  }

  if (Number(data.guestCount) < 1) {
    message("Jumlah pengunjung minimal 1 orang.", "The number of guests must be at least 1.");
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const visitDate = new Date(data.visitDate + "T00:00:00");

  if (visitDate < today) {
    message("Tanggal kunjungan tidak boleh sebelum hari ini.", "The visit date cannot be earlier than today.");
    return false;
  }

  return true;
}

function generateBookingCode() {
  return "GILI-" + Date.now().toString().slice(-8);
}

function saveBooking() {
  const data = getBookingFormData();

  if (!validateBooking(data)) return;

  const bookings = getBookings();
  const editingId = data.id;

  if (editingId) {
    const index = bookings.findIndex(item => String(item.id) === String(editingId));

    if (index === -1) {
      alert(currentLanguage === "en"
        ? "The booking to update could not be found."
        : "Data pemesanan yang akan diubah tidak ditemukan.");
      return;
    }

    data.id = editingId;
    data.code = bookings[index].code;
    data.createdAt = bookings[index].createdAt;
    bookings[index] = data;

    if (!saveBookings(bookings)) return;

    alert(currentLanguage === "en"
      ? "Booking information has been updated."
      : "Data pemesanan berhasil diperbarui.");
  
    } else {
    data.id = Date.now().toString();
    data.code = generateBookingCode();

    bookings.push(data);

    if (!saveBookings(bookings)) return;

    alert(currentLanguage === "en"
      ? "Booking successfully saved."
      : "Pemesanan berhasil disimpan.");

    // Tampilkan struk booking
    createProfessionalReceipt(data);
  }

  renderBookingTable();
  showReceipt(data);
  resetBookingForm();
}

function renderBookingTable() {
  const tbody = document.getElementById("bookingTableBody");
  if (!tbody) return;

  const bookings = getBookings();

  if (bookings.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-booking">
          ${currentLanguage === "en" ? "There are no bookings yet." : "Belum ada data pemesanan."}
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = bookings.map(item => `
    <tr>
      <td>${escapeHTML(item.code || "-")}</td>
      <td>${escapeHTML(item.customerName)}</td>
      <td>${formatDate(item.visitDate)}</td>
      <td>${escapeHTML(getActivityDisplayName(item.bookingActivity))}</td>
      <td>${escapeHTML(item.guestCount)} ${currentLanguage === "en" ? "guests" : "orang"}</td>
      <td>
        <button type="button" class="table-action edit-action" onclick="editBooking('${item.id}')">
          ${currentLanguage === "en" ? "Edit" : "Edit"}
        </button>
        <button type="button" class="table-action delete-action" onclick="deleteBooking('${item.id}')">
          ${currentLanguage === "en" ? "Delete" : "Hapus"}
        </button>
      </td>
    </tr>
  `).join("");
}

function getActivityDisplayName(value) {
  const map = {
    "Snorkeling": "Snorkeling",
    "Bersepeda": "Cycling",
    "Cycling": "Bersepeda",
    "Penginapan": "Accommodation",
    "Accommodation": "Penginapan",
    "Menikmati Sunset": "Enjoying the Sunset",
    "Enjoying the Sunset": "Menikmati Sunset",
    "Berkuda": "Horse Riding",
    "Horse Riding": "Berkuda",
    "Paddleboarding": "Paddleboarding",
    "Kayak": "Kayaking",
    "Kayaking": "Kayak",
    "Wisata umum": "General Tour",
    "General Tour": "Wisata umum"
  };

  if (currentLanguage === "en") {
    return map[value] || value;
  }

  const reverse = {
    "Cycling": "Bersepeda",
    "Accommodation": "Penginapan",
    "Enjoying the Sunset": "Menikmati Sunset",
    "Horse Riding": "Berkuda",
    "Kayaking": "Kayak",
    "General Tour": "Wisata umum"
  };

  return reverse[value] || value;
}

function editBooking(id) {
  const booking = getBookings().find(item => String(item.id) === String(id));

  if (!booking) {
    alert(currentLanguage === "en"
      ? "Booking data could not be found."
      : "Data pemesanan tidak ditemukan.");
    return;
  }

  document.getElementById("editingBookingId").value = booking.id;
  document.getElementById("customerName").value = booking.customerName;
  document.getElementById("customerEmail").value = booking.customerEmail;
  document.getElementById("customerPhone").value = booking.customerPhone;
  document.getElementById("identityType").value = booking.identityType;
  document.getElementById("identityNumber").value = booking.identityNumber;
  document.getElementById("customerCity").value = booking.customerCity;
  document.getElementById("visitDate").value = booking.visitDate;
  document.getElementById("guestCount").value = booking.guestCount;
  document.getElementById("bookingActivity").value = booking.bookingActivity;
  document.getElementById("duration").value = booking.duration;
  document.getElementById("departure").value = booking.departure;
  document.getElementById("arrivalTime").value = booking.arrivalTime;
  document.getElementById("bookingNote").value = booking.bookingNote;

  document.getElementById("saveBookingButton").innerHTML =
    currentLanguage === "en"
      ? 'Update Booking <i class="fa-solid fa-arrow-right"></i>'
      : 'Perbarui Pemesanan <i class="fa-solid fa-arrow-right"></i>';

  document.getElementById("cancelEditButton").hidden = false;

  showPage("bookingPage");
  document.getElementById("bookingForm").scrollIntoView({ behavior: "smooth" });
}

function deleteBooking(id) {
  const confirmation = currentLanguage === "en"
    ? "Are you sure you want to delete this booking?"
    : "Apakah kamu yakin ingin menghapus data pemesanan ini?";

  if (!confirm(confirmation)) return;

  const bookings = getBookings().filter(item => String(item.id) !== String(id));

  if (!saveBookings(bookings)) return;

  renderBookingTable();

  alert(currentLanguage === "en"
    ? "Booking data has been deleted."
    : "Data pemesanan berhasil dihapus.");

  document.getElementById("receiptSection").hidden = true;
}

function resetBookingForm() {
  document.getElementById("bookingForm")?.reset();
  document.getElementById("editingBookingId").value = "";

  document.getElementById("saveBookingButton").innerHTML =
    currentLanguage === "en"
      ? 'Save Booking <i class="fa-solid fa-arrow-right"></i>'
      : 'Simpan Pemesanan <i class="fa-solid fa-arrow-right"></i>';

  document.getElementById("cancelEditButton").hidden = true;
}

/* =========================================================
   9. BUKTI PEMESANAN
========================================================= */


function showReceipt(data) {
  const section = document.getElementById("receiptSection");
  const preview = document.getElementById("receiptPreview");

  if (!section || !preview) return;

  // Mengamankan teks agar tidak merusak HTML
  const safe = (value) => {
    return String(value || "-")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // Format tanggal
  const date = data.visitDate
    ? new Date(data.visitDate + "T00:00:00").toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
    : "-";

  // Baris informasi struk
  const receiptRow = (label, value) => `
    <div class="thermal-row">
      <span>${label}</span>
      <strong>${safe(value)}</strong>
    </div>
  `;

  preview.innerHTML = `
    <div class="thermal-receipt">

      <div class="thermal-header">
        <div class="thermal-logo">🐢</div>
        <h2>EXPLORE GILI</h2>
        <p>TRAWANGAN · INDONESIA</p>
        <p class="thermal-address">NORTH LOMBOK, WEST NUSA TENGGARA</p>
      </div>

      <div class="thermal-divider"></div>

      <div class="thermal-title">
        <h3>BUKTI PEMESANAN</h3>
        <p>BOOKING RECEIPT</p>
      </div>

      <div class="thermal-code">
        <span>KODE BOOKING</span>
        <strong>${safe(data.code)}</strong>
      </div>

      <div class="thermal-divider"></div>

      <div class="thermal-section-title">INFORMASI PEMESAN</div>

      ${receiptRow("Nama", data.customerName)}
      ${receiptRow("Email", data.customerEmail)}
      ${receiptRow("WhatsApp", data.customerPhone)}
      ${receiptRow("Identitas", data.identityType)}
      ${receiptRow("No. Identitas", data.identityNumber)}
      ${receiptRow("Asal", data.customerCity)}

      <div class="thermal-divider"></div>

      <div class="thermal-section-title">DETAIL PERJALANAN</div>

      ${receiptRow("Tanggal", date)}
      ${receiptRow("Peserta", data.guestCount + " orang")}
      ${receiptRow("Aktivitas", data.bookingActivity)}
      ${receiptRow("Durasi", data.duration)}
      ${receiptRow("Keberangkatan", data.departure)}
      ${receiptRow("Waktu Tiba", data.arrivalTime)}

      <div class="thermal-divider"></div>

      <div class="thermal-section-title">CATATAN TAMBAHAN</div>
      <p class="thermal-note">${safe(data.bookingNote)}</p>

      <div class="thermal-divider"></div>

      <div class="thermal-success">
        <strong>✓ PEMESANAN BERHASIL</strong>
        <p>Data pemesanan telah tersimpan.</p>
      </div>

      <div class="thermal-divider"></div>

      <div class="thermal-footer">
        <h3>TERIMA KASIH!</h3>
        <p>Selamat Menikmati Perjalanan</p>
        <p class="thermal-small">Discover the Beauty of Gili Trawangan</p>
        <div class="thermal-end">* * * * * * * * * *</div>
      </div>

    </div>
  `;

  section.hidden = false;
  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* =========================================================
   10. DOWNLOAD PDF
========================================================= */

function downloadReceiptPDF() {
  const data = getBookings().slice(-1)[0];

  if (!data) {
    alert(currentLanguage === "en" ? "No booking data available." : "Belum ada data pemesanan.");
    return;
  }

  if (!window.jspdf) {
    alert(currentLanguage === "en"
      ? "The PDF library could not be loaded."
      : "Library PDF tidak berhasil dimuat.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  const en = currentLanguage === "en";

  const rows = [
    [en ? "Booking Code" : "Kode Pemesanan", data.code],
    [en ? "Customer Name" : "Nama Pemesan", data.customerName],
    ["Email", data.customerEmail],
    [en ? "WhatsApp Number" : "Nomor WhatsApp", data.customerPhone],
    [en ? "Identity Type" : "Jenis Identitas", data.identityType],
    [en ? "Identity Number" : "Nomor Identitas", data.identityNumber],
    [en ? "City / Country" : "Asal Kota / Negara", data.customerCity],
    [en ? "Visit Date" : "Tanggal Kunjungan", formatDate(data.visitDate)],
    [en ? "Number of Guests" : "Jumlah Peserta", data.guestCount],
    [en ? "Activity" : "Aktivitas", getActivityDisplayName(data.bookingActivity)],
    [en ? "Duration" : "Durasi", data.duration],
    [en ? "Departure Point" : "Titik Keberangkatan", data.departure],
    [en ? "Estimated Arrival" : "Perkiraan Waktu Tiba", data.arrivalTime],
    [en ? "Additional Notes" : "Catatan Tambahan", data.bookingNote]
  ];

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(18);
  pdf.text("EXPLORE GILI TRAWANGAN", 105, 20, { align: "center" });

  pdf.setFontSize(14);
  pdf.text(en ? "BOOKING CONFIRMATION" : "BUKTI PEMESANAN", 105, 30, { align: "center" });

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);

  let y = 45;

  rows.forEach(([label, value]) => {
    const lines = pdf.splitTextToSize(String(value || "-"), 90);

    pdf.setFont("helvetica", "bold");
    pdf.text(label, 15, y);

    pdf.setFont("helvetica", "normal");
    pdf.text(lines, 85, y);

    y += Math.max(9, lines.length * 5 + 3);

    if (y > 270) {
      pdf.addPage();
      y = 20;
    }
  });

  pdf.setFontSize(9);
  pdf.text(
    en ? "Thank you for choosing Explore Gili Trawangan." : "Terima kasih telah memilih Explore Gili Trawangan.",
    105,
    Math.min(y + 10, 285),
    { align: "center" }
  );

  pdf.save(`Bukti-Pemesanan-${data.code}.pdf`);
}

/* =========================================================
   11. DOWNLOAD WORD
========================================================= */

function downloadReceiptWord() {
  const data = getBookings().slice(-1)[0];

  if (!data) {
    alert(currentLanguage === "en" ? "No booking data available." : "Belum ada data pemesanan.");
    return;
  }

  const en = currentLanguage === "en";

  const rows = [
    [en ? "Booking Code" : "Kode Pemesanan", data.code],
    [en ? "Customer Name" : "Nama Pemesan", data.customerName],
    ["Email", data.customerEmail],
    [en ? "WhatsApp Number" : "Nomor WhatsApp", data.customerPhone],
    [en ? "Identity Type" : "Jenis Identitas", data.identityType],
    [en ? "Identity Number" : "Nomor Identitas", data.identityNumber],
    [en ? "City / Country" : "Asal Kota / Negara", data.customerCity],
    [en ? "Visit Date" : "Tanggal Kunjungan", formatDate(data.visitDate)],
    [en ? "Number of Guests" : "Jumlah Peserta", data.guestCount],
    [en ? "Activity" : "Aktivitas", getActivityDisplayName(data.bookingActivity)],
    [en ? "Duration" : "Durasi", data.duration],
    [en ? "Departure Point" : "Titik Keberangkatan", data.departure],
    [en ? "Estimated Arrival" : "Perkiraan Waktu Tiba", data.arrivalTime],
    [en ? "Additional Notes" : "Catatan Tambahan", data.bookingNote]
  ];

  const tableRows = rows.map(([label, value]) => `
    <tr>
      <td style="padding:8px;border:1px solid #ccc;"><b>${escapeHTML(label)}</b></td>
      <td style="padding:8px;border:1px solid #ccc;">${escapeHTML(value || "-")}</td>
    </tr>
  `).join("");

  const html = `
    <html>
    <head><meta charset="UTF-8"></head>
    <body>
      <h1 style="text-align:center;">EXPLORE GILI TRAWANGAN</h1>
      <h2 style="text-align:center;">${en ? "BOOKING CONFIRMATION" : "BUKTI PEMESANAN"}</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${tableRows}
      </table>
      <p style="text-align:center;margin-top:30px;">
        ${en ? "Thank you for choosing Explore Gili Trawangan." : "Terima kasih telah memilih Explore Gili Trawangan."}
      </p>
    </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", html], {
    type: "application/msword"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `Bukti-Pemesanan-${data.code}.doc`;
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

/* =========================================================
   12. VALIDASI TANGGAL
========================================================= */

function initDateValidation() {
  const dateInput = document.getElementById("visitDate");
  if (!dateInput) return;

  const today = new Date();
  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  ).toISOString().split("T")[0];

  dateInput.min = localDate;
}

/* =========================================================
   13. HELPER
========================================================= */

function formatDate(dateValue) {
  if (!dateValue) return "-";

  const date = new Date(dateValue + "T00:00:00");

  return date.toLocaleDateString(
    currentLanguage === "en" ? "en-US" : "id-ID",
    {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }
  );
}

function formatDateTime(dateValue) {
  if (!dateValue) return "-";

  return new Date(dateValue).toLocaleString(
    currentLanguage === "en" ? "en-US" : "id-ID"
  );
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

/* =========================================================
   14. JALANKAN SEMUA FITUR
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initActivities();
  initGallery();
  initLightbox();
  initMusic();
  initLanguage();
  initBooking();
  initDateValidation();

  translatePageText();
});
/* =====================================================
   PROFESSIONAL BOOKING RECEIPT
===================================================== */




function createProfessionalReceipt(booking) {
  const value = (id) => {
    const el = document.getElementById(id);
    return el ? el.value.trim() || "-" : "-";
  };

  const bookingID = booking?.code || "GBT-" + Date.now().toString().slice(-8);

  const today = new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const customerName = booking?.customerName || value("customerName");
  const customerEmail = booking?.customerEmail || value("customerEmail");
  const customerPhone = booking?.customerPhone || value("customerPhone");
  const identityType = booking?.identityType || value("identityType");
  const identityNumber = booking?.identityNumber || value("identityNumber");
  const customerCity = booking?.customerCity || value("customerCity");
  const visitDate = booking?.visitDate || value("visitDate");
  const guestCount = booking?.guestCount || value("guestCount");
  const activity = booking?.activity || value("bookingActivity");
  const duration = booking?.duration || value("duration");
  const departure = booking?.departure || value("departure");
  const arrivalTime = booking?.arrivalTime || value("arrivalTime");
  const note = booking?.note || value("bookingNote");

  const safe = (text) => String(text ?? "-").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);

  const barcode = Array.from({ length: 48 }, (_, i) => {
    const n = bookingID.charCodeAt(i % bookingID.length);
    return `<span style="width:${i % 4 === 0 ? 3 : 2}px;height:${25 + ((n + i * 7) % 19)}px"></span>`;
  }).join("");

  const html = `
    <div class="receipt-paper">

      <div class="receipt-top">
        <div class="receipt-brand">
          <div class="receipt-mark">✦</div>
          <div>
            <strong>EXPLORE GILI TRAWANGAN</strong>
            <small>TOURISM & TRAVEL SERVICE</small>
          </div>
        </div>

        <div class="receipt-status">
          ● BOOKING SAVED
        </div>
      </div>

      <div class="receipt-heading">
        <p>GILI TRAWANGAN · NORTH LOMBOK · INDONESIA</p>
        <h2>Travel Booking Ticket</h2>
        <span>Booking Confirmation / Customer Copy</span>
        <br><br>
        <span>Booking Code: <b>${safe(bookingID)}</b></span>
      </div>

      <div class="receipt-route">
        <div>
          <small>FROM / DEPARTURE</small>
          <strong>${safe(departure)}</strong>
        </div>
        <div class="receipt-route-middle">
          <span>✈</span>
          <div></div>
          <span>›</span>
        </div>
        <div>
          <small>TO / DESTINATION</small>
          <strong>Gili Trawangan</strong>
        </div>
      </div>

      <div class="receipt-trip-summary">
        <div>
          <small>TRAVEL DATE</small>
          <strong>${safe(visitDate)}</strong>
        </div>
        <div>
          <small>ARRIVAL TIME</small>
          <strong>${safe(arrivalTime)}</strong>
        </div>
        <div>
          <small>PASSENGERS</small>
          <strong>${safe(guestCount)} Person</strong>
        </div>
      </div>

      <div class="receipt-divider"></div>

      <h3>01 &nbsp; PASSENGER INFORMATION</h3>

      <table>
        <tr><td>Passenger Name</td><td>${safe(customerName)}</td></tr>
        <tr><td>Email Address</td><td>${safe(customerEmail)}</td></tr>
        <tr><td>WhatsApp Number</td><td>${safe(customerPhone)}</td></tr>
        <tr><td>Identity Type</td><td>${safe(identityType)}</td></tr>
        <tr><td>Identity Number</td><td>${safe(identityNumber)}</td></tr>
        <tr><td>City / Country</td><td>${safe(customerCity)}</td></tr>
      </table>

      <div class="receipt-divider"></div>

      <h3>02 &nbsp; TRAVEL INFORMATION</h3>

      <table>
        <tr><td>Selected Activity</td><td>${safe(activity)}</td></tr>
        <tr><td>Trip Duration</td><td>${safe(duration)}</td></tr>
        <tr><td>Departure Point</td><td>${safe(departure)}</td></tr>
        <tr><td>Estimated Arrival</td><td>${safe(arrivalTime)}</td></tr>
        <tr><td>Booking Date</td><td>${safe(today)}</td></tr>
        <tr><td>Booking Status</td><td><b>SUCCESSFULLY SAVED</b></td></tr>
      </table>

      <div class="receipt-thanks">
        <div class="receipt-thanks-icon">✦</div>
        <h3>Your Island Journey Awaits!</h3>
        <p>Thank you for choosing Explore Gili Trawangan.<br>
        We hope you have a wonderful experience.</p>
      </div>

      <div class="receipt-note">
        <strong>ADDITIONAL NOTES</strong>
        <p>${safe(note)}</p>
      </div>

      <div class="receipt-stub">
        <div>
          <small>BOOKING IDENTIFICATION</small>
          <strong>${safe(bookingID)}</strong>
          <small>PASSENGER</small>
          <strong>${safe(customerName)}</strong>
          <small>DATE</small>
          <strong>${safe(visitDate)}</strong>
        </div>
        <div class="receipt-barcode">${barcode}</div>
      </div>

      <div class="receipt-footer">
        <strong>EXPLORE GILI TRAWANGAN</strong>
        <p>Gili Trawangan · North Lombok · Indonesia</p>
        <small>PLEASE KEEP THIS BOOKING CONFIRMATION.</small>
        <small>This is a booking confirmation, not a ferry boarding pass or proof of payment.</small>
      </div>

    </div>
  `;

  const preview = document.getElementById("receiptPreview");
  const section = document.getElementById("receiptSection");

  if (preview) preview.innerHTML = html;

  if (section) {
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return { html, id: bookingID };
}


/* =====================================================
   DOWNLOAD PDF
===================================================== */

function downloadProfessionalPDF() {
  const receipt = document.getElementById("receiptPreview");

  if (!receipt || !receipt.innerHTML.trim()) {
    alert("Silakan lakukan booking terlebih dahulu.");
    return;
  }

  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    alert("Izinkan pop-up browser untuk mengunduh PDF.");
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Explore Gili Trawangan - Booking Receipt</title>
      <style>
        @page {
          size: A4;
          margin: 18mm;
        }

        body {
          font-family: Arial, sans-serif;
          color: #39352f;
          background: white;
          margin: 0;
        }

        .receipt-paper {
          width: 100%;
          max-width: 650px;
          margin: auto;
          padding: 10px;
          box-sizing: border-box;
        }

        .receipt-header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 2px solid #b39464;
        }

        .receipt-brand {
          color: #80613b;
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        .receipt-subtitle {
          font-size: 11px;
          color: #888;
          letter-spacing: 2px;
          margin-top: 7px;
        }

        .receipt-title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          margin: 25px 0;
        }

        .receipt-number {
          display: flex;
          justify-content: space-between;
          padding: 14px;
          background: #f8f5ef;
          font-size: 12px;
          margin-bottom: 22px;
        }

        .receipt-heading {
          color: #80613b;
          font-size: 13px;
          font-weight: bold;
          margin: 22px 0 10px;
          padding-bottom: 7px;
          border-bottom: 1px solid #e7dfd4;
        }

        .receipt-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
        }

        .receipt-table td {
          padding: 10px 8px;
          border-bottom: 1px solid #eee;
        }

        .receipt-table td:first-child {
          width: 38%;
          color: #777;
        }

        .receipt-table td:last-child {
          font-weight: bold;
        }

        .receipt-status {
          display: inline-block;
          padding: 7px 13px;
          color: #28733c;
          background: #e5f4e8;
          border-radius: 20px;
          font-size: 11px;
          font-weight: bold;
        }

        .receipt-footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px dashed #ccc;
          text-align: center;
          color: #888;
          font-size: 10px;
          line-height: 1.8;
        }
      </style>
    </head>
    <body>
      <div class="receipt-paper">
        ${receipt.innerHTML}
      </div>

      <script>
        window.onload = function() {
          window.print();
        };
      <\/script>
    </body>
    </html>
  `);

  printWindow.document.close();
}


/* =====================================================
   DOWNLOAD WORD
===================================================== */

function downloadProfessionalWord() {
  const receipt = document.getElementById("receiptPreview");

  if (!receipt || !receipt.innerHTML.trim()) {
    alert("Silakan lakukan booking terlebih dahulu.");
    return;
  }

  const wordHTML = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:w="urn:schemas-microsoft-com:office:word"
          xmlns="http://www.w3.org/TR/REC-html40">

    <head>
      <meta charset="utf-8">
      <title>Booking Receipt</title>

      <style>
        body {
          font-family: Arial, sans-serif;
          color: #39352f;
          font-size: 11pt;
        }

        .receipt-header {
          text-align: center;
          border-bottom: 2px solid #b39464;
          padding-bottom: 15px;
        }

        .receipt-brand {
          font-size: 22pt;
          font-weight: bold;
          color: #80613b;
        }

        .receipt-subtitle {
          font-size: 9pt;
          color: #888;
          letter-spacing: 2px;
        }

        .receipt-title {
          text-align: center;
          font-size: 17pt;
          font-weight: bold;
          margin: 25px 0;
        }

        .receipt-number {
          background: #f8f5ef;
          padding: 12px;
          margin-bottom: 20px;
        }

        .receipt-heading {
          color: #80613b;
          font-weight: bold;
          margin-top: 22px;
          padding-bottom: 7px;
          border-bottom: 1px solid #ddd;
        }

        .receipt-table {
          width: 100%;
          border-collapse: collapse;
        }

        .receipt-table td {
          border-bottom: 1px solid #ddd;
          padding: 9px;
        }

        .receipt-table td:first-child {
          width: 38%;
          color: #777;
        }

        .receipt-table td:last-child {
          font-weight: bold;
        }

        .receipt-status {
          color: #28733c;
          font-weight: bold;
        }

        .receipt-footer {
          text-align: center;
          color: #888;
          border-top: 1px dashed #ccc;
          padding-top: 20px;
          margin-top: 25px;
          font-size: 9pt;
        }
      </style>
    </head>

    <body>
      ${receipt.innerHTML}
    </body>
    </html>
  `;

  const blob = new Blob(
    ["\ufeff", wordHTML],
    { type: "application/msword" }
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "Booking-Receipt-Explore-Gili-Trawangan.doc";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}


/* =====================================================
   CONNECT DOWNLOAD BUTTONS
===================================================== */

document.getElementById("downloadPDF")?.addEventListener(
  "click",
  downloadProfessionalPDF
);

document.getElementById("downloadWord")?.addEventListener(
  "click",
  downloadProfessionalWord
);