import { headers } from "next/headers";

export default function Album() {
    const headerList = headers();
    const hostName = headerList.get("host");

    return (
        <h1>Hello from subdomain {hostName}</h1>
    );
}
