import { useState } from "react";

export default function useApi(apiFunction: any) {
    const [data, setData] = useState<any | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const request = async (...args: any[]) => {
        setLoading(true);
        const result = await apiFunction(...args);
        setLoading(false);

        if (result.status === "success") {
            setData(result.data);
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
