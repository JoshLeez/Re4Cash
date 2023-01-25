import React from "react";
import Button from "../components/Button";
import HOC from "../components/HOC";
import "./styles/kontakkami.css";

const KontakKami = () => {
  return (
    <HOC title="Re4Cash | Kontak Kami">
      <div className="kontakkami-banner">
        <img src="kontak-kami-bg.png" alt="img" />
        <div className="kontakkami-banner-content">
          <h1>Kontak Kami</h1>
          <p>
            Mari Diskusikan Keluhan Anda Mengenai Website Kami, Bersama Kami Di
            Berbagai Kontak yang Tersedia Dibawah. Anda juga
            Memberikan/Meningalkan Pesan dan Kesan Anda dengan Mengisi Form
            Terlebih Dahulu Kemudian Tuliskan Komentar Kalian Di Card Paling
            Bawah (Pesan Anda).{" "}
          </p>
        </div>
      </div>
      <div className="kontakkami-content-container">
        <div className="kontakkami-content-getintouch">
          <h1>Get in touch</h1>
          <p>
            Jika anda membutuhkan Informasi atau bantuan silahkan menggunakan
            kontak email dan tuliskan apa yang ingin anda tanyakan.
          </p>
          <div className="kontakkami-input">
            <input type="text" placeholder="Nama Lengkap" />

            <input type="tel" placeholder="No Ponsel" />

            <input type="email" placeholder="Email" />

            <textarea placeholder="Pesan Anda" />
          </div>
          <Button tipe="PRIMARY">Kirim</Button>
        </div>
        <div className="kontakkami-content-hubungikami">
          <h1>Hubungi Kami</h1>
          <p>
            Jika anda membutuhkan Informasi atau bantuan silahkan menggunakan
            kontak email atau nomor telepon yang tertera di bawah untuk
            menghubungi kami.
          </p>

          <div className="container-content-hubungikami">
            <div className="kantor-re4cash">
              <h3>Kantor Re4Cash</h3>

              <div className="detail-kantor">
                <iconify-icon icon="material-symbols:location-on-outline" />
                <p>
                  Jl. Pembangunan 1, Selat Panjang Kota, Kec. Tebing Tinggi,
                  Kabupaten Kepulauan Meranti, Riau
                </p>
              </div>
              <div className="detail-kantor">
                <iconify-icon icon="ic:outline-email" />
                <p>re4cash_service@gmail.com</p>
              </div>
              <div className="detail-kantor">
                <iconify-icon icon="ic:baseline-whatsapp" />
                <p>+62 8111 2222 3333</p>
              </div>
            </div>
            <div className="social-media">
              <h3>Social Media</h3>
              <div className="socialmedia-content">
                <div className="detail-socialmedia">
                  <iconify-icon icon="mdi:instagram" />
                  <p>re4cash</p>
                </div>
                <div className="detail-socialmedia">
                  <iconify-icon icon="tabler:brand-twitter" />
                  <p>re4cash</p>
                </div>
              </div>
              <div className="socialmedia-content">
                <div className="detail-socialmedia">
                  <iconify-icon icon="ph:tiktok-logo-light" />
                  <p>@re4cash</p>
                </div>
                <div className="detail-socialmedia">
                  <iconify-icon icon="iconoir:facebook" />
                  <p>@re4cash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cari-kami-container">
        <h1>Cari kami di Google Maps</h1>
        <iframe
          title="This is a unique title"
          style={{ width: "1216px", height: "450px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.75117669474!2d106.67652266249999!3d-6.2276299999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f692356a22b3%3A0xdf0d881fd6c3e2e4!2sPT%20Shopee%20Indonesia!5e0!3m2!1sid!2sid!4v1673450972468!5m2!1sid!2sid"
        ></iframe>
      </div>
    </HOC>
  );
};

export default KontakKami;
