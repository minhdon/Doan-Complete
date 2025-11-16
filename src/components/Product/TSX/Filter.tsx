import styles from "../CSS/Filter.module.css";

export const Filter = () => {
  return (
    <>
      <aside className={styles.sidebar}>
        <h3>BỘ LỌC</h3>

        <div className={styles["filter-group"]}>
          <h3>Lọc theo giá</h3>
          <ul>
            <li>
              <label>
                <input type="checkbox" /> Dưới 100.000đ
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> 100.000đ - 300.000đ
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> 300.000đ - 500.000đ
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Trên 500.000đ
              </label>
            </li>
          </ul>
        </div>

        <div className={styles["filter-group"]}>
          <h3>Thương hiệu</h3>
          <input type="search" placeholder="Tìm thương hiệu..." />
          <ul>
            <li>
              <label>
                <input type="checkbox" /> Dược Hậu Giang
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Traphaco
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Blackmores (Úc)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Pfizer
              </label>
            </li>
          </ul>
        </div>

        <div className={styles["filter-group"]}>
          <h3>Nước sản xuất</h3>
          <ul>
            <li>
              <label>
                <input type="checkbox" /> Việt Nam
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Úc
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Mỹ
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Pháp
              </label>
            </li>
          </ul>
        </div>

        <div className={styles["filter-group"]}>
          <h3>Chỉ định</h3>
          <ul>
            <li>
              <label>
                <input type="checkbox" /> Giảm đau, hạ sốt
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Vitamin & Khoáng chất
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Hỗ trợ tiêu hóa
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Mắt/Tai/Mũi
              </label>
            </li>
          </ul>
        </div>

        <div className={styles["filter-group"]}>
          <h3>Lọc theo thành phần</h3>
          <input
            type="text"
            placeholder="Nhập tên thành phần (vd: Paracetamol)"
          />
        </div>
      </aside>
    </>
  );
};
