type GraphQLResponse<T> = {
    data?: T;
    errors?: Array<{ message: string }>;
};

export async function graphqlFetch<T>(
    query: string,
    variables?: Record<string, unknown>
): Promise<T> {
    const res = await fetch("/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify({
            query,
            variables
        })
    });

    if (!res.ok) {
        throw new Error(`GraphQL HTTP error ${res.status}`);
    }

    const json = (await res.json()) as GraphQLResponse<T>;

    if (json.errors?.length) {
        throw new Error(json.errors.map(e => e.message).join(", "));
    }

    if (!json.data) {
        throw new Error("GraphQL returned no data");
    }

    return json.data;
}
