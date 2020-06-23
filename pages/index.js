import Head from "next/head";
import {useState} from "react"
import Layout from "../components/layout";
export default function Home() {
  const [logos, setlogos] = useState([
    {name:"Redux", url:"/assets/images/redux.svg"},
    {name:"Firebase", url:"/assets/images/firebase.svg"},
    {name:"Reactjs", url:"/assets/images/reactjs.svg"},
    {name:"Flutter", url:"/assets/images/flutter.svg"},
    {name:"Figma", url:"/assets/images/figma.svg"},
    {name:"CSS", url:"/assets/images/css.svg"},
    {name:"HTML", url:"/assets/images/html.svg"},
    {name:"NodeJS", url:"/assets/images/nodejs.svg"},
    {name:"Prisma", url:"/assets/images/prisma.svg"},
    {name:"Graphql", url:"/assets/images/graphql.svg"},
    {name:"Google cloud", url:"/assets/images/google.svg"},
    {name:"Heroku", url:"/assets/images/heroku.svg"},
    {name:"Material UI", url:"/assets/images/material.svg"},
    {name:"NextJS", url:"/assets/images/nextjs.svg"},
    {name:"Gatsby", url:"/assets/images/gatsby.svg"},
    {name:"MongoDB", url:"/assets/images/mongodb.svg"},
    {name:"Postgresql", url:"/assets/images/postgresql.svg"},
    {name:"Github", url:"/assets/images/github.svg"},
    {name:"Hasura", url:"/assets/images/hasura.svg"},
    {name:"Blender", url:"/assets/images/blender.svg"},
  ])
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
        </div>
        <div className="container-services py-5">
          <h2>Services</h2>
          <p>
            Des services adaptés pour propulser votre <br />
            projet d’application.
          </p>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-4 col-xs-12 mb-3">
                <div className="card-service">
                  <img src="/assets/images/design.png" alt="" width="64px" height="44px" />
                  <h4>UX/UI design</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 mb-3">
                <div className="card-service">
                  <img src="/assets/images/developement.png" alt="" width="64px" height="44px" />
                  <h4>Développement</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 mb-3">
                <div className="card-service">
                  <img src="/assets/images/marketing.png" alt="" width="48px" height="44px" />
                  <h4>Conseil digital</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h2>Notre équipe</h2>
            <p>
              Nous sommes une équipe de développeurs<br/> et designers autour des valeurs pour<br/> la réussite de projet innovant.
            </p>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card-value">
                    <h4>Innovation</h4>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card-value">
                    <h4>Intégrité</h4>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card-value">
                    <h4>Performance</h4>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card-value ">
                    <h4>Vitesse</h4>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card-value">
                    <h4>Vitesse</h4>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card-value">
                    <h4>Vitesse</h4>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div>
            <h2>Outils et technologies</h2>
            <p>Nous utilisons des technologies et outils de<br/>dernière génération.</p>
            <div className="container my-5">
              <div className="tools-logo row">
                {
                  logos.map(logo=><div key={logo.name} className="tool-logo">
                    <img src={logo.url} alt={logo.name}/></div>)
                }
              </div>
            </div>
          </div>
        </div>
        <div className="container-portfolio my-5">
        <h2>Nos œuvres</h2>
            <p>
            Notre expérience nous  permet de produire <br/> des applications dignes sur le marché
            </p>
        </div>
        <div className="container-contact py-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 p-0">
                <div className="card-contact">
                  <h4>Nous contacter</h4>
                  <p>Tél: 0978308679</p>
                  <p className="email">contact@vallordev.com</p>
                  <p>DRC, Butembo, Rue Pré. de la Rép,<br/> Immeuble kidubai 4e Niveau</p>
                  <button>Nous contacter</button>
                </div>
                </div>
                <div className="col-sm-6 p-0">
                  <div className="card-new-project">
                    <h2>Un nouveau<br/>projet ?</h2>
                    <button>Parlons en ici!</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Layout>

      <style jsx>{`
        .container-index {
          min-height: 100vh;
          background: #dad9d7;
        }

        /* Ecran d'accueil du site vallordev */
        .home-header {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
        .container-services .card-service{
          background:linear-gradient(0.27deg, rgba(0, 0, 0, 1) -10.3%, #FFFFFF 360%);
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          height: 171px;
        }
        .card-service h4{
          color:#F4A242;
          font-family: Sorts Mill Goudy;
          font-size:24px;
          line-height:35px;
          margin-top:8px;
          margin-bottom:0px
        }
        .card-service p{
          font-size: 18px;
          line-height: 21px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom:0px;
        }
        .card-value{
          background:linear-gradient(0.27deg, #dad9d7 , #E2E1DF 100%);
          display:flex;
          align-items:center;
          justify-content:center;
          height: 120px;
        }
        .card-value h4{
          font-size:24px;
          color: rgba(0, 0, 0, 0.8);
          font-weight:bold;
        }
        .card-value:hover{
          cursor:pointer;
          background:#E2E1DF;
        }

        .tools-logo{
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .tool-logo{
          margin:10px;
        }


        /* portfolio */
.container-portfolio{

}
.container-portfolio h2{
  font-family: "Sorts Mill Goudy", serif;
          font-size: 52px;
          text-align: center;
          line-height: 52px;
          margin: 0px;
}
.container-portfolio p{
          font-size: 1.5rem;
          text-align: center;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.5rem;
}
        /* contact section */

        .container-contact{

        }
        .card-contact{
          background:#E8E9EE;
          height: 330px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }
        .card-contact h4{
          font-weight:bold;
          font-size: 28px;
          line-height: 28px;
        }
        .card-contact p{
          font-size: 18px;
          line-height: 21px;
          color: rgba(0, 0, 0, 0.5);
          text-align:center;
        }
        .card-contact .email{
          text-decoration-line: underline;
        }
        .card-contact button{
          border: 1px solid #F4A242;
          box-sizing: border-box;
          border-radius: 25px;
          color:#F4A242;
          padding:10px 25px 10px 25px;
          font-size: 24px;
          font-weight:100;
          line-height: 28px;
        }
        .card-contact button:hover,
        .card-contact button:focus,
        .card-contact button:active{
          background-color:#F4A242;
          color:#fff;
          outline:none;
        }
        .card-new-project{
          background-image: url("/assets/images/contact-bg.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: right;
          height: 330px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }
        .card-new-project h2{
          color:#fff;
          font-family: Sorts Mill Goudy;
          font-size: 52px;
          line-height: 75px;
          text-align: center;
        }
        .card-new-project button{
          border: 1px solid #fff;
          box-sizing: border-box;
          border-radius: 25px;
          background-color:transparent;
          color:#fff;
          padding:10px 25px 10px 25px;
          font-size: 24px;
          font-weight:100;
          line-height: 28px;
        }
        .card-new-project button:hover,
        .card-new-project button:focus,
        .card-new-project button:active{
          background-color:#F4A242;
          color:#fff;
          outline:none;
          border: 1px solid #F4A242;
        }

      `}</style>
    </div>
  );
}
