import {
  Form as VeeForm, Field as Veefield, defineRule, ErrorMessage, configure,
} from 'vee-validate';
import {
  required, min, max, alpha_spaces as aSpac, email, min_value as minV, max_value as maxV, confirmed,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', Veefield);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', aSpac);
    defineRule('email', email);
    defineRule('min_value', minV);
    defineRule('max_value', maxV);
    defineRule('confirmed', confirmed);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} is may only contain alphabetical characters and number.`,
          email: `The field ${ctx.field} must be valid email.`,
          min_value: `The field ${ctx.field} is low.`,
          max_value: `The field ${ctx.field} is high.`,
          confirmed: 'The password dont match.',
          tos: 'You must accept the Terms of Service',
        };

        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} id invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnInput: false,
      validateOnChange: true,
      validateOnModelUpdate: true,
    });
  },
};
