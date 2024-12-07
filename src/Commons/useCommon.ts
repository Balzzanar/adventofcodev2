export interface UseCommon {
    sayHI(): string
}

export function useCommon(): UseCommon {

    function sayHI(): string {
        return 'hi'
    }

    return {
        sayHI
    }
}