import { AuthErrorCodes  } from "firebase/auth"

export const getAuthErrorCode = (code) => {
    switch (code) {
        case AuthErrorCodes.WEAK_PASSWORD:
            return 'Please enter a password more than 6 letters'
        case AuthErrorCodes.INVALID_EMAIL:
            return 'Please enter a correct email';
        case AuthErrorCodes.USER_DELETED:
            return 'User does not exist'
        case AuthErrorCodes.INVALID_PASSWORD:
            return 'Please enter the correct password'
        default:
            return ""
    }
}