const DataPenabung = ({ setAksi }) => {
  return (
    <div className="container-data-penabung">
      <header className="top-data-tabungan">
        <h6>Muhammad Lee</h6>
        <iconify-icon onClick={() => setAksi(true)} icon="charm:circle-cross" />
      </header>
      <div className="container-table-data-penabung">
        <table id="tabel-data-penabung">
          <tbody>
            <tr backgroundColor="#0EA601">
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
              <td>4 kilo</td>
              <td>Rp 30.000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>12-10-2022</td>
              <td>4 kilo</td>
              <td>Rp 30.000</td>
            </tr>
            <tr>
              <td>5</td>
              <td>12-10-2022</td>
              <td>5 kilo</td>
              <td>Rp 40.000</td>
            </tr>
            <tr>
              <td>6</td>
              <td>12-10-2022</td>
              <td>2 kilo</td>
              <td>Rp 10.000</td>
            </tr>
            <tr>
              <td>7</td>
              <td>12-10-2022</td>
              <td>4 kilo</td>
              <td>Rp 30.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataPenabung;
