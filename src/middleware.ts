import { auth } from "@/auth";

export default auth((req) => {
  const isAuth = !!req.auth;

  if (isAuth && req.nextUrl.pathname === "/login") {
    return Response.redirect(new URL("/", req.nextUrl.origin));
  }

  if (
    !isAuth &&
    (req.nextUrl.pathname === "/bookmarks" ||
      req.nextUrl.pathname === "/profile")
  ) {
    return Response.redirect(new URL("/login", req.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/login", "/profile", "/bookmarks"],
};
