//const baseUrl = "http://localhost:3000";
const baseUrl =
  "http://datarakshak.bacqbmgwgja7hmcm.centralindia.azurecontainer.io:3000";
const faceBaseUrl = "http://localhost:5000";

export const redactPdfUrl = `${baseUrl}/redact-pdf`;
export const redactImgUrl = `${baseUrl}/redact-image`;
export const analyzePdfUrl = `${baseUrl}/analyze-pdf`;
export const redactPdfWithStringsUrl = `${baseUrl}/redact-from-strings`;
export const encryptPdfUrl = `${baseUrl}/encrypt-pdf`;
export const redactFaceUrl = `${faceBaseUrl}/redact-faces`;
