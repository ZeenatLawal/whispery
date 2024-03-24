import { useCallback, useEffect, useState } from "react";

function encodeCookie<CookieType extends string | number | boolean>(val: CookieType): string {
    if (val === true) return "true";
    if (val === false) return "false";
    return val.toString();
}

function decodeCookie<CookieType extends string | number | boolean>(val: string, defaultVal: CookieType): CookieType {
    if (val === "true" && typeof defaultVal === "boolean") return true as CookieType;
    if (val === "false" && typeof defaultVal === "boolean") return false as CookieType;
    if (typeof defaultVal === "number") return parseFloat(val) as CookieType;
    return val as CookieType;
}

function getItem<CookieType extends string | number | boolean>(key: string, defaultVal: CookieType): CookieType {
    const cookies = document.cookie.split("; ").map((cookie) => cookie.split("="));
    const thisCookie = cookies.find(([storedKey]) => storedKey === key);

    if (thisCookie !== undefined) {
        return decodeCookie(thisCookie[1], defaultVal) as CookieType;
    } else {
        return defaultVal;
    }
}

function setItem<CookieType extends string | number | boolean>(key: string, value: CookieType, numberOfDays?: number) {
    const now = new Date();
    // set the time to be now + numberOfDays
    now.setTime(now.getTime() + (numberOfDays || 100) * 60 * 60 * 24 * 1000);
    document.cookie = `${key}=${encodeCookie(value)}; expires=${now.toUTCString()}; path=/`;
}

export function useCookie<CookieType extends string | number | boolean>(
    key: string,
    defaultValue: CookieType,
): [CookieType, (value: CookieType, numberOfDays?: number) => void] {
    const storedVal = getItem<CookieType>(key, defaultValue);
    const [cookie, setCookie] = useState(storedVal !== null ? storedVal : defaultValue);

    const updateCookie = useCallback(
        (value: CookieType, numberOfDays?: number) => {
            setCookie(value);
            setItem<CookieType>(key, value, numberOfDays);
        },
        [key],
    );

    // when first load, refresh the cookie
    useEffect(() => {
        updateCookie(cookie);
    }, [updateCookie, cookie]);

    return [cookie, updateCookie];
}
