import { Component } from "react";
import styles from  "../styles/Destnationstyle.module.css";

class DestnationData extends Component {
  render() {
    const { cName, heading, text, img1, img2 } = this.props;

    return (
      <div className={cName}>
        <div className={styles.desText}>
          <h1 className="text-right mb-4">{heading}</h1>
          <p className="text-right">{text}</p>
        </div>
        <div className={styles.image}>
          {img1 && <img src={img1}  alt="img" />}
          {img2 && <img src={img2} alt="img" />}
        </div>
      </div>
    );
  }
}
export default DestnationData;