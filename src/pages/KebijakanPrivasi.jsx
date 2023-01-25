import React from "react";
import styled from "styled-components";
import HOC from "../components/HOC";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const PrivasiDetail = styled.section`
  padding: 160px 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  @media (max-width: 1024px) {
    padding: 160px 140px;
  }
  @media (max-width: 768px) {
    padding: 160px 80px;
  }
`;
const TitlePrivasi = styled.h1`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin: 0 0;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;
const TopPrivasi = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const DetailKetentuan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  p {
    text-align: justify;
    font-family: "Archivo";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
  h2 {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin: 0 0;
  }
  span {
    color: #f2a600;
  }
  ol,
  li {
    display: inline-block;
  }
`;
const BackTo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
const Back = styled.h4`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  margin: 0 0;
  color: #f2a600;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const KebijakanPrivasi = () => {
  return (
    <HOC>
      <>
        <PrivasiDetail>
          <TopPrivasi>
            <BackTo>
              <Link
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                to="/"
              >
                <MdArrowBack
                  style={{ color: "#F2A600", width: "20px", height: "20px" }}
                />
                <Back>Kembali</Back>
              </Link>
            </BackTo>
            <TitlePrivasi>Ketentuan & Kebijakan Privasi</TitlePrivasi>
          </TopPrivasi>
          <DetailKetentuan>
            <h2>Ketentuan</h2>
            <p>
              Re4Cash berkomitmen untuk melindungi data Pengguna dan mematuhi
              semua undang-undang perlindungan data dan privasi yang berlaku.
              <br />
              Selain mengumpulkan dan memproses data yang Anda bagikan dengan
              kami untuk alasan tertentu (seperti memproses transaksi, keperluan
              administrasi akun Re4Cash Anda), Re4Cash mungkin perlu
              mengungkapkan data pribadi Anda kepada pihak ketiga tertentu
              (seperti Penjual, penyedia logistik, atau penyedia layanan
              pembayaran) untuk memproses pesanan Anda atau untuk tujuan bisnis
              dan hukum yang sah..
              <br />
              Seperti yang dijelaskan dalam <span>
                {" "}
                Kebijakan Privasi{" "}
              </span>{" "}
              kami, data pribadi Anda dan informasi lainnya dapat ditransfer,
              disimpan, atau diproses di luar negara Anda saat ini. Re4Cash
              hanya akan mentransfer data Anda ke luar negeri sesuai dengan
              undang-undang privasi yang berlaku.
              <br />
              ⚠Catatan
              <br />
              <li>
                1. Untuk detail lebih lanjut tentang jenis data yang
                dikumpulkan, bagaimana data tersebut digunakan dan dibagikan
                kepada pihak lain, silakan merujuk ke Kebijakan Privasi kami.
              </li>
              <li>
                2. Seiring berkembangnya teknologi, hukum, dan bisnis, kami
                mungkin perlu memperbarui Kebijakan Privasi kami dari waktu ke
                waktu. Oleh karena itu, kami berhak untuk mengubah atau
                memperbarui Kebijakan Privasi dan mendorong Anda untuk secara
                teratur meninjau pemberitahuan ini dan Kebijakan Privasi kami.
              </li>
              Jika Anda telah membagikan data pribadi Anda kepada kami, Anda
              memiliki hak (tunduk pada hukum yang berlaku) untuk:
              <br />
              1. Meminta informasi mengenai data pribadi apa saja yang kami
              miliki tentang Anda.
              <br />
              2. Meminta perubahan atau pembaruan pada data pribadi Anda.
              <br />
              3. Meminta data pribadi Anda dihapus.
              <br />
              Silakan merujuk ke <span>Kebijakan Privasi</span> kami untuk lebih
              jelasnya. Jika Anda tidak ingin kami mengumpulkan data pribadi
              Anda, Anda dapat memilih keluar kapan saja dengan mengirim email
              ke Petugas Perlindungan Data kami di re4cash_service@gmail.com.
              Harap diperhatikan bahwa jika Anda tidak bersedia untuk
              mengumpulkan, menggunakan, atau memproses data pribadi Anda, maka
              hal tersebut dapat memengaruhi penggunaan layanan Re4Cash Anda.
            </p>
          </DetailKetentuan>
          <DetailKetentuan>
            <h2>Kebijakan Privasi</h2>
            <p>
              Re4Cash berkomitmen untuk melindungi data Pengguna dan mematuhi
              semua undang-undang perlindungan data dan privasi yang berlaku.
              <br />
              Selain mengumpulkan dan memproses data yang Anda bagikan dengan
              kami untuk alasan tertentu (seperti memproses transaksi, keperluan
              administrasi akun Re4Cash Anda), Re4Cash mungkin perlu
              mengungkapkan data pribadi Anda kepada pihak ketiga tertentu
              (seperti Penjual, penyedia logistik, atau penyedia layanan
              pembayaran) untuk memproses pesanan Anda atau untuk tujuan bisnis
              dan hukum yang sah..
              <br />
              Seperti yang dijelaskan dalam <span>
                {" "}
                Kebijakan Privasi{" "}
              </span>{" "}
              kami, data pribadi Anda dan informasi lainnya dapat ditransfer,
              disimpan, atau diproses di luar negara Anda saat ini. Re4Cash
              hanya akan mentransfer data Anda ke luar negeri sesuai dengan
              undang-undang privasi yang berlaku.
              <br />
              ⚠Catatan
              <br />
              <li>
                1. Untuk detail lebih lanjut tentang jenis data yang
                dikumpulkan, bagaimana data tersebut digunakan dan dibagikan
                kepada pihak lain, silakan merujuk ke Kebijakan Privasi kami.
              </li>
              <li>
                2. Seiring berkembangnya teknologi, hukum, dan bisnis, kami
                mungkin perlu memperbarui Kebijakan Privasi kami dari waktu ke
                waktu. Oleh karena itu, kami berhak untuk mengubah atau
                memperbarui Kebijakan Privasi dan mendorong Anda untuk secara
                teratur meninjau pemberitahuan ini dan Kebijakan Privasi kami.
              </li>
              Jika Anda telah membagikan data pribadi Anda kepada kami, Anda
              memiliki hak (tunduk pada hukum yang berlaku) untuk:
              <br />
              1. Meminta informasi mengenai data pribadi apa saja yang kami
              miliki tentang Anda.
              <br />
              2. Meminta perubahan atau pembaruan pada data pribadi Anda.
              <br />
              3. Meminta data pribadi Anda dihapus.
              <br />
              Silakan merujuk ke <span>Kebijakan Privasi</span> kami untuk lebih
              jelasnya. Jika Anda tidak ingin kami mengumpulkan data pribadi
              Anda, Anda dapat memilih keluar kapan saja dengan mengirim email
              ke Petugas Perlindungan Data kami di re4cash_service@gmail.com.
              Harap diperhatikan bahwa jika Anda tidak bersedia untuk
              mengumpulkan, menggunakan, atau memproses data pribadi Anda, maka
              hal tersebut dapat memengaruhi penggunaan layanan Re4Cash Anda.
            </p>
          </DetailKetentuan>
        </PrivasiDetail>
      </>
    </HOC>
  );
};

export default KebijakanPrivasi;
