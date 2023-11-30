import { Component } from "react";
import styles from  "../styles/Destnationstyle.module.css";

class DestnationData extends Component {
  render() {
    return (
      <div className={this.props.cName}>
        <div className={styles.desText}>
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className={styles.image}>
          <img src={this.props.img1} alt="img" />
          <img src={this.props.img2} alt="img" />
        </div>
      </div>
    );
  }
}
export default DestnationData;