interface CheckoutProps {
  wines: Array<{ skuid: number }>;
}

export function Checkout(props: CheckoutProps) {
  function checkoutLink() {
    let winesSlug = ''
    props.wines.forEach(
      (wine) => winesSlug += `&sku=${wine.skuid}&qty=1&seller=1`,
    );
    return `https://www.worldwine.com.br/checkout/cart/add?sc=1${winesSlug}`;
  }

  return (
    <a href={checkoutLink()} target="_blank">
      Checkout
    </a>
  );
}
