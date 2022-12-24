import Button from "./Button";
import { ProductByNumber } from "./ProductBar";

export const ProductNumber = () => {
  return (
    <>
      <div className="detail-left-side">
        <div className="detail-product-image">
          <img src="/pot.png" />
          <div className="image-list-product">
            <img src="/pot.png" />
            <img src="/pot.png" />
            <img src="/pot.png" />
            <img src="/pot.png" />
          </div>
        </div>
        <div className="detail-about-product">
          <div className="detail-product-title">
            <h5>Pot Bunga Ramah Lingkungan Dari Botol Plastik</h5>
            <div className="terjual-star">
              <h6>Terjual 100+</h6>
              <iconify-icon icon="typcn:star" />
              <p>
                5 <span>(65)</span>
              </p>
            </div>
          </div>
          <h3>
            Rp. 20.000 <span> / buah</span>
          </h3>
          <div className="detail-product-kategori">
            {/* baris pertama */}
            <h4>Kategori</h4>
            <p>Anorganik</p>
            {/* baris kedua */}
            <h4>Sub-Kategori</h4>
            <p>Plastik</p>
            {/* baris ketiga */}
            <h4>Persediaan</h4>
            <p>30 buah</p>
            {/* baris keempat */}
            <h4>Model</h4>
            <div className="product-model">
              <Button type="BUTTON_MODEL">Biru Dove</Button>
              <Button type="BUTTON_MODEL">Oren</Button>
              <Button type="BUTTON_MODEL">Hitam</Button>
              <Button type="BUTTON_MODEL">Coklat</Button>
              <Button type="BUTTON_MODEL">Biru</Button>
            </div>
          </div>
          <div className="product-share">
            <p>Bagikan ke sosial media:</p>
            <div className="product-media">
              <iconify-icon icon="logos:whatsapp-icon" />
              <iconify-icon icon="logos:facebook" />
              <iconify-icon icon="logos:twitter" />
              <iconify-icon icon="logos:whatsapp-icon" />
            </div>
          </div>
        </div>
      </div>
      <ProductByNumber />
    </>
  );
};

export const ProductKg = () => {
  return (
    <div className="detail-left-side">
      <div className="detail-product-image">
        <img src="/pot.png" />
        <div className="image-list-product">
          <img src="/pot.png" />
          <img src="/pot.png" />
          <img src="/pot.png" />
          <img src="/pot.png" />
        </div>
      </div>
      <div className="detail-about-product">
        <div className="detail-product-title">
          <h5>Pot Bunga Ramah Lingkungan Dari Botol Plastik</h5>
          <div className="terjual-star">
            <h6>Terjual 100+</h6>
            <iconify-icon icon="typcn:star" />
            <p>
              5 <span>(65)</span>
            </p>
          </div>
        </div>
        <h3>
          Rp. 20.000 <span> / buah</span>
        </h3>
        <div className="detail-product-kategori">
          {/* baris pertama */}
          <h4>Kategori</h4>
          <p>Anorganik</p>
          {/* baris kedua */}
          <h4>Sub-Kategori</h4>
          <p>Plastik</p>
          {/* baris ketiga */}
          <h4>Persediaan</h4>
          <p>30 buah</p>
          {/* baris keempat */}
          <h4>Model</h4>
          <div className="product-model">
            <Button type="BUTTON_MODEL">Biru Dove</Button>
            <Button type="BUTTON_MODEL">Oren</Button>
            <Button type="BUTTON_MODEL">Hitam</Button>
            <Button type="BUTTON_MODEL">Coklat</Button>
            <Button type="BUTTON_MODEL">Biru</Button>
          </div>
        </div>
        <div className="product-share">
          <p>Bagikan ke sosial media:</p>
          <div className="product-media">
            <iconify-icon icon="logos:whatsapp-icon" />
            <iconify-icon icon="logos:facebook" />
            <iconify-icon icon="logos:twitter" />
            <iconify-icon icon="logos:whatsapp-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
