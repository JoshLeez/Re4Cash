import { UilEllipsisV } from '@iconscout/react-unicons';
import { UilAngleDown } from '@iconscout/react-unicons';

const RatingCard = () => {
  return (
    <section className="rating-wrapper">
      <div className="rating-ulasan-progressbar">
        <div className="left-side-rating">
          <h5>Rating dan Ulasan</h5>
          <h1>5,0</h1>
          <div className="star-rate-detail">
            <iconify-icon icon="typcn:star" />
            <iconify-icon icon="typcn:star" />
            <iconify-icon icon="typcn:star" />
            <iconify-icon icon="typcn:star" />
            <iconify-icon icon="typcn:star" />
          </div>
        </div>
        <div className="right-side-rating">
          <div className="wrapper-progressbar">
            <iconify-icon icon="typcn:star" />
            <p>5</p>
            <div className="progressbar-grey">
              <div className="progressbar-green" />
            </div>
          </div>
          <div className="wrapper-progressbar">
            <iconify-icon icon="typcn:star" />
            <p>4</p>
            <div className="progressbar-grey">
              <div className="progressbar-green" />
            </div>
          </div>
          <div className="wrapper-progressbar">
            <iconify-icon icon="typcn:star" />
            <p>3</p>
            <div className="progressbar-grey">
              <div className="progressbar-green" />
            </div>
          </div>
          <div className="wrapper-progressbar">
            <iconify-icon icon="typcn:star" />
            <p>2</p>
            <div className="progressbar-grey">
              <div className="progressbar-green" />
            </div>
          </div>
          <div className="wrapper-progressbar">
            <iconify-icon icon="typcn:star" />
            <p>1</p>
            <div className="progressbar-grey">
              <div className="progressbar-green" />
            </div>
          </div>
        </div>
      </div>
      <div className="ulasan-komentar">
          <div className="ulasan-terbaru">
            <h6>ULASAN TERBARU</h6>
            <p>65 Ulasan</p>
          </div>
          <div className="komentar-wrapper">
            <div className="komentar-user-profile">
              <div className="profile-name-image">
                  <div className="gambar-profile"/>
                  <h5>Claricia</h5>
              </div>
              <UilEllipsisV/>
            </div>
            <div className='komentar-rating'>
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <p>3 hari</p>
            </div>
            <p>
            Packing aman, barang diterima dalam kondisi baik. Pertahankan pelayanan yang baik. Harga harus kompetitif agar konsumen tetap membeli. Mantap betul
            </p>
          </div>
          <div className="komentar-wrapper">
            <div className="komentar-user-profile">
              <div className="profile-name-image">
                  <div className="gambar-profile"/>
                  <h5>Claricia</h5>
              </div>
              <UilEllipsisV/>
            </div>
            <div className='komentar-rating'>
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <p>3 hari</p>
            </div>
            <p>
            Packing aman, barang diterima dalam kondisi baik. Pertahankan pelayanan yang baik. Harga harus kompetitif agar konsumen tetap membeli. Mantap betul
            </p>
          </div>
          <div className="komentar-wrapper">
            <div className="komentar-user-profile">
              <div className="profile-name-image">
                  <div className="gambar-profile"/>
                  <h5>Claricia</h5>
              </div>
              <UilEllipsisV/>
            </div>
            <div className='komentar-rating'>
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <iconify-icon icon="typcn:star" />
              <p>3 hari</p>
            </div>
            <p>
            Packing aman, barang diterima dalam kondisi baik. Pertahankan pelayanan yang baik. Harga harus kompetitif agar konsumen tetap membeli. Mantap betul
            </p>
          </div>
          <div className="detail-selengkapnya">
            <UilAngleDown color="#F2A600" size="32px"/>
            <h5>Selengakpnya</h5>
          </div>
      </div>
    </section>
  );
};

export default RatingCard;
