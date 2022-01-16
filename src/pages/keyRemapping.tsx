import React, {MouseEventHandler, useContext, useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {isChrome} from 'react-device-detect';
import Select, {StylesConfig} from "react-select";
import {GroupedOptions} from "../components/KeyCodes"
import {PopoverPicker} from "../components/PopoverPicker";


interface SelectProps {
    name: string,
    values: any;
}

function KeyChooser(props: SelectProps) {
    const customStyles: StylesConfig = {
        input: (provided) => ({...provided, width: 220}),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "var(--ifm-hero-background-color)",
        })
    }
    return (
        <div className="margin-top--md center colum-direction col col--3">
            <h3>{`${props.name}`}</h3>
            <Select options={props.values} styles={customStyles}/>
        </div>
    );
}


function MainContent() {
    const [isActive, setActive] = useState({"Top": true, "Front": false, "Back": false, "Left": false, "Right": false})
    const setActualActive = (e) => {
        for (let activeKey in isActive) {
            isActive[activeKey] = activeKey == e.target.id;
        }
        setActive({...isActive})
    };
    const tabs = Object.entries(isActive).map(([key]) => {
        return <li onClick={setActualActive} id={key} key={key}
                   className={`tabs__item ${isActive[key] ? "tabs__item--active" : ""}`}>{key}</li>;
    })
    const [color, setColor] = useState("#bbdccd");

    return (
        <section>
            <div className="container">
                <ul className="tabs">{tabs}</ul>
                <div className="row">
                    <KeyChooser values={GroupedOptions} name={"First Key"}/>
                    <KeyChooser values={GroupedOptions} name={"Second Key"}/>
                    <KeyChooser values={GroupedOptions} name={"Third Key"}/>
                    <PopoverPicker color={color} onChange={setColor} />
                </div>
                <div className="center row padding--lg">
                    <button className={"button button--primary button--lg"}> Configure</button>
                </div>
            </div>
        </section>
    );
}


function NotConnected() {
    return (
        <section className="container margin-top--md">
            <div className="alert alert--warning" role="alert">
                You should first <strong>connect</strong> to the device.
            </div>
        </section>
    );
}

function IsNotChromeAlert() {
    return (
        <div className="container margin-top--md">
            <div className="alert alert--danger" role="alert">
                You must use <strong>chrome</strong> in order to access this feature.
            </div>
        </div>
    );
}

export default function KeyRemapping() {
    const {siteConfig} = useDocusaurusContext();
    const [connected, setConnected] = useState<boolean>(true);
    return (
        <Layout title="Key Remapping" description="Remap your favorites keys or commands">
            <header>
                <div className="hero shadow--lw">
                    <div className="container">
                        <h1 className="hero__title">Key Remapping</h1>
                        <p className="hero__subtitle">Remap your favorites keys or commands.</p>
                        <p>{`First you have to connect to the you ${siteConfig.title}`}</p>
                        <button
                            className={`button ${!isChrome ? "disabled" : ""} button--info button--outline button--lg`}> Connect
                        </button>
                        {/*Here should be like a and explanation of the program that is the default*/}
                    </div>
                </div>
            </header>
            <main>
                {!isChrome ? <IsNotChromeAlert/> : connected ? <MainContent/> : <NotConnected/>}
            </main>
        </Layout>
    );
}

