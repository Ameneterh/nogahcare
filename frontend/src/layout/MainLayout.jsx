import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import FooterComponent from "../Components/FooterComponent";
// import SearchBar from "../components/SearchBar";

export default function MainLayout({ children }) {
  return (
    <div className="w-full min-h-screen">
      <HeaderComponent />
      {/* <SearchBar /> */}
      <main className="">{children}</main>
      {window.location.pathname === "/authentication" ? (
        <></>
      ) : (
        <FooterComponent />
      )}
    </div>
  );
}
