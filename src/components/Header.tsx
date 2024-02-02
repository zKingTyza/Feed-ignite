import styles from "./Header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <div>
      <header className={styles.Header}>
        <img src={igniteLogo} alt="Logotipo do ignite" />
      </header>
    </div>
  );
}
