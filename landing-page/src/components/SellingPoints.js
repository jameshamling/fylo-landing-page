import iconAnywhere from "../images/icon-access-anywhere.svg"
import iconSecurity from "../images/icon-security.svg"
import iconCollaboration from "../images/icon-collaboration.svg"
import iconAnyFile from "../images/icon-any-file.svg"

export default function SellingPoints() {
  return (
    <div className="selling-points">
      <div className="selling-points__item">
        <h3 className="selling-points__item__heading">Access your files, anywhere</h3>
        <img src={iconAnywhere} alt="#" className="selling-points__item__img"/>
        <p className="selling-points__item__body">The ability to use a smartphone, tablet, or
        computer to access your account means your files follow you everywhere.</p>
      </div>
      <div className="selling-points__item">
        <h3 className="selling-points__item__heading">Security you can trust</h3> 
        <img src={iconSecurity} alt="#" className="selling-points__item__img"/>
        <p className="selling-points__item__body">2-factor authentication and user-controlled
        encryption are just a couple of the security features we allow to help
        secure your files.</p>
      </div>
      <div className="selling-points__item">
        <h3 className="selling-points__item__heading">Real-time collaboration</h3> 
        <img src={iconCollaboration} alt="#" className="selling-points__item__img"/>
        <p className="selling-points__item__body">Securely share files and folders with friends,
        family and colleagues for live collaboration. No email attachments
        required.</p>
      </div>
      <div className="selling-points__item">
        <h3 className="selling-points__item__heading">Store any type of file</h3> 
        <img src={iconAnyFile} alt="#" className="selling-points__item__img"/>
        <p className="selling-points__item__body">Whether you're sharing holidays photos or work
        documents, Fylo has you covered allowing for all file types to be
        securely stored and shared.</p>
      </div>
    </div>
  );
}
