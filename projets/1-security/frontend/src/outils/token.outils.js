// frontend/src/outils.token.outils.js

import { jwtDecode } from "jwt-decode";

export function tokenIsAdmin(token) {
  if (!token) {
    return false;
  }

  try {
    const decoded = jwtDecode(token);
    return decoded.role === "admin" || decoded.isAdmin === true;
  } catch (err) {
    // Token invalide ou malformé
    return false;
  }

  return true;
}

export function getAccessTokenFromCookie() {
  const match = document.cookie.match(/(?:^|;\s*)accessToken=([^;]+)/);
  return match ? match[1] : null;
}

export function getUserIdFromToken() {
  const token = getAccessTokenFromCookie();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded._id; // ou decoded.id selon ton payload JWT
  } catch (err) {
    console.error("Erreur lors du décodage du token :", err);
    return null;
  }
}
