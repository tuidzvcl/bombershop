"use client";
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
// 1. Thêm dòng import Slider
import SimpleSlider from "../components/slider/slider";
// 2. Thêm dòng import CSS để định dạng slider và giá tiền
import styles from "./chitietsanpham.module.css";

export default function ChiTietSanPham() {
  return (
    <>
      <Header /> 
      
      <main style={{ 
        maxWidth: '1100px', 
        margin: '0 auto', 
        padding: '60px 20px', 
        minHeight: '80vh',
        fontFamily: 'Arial, sans-serif' 
      }}>
        <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          
          {/* Bên trái: Đã thay thế ảnh tĩnh bằng SimpleSlider */}
          <div style={{ flex: '1', minWidth: '350px' }}>
            <div className={styles.slider}>
               <SimpleSlider />
            </div>
          </div>

          {/* Bên phải: Thông tin chi tiết */}
          <div style={{ flex: '1', minWidth: '350px' }}>
            <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Áo Khoác Bomber Classic</h1>
            
            {/* 3. Đã thay đổi phần giá tiền để có giá cũ gạch ngang */}
            <div className={styles.giaban}>
                <p>
                    550.000 ₫
                    <span className={styles.giacu}> 650.000 ₫</span>
                </p>
            </div>

            <div style={{ marginBottom: '25px', padding: '20px 0', borderTop: '1px solid #eee' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Mô tả sản phẩm:</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Chất liệu vải dù cao cấp, chống thấm nước nhẹ. <br/>
                Thiết kế form rộng unisex phù hợp cho cả nam và nữ.<br/>
                Đường may chắc chắn, phong cách trẻ trung năng động.
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Chọn Size:</label>
              <select style={{ padding: '10px', width: '100px', borderRadius: '5px' }}>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <button style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '18px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              width: '100%'
            }}>
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}