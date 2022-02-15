# MP-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### MP

```
import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons
} from 'mp-product-card';
```

```

<ProductCard
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10
    }}
>
  {
    ({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
      <>
        <ProductImage />
        <ProductTitle  />
        <ProductButtons />
      </>
    )
  }

</ProductCard>


```
