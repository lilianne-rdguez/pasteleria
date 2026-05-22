import defaultMacarons from "../../macarons.json";

export async function onRequestGet(context) {
  try {
    let macarons = null;

    // Intentar leer de Cloudflare KV si el Namespace está vinculado
    if (context.env.PASTELERIA_KV) {
      const kvData = await context.env.PASTELERIA_KV.get("macarons");
      if (kvData) {
        macarons = JSON.parse(kvData);
      }
    }

    // Si no hay datos en KV (o KV no está configurado), usamos el catálogo plantilla importado
    if (!macarons) {
      macarons = defaultMacarons;
    }

    return new Response(JSON.stringify(macarons), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestPost(context) {
  try {
    const macaronsNuevos = await context.request.json();

    // Validaciones básicas de seguridad y formato
    if (!Array.isArray(macaronsNuevos)) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Los datos enviados deben ser un array de macarons.' 
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Intentar guardar en Cloudflare KV
    if (context.env.PASTELERIA_KV) {
      await context.env.PASTELERIA_KV.put("macarons", JSON.stringify(macaronsNuevos));
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'El catálogo ha sido guardado con éxito en Cloudflare KV.' 
      }), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      // Si KV no está vinculado, devolvemos un error informativo controlado.
      // Esto permitirá al admin.html descargar el archivo local de respaldo.
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Base de datos Cloudflare KV no configurada o no vinculada (PASTELERIA_KV).' 
      }), {
        status: 501,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

// Soporte para CORS en preflight (opcional por robustez)
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
