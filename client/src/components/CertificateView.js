import React, { useState } from "react";
import { getBlockchain } from "./CertificateContract";
import "../App.css";

const CertificateView = () => {
    const [certificateId, setCertificateId] = useState("");
    const [certificateDetails, setCertificateDetails] = useState("");

    const getCertificate = async () => {
        try {
            const contract = await getBlockchain();
            if (!contract) {
                console.error("No contract instance found");
                setCertificateDetails("Blockchain not connected.");
                return;
            }
            console.log("Contract instance:", contract);
            console.log("Certificate ID entered:", certificateId);
    
            const details = await contract.verifyCertificate(certificateId);
            console.log("Fetched details from blockchain:", details);
    
            if (!details || details.length < 5) {
                console.error("Invalid data returned:", details);
                setCertificateDetails("Invalid certificate data.");
                return;
            }
    
            const [studentName, course, issuer, issueDate, isValid] = details;
            const formattedDate = new Date(Number(issueDate) * 1000).toLocaleDateString();
    
            setCertificateDetails(`Student: ${studentName}, Course: ${course}, Issued By: ${issuer}, Date: ${formattedDate}, Valid: ${isValid}`);
        } catch (error) {
            console.error("Error fetching certificate:", error);
            setCertificateDetails("Error fetching certificate.");
        }
    };

    return (
        <div className="container">
            <h2>Retrieve Certificate</h2>
            <input
                className="input-field"
                type="text"
                placeholder="Enter Certificate ID"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
            />
            <button onClick={getCertificate}>Get Certificate</button>
            {certificateDetails && <div className="result">{certificateDetails}</div>}
        </div>
    );
};

export default CertificateView;
