<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Destination</th>
        <th>Number of people going</th>
        <th>Date of Going</th>
        <th>status</th>
      </tr>

      <tr v-for="(cablistp, idx) in cablistp" :key="idx">
        <td>{{ cablistp.name }}</td>
        <td>{{ cablistp.dest }}</td>
        <td>{{ cablistp.nump }}</td>
        <td>{{ cablistp.date }}</td>
        <td>
          <button @click="done(idx)">Booking</button>
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <th>Name</th>
        <th>Destination</th>
        <th>Number of people going</th>
        <th>Date of Going</th>
        <th>status</th>
      </tr>
      <div v-for="(cablistp, idx) in cablistp" :key="idx">
        <tr v-if="cablistp.status">
          <td>{{ cablistp.name }}</td>
          <td>{{ cablistp.dest }}</td>
          <td>{{ cablistp.nump }}</td>
          <td>{{ cablistp.date }}</td>
          <td>
            <button @click="done(idx)">Booking</button>
          </td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      cablistp: [
        {
          name: "Nachiket Digha",
          dest: "Pune",
          nump: 3,
          date: "02-09-2021",
          status: false,
        },
        {
          name: "Arjun Odedra",
          dest: "Mumbai",
          nump: 4,
          date: "04-09-2021",
          status: false,
        },
        {
          name: "Surmdra Rajput",
          dest: "Mumbai",
          nump: 5,
          date: "02-10-2021",
          status: false,
        },
        {
          name: "Nachiket Digha",
          dest: "Pune m",
          nump: 6,
          date: "03-08-2021",
          status: false,
        },
        {
          name: "Omkar Chorghe",
          dest: "Pune k",
          nump: 1,
          date: "01-09-2021",
          status: false,
        },
      ],
    };
  },
  methods: {
    done: function (par) {
      this.cablistp[par].status = true;
    },
  },
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>