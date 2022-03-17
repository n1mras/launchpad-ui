export function noop() {}
export function deNullify<T>(input: T|null|undefined, defaultValue: T): T {
    if (input == null) {
        return defaultValue
    }
    return input
}