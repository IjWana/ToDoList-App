//Here's a real-world example of how TanStack Query can be used in a web application:

// jsx
// Using TanStack Query to fetch user data in a React component

import { useQuery } from '@tanstack/react-query';

export function UserProfile({ userId }) {
    // The useQuery hook handles fetching, caching, and state management
    const {
        data,
        isLoading,
        error,
        refetch
    } = useQuery({
        queryKey: ['user', userId],
        queryFn: async () => {
            const response = await fetch(`https://api.example.com/users/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            return response.json();
        },
        // Automatically refetch when component comes back into view
        refetchOnWindowFocus: true,
        // Cache data for 5 minutes
        staleTime: 5 * 60 * 1000,
    });

    if (isLoading) return <div>Loading user data...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>{data.name}'s Profile</h1>
            <p>Email: {data.email}</p>
            <p>Role: {data.role}</p>
            <button onClick={refetch}>Refresh Data</button>
        </div>
    );
}



// In this example:

// - The component uses TanStack Query's useQuery hook to fetch user data from an API
// - The query is automatically cached using the ['user', userId] key
// - Loading and error states are handled elegantly
// - Data automatically refreshes when the browser window regains focus
// - A manual refresh button is provided using the refetch function
// - The data remains "fresh" for 5 minutes before being considered stale

// This is much cleaner than traditional approaches that would require managing loading states, errors, and caching manually with useEffect and useState hooks.

