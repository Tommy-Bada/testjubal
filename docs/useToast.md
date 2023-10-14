# useToast Hook

## How to use the useToast.tsx

```jsx
import { useToast } from '@/lib/hooks/useToast';
```

> Table for useToast Props

| Prop                 | Type       | Description                                               | Required |
| -------------------- | ---------- | --------------------------------------------------------- | -------- |
| **setAlert**         | Function   | this is the function that triggers the alert notification | Yes      |
| **message**          | string     | message is the test passed to the setALert function       | Yes      |
| **severity**         | AlertColor | tells the type of alert                                   | No       |
| **autoHideDuration** | number     | time in seconds for the mdoal to disappear                | No       |

```ts
type ToastContextType = {
  setAlert: (config: ToastConfig) => void;
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
};

type ToastConfig = {
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
};
```

> Table for setAlert Props

| Prop             | Type       | Description                                         | Required |
| ---------------- | ---------- | --------------------------------------------------- | -------- |
| message          | string     | message is the test passed to the setALert function | Yes      |
| severity         | AlertColor | tells the type of alert                             | No       |
| autoHideDuration | number     | time in seconds for the mdoal to disappear          | No       |

```ts
type ToastConfig = {
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
};
```

- **useToast**: A hook to render alert notifications on the DOM
