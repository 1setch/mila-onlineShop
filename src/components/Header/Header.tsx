// Header.tsx
import PromoBar from "./PromoBar/PromoBar";

import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu/NavMenu";
import MegaMenu from "./NavMenu/MegaMenu/MegaMenu";
import MobileMenu from "./NavMenu/MobileMenu/MobileMenu";
import Button from "../Button/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.root} ${isScrolled ? styles.scrolled : ""}`}>
      <PromoBar />
      <div
        className={styles.header}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <div className="container">
          <div className={styles.inner}>
            <button
              className={styles.burger}
              onClick={() => {
                setIsMobileMenuOpen((prev) => !prev);
                (isMobileMenuOpen&&isScrolled) ? setIsScrolled(false) : setIsScrolled(true);
              }}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>

            <div className={styles.logo}>
              <svg
                width="85"
                height="42"
                viewBox="0 0 85 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2022_2823)">
                  <path
                    d="M0 17.7978H3.92929L4.07576 20.0049C5.83839 18.0504 7.74243 16.8786 10.303 17.1059C12.8636 17.3332 14.7323 18.5352 16.2172 20.7473C17.3045 19.1191 18.9353 17.9305 20.8182 17.3938C26.0909 15.9342 30.4646 19.0554 30.6869 24.6867C30.8939 29.9797 30.803 35.2928 30.8333 40.5857C30.8195 40.8102 30.7874 41.0331 30.7374 41.2524H26.697V39.8433C26.697 35.4695 26.697 31.0908 26.6717 26.712C26.6394 25.7913 26.5159 24.876 26.303 23.9796C25.9444 22.2928 24.9495 21.2019 23.1818 20.9493C21.1313 20.6766 19.2677 21.3584 18.6061 23.0756C17.9416 24.7878 17.5546 26.595 17.4596 28.4291C17.2879 32.2069 17.404 36.0049 17.404 39.7877V41.2221H13.3333C13.3333 40.7524 13.3333 40.2675 13.3333 39.7877C13.2828 35.2019 13.2424 30.616 13.1717 26.0302C13.148 25.4003 13.0531 24.7751 12.8889 24.1665C12.4646 22.5099 11.6111 21.2221 9.76263 20.9493C8.84255 20.7883 7.89509 20.9254 7.05837 21.3406C6.22165 21.7558 5.53941 22.4273 5.11112 23.2574C4.02526 25.2776 4.06566 27.4847 4.02021 29.6615C3.9495 33.0251 4.02021 36.3938 4.02021 39.7625V41.212H0.0252618L0 17.7978Z"
                    fill="white"
                  />
                  <path
                    d="M80.1919 20.8233V17.8334C80.5858 17.7829 80.8686 17.7173 81.1514 17.7122C82.1615 17.7122 83.1717 17.7122 84.2424 17.7122V41.2223H80.1515V38.8233C78.4444 39.7627 76.8737 41.0001 75.1009 41.5304C68.9343 43.3637 62.7979 39.7425 61.2575 33.3688C60.1313 28.7021 60.6413 24.2274 64.0605 20.5102C65.0238 19.45 66.1918 18.5959 67.4941 17.9994C68.7964 17.403 70.2061 17.0764 71.638 17.0396C73.0699 17.0028 74.4945 17.2565 75.8258 17.7852C77.157 18.314 78.3673 19.107 79.3838 20.1163C79.5555 20.2829 79.7525 20.4496 80.1919 20.8233ZM80.2929 29.5304C80.2929 29.0658 80.3181 28.6011 80.2929 28.1415C80.1705 26.5602 79.5752 25.0523 78.5844 23.8138C77.5936 22.5753 76.2532 21.6636 74.7373 21.1971C71.6262 20.3132 68.6312 21.389 66.6262 24.1112C64.4242 27.1062 64.4797 31.8082 66.7575 35.0102C67.3057 35.8093 68.008 36.4909 68.8233 37.0148C69.6385 37.5387 70.5503 37.8943 71.505 38.0609C72.4596 38.2275 73.4379 38.2015 74.3824 37.9847C75.327 37.7678 76.2186 37.3644 77.005 36.7981C79.4242 35.0203 80.3333 32.4647 80.2929 29.5405V29.5304Z"
                    fill="white"
                  />
                  <path
                    d="M51.3584 0H55.3584V41.2525H51.3584V0Z"
                    fill="white"
                  />
                  <path
                    d="M43.071 17.8691V41.2277H39.167V17.8691H43.071Z"
                    fill="white"
                  />
                  <path
                    d="M41.0661 11.8027C40.6773 11.8143 40.2905 11.7442 39.9305 11.5968C39.5706 11.4495 39.2456 11.2282 38.9766 10.9473C38.7076 10.6664 38.5006 10.3322 38.369 9.96623C38.2374 9.60027 38.1841 9.21073 38.2125 8.82286C38.2427 8.06322 38.5675 7.34519 39.1181 6.82098C39.6687 6.29678 40.4018 6.00761 41.162 6.01478C41.9237 6.0278 42.6504 6.33649 43.1886 6.87561C43.7267 7.41472 44.0342 8.142 44.0459 8.90367C44.0495 9.29227 43.9744 9.67757 43.8249 10.0363C43.6754 10.395 43.4547 10.7197 43.1762 10.9907C42.8976 11.2616 42.567 11.4733 42.2043 11.6129C41.8416 11.7525 41.4544 11.817 41.0661 11.8027Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2022_2823">
                    <rect width="84.2424" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <NavMenu />

            <div className={styles.actions}>
              <Button variant="ghost">Account</Button>
              <Button variant="ghost">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3164 33C26.9103 33 33.0664 26.8439 33.0664 19.25C33.0664 11.6561 26.9103 5.5 19.3164 5.5C11.7225 5.5 5.56641 11.6561 5.56641 19.25C5.56641 26.8439 11.7225 33 19.3164 33Z"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.0391 28.9727L38.5661 38.4997"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button variant="ghost">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 16H40L36.4 39H7.6L4 16Z"
                    stroke="#212121"
                    strokeWidth="1.5"
                  />
                  <path d="M22 6V16" stroke="#212121" strokeWidth="1.5" />
                  <path
                    d="M22.4956 32.196C21.385 32.196 20.4983 31.8693 19.8356 31.216C19.1823 30.5533 18.8556 29.564 18.8556 28.248V25.952C18.8556 24.6453 19.1823 23.6607 19.8356 22.998C20.4983 22.3353 21.385 22.004 22.4956 22.004C23.6156 22.004 24.5023 22.3353 25.1556 22.998C25.8183 23.6607 26.1496 24.6453 26.1496 25.952V28.248C26.1496 29.564 25.8183 30.5533 25.1556 31.216C24.5023 31.8693 23.6156 32.196 22.4956 32.196ZM22.4956 31.174C23.3356 31.174 23.9656 30.922 24.3856 30.418C24.8056 29.914 25.0156 29.2093 25.0156 28.304V25.882C25.0156 24.9767 24.801 24.2767 24.3716 23.782C23.9423 23.278 23.317 23.026 22.4956 23.026C21.6743 23.026 21.049 23.278 20.6196 23.782C20.1996 24.286 19.9896 24.986 19.9896 25.882V28.304C19.9896 29.2187 20.1996 29.928 20.6196 30.432C21.0396 30.9267 21.665 31.174 22.4956 31.174Z"
                    fill="#212121"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <MegaMenu isOpen={isMenuOpen} />
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
