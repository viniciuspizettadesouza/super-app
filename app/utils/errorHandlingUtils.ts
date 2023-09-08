export function handleError(error: unknown): void {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
