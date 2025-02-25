// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Certificate {
    struct Cert {
        string studentName;
        string course;
        string issuer;
        uint256 issueDate;
        bool isValid;
    }

    mapping(string => Cert) public certificates;
    address public admin;

    event CertificateIssued(string certId, string studentName, string course, string issuer);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can issue certificates");
        _;
    }

    constructor() {
        admin = msg.sender;
    }
    
    function issueCertificate(string memory _certId, string memory _studentName, string memory _course, string memory _issuer) public onlyAdmin {
        require(!certificates[_certId].isValid, "Certificate already exists");

        certificates[_certId] = Cert(_studentName, _course, _issuer, block.timestamp, true);
        emit CertificateIssued(_certId, _studentName, _course, _issuer);
    }

    function verifyCertificate(string memory _certId) public view returns (string memory, string memory, string memory, uint256, bool) {
        Cert memory cert = certificates[_certId];
        require(cert.isValid, "Certificate not found");
        return (cert.studentName, cert.course, cert.issuer, cert.issueDate, cert.isValid);
    }

}
