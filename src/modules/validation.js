const VALIDATION_EMAIL = 'signUp/VALIDATION_EMAIL';
const VALIDATION_PASSWORD = 'signUp/VALIDATION_PASSWORD';
const VALIDATION_PASSWORD2 = 'signUp/VALIDATION_PASSWORD2';
const VALIDATION_PHONENUMBER = 'signUp/VALIDATION_PHONENUMBER';
const VALIDATION_RESET = 'signUp/VALIDATION_RESET';

export const validationEmail = (value) => ({
  type: VALIDATION_EMAIL,
  payload: value,
});

export const validationPassword = (value) => ({
  type: VALIDATION_PASSWORD,
  payload: value,
});

export const validationPassword2 = (value) => ({
  type: VALIDATION_PASSWORD2,
  payload: value,
});

export const validationPhoneNumber = (value) => ({
  type: VALIDATION_PHONENUMBER,
  payload: value,
});

export const validationReset = () => ({
  type: VALIDATION_RESET,
});

export const INITIAL_STATE = {
  email: { value: '', validation: true },
  password: { value: '', validation: true },
  password2: { value: '', validation: true },
  phoneNumber: { value: '', validation: true },
};

export default function validationReducer(state = INITIAL_STATE, action) {
  let regExp;
  console.log(state);
  switch (action.type) {
    case VALIDATION_EMAIL:
      regExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      return {
        ...state,
        ...{
          email: {
            value: action.payload,
            validation: regExp.test(action.payload),
          },
        },
      };

    case VALIDATION_PASSWORD:
      regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
      return {
        ...state,
        ...{
          password: {
            value: action.payload,
            validation: regExp.test(action.payload),
          },
        },
      };

    case VALIDATION_PASSWORD2:
      const confirmPassword = state.password.value === action.payload;
      return {
        ...state,
        ...{
          password2: { value: action.payload, validation: confirmPassword },
        },
      };

    case VALIDATION_PHONENUMBER:
      regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
      return {
        ...state,
        ...{
          phoneNumber: {
            value: action.payload,
            validation: regExp.test(action.payload),
          },
        },
      };

    case VALIDATION_RESET:
      return {
        ...state,
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
}
