import React from 'react';
import Layout from "@theme/Layout";


export default function Home() {
    return (
        <Layout
            title={`CubeTouch`}
            description="A easy and fun HID device">
            <embed src={require("../../static/Manual.pdf").default + "#toolbar=0&navpanes=0&scrollbar=0"}
                   type="application/pdf" width="100%" style={{maxWidth: "100%", height: "80vh"}}/>
        </Layout>
    );
}
