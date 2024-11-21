import React from "react";

const ChequeInfo = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Understanding Cheques and Their Types</h1>
      <p>
        A cheque is a widely used financial instrument that facilitates
        non-cash transactions by instructing a bank to pay a specific amount
        from the account of the drawer to the payee. Cheques are convenient,
        secure, and legal forms of transferring money, commonly used for
        personal, business, and governmental purposes.
      </p>
      <h2>Key Features of a Cheque:</h2>
      <ul>
        <li>Drawer: The person who writes the cheque.</li>
        <li>Drawee: The bank that processes the cheque.</li>
        <li>Payee: The individual or entity receiving the payment.</li>
        <li>Amount: Clearly specified in words and numbers.</li>
        <li>Date: Indicates when the cheque is valid for processing.</li>
        <li>Signature: Authenticates the cheque.</li>
      </ul>
      <h2>Types of Cheques</h2>
      <ol>
        <li>
          <strong>Bearer Cheque:</strong> A cheque that can be encashed by the
          person presenting it, without needing the payee’s identification.
          <ul>
            <li>Written with "Bearer" on the cheque.</li>
            <li>Easily transferable.</li>
            <li>Risks: High risk of misuse if lost or stolen.</li>
          </ul>
        </li>
        <li>
          <strong>Order Cheque:</strong> A cheque issued to a specific person
          or entity, requiring endorsement and identity verification before
          encashment.
          <ul>
            <li>The word "Bearer" is crossed out.</li>
            <li>Safer than bearer cheques.</li>
            <li>Use Case: Suitable for personal transactions requiring
            security.</li>
          </ul>
        </li>
        <li>
          <strong>Crossed Cheque:</strong> A cheque with two parallel lines on
          its top left corner, indicating that the amount should only be
          credited to the payee’s bank account.
          <ul>
            <li>Not encashable over the counter.</li>
            <li>Reduces theft risk.</li>
            <li>Use Case: Common in business and salary payments.</li>
          </ul>
        </li>
        <li>
          <strong>Open Cheque:</strong> A cheque that is not crossed and can be
          encashed over the counter or transferred.
          <ul>
            <li>Can be endorsed to another party.</li>
            <li>Risks: Prone to misuse due to its flexibility.</li>
          </ul>
        </li>
        <li>
          <strong>Post-Dated Cheque:</strong> A cheque dated for a future date,
          making it valid only on or after that date.
          <ul>
            <li>Useful for deferred payments.</li>
            <li>Risks: Cannot be encashed immediately, so timing is crucial.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default ChequeInfo;
