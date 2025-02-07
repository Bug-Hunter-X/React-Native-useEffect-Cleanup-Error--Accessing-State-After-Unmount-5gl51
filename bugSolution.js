```javascript
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMounted.current) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      isMounted.current = false; //Prevent state access
    };
  }, []);

  return <Text>Count: {count}</Text>;
};
```