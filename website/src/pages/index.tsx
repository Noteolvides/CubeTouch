import React, {useCallback, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photos} from "../components/photos";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--outline button--secondary button--lg"
                        href="https://www.tindie.com/products/26778/">
                        Buy your CubeTouch now!<p style={{marginBottom:"0"}}>🥳</p>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <Layout
            title={`CubeTouch`}
            description="An easy and fun HID device">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <section style={{display:"flex",alignItems:"center",padding:"2rem 0",width:"100%"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col col--6 text--center">
                                <h2>Promo video</h2>
                                <iframe style={{width:"inherit"}} className=""  height="315"
                                        src="https://www.youtube.com/embed/VJH5Z2vRkU0"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className="col col--6 text--center">
                                <h2>Build montage</h2>
                                <iframe style={{width:"inherit"}} height="315" src="https://www.youtube.com/embed/8IG3UgNzkUI"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{display:"flex",alignItems:"center",padding:"2rem 0",width:"100%"}}>
                    <div className="container text--center">
                        <h2>Photos</h2>
                        <Gallery photos={photos} onClick={openLightbox} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={photos.map(x => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
