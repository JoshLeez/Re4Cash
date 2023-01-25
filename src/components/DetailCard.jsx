import "./styles/detail.css";
import { UilCommentInfo } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";

const DetailCard = () => {
  return (
    <section className="detail-section">
      <div className="detail-deskripsi">
        <div className="top-deskripsi">
          <h5>Detail</h5>
          <div className="lapor-deskripsi">
            <UilCommentInfo color="#F2A600" />
            <h6>Laporkan Produk</h6>
          </div>
        </div>
        <div className="deskripsi-info">
          <p>
            “Pot Bunga Ramah Lingkungan merupakan Pot yang memiliki fungsi
            Menanam Bunga mini yang pas untuk hiasan kamar anda menjadi lebih
            estetik.{" "}
          </p>
          <br></br>
          <p>
            “Pot Bunga Ramah Lingkungan tersedia dalam berbagai ukuran dari
            kecil hingga besar dengan warna hitam, merah marun, cokelat, dan abu
            dan masih banyak varian warna lain. Warna yang terlihat pada foto
            sesuai dengan warna aslinya. Apabila terdapat perbedaan warna,
            disebabkan oleh pengaturan monitor dan efek cahaya pada layar
            monitor Anda.”
          </p>
          <p>
            “Setiap pembelian Pot Bunga Ramah Lingkungan sebanyak 5 pcs, Anda
            akan mendapatkan potongan harga sebesar 25%. Dapatkan tambahan
            gratis biaya kirim dengan pembelian minimal 7 pcs.”
          </p>
          <br></br>
          <p>
            “Dapatkan jaminan 100% uang kembali jika produk yang Anda terima
            tidak sesuai foto dan deskripsi kami.”
          </p>
        </div>
      </div>
      <div className="detail-selengkapnya">
        <UilAngleDown color="#F2A600" size="32px" />
        <h5>Selengakpnya</h5>
      </div>
    </section>
  );
};

export default DetailCard;
