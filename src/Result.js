import React, { useState, useEffect } from "react";

import CopyToClipboard from 'react-copy-to-clipboard';

const Result = () => {

    const [shortenUrl, setShortenUrl] = useState("Hello World");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [copied])


    return (
        <div className="result">
            <p>{shortenUrl}</p>
            <CopyToClipboard
                text={shortenUrl}
                onCopy={() => setCopied(true)}
            >
                <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
            </CopyToClipboard>
        </div>
    )
}

export default Result;