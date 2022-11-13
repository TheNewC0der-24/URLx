import React, { useState, useEffect } from "react";
import axios from "axios";

import CopyToClipboard from 'react-copy-to-clipboard';

import { useNavigate } from 'react-router-dom';


const Result = (props) => {

    const navigate = useNavigate();

    const [shortenUrl, setShortenUrl] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios(`https://api.shrtco.de/v2/shorten?url=${props.inputValue}`);
            setShortenUrl(response.data.result.full_short_link);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (props.inputValue.length > 0) {
            fetchData();
        }
    }, [props.inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);

    }, [copied]);

    if (loading) {
        return (
            <h5 className="noData">Loading...</h5>
        )
    }

    if (error) {
        navigate('/error');
    }

    return (
        <>
            {
                shortenUrl &&
                (
                    <div className="result">
                        <p>{shortenUrl}</p>
                        <CopyToClipboard
                            text={shortenUrl}
                            onCopy={() => setCopied(true)}
                        >
                            <button className={copied ? "copied" : ""}>{copied ? "Copied!" : "Copy URL"}</button>
                        </CopyToClipboard>
                    </div>
                )
            }
        </>
    )
}

export default Result;