import React, { useState, useEffect } from "react";
import axios from "axios";

import CopyToClipboard from 'react-copy-to-clipboard';

const Result = (props) => {

    const [shortenUrl, setShortenUrl] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios(`https://api.shrtco.de/v2/shorten?url=${props.inputValue}`);
            setShortenUrl(response.data.result.full_short_link);
        } catch (error) {

        } finally {

        }
    }

    useEffect(() => {
        if (props.inputValue.length > 0) {
            fetchData();
        }

        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);

    }, [copied, props.inputValue]);

    return (
        <>
            {loading ? <div className="lds-dual-ring">Loading...</div> : null}
            {shortenUrl && (
                <div className="result">
                    <p>{shortenUrl}</p>
                    <CopyToClipboard
                        text={shortenUrl}
                        onCopy={() => setCopied(true)}
                    >
                        <button className={copied ? "copied" : ""}>Copy URL</button>
                    </CopyToClipboard>
                </div>
            )}
        </>
    )
}

export default Result;