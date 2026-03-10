import { useGetProfileQuery } from "@/__generated__/output";


export function Profile() {
    const { data } = useGetProfileQuery()

    return <div>Profile page</div>
}