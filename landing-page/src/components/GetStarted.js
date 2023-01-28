import headerImg from "../images/illustration-intro.png"

export default function GetStarted() {
  return (
    <div className="get-started">
      <h1 className="get-started__title">
        All your files in one secure location, accessible anywhere.
      </h1>
      <img
        src={headerImg}
        alt="illustration of some people carrying files out of a giant folder"
        className="get-started__img"
      />
      <p className="get-started__body">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="get-started__btn">Get Started</button>
      
    </div>
  );
}
