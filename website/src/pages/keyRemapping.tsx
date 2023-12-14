import React, {isValidElement, MouseEventHandler, useContext, useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {isChrome} from 'react-device-detect';
import Select, {StylesConfig} from "react-select";
import {Empty, GroupedOptions, Letters, Option} from "../components/KeyCodes"
import {PopoverPicker} from "../components/PopoverPicker";
import SerialProvider, {SerialContextValue, useSerial} from "../components/SerialProvider";
import {ActionMeta,} from "react-select/dist/declarations/src/types";

const facesNames: Array<string> = ["Back", "Right", "Left", "Front", "Top"]
let fullMessage = "";

interface TouchFace {
    name: string
    firstValue: Option,
    secondValue: Option,
    thirdValue: Option,
    color: string
}

function initTouchFaces(): Array<TouchFace> {
    const initial: TouchFace = {
        name: '',
        firstValue: Empty[0],
        secondValue: Empty[0],
        thirdValue: Empty[0],
        color: "#bbdccd"
    };
    const faces: Array<TouchFace> = [{...initial}, {...initial}, {...initial}, {...initial}, {...initial}]
    return faces.map((face, index) => {
        face = {...initial}
        face.name = facesNames[index]
        return face;
    })
}


interface SelectProps {
    name: string,
    selectorValue: Option
    selectNewValue: (option: Option) => void,
}

function KeyChooser(props: SelectProps) {
    const customStyles: StylesConfig = {
        input: (provided) => ({...provided, width: 220}),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "var(--ifm-hero-background-color)",
        })
    }

    const atChange = (option: Option, actionMeta: ActionMeta<Option>) => {
        if (actionMeta.action == "select-option") {
            props.selectNewValue(option)
        }
    }
    return (
        <div className="margin-top--md center colum-direction col col--3">
            <h3>{`${props.name}`}</h3>
            <Select options={GroupedOptions} value={props.selectorValue} onChange={atChange} styles={customStyles}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: 'pink',
                        },
                    })}/>
        </div>
    );
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

interface propsTouchSelector {
    face: TouchFace,
    setFaceParent: (value: TouchFace) => void
}

const TouchSelector = (props: propsTouchSelector) => {
    return (<div className="row">
        <KeyChooser name="First Key" selectorValue={props.face.firstValue} selectNewValue={(value: Option) => {
            props.face.firstValue = value;
            props.setFaceParent(props.face);
        }}/>
        <KeyChooser name="Second Key" selectorValue={props.face.secondValue} selectNewValue={(value: Option) => {
            props.face.secondValue = value;
            props.setFaceParent(props.face);
        }}/>
        <KeyChooser name="Third Key" selectorValue={props.face.thirdValue} selectNewValue={(value: Option) => {
            props.face.thirdValue = value;
            props.setFaceParent(props.face);
        }}/>
        <PopoverPicker color={props.face.color} onChange={(color) => {
            props.face.color = color;
            props.setFaceParent(props.face);
        }}/>
    </div>);
};

function SaveSuccess() {
    return (
        <section className="container margin-top--md">
            <div className="alert alert--success" role="alert">
                <strong>Saved successfully</strong>
            </div>
        </section>
    );
}

const MainContent = () => {
    const context = useSerial();
    const [faces, setFaces] = useState<Array<TouchFace>>(initTouchFaces())
    const [indexFace, setIndexFace] = useState(0)
    const [success, setSuccess] = useState<boolean>(false);
    const tabs = faces.map((face, index) => {

        const setActualActive = (e) => {
            faces.forEach((face, index) => {
                if (face.name == e.target.id) setIndexFace(index);
            })
        };
        return <li onClick={setActualActive} key={face.name} id={face.name}
                   className={`tabs__item ${index == indexFace ? "tabs__item--active" : ""}`}>{face.name}</li>;
    })
    useEffect(() => {
        context.subscribeRead(message => {
            fullMessage += message.value;
            if (fullMessage[0] == '#' && fullMessage[fullMessage.length - 1] == '#') {
                const values = fullMessage.slice(1, -1).match(/\d+/g).map(Number);
                for (let i = 0; i <= 4; i++) {
                    GroupedOptions.forEach((e) => {
                        e.options.forEach((t) => {
                            if (t.value == values[i * 6]) {
                                faces[i].firstValue = t;
                            }
                            if (t.value == values[i * 6 + 1]) {
                                faces[i].secondValue = t;
                            }
                            if (t.value == values[i * 6 + 2]) {
                                faces[i].thirdValue = t;
                            }
                        })
                    })
                    faces[i].color = rgbToHex(values[i * 6 + 3], values[i * 6 + 4], values[i * 6 + 5])
                }
                setFaces([...faces]);
                fullMessage = "";
            }
        });
        let dataToSend = new Uint8Array(1);
        dataToSend[0] = "D".charCodeAt(0);
        context.sendMessage(dataToSend);
    }, [])
    const sendData = () => {
        let dataToSend = new Uint8Array(8);
        dataToSend[0] = "C".charCodeAt(0);
        dataToSend[1] = indexFace;
        const face = faces[indexFace]
        const colorInt = hexToRgb(face.color);
        dataToSend[2] = face.firstValue.value;
        dataToSend[3] = face.secondValue.value;
        dataToSend[4] = face.thirdValue.value;
        dataToSend[5] = colorInt?.r;
        dataToSend[6] = colorInt?.g;
        dataToSend[7] = colorInt?.b;
        console.log(dataToSend);
        context.sendMessage(dataToSend).then(() => {
            dataToSend[0] = "D".charCodeAt(0);
            context.sendMessage(dataToSend);
            setSuccess(true);
            setTimeout(function () {
                console.log(context.portState);
                setSuccess(false)
            }, 4000);
        });
    }
    return (
        <section>
            <div className="container">
                <ul className="tabs">{tabs}</ul>
                <TouchSelector face={faces[indexFace]} setFaceParent={(value: TouchFace) => {
                    faces[indexFace] = {...value};
                    console.log(faces)
                    setFaces([...faces])
                }}/>
                <div className="center row padding--lg">
                    <button className={"button button--primary button--lg"} onClick={sendData}> Configure</button>
                    {success ? <SaveSuccess/> : <React.Fragment/>}
                </div>
            </div>
        </section>
    );
};


function NotConnected() {
    return (
        <section className="container margin-top--md">
            <div className="alert alert--warning" role="alert">
                You should first <strong>connect</strong> to the device.
            </div>
        </section>
    );
}

function ErrorConnecting() {
    return (
        <section className="container margin-top--md">
            <div className="alert alert--danger" role="alert">
                <p>
                    <strong>Error connecting</strong>
                </p>
                Maybe you have already open serial monitor in arduino?
                If not try to unplug and plug the usb.
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

const LayoutPage = () => {
    const context = useSerial();
    const {siteConfig} = useDocusaurusContext();
    const [connected, setConnected] = useState<boolean>(context.portState == "open");
    const [error, setErrorConnected] = useState<boolean>(false);
    const tryConnect = async () => {
        console.debug("Trying to connect")
        if (!connected) {
            await context.connect().then((result) => {
                    if (result) {
                        setConnected(result)
                    } else {
                        setErrorConnected(true);
                        setTimeout(function () {
                            console.log(context.portState);
                            setErrorConnected(false)
                        }, 5000);
                    }
                }
            );
        } else {
            await context.disconnect().then((result) => {
                setConnected(!result)
            });
        }
    }
    return <Layout title="Key Remapping" description="Remap your favorites keys or commands">
        <header>
            <div className="hero shadow--lw">
                <div className="container">
                    <h1 className="hero__title">Key Remapping</h1>
                    <p className="hero__subtitle">Remap your favorites keys or commands.</p>
                    <p>{`First you have to connect to the you ${siteConfig.title}`}</p>
                    <button
                        className={`button ${connected ? "button--warning" : ""} button--info button button--lg`}
                        onClick={tryConnect}> {!connected ? "Connect" : "Disconnect"}
                    </button>
                    {/*Here should be like a and explanation of the program that is the default*/}
                </div>
            </div>
        </header>
        <main>
            {!isChrome ? <IsNotChromeAlert/> : connected ? <MainContent/> : <NotConnected/>}
            {error ? <ErrorConnecting/> : <React.Fragment/>}
        </main>
    </Layout>;
}

export default function KeyRemapping() {
    return (
        <SerialProvider>
            <LayoutPage/>
        </SerialProvider>
    );
}

