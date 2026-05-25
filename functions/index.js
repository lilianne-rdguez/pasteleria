export async function onRequestGet(context) {
  const url = new URL(context.request.url);

  // Si la petición viene a través de admin.syslocalonna.com y es la raíz, redirigimos
  if (
    url.hostname === "admin.syslocalonna.com" &&
    (url.pathname === "/" || url.pathname === "/index.html")
  ) {
    return Response.redirect("https://admin.syslocalonna.com/admin", 302);
  }

  // De lo contrario, dejamos pasar la petición para que sirva los archivos estáticos normales (index.html)
  return context.next();
}
