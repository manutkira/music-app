<template>
<!-- eslint-disable max-len -->
          <div class="text-white text-center font-blod p-5 mb-4" v-if="reg_show_alert" :class="reg_alert_variant">{{reg_alert_msg}}</div>
          <vee-form :validation-schema="schema" @submit="register">
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <vee-field
                type="text" name="name"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Name"/>
             <ErrorMessage class="text-red-600" name="name"/>
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <vee-field name="email"
                type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
              />
              <ErrorMessage class="text-red-600" name="email"/>
            </div>
            <!-- Age -->
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <vee-field name="age"
                type="number"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
              />
              <ErrorMessage class="text-red-600" name="age"/>
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <vee-field name="password" :bails="false" v-slot="{ field, errors }">
              <input
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded" type="password"
                placeholder="Password" v-bind="field"
              />
              <div class="text-red-600" v-for="error in errors" :key="error">{{ error }}</div>
              </vee-field>
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <vee-field name="confirmPassword"
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password"
              />
              <ErrorMessage class="text-red-600" name="confirmPassword"/>
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label class="inline-block mb-2">Country</label>
              <vee-field as="select" name="country"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
              >
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
                <option value="Cambodia">Cambodia</option>
              </vee-field>
              <ErrorMessage class="text-red-600" name="country"/>
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <vee-field name="tos" value="1" type="checkbox" class="w-4 h-4 -ml-6 mt-1 rounded" />
              <i18n-t class="inline-block" keypath="register.accept" tag="label"><a href="#">{{$t('register.TOS')}}</a></i18n-t>
            </div>
            <ErrorMessage class="text-red-600" name="tos"/>
            <button
              type="submit" :disabled="reg_in_submission"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700"
            >
              Submit
            </button>
          </vee-form>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      schema: {
        name: 'required|min:5|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:5|max:100',
        confirmPassword: 'confirmed:@password',
        country: 'required',
        tos: 'tos',
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'Please wait! Your account is being created.',
    };
  },
  methods: {
    async register(values) {
      console.log(values);
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = 'bg-blue-500';
      this.reg_alert_msg = 'please wait! Your accout is being created.';

      try {
        this.$store.dispatch('register', values);
      } catch (error) {
        console.error(error);
        this.reg_in_submission = false;
        this.reg_alert_variant = 'bg-red-500';
        this.reg_alert_msg = 'An unexpected error occured. Please try again later.';
        return;
      }
      this.reg_alert_variant = 'bg-green-500';
      this.reg_alert_msg = 'succeed! Your accout is has been created.';
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    },
  },
};
</script>
