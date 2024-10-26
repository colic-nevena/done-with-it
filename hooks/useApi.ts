import { useState } from "react";

export default function useApi<T>(apiFunction: Function) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const request = async (...args: any[]) => {
        setLoading(true);
        const result = await apiFunction(...args);
        setLoading(false);

        if (result.status === "success") {
            setData(result.data as T);
        } else {
            setError(result.data as string);
        }

        return result
    };

    return {
        request,
        data,
        error,
        loading
    };
}
