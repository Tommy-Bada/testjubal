# typography component

## How to use the typography.tsx

```jsx
import index from '@/shared/components/typography';
```

> Table for index Props

| Prop          | Type                      | Description                                | Required |
| ------------- | ------------------------- | ------------------------------------------ | -------- |
| **className** | string or Array of string | class name CSS property for the typography | Yes      |
| **children**  | string or React Node      |                                            | Yes      |

```ts
type ITypographyProp = {
  className: Array<string> | string;
  children: React.ReactNode;
};
```

- **H1**: Heading 1 tag of an HTML element.
- **H2**: Heading 2 tag of an HTML element.
- **H3**: Heading 3 tag of an HTML element.
- **H4**: Heading 4 tag of an HTML element.
- **H5**: Heading 5 tag of an HTML element.
- **H6**: Heading 6 tag of an HTML element.
- **Paragraph**: Paragraph tag of an HTML element.
