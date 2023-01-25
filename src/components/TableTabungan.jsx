import { UilAngleUp } from "@iconscout/react-unicons";
import { LongDropDown } from "./CustomDropDown";
import { ItemTabung } from "./ItemKg";

const TableTabungan = () => {
  return (
    <div className="checkbox-tabel-tabungan">
      <input type="checkbox" />
      <div className="container-table-tabungan">
        <header className="top-table-tabungan">
          <div className="tabungan-bank-dan-lokasi">
            <h1>PKK desa Tritih Wetan</h1>
            <div className="tabungan-lokasi-bank">
              <iconify-icon icon="ion:location-outline" />
              <h5>Cilacap</h5>
            </div>
          </div>
          <UilAngleUp className="arrow-rotation" size="32px" />
        </header>
        <div className="bot-table-tabungan">
          <ItemTabung />
          <div className="wrapper-detail-tabungan">
            <div className="top-detail-tabungan">
              <div className="metode-tanggal-tabungan">
                <h3>Metode Menabung :</h3>
                <div className="metode-tabungan-dd">
                  <span>Bebas</span>
                  <LongDropDown width="250" title="Seminggu 1x" />
                </div>
                <h3>Tanggal Penarikan :</h3>
                <div className="metode-tabungan-dd">
                  <span>12 desember 2023</span>
                </div>
              </div>
              <iconify-icon icon="material-symbols:edit" />
            </div>
            <div className="metode-tanggal-tabungan">
              <h3>Sub Total Tabungan :</h3>
              <div className="metode-tabungan-dd">
                <span>Rp. 100.000</span>
              </div>
            </div>
            <table id="tabel-tabungan">
              <tbody>
                <tr>
                  <th>No</th>
                  <th>Tanggal</th>
                  <th>Kuantitas</th>
                  <th>Penjualan</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>12-10-2022</td>
                  <td>2 kilo</td>
                  <td>Rp 10.000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>12-10-2022</td>
                  <td>2 kilo</td>
                  <td>Rp 10.000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>12-10-2022</td>
                  <td>2 kilo</td>
                  <td>Rp 10.000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>12-10-2022</td>
                  <td>2 kilo</td>
                  <td>Rp 10.000</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>12-10-2022</td>
                  <td>2 kilo</td>
                  <td>Rp 10.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTabungan;
