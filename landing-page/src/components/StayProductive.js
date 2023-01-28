import mainImage from "../images/illustration-stay-productive.png";

export default function StayProductive() {
  return (
    <div className="stay-productive">
      <img
        src={mainImage}
        alt="illustration of people standing apart from each other holding large speech bubbles in their hands"
        className="stay-productive__img"
      />
      <div className="stay-productive__text-content">
        <h2 className="stay-productive__heading">
          Stay productive, wherever you are
        </h2>

        <p className="stay-productive__body">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>

        <p className="stay-productive__body">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <a href="#" className="stay-productive__link">
          <p>See how Fylo works</p>
          <i className="fas fa-arrow-circle-right"></i>
        </a>
      </div>
    </div>
  );
}
