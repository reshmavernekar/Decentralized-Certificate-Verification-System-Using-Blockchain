import React, { useState } from "react";
import { getBlockchain } from "./CertificateContract";
import "../App.css";

const CertificateForm = () => {
    const [certId, setCertId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [course, setCourse] = useState("");
    const [issuer, setIssuer] = useState("");
    const [issued, setIssued] = useState("");

    const issueCertificate = async () => {
        const contract = await getBlockchain();
        if (!contract) return;

        try {
            const tx = await contract.issueCertificate(certId, studentName, course, issuer);
            await tx.wait();
            setIssued(`Certificate issued successfully for ${studentName}!`);
        } catch (error) {
            console.error("Error issuing certificate:", error);
            setIssued("Error issuing certificate.");
        }
    };

    return (
        <div className="container">
            <h2>Issue Certificate</h2>
            <input className="input-field" type="text" placeholder="Certificate ID" value={certId} onChange={(e) => setCertId(e.target.value)} />
            <input className="input-field" type="text" placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
            <input className="input-field" type="text" placeholder="Course Name" value={course} onChange={(e) => setCourse(e.target.value)} />
            <input className="input-field" type="text" placeholder="Issuer" value={issuer} onChange={(e) => setIssuer(e.target.value)} />
            <button onClick={issueCertificate}>Issue Certificate</button>
            {issued && <div className="result">{issued}</div>}
        </div>
    );
};

export default CertificateForm;
