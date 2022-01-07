import React from "react";
// import { ImgLogoBrand } from "assets";
import "./style.scss";
import { IconArrowDown, IconCart, IconSearch, ImgLogoBrand } from "assets";

export default function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="topbar-wrapper">
          <div className="container">
            <div className="logo-brand">
              <img
                src={ImgLogoBrand}
                alt="logo-arkademi"
                srcSet=""
                className="img-logo-brand"
              />
            </div>
            <div className="search">
              <input
                type="text"
                name="search"
                id=""
                className="search-field"
                placeholder="Cari kelas"
              />
              <IconSearch className="icon-search" />
            </div>
            <div className="cart">
              <IconCart />
            </div>
            <div className="button-cta">
              <button className="btn-white">Masuk</button>
              <button className="btn-primary">Daftar</button>
            </div>
          </div>
        </div>

        <div className="navbar-wrapper">
          <div className="container">
            <div className="category">
              Kategori
              <IconArrowDown className="icon-arrow-down" />
            </div>
            <div className="nav">
              <ul className="nav-list">
                <li className="nav-link">
                  <a href="/">Bisnis</a>
                </li>
                <li className="nav-link">
                  <a href="/">Keuangan</a>
                </li>
                <li className="nav-link">
                  <a href="/">Pengembangan Karir</a>
                </li>
                <li className="nav-link">
                  <a href="/">Sertifikasi</a>
                </li>
                <li className="nav-link">
                  <a href="/">Sertifikasi</a>
                </li>
                <li className="nav-link">
                  <a href="/">Bahasa</a>
                </li>
                <li className="nav-link">
                  <a href="/">Korporat</a>
                </li>
                <li className="nav-link">
                  <a href="/">Korporat</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
