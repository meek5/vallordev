import Head from "next/head";
import { useState } from "react";
import Layout from "../components/layout";
import Question from "../components/qa";
import ContactForm from "../components/contactForm";
import ProjectForm from "../components/projectForm"

export default function Home() {
  const [isOpenContactForm, setisOpenContactForm] = useState(false)
  const [isOpenProjectForm, setisOpenProjectForm] = useState(false)
  const [logos, setlogos] = useState([
    { name: "Redux", url: "/assets/images/redux.svg" },
    { name: "Firebase", url: "/assets/images/firebase.svg" },
    { name: "Reactjs", url: "/assets/images/reactjs.svg" },
    { name: "Flutter", url: "/assets/images/flutter.svg" },
    { name: "Figma", url: "/assets/images/figma.svg" },
    { name: "CSS", url: "/assets/images/css.svg" },
    { name: "HTML", url: "/assets/images/html.svg" },
    { name: "NodeJS", url: "/assets/images/nodejs.svg" },
    { name: "Prisma", url: "/assets/images/prisma.svg" },
    { name: "Graphql", url: "/assets/images/graphql.svg" },
    { name: "Google cloud", url: "/assets/images/google.svg" },
    { name: "Heroku", url: "/assets/images/heroku.svg" },
    { name: "Material UI", url: "/assets/images/material.svg" },
    { name: "NextJS", url: "/assets/images/nextjs.svg" },
    { name: "Gatsby", url: "/assets/images/gatsby.svg" },
    { name: "MongoDB", url: "/assets/images/mongodb.svg" },
    { name: "Postgresql", url: "/assets/images/postgresql.svg" },
    { name: "Github", url: "/assets/images/github.svg" },
    { name: "Hasura", url: "/assets/images/hasura.svg" },
    { name: "Blender", url: "/assets/images/blender.svg" },
  ]);

  const handleCloseContactForm=()=>{
    setisOpenContactForm(prev=>!prev)
  }
  const handleCloseProjectForm=()=>{
    setisOpenProjectForm(prev=>!prev)
  }

  return (
    <div className="container-index">
      <Head>
        <title>Vallordev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="home-header">
          <img
            src="/assets/images/logo.png"
            alt="vallordev"
            width="94px"
            height="96px"
          />
          <h1 className="title">VALLORDEV</h1>
          <p className="description">
            Nous concevons et développons des <br />
            applications <span>web</span> et <span>mobile</span>.
          </p>
          <div className="home-img1" />
          <div className="home-img2" />
          {/* <div className="home-img3" /> */}
        </div>
        <div className="parteners">
          <h6>ILS NOUS FONT DÉJÀ CONFIANCE</h6>
          <div className="logos-div">
            <img
              src="/assets/images/mongodb.svg"
              alt=""
              height="48px"
              width="48px"
            />
            <img
              src="/assets/images/github.svg"
              className="mx-2"
              alt=""
              height="48px"
              width="48px"
            />
            <img
              src="/assets/images/material.svg"
              alt=""
              height="48px"
              width="48px"
            />
            <img
              src="/assets/images/css.svg"
              className="mx-2"
              alt=""
              height="48px"
              width="48px"
            />
            <img
              src="/assets/images/gatsby.svg"
              alt=""
              height="48px"
              width="48px"
            />
            <img
              src="/assets/images/heroku.svg"
              className="mx-2"
              alt=""
              height="48px"
              width="48px"
            />
            <img
              src="/assets/images/postgresql.svg"
              alt=""
              height="48px"
              width="48px"
            />
            <div className="square1" />
            <div className="square2" />
          </div>
        </div>
        <div className="container-services pt-5">
          <h2>SERVICES</h2>
          <p>
            Des services adaptés pour réaliser votre <br />
            projet d’application.
          </p>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-4 col-xs-12 mb-3">
                <div className="card-service">
                  <img
                    src="/assets/images/design.svg"
                    alt=""
                    width="64px"
                    height="44px"
                  />
                  <h4>UX/UI design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 mb-3">
                <div className="card-service">
                  <img
                    src="/assets/images/developement.svg"
                    alt=""
                    width="64px"
                    height="44px"
                  />
                  <h4>Développement</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 mb-3">
                <div className="card-service">
                  <img
                    src="/assets/images/marketing.svg"
                    alt=""
                    width="48px"
                    height="44px"
                  />
                  <h4>Conseil digital</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h2>NOTRE ÉQUIPE</h2>
            <p>
              Nous sommes une équipe de développeurs
              <br /> et designers autour des valeurs pour
              <br /> la réussite des projets innovants.
            </p>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card-value">
                    <h4>Innovation</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card-value">
                    <h4>Intégrité</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card-value">
                    <h4>Performance</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card-value ">
                    <h4>Transparence</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card-value">
                    <h4>Passion</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card-value">
                    <h4>Vitesse</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-portfolio my-5">
            <h2>NOS ŒUVRES </h2>
            <p>
              Notre expérience nous permet de réaliser <br /> des applications
              dignes à utiliser.
            </p>
            <div className="container mt-5">
              <div className="row">
                <div className="col mb-2">
                  <div className="work-done" id="work-1">
                    <div className="empty-space" />
                    <div className="work-description">
                      <h3>Bisimbi</h3>
                      <a href="https://bisimbi.com/" target="_blank">
                        https://bisimbi.com/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-xs-12 mb-3 pl-md-1">
                  <div className="work-done " id="work-2">
                    <div className="empty-space" />
                    <div className="work-description">
                      <h3>Tayarifood</h3>
                      <a href="https://tayarifood.com/" target="_blank">
                        https://tayarifood.com/
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12 pl-md-1">
                  <div className="work-done" id="work-3">
                    <div className="empty-space" />
                    <div className="work-description">
                      <h3>Deelpay</h3>
                      <a href="https://deelpay.com/" target="_blank">
                        https://deelpay.com/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>OUTILS</h2>
            <p>
              Nous utilisons des technologies et outils de
              <br />
              dernière génération.
            </p>
            <div className="container my-5">
              <div className="tools-logo row">
                {logos.map((logo) => (
                  <div key={logo.name} className="tool-logo">
                    <img src={logo.url} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="banner-tansition" />
        </div>
        <div className="container-faq my-5">
          <h2><i className="fa fa-question-circle"/></h2>
          <h2>Questions fréquemment posées</h2>
          <div className="container mt-5">
          <div className="list-group-flush ">
            <Question question="Réalisez-vous des applications mobiles et des sites web?" answer="La reponse"/>
            <Question question="Quels sont vos tarifs horaires?" answer="La reponse"/>
            <Question question="Qu'est ce qu'il faut pour démarrer un projet avec vous?" answer="La reponse"/>
            <Question question="Où sont installé vos bureaux physiques?" answer="La reponse"/>
            <Question question="Offrez-vous un contrat de non-divulgation?" answer="La reponse"/>
            <Question question="J'ai encore des questions, comment puis-je vous contacter?" answer="La reponse"/>
          </div>
          </div>
        </div>
        <div className="container-contact py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 py-0 pr-md-0">
                <div className="card-contact">
                  <h4>Nous contacter</h4>
                  <p>Tél: 0978308679</p>
                  <p className="email">contact@vallordev.com</p>
                  <p>
                    DRC, Butembo, Rue Pré. de la Rép,
                    <br /> Immeuble kidubai 4e Niveau
                  </p>
                  <button onClick={handleCloseContactForm}>Nous contacter</button>
                </div>
              </div>
              <div className="col-sm-6 py-0 pl-md-0">
                <div className="card-new-project">
                  <h2>
                    Un nouveau
                    <br />
                    projet ?
                  </h2>
                  <button onClick={handleCloseProjectForm}>Parlons en ici!</button>
                </div>
              </div>
            </div>
          </div>
          <ContactForm handleClose={handleCloseContactForm} isOpen={isOpenContactForm}/>
          <ProjectForm handleClose={handleCloseProjectForm} isOpen={isOpenProjectForm}/>
        </div>
      </Layout>

      <style jsx>{`
        .container-index {
          min-height: 100vh;
          background: #dad9d7;
        }

        /* Ecran d'accueil du site vallordev */
        .home-header {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-image: url("/assets/images/bg-home-2.jpg");
          background-size: contain;
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-position: bottom;
        }
        @media (min-width: 768px) {
          .home-header {
            background-size: cover;
            background-position: right;
          }
        }
        .title {
          font-family: "Cormorant Garamond", serif;
          font-size: 48px;
          margin-top: 8px;
          margin-bottom: 0px;
          font-weight: normal;
          line-height: 48px;
        }
        .description {
          font-size: 1.5rem;
          color: rgba(0, 0, 0, 0.6);
          text-align: center;
          line-height: 1.5rem;
        }
        .description span {
          color: #000000;
          font-style: italic;
        }
        .home-img1 {
          top: 70px;
          left: 70px;
          position: absolute;
          height: 92px;
          width: 92px;
          background-image: url("/assets/images/girl-coder1.jpg");
          background-size: 196px;
          background-repeat: no-repeat;
          background-attachment: fixed;
          /* background-position: center center; */
          border-radius: 50%;
        }
        .home-img2 {
          top: 150px;
          left: 50px;
          position: absolute;
          height: 45px;
          width: 45px;
          background-image: url("/assets/images/code2.jpg");
          background-size: 220px;
          background-repeat: no-repeat;
          background-attachment: fixed;
          /* background-position: center right; */
          border-radius: 50%;
        }
        @media (min-width: 768px) {
          .home-img1 {
            height: 320px;
            width: 320px;
            background-size: 640px;
          }
          .home-img2 {
            height: 130px;
            width: 130px;
            background-size: 300px;
            /* background-position: center; */
          }
        }

        /* .home-img3 {
          position: absolute;
          height: 400px;
          width: 325px;
          background-image: url("/assets/images/img-team.jpg");
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          background-position: left;
          bottom: -10px;
          right: 80px;
          border-radius: 96% 92px 195px 100% / 280px 59px 100% 157px;
          transform: rotate(5deg);
        } */

        .parteners {
          background-color: #000;
          font-family: "Sorts Mill Goudy", serif;
          font-weight: 100;
          min-height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .parteners h6 {
          color: #f4a242;
          text-align: center;
          font-size: 24px;
        }
        .logos-div {
          text-align: center;
        }
        .parteners .square1 {
          position: absolute;
          height: 32px;
          width: 32px;
          background-color: #fff;
          transform: rotate(-63.8deg);
          left: -10px;
        }
        .parteners .square2 {
          position: absolute;
          height: 32px;
          width: 32px;
          background-color: #f4a242;
          transform: rotate(30deg);
          right: 7px;
          bottom: 10px;
          z-index: 10;
        }
        /* services section */

        .container-services {
          background-color: #e2e1df;
        }
        .container-services h2 {
          font-family: "Sorts Mill Goudy", serif;
          font-size: 52px;
          text-align: center;
          line-height: 52px;
          margin: 0px;
        }
        .container-services p {
          font-size: 1.5rem;
          text-align: center;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.5rem;
        }
        .container-services .card-service {
          background: linear-gradient(
            0.27deg,
            rgba(0, 0, 0, 1) -10.3%,
            #ffffff 360%
          );
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 171px;
        }
        .card-service h4 {
          color: #f4a242;
          font-weight: bold;
          font-family: Sorts Mill Goudy;
          font-size: 24px;
          line-height: 35px;
          margin-top: 8px;
          margin-bottom: 0px;
        }
        .card-service p {
          font-size: 18px;
          line-height: 21px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0px;
        }
        .card-value {
          background: linear-gradient(0.27deg, #dad9d7, #e2e1df 100%);
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          height: 120px;
        }
        .card-value h4 {
          font-size: 24px;
          color: rgba(0, 0, 0, 1);
          font-weight: bold;
          font-family: "Sorts Mill Goudy", serif;
        }
        .card-value p {
          display: none;
          font-size: 18px;
        }
        .card-value:hover {
          cursor: pointer;
          background: #e2e1df;
        }
        .card-value:hover p {
          display: block;
        }

        .tools-logo {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tool-logo {
          margin: 10px;
        }

        /* portfolio */
        .container-portfolio {
        }
        .container-portfolio h2 {
          font-family: "Sorts Mill Goudy", serif;
          font-size: 52px;
          text-align: center;
          line-height: 52px;
          margin: 0px;
        }
        .container-portfolio p {
          font-size: 1.5rem;
          text-align: center;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.5rem;
        }
        .work-done {
          border: none;
          height: 400px;
          display: flex;
          flex-direction: column;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          filter: blur(0.7px);
        }
        .work-done .empty-space {
          flex: 1;
          display: none;
          background-color: rgba(0, 0, 0, 0.8);
        }
        #work-1 {
          background-image: url("/assets/images/bisimbi.jpg");
        }
        #work-2 {
          background-image: url("/assets/images/tayarifood.jpg");
        }
        #work-3 {
          background-image: url("/assets/images/deelpay.jpg");
        }
        .work-description {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 40%;
          background-color: rgba(0, 0, 0, 0.9);
        }
        .work-description h3 {
          color: #fff;
          font-weight: normal;
          font-family: "Sorts Mill Goudy", serif;
        }
        .work-description a {
          color: #f4a242;
        }
        .work-done:hover {
          cursor: pointer;
        }
        .work-done:hover .work-description {
          display: flex;
        }
        .work-done:hover .empty-space {
          display: block;
        }
        @media (max-width: 768px) {
          .work-done {
            height: 200px;
          }
        }

        .banner-tansition {
          background-image: url("/assets/images/img-team-2.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center;
          height: 500px;
          filter:blur(1px);
        }
        .banner-tansition:hover{
          filter:blur(0px);
        }

        /* faq section */

        .container-faq {
        }
        .container-faq h2 {
          font-family: "Sorts Mill Goudy", serif;
          font-size: 52px;
          text-align: center;
          line-height: 52px;
          margin: 0px;
        }
        /* contact section */

        .container-contact {
        }
        .card-contact {
          background: #e8e9ee;
          height: 330px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .card-contact h4 {
          font-weight: bold;
          font-size: 28px;
          line-height: 28px;
        }
        .card-contact p {
          font-size: 18px;
          line-height: 21px;
          color: rgba(0, 0, 0, 0.5);
          text-align: center;
        }
        .card-contact .email {
          text-decoration-line: underline;
        }
        .card-contact button {
          border: 1px solid #f4a242;
          box-sizing: border-box;
          border-radius: 25px;
          color: #f4a242;
          padding: 10px 25px 10px 25px;
          font-size: 24px;
          font-weight: 100;
          line-height: 28px;
        }
        .card-contact button:hover,
        .card-contact button:focus,
        .card-contact button:active {
          background-color: #f4a242;
          color: #fff;
          outline: none;
        }
        .card-new-project {
          background-image: url("/assets/images/contact-bg.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: right;
          height: 330px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .card-new-project h2 {
          color: #fff;
          font-family: Sorts Mill Goudy;
          font-size: 52px;
          line-height: 75px;
          text-align: center;
        }
        .card-new-project button {
          border: 1px solid #fff;
          box-sizing: border-box;
          border-radius: 25px;
          background-color: transparent;
          color: #fff;
          padding: 10px 25px 10px 25px;
          font-size: 24px;
          font-weight: 100;
          line-height: 28px;
        }
        .card-new-project button:hover,
        .card-new-project button:focus,
        .card-new-project button:active {
          background-color: #f4a242;
          color: #fff;
          outline: none;
          border: 1px solid #f4a242;
        }
      `}</style>
    </div>
  );
}
