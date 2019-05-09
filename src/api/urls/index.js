export const BASE_URL = 'http://192.168.43.207:8080/'
export const URL = {
    REGISTER: {
        GET_VERIFICATION_CODE: 'register/getVerificationCode',
        VERIFY: 'register/verify',
        REGISTER: 'register/'
    },
    USER: {
        CURRENT: 'profile/',
        UPDATE: 'profile/update',
        CHANGE_PASSWORD: 'profile/changePassword',
        LOGIN: 'signin/'
    },
    BANK_ACCOUNT: {
        GET: 'bankAccount/',
        SAVE: 'bankAccount/save'
    },
    Settlement_Request: {
        SAVE: 'settlementRequest/add'
    },
    BANK: {
        FETCH_ALL: 'bank/all'
    }
}