import { useRef, useEffect } from "react";

// source https://usehooks.com/usePrevious/
const usePrevious = <T>(value: T): T => {
    const ref: any = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};

export default usePrevious;
