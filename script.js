const form = typeof ORDER_FORM_URL !== "undefined" ? ORDER_FORM_URL : "";
const productField = typeof PRODUCT_FIELD !== "undefined" ? PRODUCT_FIELD : "entry.1657275994";

const orderLink = document.getElementById("orderlink");
if (orderLink && form) orderLink.href = form;

function quote(product, code) {
  if (!form) {
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  const params = new URLSearchParams();
  params.set(productField, `${product} — ${code}`);
  window.open(`${form}?usp=pp_url&${params.toString()}`, "_blank", "noopener");
}
