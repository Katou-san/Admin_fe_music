export const URLValidate = {
    isUrl: (str: string) => {
        try {
            new URL(str)
            return false
        } catch (error) {
            return true
        }
    }
}