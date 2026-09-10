import { jwtVerify } from "jose";

export async function isAdmin(request) {
  const token = request.cookies.get("admin_token");
  if (!token) return false;

  try {
    const secret = new TextEncoder().encode(process.env.ADMIN_PASSWORD);
    await jwtVerify(token.value, secret);
    return true;
  } catch {
    return false;
  }
}
