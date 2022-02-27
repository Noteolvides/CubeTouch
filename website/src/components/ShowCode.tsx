import React, {useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark, atomOneLight} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import useThemeContext from '@theme/hooks/useThemeContext';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface Props {
    url: string;
}

const ShowCode = ({url}: Props) => {
    const {isDarkTheme} = useThemeContext();
    const [code, setCode] = useState("Code not found check url");
    const [copyCode, setCopyCode] = useState("Copy");
    const {siteConfig} = useDocusaurusContext();
    const myConfig = {
        urlGithub: "https://github.com",
        rawGithub: "https://raw.githubusercontent.com",
        mainBranch: "main",
        examplesFolder: "Examples",
    }
    const fullRuteRaw = `${myConfig.rawGithub}/${siteConfig.organizationName}/${siteConfig.projectName}/${myConfig.mainBranch}/${myConfig.examplesFolder}/${url}`;
    const fullRuteGit = `${myConfig.urlGithub}/${siteConfig.organizationName}/${siteConfig.projectName}/blob/${myConfig.mainBranch}/${myConfig.examplesFolder}/${url}`;
    fetch(fullRuteRaw)
        .then(function (response) {
            switch (response.status) {
                // status "OK"
                case 200:
                    return response.text();
                // status "Not Found"
                case 404:
                    throw response;
            }
        })
        .then(function (template) {
            setCode(template)
        })
        .catch(function (response) {
            console.error(response.statusText);
        });

    return (
        <div>
            <div>
            <span onClick={() => {

                navigator.clipboard.writeText(code).then(() => {
                    setCopyCode("Copied!");
                    setTimeout(() => {
                        setCopyCode("Copy");
                    }, 1000);
                })
            }} className="badge badge--info">{copyCode}</span>
                <a target="_blank" href={fullRuteGit} className="badge badge--primary">Check in github</a>
            </div>
            <SyntaxHighlighter wrapLines wrapLongLines showLineNumbers language="cpp"
                               style={isDarkTheme ? atomOneDark : atomOneLight}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default ShowCode;