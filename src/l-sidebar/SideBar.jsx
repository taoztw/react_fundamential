import "./main.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { links, socials } from "./data";
import logo from "./logo.svg";
import { useAppContext } from "./context";
import { AppProvider } from "./context";

function SideBar() {
  return (
    <>
      <AppProvider>
        <Home />
        <Modal />
        <Side />
      </AppProvider>
    </>
  );
}

function Home() {
  const { openModal, openSidebar } = useAppContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
}

function Modal() {
  const { isModalOpen, closeModal } = useAppContext();
  return (
    <div
      className={isModalOpen ? "modal-overlay show-modal " : "modal-overlay"}
    >
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

function Side() {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>

      <ul className="social-links">
        {socials.map((social) => {
          return (
            <li key={social.id}>
              <a href={social.url}>{social.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
