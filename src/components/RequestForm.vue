<template>
  <div>
    <b-form>
      <b-form-group
        label="Employee Name"
        label-for="employee-name"
        description="Write your full name"
      >
        <b-form-input
          id="employee-name"
          v-model="employee.name"
          type="text"
          placeholder="Enter your name"
          required
        />
      </b-form-group>
      <b-form-group label="Employee Email" label-for="employee-email">
        <b-form-input
          id="employee-email"
          v-model="employee.email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <span
          >Suggested Email:
          <span @click="addSuggestedEmail">{{ suggestedEmail }}</span>
        </span>
      </b-form-group>
      <b-form-group label="Employee Phone Number" label-for="employee-phone">
        <b-form-input
          id="employee-phone"
          v-model="employee.phone"
          type="number"
          placeholder="Enter your phone number"
          required
        />
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { BForm, BFormGroup, BFormInput } from "bootstrap-vue";

export default {
  name: "RequestForm",
  components: {
    "b-form": BForm,
    "b-form-group": BFormGroup,
    "b-form-input": BFormInput,
  },
  data: function () {
    return {
      employee: {
        name: "",
        email: "",
        phone: 0,
      },
      cabDetails: {
        date: new Date(),
        passengers: [],
      },
    };
  },
  methods: {
    addSuggestedEmail() {
      this.email = this.suggestedEmail
    }
  },
  computed: {
    suggestedEmail: function () {
      const splitName = this.employee.name.split(" ");
      // console.log(splitName)
      if (splitName.length > 1) {
        return (
          splitName[0].toLowerCase() +
          splitName[1].charAt(0).toLowerCase() +
          "@mkcl.org"
        );
      } else {
        return splitName[0].toLowerCase() + "@mkcl.org";
      }
    },
  },
};
</script>

<style>
</style>