export function Perfil({ backImage, profileImage ,name, career, skills, date}) {
  return (
    <div>
      <div className="container  mg-small">
        <div className="card">
          <div className="card-image">
            <figure className="image is-128by128">
              <img
                src={backImage}
                alt="background"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src={profileImage}
                    alt="perfil"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">{career}</p>
              </div>
            </div>
            <div className="content">
              {skills}
              <br/><br/>
              <time><strong>{date}</strong></time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
