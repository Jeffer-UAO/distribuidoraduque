import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topBarComponent}>
      <div className={styles.topBar}>
        <Link href="/">
          <CardImg src="/image/logo.jpg" alt="/image/logo.jpg/Image_not_available.png" />{" "}
        </Link>       
      </div>     
    </div>
  );
}
