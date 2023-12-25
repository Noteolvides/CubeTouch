import React from 'react';
import Layout from "@theme/Layout";


export default function Home() {
    return (
        <Layout
            title={`CubeTouch`}
            description="A easy and fun HID device">

            <div className="container">
                <div className="row">
                    <div className="col col--6 text--center">
                        <h2>Cubetouch manual</h2>
                        <embed src={require("../../static/Manual.pdf").default + "#toolbar=0&navpanes=0&scrollbar=0"}
                               type="application/pdf" width="100%" style={{maxWidth: "100%", height: "80vh"}}/>
                    </div>
                    <div className="col col--6 text--center">
                        <h2>Build montage</h2>
                        <iframe style={{width: "inherit"}} height="500" src="https://www.youtube.com/embed/8IG3UgNzkUI"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>


        </Layout>
    );
}
